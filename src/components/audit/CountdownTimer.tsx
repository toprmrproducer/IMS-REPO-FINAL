import React from 'react';
import { useCountdown } from '../../hooks/useCountdown';

export default function CountdownTimer() {
  const endDate = new Date('2025-01-31T23:59:59').getTime();
  const [days, hours, minutes, seconds] = useCountdown(endDate);

  const timeUnits = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' }
  ];

  return (
    <div className="flex justify-center gap-4 mb-8">
      {timeUnits.map(({ value, label }) => (
        <div 
          key={label}
          className="bg-black/40 backdrop-blur-sm rounded-lg p-3 min-w-[90px] text-center"
        >
          <div className="text-2xl font-bold text-[#FF0000]">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-400">{label}</div>
        </div>
      ))}
    </div>
  );
}