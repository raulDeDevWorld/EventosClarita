'use client'
import { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

export default function App() {
  const [isExploding, setIsExploding] = useState(false);

  useEffect(()=> {
    window.navigator.vibrate([1000])
  }, [])
  return  <ConfettiExplosion />
}