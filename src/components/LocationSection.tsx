import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, MessageCircle, ExternalLink, Car } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const fullAddress = VENUE_INFO.address;
  const encodedAddress = encodeURIComponent(fullAddress);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent('Segunda Travessa São Francisco de Assis Catuaba Jacobina Bahia')}`;
  const whatsappLocationUrl = `https://wa.me/55${VENUE_INFO.phoneRaw}?text=${encodeURIComponent('Olá Konccy, pode me mandar a localização fixada do Espaço Inovação no WhatsApp?')}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-20 bg-[#06140e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="font-serif uppercase tracking-[0.25em] text-[#c5a059] text-xs font-semibold">
            Localização Privilegiada
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 uppercase tracking-tight mt-2 mb-4 [text-wrap:balance]">
            Como chegar ao Espaço Inovação
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg font-light [text-wrap:balance]">
            Localizado no bairro Catuaba em Jacobina - Bahia, com facilidade de acesso, via tranquila e estacionamento para você e seus convidados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Information & Action Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#0b241b] rounded-3xl border border-[#c5a059]/30 p-6 sm:p-8 shadow-2xl">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#ecd599]" />
                <span className="font-serif text-lg font-bold text-neutral-100 uppercase tracking-wide">
                  Endereço Oficial
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#071711] border border-[#c5a059]/20 mb-6">
                <div className="text-sm font-medium text-white mb-1">
                  Segunda Travessa São Francisco de Assis
                </div>
                <div className="text-xs text-neutral-300">
                  Bairro Catuaba, Jacobina - Bahia
                </div>
                <div className="text-xs text-[#ecd599] font-mono mt-1">
                  CEP: {VENUE_INFO.cep}
                </div>
              </div>

              {/* Arrival Tips */}
              <div className="space-y-3.5 mb-8 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-[#ecd599] shrink-0 mt-0.5" />
                  <span>
                    <strong>Estacionamento facilitado:</strong> Rua ampla e calma, proporcionando segurança e praticidade para os veículos dos convidados.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Navigation className="w-4 h-4 text-[#ecd599] shrink-0 mt-0.5" />
                  <span>
                    <strong>Acesso para fornecedores:</strong> Portão amplo que simplifica a chegada de caminhões de som, buffet e decoradores.
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#c5a059]/15">
              <button
                type="button"
                onClick={handleCopy}
                className="w-full py-3 px-4 text-xs font-semibold tracking-wider uppercase text-neutral-200 hover:text-white bg-[#071711] hover:bg-[#133e2f] border border-[#c5a059]/30 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Endereço Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#ecd599]" />
                    <span>Copiar Endereço Completo</span>
                  </>
                )}
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#ecd599] via-[#c5a059] to-[#dfbe6f] rounded-xl hover:brightness-110 active:scale-95 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                </a>

                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 text-xs font-semibold tracking-wider uppercase text-[#ecd599] bg-[#071711] hover:bg-[#133e2f] border border-[#c5a059]/30 rounded-xl transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Waze</span>
                </a>
              </div>

              <a
                href={whatsappLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-medium text-neutral-300 hover:text-white text-center flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Pedir ponto de localização fixada no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#c5a059]/30 shadow-2xl relative min-h-[420px] bg-[#071711]">
            <iframe
              title="Mapa de Localização - Espaço Inovação"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[420px] border-0 filter contrast-[1.05] grayscale-[0.2]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Catuaba,+Jacobina+-+Bahia,+Brazil&t=&z=15&ie=UTF8&iwloc=&output=embed"
            />
            
            {/* Overlay badge with location tag */}
            <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#071711]/90 backdrop-blur-md border border-[#c5a059]/30 text-left shadow-lg pointer-events-none">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ecd599]" />
                <span className="font-serif text-sm font-bold text-white">Espaço Inovação</span>
              </div>
              <div className="text-[11px] text-neutral-300 mt-0.5">
                Catuaba · Jacobina, Bahia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
