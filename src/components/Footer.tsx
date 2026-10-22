import React from 'react';
import { MapPin, Phone, MessageCircle, Heart } from 'lucide-react';
import { Logo } from './Logo';
import { VENUE_INFO } from '../data/venueData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040e0b] border-t border-[#c5a059]/20 pt-16 pb-24 md:pb-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#c5a059]/10">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="text-neutral-300 text-sm font-light max-w-sm mt-3 leading-relaxed">
              {VENUE_INFO.motto}
            </p>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              O espaço definitivo em Jacobina para celebrar aniversários, casamentos, formaturas e eventos empresariais com sofisticação e conforto para mais de 300 pessoas.
            </p>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </div>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>
                <a href="#estrutura" className="hover:text-[#ecd599] transition-colors">
                  Estrutura Completa
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#ecd599] transition-colors">
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href="#anfitria" className="hover:text-[#ecd599] transition-colors">
                  A Anfitriã Konccy
                </a>
              </li>
              <li>
                <a href="#reserva" className="hover:text-[#ecd599] transition-colors">
                  Simular Reserva
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#ecd599] transition-colors">
                  Localização & Mapa
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-serif text-sm font-bold text-white uppercase tracking-wider">
              Contato & Localização
            </div>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ecd599] shrink-0 mt-0.5" />
                <span>{VENUE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ecd599] shrink-0" />
                <span className="font-mono">{VENUE_INFO.phoneFormatted}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Atendimento direto com Konccy</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={VENUE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#ecd599] via-[#c5a059] to-[#dfbe6f] rounded-lg hover:brightness-110 transition-all"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {currentYear} Espaço Inovação. Todos os direitos reservados. Jacobina - Bahia.
          </div>
          <div className="flex items-center gap-1 text-neutral-400">
            <span>Projetado com</span>
            <Heart className="w-3.5 h-3.5 text-[#c5a059] fill-[#c5a059]" />
            <span>para momentos inesquecíveis</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
