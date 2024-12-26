import { useState, useEffect } from 'react';

export function useCountdown(targetDate: number) {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();
    
    if (difference <= 0) {
      return [0, 0, 0, 0];
    }

    return [
      Math.floor(difference / (1000 * 60 * 60 * 24)),
      Math.floor((difference / (1000 * 60 * 60)) % 24),
      Math.floor((difference / 1000 / 60) % 60),
      Math.floor((difference / 1000) % 60)
    ];
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}