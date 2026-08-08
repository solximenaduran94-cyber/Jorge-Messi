import React from 'react';
import { Calendar, MapPin, Building2, ShieldAlert, Award, FileText, CheckCircle2, UserCheck } from 'lucide-react';
import { JORGE_MESSI_INFO, FOOTBALL_HOMAGES, FAKE_NEWS_CLARIFICATION } from '../data/memorialData';

export const DecesoInfo: React.FC = () => {
  return (
    <section id="deceso-info" className="py-16 bg-[#080808] text-[#dcdcdc] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/15 text-zinc-300 text-xs font-sans tracking-[0.2em] uppercase">
            <FileText className="w-3.5 h-3.5" />
            Información Oficial & Comunicados
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white font-light">
            Detalles del Fallecimiento y Homenajes
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-sans font-light">
            Información verificada emitida por el Sanatorio Centro de Rosario y los comunicados oficiales del mundo del fútbol.
          </p>
        </div>

        {/* 4 Cards Key Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-sans">
          
          <div className="bg-[#101010] border border-white/10 p-5 space-y-2">
            <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-amber-400" /> Fecha y Hora
            </div>
            <div className="text-lg font-serif text-white">
              {JORGE_MESSI_INFO.deathDate}
            </div>
            <div className="text-xs text-zinc-500">
              Falleció a las {JORGE_MESSI_INFO.timeOfDeath}
            </div>
          </div>

          <div className="bg-[#101010] border border-white/10 p-5 space-y-2">
            <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Lugar
            </div>
            <div className="text-lg font-serif text-white">
              {JORGE_MESSI_INFO.location}
            </div>
            <div className="text-xs text-zinc-500">
              {JORGE_MESSI_INFO.city}
            </div>
          </div>

          <div className="bg-[#101010] border border-white/10 p-5 space-y-2">
            <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5 text-amber-400" /> Causa y Edad
            </div>
            <div className="text-lg font-serif text-white">
              {JORGE_MESSI_INFO.age} años
            </div>
            <div className="text-xs text-zinc-500">
              Enfermedad prolongada (cáncer)
            </div>
          </div>

          <div className="bg-[#101010] border border-white/10 p-5 space-y-2">
            <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-amber-400" /> Luto en el Fútbol
            </div>
            <div className="text-lg font-serif text-white">
              Decreto Oficial AFA
            </div>
            <div className="text-xs text-zinc-500">
              Minuto de silencio y brazalete negro
            </div>
          </div>

        </div>

        {/* Official Medical Statement */}
        <div className="bg-[#101010] border border-white/10 p-6 sm:p-8 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-white/5 border border-white/15 text-amber-300 hidden sm:block">
              <Building2 className="w-8 h-8" />
            </div>

            <div className="space-y-3 flex-1 font-sans">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-xl font-serif text-white font-light">
                    Comunicado Oficial del Sanatorio Centro
                  </h3>
                  <p className="text-xs text-amber-300 mt-0.5">
                    Emitido por el Director Médico: {JORGE_MESSI_INFO.medicalDirector}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-wider bg-white/5 text-zinc-300 border border-white/10 px-3 py-1">
                  Rosario, Argentina
                </span>
              </div>

              <blockquote className="text-sm sm:text-base text-zinc-200 font-serif italic leading-relaxed bg-[#080808] p-4 border border-white/5">
                "{JORGE_MESSI_INFO.medicalStatement}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Football World Condolences */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif text-white font-light text-center sm:text-left">
            Condolencias y Homenajes de Instituciones
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
            {FOOTBALL_HOMAGES.map((h, idx) => (
              <div
                key={idx}
                className="bg-[#101010] border border-white/10 p-5 space-y-2.5 transition-all shadow-md"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-serif text-white font-medium">
                    {h.entity}
                  </h4>
                  <span className="text-[11px] uppercase tracking-wider bg-white/5 text-zinc-300 px-2.5 py-0.5 border border-white/10">
                    {h.badge}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {h.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Clarification on Fake News Antecedent */}
        <div className="bg-white/5 border border-white/10 p-5 sm:p-6 space-y-3 font-sans">
          <div className="flex items-center gap-2 text-white font-medium text-sm sm:text-base">
            <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <h4>{FAKE_NEWS_CLARIFICATION.title}</h4>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
            {FAKE_NEWS_CLARIFICATION.details}
          </p>

          <div className="flex items-center gap-2 text-xs text-zinc-300 uppercase tracking-wider pt-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Información corroborada el sábado 8 de agosto de 2026.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
