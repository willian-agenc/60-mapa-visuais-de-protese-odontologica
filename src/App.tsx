/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Clock,
  Laptop,
  Layers,
  Lock,
  MessageSquare,
  Microscope,
  RotateCcw,
  ShieldCheck,
  Smile,
  Star,
  Beaker,
} from 'lucide-react';
import React, { useState } from 'react';
import { cn } from './lib/utils';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const getCheckoutUrl = () => {
    const baseUrl = 'https://pay.lowify.com.br/checkout?product_id=oaYYhw';
    if (typeof window === 'undefined') return baseUrl;
    try {
      const currentSearchParams = new URLSearchParams(window.location.search);
      if (!currentSearchParams.toString()) return baseUrl;

      const checkoutUrlObj = new URL(baseUrl);
      currentSearchParams.forEach((value, key) => {
        checkoutUrlObj.searchParams.set(key, value);
      });
      return checkoutUrlObj.toString();
    } catch {
      return baseUrl;
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whyItWorks = [
    { text: 'Reconheça e aplique — não memorize, tudo em imagens', highlight: 'Reconheça e aplique' },
    { text: 'Organizado da mesma forma que você usa na bancada de trabalho', highlight: 'na bancada de trabalho' },
    { text: 'Revisão rápida, sem anotações densas', highlight: 'Revisão rápida' },
    { text: 'Serve para curso técnico, laboratório e concursos', highlight: 'curso técnico, laboratório e concursos' },
    { text: 'Cada mapa é independente, abra o que precisar', highlight: 'independente' },
    { text: 'Celular, PC ou impresso, direto na bancada de trabalho', highlight: 'Celular, PC ou impresso' },
  ];

  const whatsIncluded = [
    { text: 'Fundamentos e Materiais Odontológicos', icon: Beaker },
    { text: 'Prótese Total', icon: Smile },
    { text: 'Prótese Parcial Removível (PPR)', icon: Layers },
    { text: 'Prótese Fixa e sobre Implante', icon: ShieldCheck },
    { text: 'Cerâmica, Estética e Prótese Digital', icon: Laptop },
    { text: 'Ortodontia, Biossegurança e Legislação', icon: Microscope },
  ];

  const situations = [
    'Memoriza mas não reconhece na hora da prova prática',
    'Trabalha ou está começando no laboratório de prótese',
    'Quer se atualizar em implantes e fluxo digital (CAD/CAM)',
    'Vai prestar concurso público para Técnico em Prótese Dentária',
    'Quer treinar rápido quem acabou de entrar no laboratório',
    'Já tem anotações ou livro e sente que falta a parte visual',
    'Quer uma consulta rápida no celular, direto na bancada de trabalho',
    'Prefere reconhecer imagens a memorizar texto',
  ];

  const faqs = [
    {
      q: 'O material é físico ou digital?',
      a: 'Digital, acesso imediato pelo celular, tablet ou PC.',
    },
    {
      q: 'O material substitui o curso técnico em Prótese Dentária?',
      a: 'Não. É material de apoio visual para estudo e consulta na bancada de trabalho, um complemento para reconhecer e aplicar, não um substituto da formação técnica.',
    },
    {
      q: 'Serve para quem já trabalha em laboratório?',
      a: 'Sim. É uma excelente referência rápida de bancada de trabalho para o dia a dia, para consultar entre um trabalho e outro.',
    },
    {
      q: 'Cobre prótese sobre implante e fluxo digital?',
      a: 'Sim. O Pacote 4 cobre prótese sobre implante e o Pacote 5 cobre cerâmica, escaneamento digital, CAD, fresagem e impressão 3D.',
    },
    {
      q: 'Serve para concursos públicos de Técnico em Prótese Dentária?',
      a: 'Sim, o Pacote 6 inclui biossegurança e legislação, temas frequentes nas provas objetivas de concursos.',
    },
    {
      q: 'Funciona no celular?',
      a: 'Sim. Os mapas estão otimizados para consulta rápida em qualquer tela.',
    },
    {
      q: 'Recebo o acesso na hora?',
      a: 'Sim. Após a confirmação do pagamento, você recebe as instruções de acesso imediatamente.',
    },
    {
      q: 'Posso imprimir?',
      a: 'Sim. Os mapas estão formatados em A4 horizontal, prontos para imprimir.',
    },
    {
      q: 'Tem garantia?',
      a: 'Sim. Você tem 7 dias de garantia para conhecer o material com total segurança. Se não gostar, pode solicitar o reembolso sem burocracia.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-blue-900 overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Top Banner */}
      <div className="bg-blue-900 text-white text-center py-3 px-4 font-bold text-sm tracking-wide shadow-md relative z-20">
        Oferta de Lançamento só HOJE {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
      </div>

      <main className="relative">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-[100px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4"></div>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-24 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-1.5 text-xs font-bold mb-8 border border-blue-200">
            <Clock className="w-4 h-4" />
            Prótese Odontológica Visual 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-8 leading-[1.1] tracking-tight">
            <span className="text-blue-600 block mb-2">+60 Mapas Visuais</span>
            de Prótese Odontológica
          </h1>
          
          <p className="text-blue-700 text-base md:text-xl leading-relaxed mb-12 max-w-2xl font-medium">
            Materiais Odontológicos, Prótese Total, PPR, Prótese Fixa e sobre Implante, Cerâmica e Prótese Digital, Ortodontia de Laboratório — organizados para que você reconheça e aplique na bancada de trabalho, não apenas memorize
          </p>

          <div className="w-full max-w-xl relative transform hover:-translate-y-2 transition-transform duration-500 mb-12">
            <div className="absolute inset-0 bg-blue-200/50 rounded-[3rem] rotate-3 scale-105 -z-10"></div>
            <img src="https://i.ibb.co/GfvZMSDJ/Chat-GPT-Image-30-07-2026-19-46-23.png" alt="Prótese Odontológica Visual 2026, maqueta do kit completo" className="w-full h-auto drop-shadow-2xl rounded-2xl relative z-10" />
          </div>

          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto bg-blue-600 text-white rounded-xl py-4 px-10 font-bold text-lg md:text-xl shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:bg-blue-700 hover:shadow-[0_10px_25px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-[0.98] inline-flex items-center justify-center gap-2"
          >
            QUERO ACESSAR O KIT COMPLETO
          </button>

          <div className="mt-8 flex flex-col items-center gap-4 text-sm">
            <div className="flex text-blue-500 gap-1 drop-shadow-sm">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-blue-700 font-medium text-sm text-center">
              <span className="text-blue-800 font-bold">Estudantes e protéticos de todo o mundo</span><br className="md:hidden" /> já usam este método de estudo
            </p>
          </div>
        </section>

        {/* Why it works */}
        <section className="bg-slate-50 py-20 border-y border-blue-100">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-12 tracking-tight">
              Por que funciona o Método <br className="hidden sm:block" />Atlas Protético
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyItWorks.map((item, i) => {
                const parts = item.text.split(item.highlight);
                return (
                  <div key={i} className="bg-white border border-blue-100 rounded-2xl p-6 flex flex-col gap-4 transition-all hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-blue-600" strokeWidth={3} />
                    </div>
                    <p className="text-blue-800 text-base leading-snug">
                      {parts.map((part, index) => (
                        <React.Fragment key={index}>
                          {part}
                          {index < parts.length - 1 && (
                            <span className="font-bold text-blue-700">{item.highlight}</span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-12 tracking-tight">
            O que o kit inclui
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatsIncluded.map((item, i) => (
              <div key={i} className="bg-white shadow-sm border border-blue-100 rounded-2xl p-6 flex flex-col gap-4 items-start transition-all hover:shadow-md hover:border-blue-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-200">
                  <item.icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <p className="text-blue-900 text-lg font-bold leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Situations */}
        <section className="bg-blue-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12 tracking-tight">
              Você se identifica com alguma destas situações?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {situations.map((text, i) => (
                <div key={i} className="bg-blue-800 rounded-2xl p-6 flex items-start gap-4 border border-blue-700">
                  <div className="w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-blue-300" strokeWidth={3} />
                  </div>
                  <p className="text-blue-100 text-sm md:text-base leading-snug font-medium">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preview Slider */}
        <section className="py-20 overflow-hidden bg-slate-50 border-y border-blue-100">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-12 tracking-tight px-6">
            Prévia dos Mapas Visuais
          </h2>
          
          <div className="relative w-full overflow-hidden mb-8">
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-6 shrink-0 pl-6">
                  {[
                    "https://i.ibb.co/1YkjgZKj/Chat-GPT-Image-8-de-jul-de-2026-09-10-51.png",
                    "https://i.ibb.co/hqbGtsW/Chat-GPT-Image-8-de-jul-de-2026-09-11-34-1.png",
                    "https://i.ibb.co/bjWNRVwz/Chat-GPT-Image-8-de-jul-de-2026-09-11-47.png",
                    "https://i.ibb.co/XrpBkcjw/Chat-GPT-Image-8-de-jul-de-2026-09-11-53.png",
                    "https://i.ibb.co/spBrpQQ8/Chat-GPT-Image-8-de-jul-de-2026-09-12-03.png",
                    "https://i.ibb.co/DBbJRC6/Chat-GPT-Image-8-de-jul-de-2026-09-13-01.png",
                  ].map((src, i) => (
                    <div key={i} className="shrink-0 w-[260px] md:w-[320px] bg-white rounded-2xl shadow-sm border border-blue-100 flex flex-col items-center justify-center overflow-hidden">
                      <img src={src} alt={`Mapa visual ${i + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 opacity-90 hover:opacity-100" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
           <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-scroll-reverse hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-6 shrink-0 pr-6">
                  {[
                    "https://i.ibb.co/TxjB2zB8/Chat-GPT-Image-8-de-jul-de-2026-09-15-09.png",
                    "https://i.ibb.co/TxjB2zB8/Chat-GPT-Image-8-de-jul-de-2026-09-15-09.png",
                    "https://i.ibb.co/ycZ7PJKn/Chat-GPT-Image-8-de-jul-de-2026-09-15-18.png",
                    "https://i.ibb.co/5g0MLyzw/Chat-GPT-Image-8-de-jul-de-2026-09-16-07.png",
                    "https://i.ibb.co/wrWZhYXn/Chat-GPT-Image-8-de-jul-de-2026-09-16-17.png",
                  ].map((src, i) => (
                    <div key={i} className="shrink-0 w-[260px] md:w-[320px] bg-white rounded-2xl shadow-sm border border-blue-100 flex flex-col items-center justify-center overflow-hidden">
                      <img src={src} alt={`Mapa visual ${i + 8}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 opacity-90 hover:opacity-100" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonuses */}
        <section className="py-20 max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-12 tracking-tight">
            Comprando hoje, <br className="md:hidden" />você também recebe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg shadow-blue-900/5 border border-blue-100 rounded-3xl p-6 md:p-8 flex items-center gap-6 group hover:border-blue-300 transition-colors">
              <div className="w-24 h-28 md:w-32 md:h-36 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                 <img src="https://i.ibb.co/1GZCNDrj/Chat-GPT-Image-23-07-2026-06-31-57.png" alt="Flashcards de Bolso" className="w-16 md:w-20 h-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="inline-block text-xs font-black text-blue-600 tracking-widest uppercase mb-2 bg-blue-50 border border-blue-200 px-2 py-1 rounded w-max">Bônus 01</span>
                <h3 className="text-lg md:text-xl font-extrabold text-blue-900 leading-tight">+50 Flashcards de Bolso</h3>
              </div>
            </div>
            
             <div className="bg-white shadow-lg shadow-blue-900/5 border border-blue-100 rounded-3xl p-6 md:p-8 flex items-center gap-6 group hover:border-blue-300 transition-colors">
              <div className="w-24 h-28 md:w-32 md:h-36 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                 <img src="https://i.ibb.co/PZJRhzx1/Chat-GPT-Image-23-07-2026-06-33-40.png" alt="Glossário de Prótese Odontológica" className="w-16 md:w-20 h-auto object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="inline-block text-xs font-black text-blue-600 tracking-widest uppercase mb-2 bg-blue-50 border border-blue-200 px-2 py-1 rounded w-max">Bônus 02</span>
                <h3 className="text-lg md:text-xl font-extrabold text-blue-900 leading-tight">Glossário com +100 Termos de Prótese Odontológica</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-blue-50 overflow-hidden border-y border-blue-100">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-12 tracking-tight px-6">
            O que dizem os alunos e profissionais
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-6 shrink-0 pl-6">
                  {[
                    "https://i.ibb.co/5W0m9WZs/Chat-GPT-Image-8-de-jul-de-2026-09-18-05-3.png",
                    "https://i.ibb.co/7JcmhCnf/Chat-GPT-Image-8-de-jul-de-2026-09-18-05-4.png",
                    "https://i.ibb.co/B5h8Zssf/Chat-GPT-Image-8-de-jul-de-2026-09-18-04-1.png",
                    "https://i.ibb.co/HQvB20x/Chat-GPT-Image-8-de-jul-de-2026-09-18-04-2.png"
                  ].map((src, i) => (
                    <div key={i} className="shrink-0 w-[280px] md:w-[350px] bg-white rounded-3xl shadow-xl border border-blue-100 overflow-hidden">
                      <img src={src} alt={`Testimonio ${i + 1}`} className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Card */}
        <section id="pricing" className="py-24 relative">
          <div className="absolute inset-0 bg-blue-50/50 rotate-1 skew-y-3 -z-10 transform origin-top-left"></div>
          
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-16 tracking-tight">
              Leve o kit completo <br className="hidden md:block" />por apenas
            </h2>
            
            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-blue-100 relative flex flex-col md:flex-row overflow-hidden">
              {/* Top/Left Section with Image & Price */}
              <div className="bg-blue-900 text-white p-10 md:p-12 flex-1 flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none"></div>

                <div className="bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black py-2 px-6 rounded-full uppercase tracking-widest shadow-lg shadow-blue-500/10 mb-8 z-10">
                  Kit Completo com Acesso Imediato
                </div>
                
                <div className="w-48 mx-auto mb-8 z-10">
                   <img src="https://i.ibb.co/GfvZMSDJ/Chat-GPT-Image-30-07-2026-19-46-23.png" alt="Prótese Odontológica Visual 2026 Kit" className="w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                </div>

                <h3 className="text-2xl md:text-3xl font-extrabold mb-2 z-10 text-white">Prótese Odontológica Visual 2026</h3>
                <p className="text-blue-200 text-base font-medium mb-8 z-10">Acesso imediato ao kit digital completo</p>

                <div className="min-h-[100px] flex flex-col items-center justify-center z-10">
                  <div className="flex flex-col items-center">
                    <div className="text-white text-6xl md:text-7xl font-black tracking-tighter mb-2 flex justify-center items-start">
                      <span className="text-3xl md:text-4xl mt-3 mr-1 text-blue-300">R$</span>
                      27,00
                    </div>
                  </div>
                  <p className="text-blue-200 text-sm font-medium">Pagamento único, sem mensalidades</p>
                </div>
              </div>

              {/* Right Section with List & CTA */}
              <div className="p-10 md:p-12 flex-1 flex flex-col justify-center bg-white">
                <div className="space-y-4 mb-10">
                  {[
                    "Fundamentos e Materiais Odontológicos",
                    "Prótese Total",
                    "Prótese Parcial Removível (PPR)",
                    "Prótese Fixa e sobre Implante",
                    "Cerâmica, Estética e Prótese Digital",
                    "Ortodontia, Biossegurança e Legislação",
                    "Bônus: +50 Flashcards de Bolso",
                    "Bônus: Glossário com +100 Termos",
                    "Acesso digital imediato",
                    "Garantia de 7 dias"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5 border border-blue-200">
                        <Check className="w-3.5 h-3.5 text-blue-600" strokeWidth={3} />
                      </div>
                      <span className="text-blue-900 text-base font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <a href={getCheckoutUrl()} target="_blank" rel="noopener noreferrer" className="w-full bg-blue-600 text-white rounded-xl py-5 px-6 font-bold text-xl text-center shadow-[0_10px_30px_rgba(37,99,235,0.25)] hover:bg-blue-700 hover:shadow-[0_15px_40px_rgba(37,99,235,0.35)] transition-all transform hover:-translate-y-1 active:scale-[0.98] active:translate-y-0 mb-6 block">
                  QUERO ACESSAR AGORA
                </a>

                <div className="flex items-center justify-center gap-2 flex-wrap text-xs md:text-sm text-blue-500 font-medium tracking-wide text-center">
                  <span className="flex items-center gap-1"><Lock className="w-3.5 h-3.5" /> Compra segura</span>
                  <span className="hidden sm:inline">·</span>
                  <span>Acesso imediato</span>
                  <span className="hidden sm:inline">·</span>
                  <span>Garantia de 7 dias</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="py-12 bg-blue-50 border-t border-blue-100">
          <div className="max-w-3xl mx-auto px-6 text-center">
             <div className="w-28 h-28 mx-auto rounded-full bg-white mb-8 flex flex-col items-center justify-center shadow-lg border-[6px] border-blue-100 text-blue-900 transform -rotate-3 hover:rotate-0 transition-transform">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Garantia</span>
                <span className="text-4xl font-black leading-none my-1">7</span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-blue-400">Dias</span>
             </div>
             <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-6">Garantia de 7 dias</h3>
             <p className="text-blue-700 text-lg leading-relaxed max-w-2xl mx-auto">
              Você pode acessar o material, conhecê-lo por dentro e testá-lo com calma. Se perceber que não é para você, basta solicitar o reembolso dentro do prazo de 7 dias, sem burocracia.
             </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white border-t border-blue-100">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 text-center mb-12 tracking-tight">
              Perguntas frequentes
            </h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div 
                    key={i} 
                    className={cn(
                      "bg-white rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden",
                      isOpen ? "border-blue-300 shadow-md ring-1 ring-blue-100" : "border-blue-100 hover:border-blue-200 hover:shadow-sm"
                    )}
                    onClick={() => toggleFaq(i)}
                  >
                    <div className="p-6 flex items-center justify-between gap-4">
                      <h4 className={cn("text-lg font-bold leading-snug transition-colors", isOpen ? "text-blue-600" : "text-blue-900")}>
                        {faq.q}
                      </h4>
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                        isOpen ? "bg-blue-100 text-blue-600 rotate-180" : "bg-blue-50 text-blue-400"
                      )}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                    <div 
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                      )}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-blue-700 text-base leading-relaxed border-t border-blue-50 pt-4">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-200 py-12 px-6 border-t border-blue-800 text-center">
         <div className="max-w-6xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 text-blue-400/50 mb-6">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-sm font-medium">
               © 2026 Prótese Odontológica Visual 2026. Todos os direitos reservados.
            </div>
         </div>
      </footer>
    </div>
  );
}

