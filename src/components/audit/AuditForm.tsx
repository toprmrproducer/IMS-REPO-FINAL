import React from 'react';
import Button from '../ui/Button';

export default function AuditForm() {
  const openCalendar = () => {
    window.open('https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1D0_B6sxCy40djaqSCI7HgHOWfurFnn1wfkUKNaL8vGFgf6nvRlO0wTxL1mF4ldxk2DNaFjHUa', '_blank');
  };

  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        openCalendar();
      }}
      className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-[#FF0000]/20"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="url"
          placeholder="Enter your website URL 🌐"
          className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF0000]/50 transition-colors"
          required
        />
        <Button type="submit" variant="primary" size="lg" className="whitespace-nowrap">
          Book Audit Call 📞
        </Button>
      </div>
      <p className="text-gray-400 text-sm mt-4 text-center">
        Get expert insights to accelerate your business growth! ⚡
      </p>
    </form>
  );
}