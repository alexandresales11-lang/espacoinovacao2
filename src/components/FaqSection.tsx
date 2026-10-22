import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, VENUE_INFO } from '../data/venueData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-20 bg-[#071711] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-serif uppercase tracking-[0.25em] text-[#c5a059] text-xs font-semibold">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 uppercase tracking-tight mt-2 mb-4 [text-wrap:balance]">
            Perguntas Frequentes
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg font-light [text-wrap:balance]">
            Respostas claras para você planejar seu evento com total segurança e tranquilidade.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0b241b] border border-[#c5a059]/20 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#071711] border border-[#c5a059]/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#ecd599]' : 'text-neutral-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-neutral-300 font-light leading-relaxed border-t border-[#c5a059]/10">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#091f17] border border-[#c5a059]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c5a059]/15 flex items-center justify-center text-[#ecd599] shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">
                Ficou alguma dúvida específica?
              </div>
              <div className="text-xs text-neutral-300">
                Fale com a dona Konccy e tire todas as suas dúvidas no WhatsApp.
              </div>
            </div>
          </div>

          <a
            href={VENUE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#ecd599] via-[#c5a059] to-[#dfbe6f] rounded-xl hover:brightness-110 transition-all whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-3.5 h-3.5 text-neutral-950" />
            <span>Chamar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
