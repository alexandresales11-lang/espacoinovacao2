import React from 'react';
import {
  Trees,
  Snowflake,
  Users,
  Armchair,
  UtensilsCrossed,
  Sparkles,
  Waves,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { AMENITIES } from '../data/venueData';

const getAmenityIcon = (iconName: string) => {
  switch (iconName) {
    case 'Trees':
      return <Trees className="w-6 h-6 text-[#ecd599]" />;
    case 'Snowflake':
      return <Snowflake className="w-6 h-6 text-[#ecd599]" />;
    case 'Users':
      return <Users className="w-6 h-6 text-[#ecd599]" />;
    case 'Armchair':
      return <Armchair className="w-6 h-6 text-[#ecd599]" />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed className="w-6 h-6 text-[#ecd599]" />;
    case 'Sparkles':
      return <Sparkles className="w-6 h-6 text-[#ecd599]" />;
    case 'Waves':
      return <Waves className="w-6 h-6 text-[#ecd599]" />;
    default:
      return <ShieldCheck className="w-6 h-6 text-[#ecd599]" />;
  }
};

export const KeyFeatures: React.FC = () => {
  return (
    <section id="estrutura" className="py-20 bg-[#06140e] relative overflow-hidden">
      {/* Decorative ambient radial glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#143e2f]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c5a059]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-serif uppercase tracking-[0.25em] text-[#c5a059] text-xs font-semibold">
            Infraestrutura Completa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 uppercase tracking-tight mt-2 mb-4 [text-wrap:balance]">
            Tudo o que seu evento precisa em um só lugar
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg font-light [text-wrap:balance]">
            Planejado em cada detalhe para proporcionar sofisticação, comodidade aos anfitriões e bem-estar aos seus convidados.
          </p>
        </div>

        {/* Feature Cards Grid (Asymmetric Bento style with subtle hairline borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AMENITIES.map((amenity, idx) => (
            <div
              key={amenity.id}
              className={`p-6 rounded-2xl bg-[#0b241b]/80 border border-[#c5a059]/20 hover:border-[#c5a059]/50 transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 || idx === 1 ? 'lg:col-span-2 bg-gradient-to-br from-[#0e2c21] to-[#091f17]' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c5a059]/10 border border-[#c5a059]/30 flex items-center justify-center group-hover:bg-[#c5a059]/20 group-hover:scale-105 transition-all">
                    {getAmenityIcon(amenity.iconName)}
                  </div>
                  <span className="text-[11px] font-medium tracking-wider text-[#ecd599] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" />
                    {amenity.highlight}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-100 mb-2.5">
                  {amenity.title}
                </h3>

                <p className="text-neutral-300 text-sm leading-relaxed font-light">
                  {amenity.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#c5a059]/10 flex items-center justify-between text-xs text-neutral-400">
                <span>Espaço Inovação</span>
                <span className="text-[#ecd599] font-medium">Incluso na locação</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Strip Adjacent to Claims */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0b241b] via-[#0f2e23] to-[#0b241b] border border-[#c5a059]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-xs uppercase tracking-widest text-[#ecd599] font-semibold mb-1">
              Pronto para celebrar?
            </div>
            <div className="font-serif text-2xl font-bold text-neutral-100">
              Reserve sua data com antecedência e garanta exclusividade
            </div>
            <p className="text-neutral-300 text-sm mt-1">
              Finais de semana e feriados têm alta procura em Jacobina.
            </p>
          </div>

          <a
            href="#reserva"
            className="px-6 py-3 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#ecd599] via-[#c5a059] to-[#dfbe6f] rounded-xl hover:brightness-110 active:scale-95 transition-all whitespace-nowrap shrink-0 shadow-md shadow-[#c5a059]/15"
          >
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  );
};
