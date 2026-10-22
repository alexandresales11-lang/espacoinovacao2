import React from 'react';
import { Users, Snowflake, Trees, Sparkles, MessageCircle, CalendarCheck, MapPin } from 'lucide-react';
import { LotusIcon } from './Logo';
import { VENUE_INFO } from '../data/venueData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#071711]">
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle background photo with rich emerald scrim */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('https://i.imgur.com/yw4NkBg.jpeg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071711] via-[#071711]/90 to-[#071711]" />
        
        {/* Warm Golden Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#c5a059]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#143e2f]/40 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Stylized Lotus Emblem & Brand Header */}
          <div className="flex flex-col items-center mb-4 animate-fade-in">
            <LotusIcon className="w-12 h-12 mb-2" />
            <span className="font-serif uppercase tracking-[0.28em] text-[#ecd599] text-xs font-medium">
              Espaço Inovação · Jacobina - BA
            </span>
          </div>

          {/* Golden Script Calligraphy Welcome (Reference: "Sejam bem vindos") */}
          <p className="font-script text-4xl sm:text-5xl md:text-6xl text-[#ecd599] drop-shadow-sm mb-1">
            Sejam bem-vindos
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-100 uppercase mt-2 mb-4 leading-tight [text-wrap:balance]">
            Ao novo conceito em espaço de festa de Jacobina
          </h1>

          {/* Subtitle / Philosophy Ribbon */}
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-light mb-8 [text-wrap:balance]">
            <span className="font-script text-2xl text-[#f3e5ab] font-normal inline-block mr-1">
              Natureza, elegância e experiências inesquecíveis
            </span>{' '}
            em um só lugar. O ambiente perfeito para casamentos, aniversários, confraternizações e momentos únicos.
          </p>

          {/* Marquee Capacity Box (Highlight from Flyer: COMPORTA MAIS DE 300 CONVIDADOS) */}
          <div className="w-full max-w-lg mb-8 p-0.5 rounded-2xl bg-gradient-to-r from-[#c5a059]/40 via-[#ecd599]/60 to-[#c5a059]/40 shadow-xl shadow-[#040e0b]/50">
            <div className="bg-[#0b241b] rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 border border-[#c5a059]/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-center justify-center text-[#ecd599] shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] tracking-widest uppercase text-[#ecd599] font-medium">
                    Capacidade Ampla
                  </div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-neutral-100 tracking-tight">
                    Mais de <span className="text-[#ecd599]">300</span> convidados
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-[#c5a059]/20" />

              <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
                <Sparkles className="w-4 h-4 text-[#ecd599] shrink-0" />
                <span>Salão Coberto + Piscina + Jardim</span>
              </div>
            </div>
          </div>

          {/* High Conversion Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#reserva"
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#ecd599] via-[#c5a059] to-[#dfbe6f] rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-[#c5a059]/20 flex items-center justify-center gap-2.5 whitespace-nowrap"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Simular Orçamento / Reservar</span>
            </a>

            <a
              href={VENUE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium tracking-wide text-[#ecd599] border border-[#c5a059]/40 bg-[#0e2c21]/80 hover:bg-[#133e2f] hover:border-[#c5a059] rounded-xl transition-all flex items-center justify-center gap-2.5 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Falar Direto no WhatsApp</span>
            </a>
          </div>

          {/* Quick Pillar Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left">
            <div className="p-3.5 rounded-xl bg-[#0b241b]/70 border border-[#c5a059]/15 flex items-center gap-3">
              <Trees className="w-5 h-5 text-[#ecd599] shrink-0" />
              <div className="leading-tight">
                <div className="text-xs font-semibold text-neutral-200">Área Aberta</div>
                <div className="text-[11px] text-neutral-400">Jardim & Natureza</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b241b]/70 border border-[#c5a059]/15 flex items-center gap-3">
              <Snowflake className="w-5 h-5 text-[#ecd599] shrink-0" />
              <div className="leading-tight">
                <div className="text-xs font-semibold text-neutral-200">Salão Coberto</div>
                <div className="text-[11px] text-neutral-400">Estrutura Climatizada</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b241b]/70 border border-[#c5a059]/15 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#ecd599] shrink-0" />
              <div className="leading-tight">
                <div className="text-xs font-semibold text-neutral-200">Mobiliário Incluso</div>
                <div className="text-[11px] text-neutral-400">Mesas & Cadeiras</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0b241b]/70 border border-[#c5a059]/15 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#ecd599] shrink-0" />
              <div className="leading-tight">
                <div className="text-xs font-semibold text-neutral-200">Jacobina - BA</div>
                <div className="text-[11px] text-neutral-400">Bairro Catuaba</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
