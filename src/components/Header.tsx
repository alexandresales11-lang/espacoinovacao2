import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { LotusIcon } from './Logo';
import { VENUE_INFO } from '../data/venueData';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#071711]/95 backdrop-blur-md border-b border-[#c5a059]/20 py-3 shadow-lg'
          : 'bg-gradient-to-b from-[#071711]/90 via-[#071711]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-neutral-100 hover:opacity-95 transition-opacity whitespace-nowrap shrink-0"
            aria-label="Espaço Inovação Home"
          >
            <LotusIcon className="w-7 h-7" />
            <div className="flex flex-col leading-tight">
              <span className="font-serif uppercase tracking-[0.2em] text-[#c5a059] text-[9px]">
                Espaço
              </span>
              <span className="font-serif font-bold uppercase tracking-[0.12em] text-neutral-100 text-lg">
                Inovação
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a
              href="#estrutura"
              className="hover:text-[#ecd599] transition-colors whitespace-nowrap shrink-0"
            >
              Estrutura
            </a>
            <a
              href="#galeria"
              className="hover:text-[#ecd599] transition-colors whitespace-nowrap shrink-0"
            >
              Galeria
            </a>
            <a
              href="#anfitria"
              className="hover:text-[#ecd599] transition-colors whitespace-nowrap shrink-0"
            >
              A Anfitriã
            </a>
            <a
              href="#localizacao"
              className="hover:text-[#ecd599] transition-colors whitespace-nowrap shrink-0"
            >
              Localização
            </a>
            <a
              href="#duvidas"
              className="hover:text-[#ecd599] transition-colors whitespace-nowrap shrink-0"
            >
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#reserva"
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#ecd599] via-[#c5a059] to-[#dfbe6f] rounded-lg hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#c5a059]/15 whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Simular Reserva</span>
            </a>
          </div>

          {/* Mobile hamburger trigger */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-2 border-t border-[#c5a059]/20 bg-[#071711] rounded-b-xl flex flex-col gap-3 px-2">
            <a
              href="#estrutura"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 text-neutral-200 hover:text-[#ecd599] text-sm font-medium"
            >
              Estrutura & Diferenciais
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 text-neutral-200 hover:text-[#ecd599] text-sm font-medium"
            >
              Galeria de Fotos
            </a>
            <a
              href="#anfitria"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 text-neutral-200 hover:text-[#ecd599] text-sm font-medium"
            >
              A Anfitriã Konccy
            </a>
            <a
              href="#localizacao"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 text-neutral-200 hover:text-[#ecd599] text-sm font-medium"
            >
              Localização & Mapa
            </a>
            <a
              href="#duvidas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 text-neutral-200 hover:text-[#ecd599] text-sm font-medium"
            >
              Dúvidas Frequentes
            </a>
            <div className="pt-2">
              <a
                href={VENUE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#ecd599] via-[#c5a059] to-[#dfbe6f] rounded-lg text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
