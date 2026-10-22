import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CalendarCheck,
  Sparkles,
} from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/venueData';
import { GalleryCategory, GalleryPhoto } from '../types';

const CATEGORIES: { label: string; value: GalleryCategory }[] = [
  { label: 'Todas as Fotos', value: 'todos' },
  { label: 'Salão & Coberto', value: 'salao' },
  { label: 'Piscina & Jardim', value: 'piscina' },
  { label: 'Banheiros & Estrutura', value: 'banheiros' },
  { label: 'Entrada & Recepção', value: 'entrada' },
];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('todos');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredPhotos = selectedCategory === 'todos'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  const openLightbox = (photo: GalleryPhoto) => {
    const idx = filteredPhotos.findIndex((p) => p.id === photo.id);
    if (idx !== -1) setActivePhotoIndex(idx);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const handleNext = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) =>
        prev === null ? null : (prev + 1) % filteredPhotos.length
      );
    }
  }, [activePhotoIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) =>
        prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  }, [activePhotoIndex, filteredPhotos.length]);

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex, handleNext, handlePrev]);

  const activePhoto = activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  return (
    <section id="galeria" className="py-20 bg-[#071711] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="font-serif uppercase tracking-[0.25em] text-[#c5a059] text-xs font-semibold">
            Galeria do Espaço
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 uppercase tracking-tight mt-2 mb-4 [text-wrap:balance]">
            Conheça cada detalhe do Espaço Inovação
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg font-light [text-wrap:balance]">
            Fotos reais dos ambientes preparados para transformar seu evento em uma experiência inesquecível.
          </p>
        </div>

        {/* Category Filter Tabs (Zero-Pill interactive segmented controls) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === cat.value
                  ? 'bg-gradient-to-r from-[#ecd599] via-[#c5a059] to-[#dfbe6f] text-neutral-950 font-semibold shadow-md shadow-[#c5a059]/20'
                  : 'bg-[#0d2a1f] text-neutral-300 hover:text-white hover:bg-[#133e2f] border border-[#c5a059]/15'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group relative rounded-2xl overflow-hidden bg-[#0d2a1f] border border-[#c5a059]/20 hover:border-[#c5a059]/60 cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#05110c]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#091f17]">
                <img
                  src={photo.url}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                {/* Measured Scrim for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Hover trigger zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption on card */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                  <span className="text-[10px] uppercase tracking-wider text-[#ecd599] font-medium flex items-center gap-1 mb-1">
                    <Sparkles className="w-3 h-3 text-[#c5a059]" />
                    {photo.category === 'piscina'
                      ? 'Lazer & Jardim'
                      : photo.category === 'salao'
                      ? 'Salão Coberto'
                      : photo.category === 'banheiros'
                      ? 'Banheiros & Conforto'
                      : 'Recepção'}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#ecd599] transition-colors leading-snug">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-1 mt-0.5 font-light">
                    {photo.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for gallery */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-300 mb-4">
            Deseja conhecer todos os espaços de perto antes de fechar o contrato?
          </p>
          <a
            href="#reserva"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#ecd599] via-[#c5a059] to-[#dfbe6f] rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#c5a059]/15"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Agendar Visita ou Fazer Reserva</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Controls Bar */}
          <div
            className="absolute top-4 right-4 z-50 flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs text-neutral-400 font-mono tabular-nums">
              {(activePhotoIndex ?? 0) + 1} / {filteredPhotos.length}
            </span>
            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-40"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-40"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Description container */}
          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] overflow-hidden rounded-2xl border border-[#c5a059]/30 bg-[#091a13] shadow-2xl">
              <img
                src={activePhoto.url}
                alt={activePhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center max-w-2xl">
              <h3 className="font-serif text-2xl font-bold text-white mb-1">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-neutral-300 font-light">
                {activePhoto.description}
              </p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <a
                  href="#reserva"
                  onClick={closeLightbox}
                  className="px-5 py-2 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#ecd599] via-[#c5a059] to-[#dfbe6f] rounded-lg hover:brightness-110 transition-all"
                >
                  Solicitar Data para este Espaço
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
