"use client";

import { useState } from "react";
import Image from "next/image";

export default function MachineInfographic() {
  const [hovered, setHovered] = useState<number | null>(null);

  const pontos = [
    { id: 1, nome: "Dupla iluminação de LED", top: "15%", left: "25%" },
    { id: 2, nome: "Limpador de para-brisa", top: "28%", left: "45%" },
    { id: 3, nome: "Luva de borracha", top: "45%", left: "28%" },
    { id: 4, nome: "Regulador de pressão", top: "58%", left: "30%" },
    { id: 5, nome: "Caixa de decantação", top: "78%", left: "20%" },
    { id: 6, nome: "Pedal de acionamento", top: "88%", left: "50%" },
    { id: 7, nome: "Rodízios para deslocamento", top: "85%", left: "70%" },
    { id: 8, nome: "Pingadeira", top: "50%", left: "70%" },
    { id: 9, nome: "Mesa rotativa", top: "35%", left: "68%" },
    { id: 10, nome: "Trava rápida", top: "10%", left: "70%" },
    { id: 11, nome: "Duto para saída de vapor", top: "8%", left: "58%" },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center py-10 bg-white">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Conheça a nossa máquina AB900
      </h2>

      <div className="relative w-full max-w-3xl">
        <Image
          src="/images/machine-clean.jpg"
          alt="Máquina AB900"
          width={1000}
          height={1000}
          priority
        />


        {pontos.map((ponto) => (
          <div
            key={ponto.id}
            className="absolute cursor-pointer"
            style={{ top: ponto.top, left: ponto.left, transform: "translate(-50%, -50%)" }}
            onMouseEnter={() => setHovered(ponto.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse-dot hover:scale-125 transition-transform"
            />


            {hovered === ponto.id && (
              <div className="absolute z-10 bg-blue-700 text-white text-sm px-3 py-1 rounded-md shadow-lg whitespace-nowrap -translate-y-8 left-1/2 -translate-x-1/2">
                {ponto.nome}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-gray-600 text-center">
        Passe o mouse sobre os pontos para conhecer os componentes da máquina.
      </p>
    </section>
  );
}
