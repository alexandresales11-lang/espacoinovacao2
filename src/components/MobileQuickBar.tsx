import React from 'react';
import { MessageCircle, CalendarCheck } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export const MobileQuickBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#071711]/95 backdrop-blur-md border-t border-[#c5a059]/30 px-3 py-2.5 shadow-2xl">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={VENUE_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#15803d] hover:bg-[#16a34a] rounded-xl flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap shadow-md"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>WhatsApp</span>
        </a>

        <a
          href="#reserva"
          className="flex-1 py-2.5 px-3 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#ecd599] via-[#c5a059] to-[#dfbe6f] rounded-xl flex items-center justify-center gap-1.5 transition-all whitespace-nowrap shadow-md shadow-[#c5a059]/20 font-bold"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Orçamento</span>
        </a>
      </div>
    </div>
  );
};
