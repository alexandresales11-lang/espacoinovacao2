import React, { useState } from 'react';
import {
  CalendarCheck,
  Send,
  Sparkles,
  CheckCircle,
  HelpCircle,
  Clock,
  Users,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { VENUE_INFO, EVENT_TYPES } from '../data/venueData';
import { ReservationFormData } from '../types';

export const ReservationForm: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    eventType: EVENT_TYPES[0],
    guestCount: '100 a 200 convidados',
    date: '',
    period: 'Noturno (Festa à noite)',
    needsPool: true,
    needsKitchen: true,
    needsFurniture: true,
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Format Brazilian phone number
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  // Generate clean, formatted WhatsApp message without emoji encoding issues
  const generateWhatsAppMessage = () => {
    const interestItems: string[] = [];
    if (formData.needsPool) interestItems.push('Área com Piscina');
    if (formData.needsFurniture) interestItems.push('Mesas e Cadeiras Inclusas');
    if (formData.needsKitchen) interestItems.push('Cozinha Equipada');

    const formattedDate = formData.date
      ? new Date(formData.date + 'T00:00:00').toLocaleDateString('pt-BR')
      : 'A definir';

    let msg = `*Olá Konccy! Gostaria de consultar orçamento e disponibilidade no Espaço Inovação:*\n\n`;
    msg += `*Nome:* ${formData.name.trim() || 'Não informado'}\n`;
    msg += `*Telefone/WhatsApp:* ${formData.phone.trim() || 'Não informado'}\n`;
    msg += `*Tipo de Evento:* ${formData.eventType}\n`;
    msg += `*Estimativa de Público:* ${formData.guestCount}\n`;
    msg += `*Data Desejada:* ${formattedDate} (${formData.period})\n`;

    if (interestItems.length > 0) {
      msg += `*Estrutura de Interesse:* ${interestItems.join(', ')}\n`;
    }

    if (formData.notes.trim()) {
      msg += `*Observações / Detalhes:* ${formData.notes.trim()}\n`;
    }

    msg += `\nVocês têm essa data disponível para agendarmos uma visita?`;
    return msg;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMessage('Por favor, informe seu nome para que a Konccy possa lhe atender.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage('Por favor, informe seu telefone/WhatsApp de contato.');
      return;
    }

    setErrorMessage('');
    setIsSubmitted(true);

    const message = generateWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const targetUrl = `https://wa.me/55${VENUE_INFO.phoneRaw}?text=${encodedMessage}`;

    // Small delay for clean visual transition feedback
    setTimeout(() => {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }, 350);
  };

  return (
    <section id="reserva" className="py-20 bg-[#071711] relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#c5a059]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#133e2f]/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="font-serif uppercase tracking-[0.25em] text-[#c5a059] text-xs font-semibold">
            Reserva & Orçamento Exclusivo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-100 uppercase tracking-tight mt-2 mb-4 [text-wrap:balance]">
            Consulte a data ideal para o seu evento
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg font-light [text-wrap:balance]">
            Preencha os dados do seu evento abaixo. Você será direcionado diretamente para o WhatsApp oficial com o atendimento da Konccy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#0b241b] rounded-3xl border border-[#c5a059]/30 p-6 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#c5a059]/15">
              <div className="flex items-center gap-2.5">
                <CalendarCheck className="w-5 h-5 text-[#ecd599]" />
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-100">
                  Formulário de Pré-Reserva
                </h3>
              </div>
              <span className="text-[11px] font-medium text-[#ecd599] bg-[#c5a059]/10 px-3 py-1 rounded-full border border-[#c5a059]/20">
                Atendimento Rápido
              </span>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-sm flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-2">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Clara Silva"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#071711] border border-[#c5a059]/25 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ecd599] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-2">
                    Seu WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(74) 99999-9999"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#071711] border border-[#c5a059]/25 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ecd599] transition-colors text-sm font-mono"
                  />
                </div>
              </div>

              {/* Event Type & Estimated Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-2">
                    Tipo de Evento *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, eventType: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#071711] border border-[#c5a059]/25 text-white focus:outline-none focus:border-[#ecd599] transition-colors text-sm"
                  >
                    {EVENT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-[#071711] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-2">
                    Quantidade de Convidados
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, guestCount: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#071711] border border-[#c5a059]/25 text-white focus:outline-none focus:border-[#ecd599] transition-colors text-sm"
                  >
                    <option value="Até 80 convidados" className="bg-[#071711]">Até 80 convidados</option>
                    <option value="80 a 150 convidados" className="bg-[#071711]">80 a 150 convidados</option>
                    <option value="150 a 250 convidados" className="bg-[#071711]">150 a 250 convidados</option>
                    <option value="Mais de 300 convidados (Capacidade Total)" className="bg-[#071711]">
                      Mais de 300 convidados (Capacidade Total)
                    </option>
                  </select>
                </div>
              </div>

              {/* Date & Shift */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-2">
                    Data Pretendida *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, date: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#071711] border border-[#c5a059]/25 text-white focus:outline-none focus:border-[#ecd599] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-2">
                    Turno / Período
                  </label>
                  <select
                    value={formData.period}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, period: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#071711] border border-[#c5a059]/25 text-white focus:outline-none focus:border-[#ecd599] transition-colors text-sm"
                  >
                    <option value="Diurno (Manhã e Tarde com Piscina)" className="bg-[#071711]">
                      Diurno (Manhã e Tarde com Piscina)
                    </option>
                    <option value="Noturno (Festa à noite)" className="bg-[#071711]">
                      Noturno (Festa à noite)
                    </option>
                    <option value="Dia Inteiro (Exclusividade total)" className="bg-[#071711]">
                      Dia Inteiro (Exclusividade total)
                    </option>
                  </select>
                </div>
              </div>

              {/* Amenities included checkbox list */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-2.5">
                  Itens que você deseja utilizar:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label className="flex items-center gap-2 p-3 rounded-xl bg-[#071711] border border-[#c5a059]/20 hover:border-[#c5a059]/50 cursor-pointer transition-colors text-xs text-neutral-200">
                    <input
                      type="checkbox"
                      checked={formData.needsPool}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, needsPool: e.target.checked }))
                      }
                      className="accent-[#c5a059] w-4 h-4 rounded"
                    />
                    <span>Área da Piscina</span>
                  </label>

                  <label className="flex items-center gap-2 p-3 rounded-xl bg-[#071711] border border-[#c5a059]/20 hover:border-[#c5a059]/50 cursor-pointer transition-colors text-xs text-neutral-200">
                    <input
                      type="checkbox"
                      checked={formData.needsFurniture}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, needsFurniture: e.target.checked }))
                      }
                      className="accent-[#c5a059] w-4 h-4 rounded"
                    />
                    <span>Mesas e Cadeiras</span>
                  </label>

                  <label className="flex items-center gap-2 p-3 rounded-xl bg-[#071711] border border-[#c5a059]/20 hover:border-[#c5a059]/50 cursor-pointer transition-colors text-xs text-neutral-200">
                    <input
                      type="checkbox"
                      checked={formData.needsKitchen}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, needsKitchen: e.target.checked }))
                      }
                      className="accent-[#c5a059] w-4 h-4 rounded"
                    />
                    <span>Cozinha Equipada</span>
                  </label>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-2">
                  Deseja adicionar alguma observação? (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Gostaria de saber sobre horários para montagem da decoração..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#071711] border border-[#c5a059]/25 text-white placeholder-neutral-500 focus:outline-none focus:border-[#ecd599] transition-colors text-sm resize-none"
                />
              </div>

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-sm font-bold tracking-wider uppercase text-neutral-950 bg-gradient-to-r from-[#ecd599] via-[#c5a059] to-[#dfbe6f] rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-[#c5a059]/25 flex items-center justify-center gap-3"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar para o WhatsApp de Konccy</span>
                </button>
                <div className="mt-2 text-center text-xs text-neutral-400">
                  Número oficial do Espaço Inovação: <span className="text-[#ecd599] font-mono">{VENUE_INFO.phoneFormatted}</span>
                </div>
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Redirecionando para o WhatsApp...</div>
                    <div>Caso não abra automaticamente, <a href={`https://wa.me/55${VENUE_INFO.phoneRaw}?text=${encodeURIComponent(generateWhatsAppMessage())}`} target="_blank" rel="noopener noreferrer" className="underline text-[#ecd599] font-bold">clique aqui para abrir</a>.</div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Benefits & Host Support Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Host Direct Card */}
            <div className="bg-[#0b241b] rounded-3xl border border-[#c5a059]/25 p-6 sm:p-7 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#c5a059]/15">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#c5a059]/50 shrink-0 shadow-md">
                  <img
                    src={VENUE_INFO.host.photo}
                    alt="Konccy - Anfitriã"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#ecd599] font-semibold">
                    Anfitriã do Espaço
                  </div>
                  <div className="font-serif text-xl font-bold text-white">
                    Konccy
                  </div>
                  <div className="text-xs text-neutral-300 flex items-center gap-1.5 mt-0.5">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Atendimento no WhatsApp</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-light mb-4">
                Ao preencher o formulário, você fala diretamente com a Konccy. Receba atenção personalizada para tirar todas as dúvidas e agendar sua visita.
              </p>

              <div className="p-3.5 rounded-xl bg-[#071711] border border-[#c5a059]/15 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <Clock className="w-4 h-4 text-[#ecd599]" />
                  Retorno rápido
                </span>
                <span className="text-[#ecd599] font-mono">{VENUE_INFO.phoneFormatted}</span>
              </div>
            </div>

            {/* How It Works (3 Steps) */}
            <div className="bg-[#0b241b] rounded-3xl border border-[#c5a059]/20 p-6 sm:p-7 shadow-xl">
              <h4 className="font-serif text-lg font-bold text-white mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#c5a059]" />
                Como funciona sua reserva?
              </h4>

              <div className="space-y-4 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/40 text-[#ecd599] flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">Envie os dados do evento</strong>
                    <span>Preencha as informações básicas no formulário ao lado.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/40 text-[#ecd599] flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">Confirmação de data no WhatsApp</strong>
                    <span>A Konccy verifica a disponibilidade na agenda imediatamente.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/40 text-[#ecd599] flex items-center justify-center font-bold text-xs shrink-0">
                    3
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">Visita presencial ao espaço</strong>
                    <span>Venha conhecer o salão, piscina e jardins antes de confirmar o contrato.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#c5a059]/15">
                <a
                  href={VENUE_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#ecd599] hover:text-white bg-[#071711] hover:bg-[#133e2f] border border-[#c5a059]/30 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Chamar Konccy no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
