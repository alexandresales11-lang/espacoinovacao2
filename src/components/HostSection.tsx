import React from 'react';
import { Heart, ShieldCheck, Clock, MessageCircle, Star } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export const HostSection: React.FC = () => {
  return (
    <section id="anfitria" className="py-20 bg-[#06140e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0c271e] via-[#0e2c22] to-[#081a13] border border-[#c5a059]/30 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle golden ambient background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c5a059]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Host Photo Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* Golden decorative accent frame */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#c5a059] to-[#ecd599] opacity-40 blur-sm group-hover:opacity-70 transition-opacity duration-500" />
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#c5a059]/60 bg-[#081a13] shadow-2xl aspect-[3/4]">
                  <img
                    src={VENUE_INFO.host.photo}
                    alt="Konccy - Dona e Anfitriã do Espaço Inovação"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Scrim at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <div className="font-serif text-2xl font-bold text-white">
                      Konccy
                    </div>
                    <div className="text-xs uppercase tracking-widest text-[#ecd599] font-medium">
                      Idealizadora & Anfitriã
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Host Story & Trust Signals */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-4 h-4 text-[#c5a059] fill-[#c5a059]" />
                <span className="font-serif uppercase tracking-[0.25em] text-[#c5a059] text-xs font-semibold">
                  Acolhimento & Compromisso
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-100 uppercase tracking-tight mb-4 [text-wrap:balance]">
                "Cada festa aqui é única e tratada como um sonho de família."
              </h2>

              <p className="font-script text-2xl sm:text-3xl text-[#ecd599] mb-4">
                Konccy
              </p>

              <p className="text-neutral-300 text-base leading-relaxed font-light mb-6">
                {VENUE_INFO.host.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#091f17] border border-[#c5a059]/15">
                  <Heart className="w-5 h-5 text-[#ecd599] shrink-0 mt-0.5" />
                  <div className="text-left">
                    <div className="text-xs font-semibold text-neutral-200">Atendimento Pessoal</div>
                    <div className="text-[11px] text-neutral-400">Você conversa diretamente com a dona</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#091f17] border border-[#c5a059]/15">
                  <Clock className="w-5 h-5 text-[#ecd599] shrink-0 mt-0.5" />
                  <div className="text-left">
                    <div className="text-xs font-semibold text-neutral-200">Flexibilidade de Horário</div>
                    <div className="text-[11px] text-neutral-400">Tempo para montagem e desmontagem</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#091f17] border border-[#c5a059]/15">
                  <ShieldCheck className="w-5 h-5 text-[#ecd599] shrink-0 mt-0.5" />
                  <div className="text-left">
                    <div className="text-xs font-semibold text-neutral-200">Contrato Seguro</div>
                    <div className="text-[11px] text-neutral-400">Transparência e garantia para sua data</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#091f17] border border-[#c5a059]/15">
                  <MessageCircle className="w-5 h-5 text-[#ecd599] shrink-0 mt-0.5" />
                  <div className="text-left">
                    <div className="text-xs font-semibold text-neutral-200">Suporte no WhatsApp</div>
                    <div className="text-[11px] text-neutral-400">Tire dúvidas de forma rápida e prática</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={VENUE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#ecd599] via-[#c5a059] to-[#dfbe6f] rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#c5a059]/20 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-neutral-950" />
                  <span>Falar com Konccy no WhatsApp</span>
                </a>

                <a
                  href="#reserva"
                  className="w-full sm:w-auto px-6 py-3.5 text-xs font-medium tracking-wide text-neutral-200 hover:text-[#ecd599] border border-neutral-700 hover:border-[#c5a059] rounded-xl transition-all text-center"
                >
                  Preencher Formulário de Reserva
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
