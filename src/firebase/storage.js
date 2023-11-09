import { app } from './config'
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { writeUserData } from './database'

import imageCompression from 'browser-image-compression';

const storage = getStorage(app)

//--------------------------- Firebase Storage ---------------------------
async function uploadIMG(ruteDB, ruteSTG, fileName, file, object, setUserData, setUserSuccess, nameDB) {
    const imagesRef = ref(storage, `/${ruteSTG}/${fileName}`);

    const options = {
        maxWidthOrHeight: 800,
        maxSizeMB: 0.5,
        alwaysKeepResolution: true,
        useWebWorker: true,
        maxIteration: 100,
        fileType: 'image/webp'
    }

    const compressedFile = file.type != 'image/gif' ? await imageCompression(file, options) : file
    uploadBytes(imagesRef, compressedFile).then(async (snapshot) => {
        getDownloadURL(ref(storage, snapshot.metadata.fullPath))
            .then((url) => {
                let obj = {
                    ...object,
                    [nameDB]:url                 
                }
                return writeUserData(ruteDB, obj, setUserData, setUserSuccess)
            })
            .catch((error) => {
            });
    });
}   

let object = {}
export { uploadIMG }