'use client'
import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

export default function App() {
  const [isExploding, setIsExploding] = useState(false);

  return  <ConfettiExplosion />
}