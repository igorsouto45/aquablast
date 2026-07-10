"use client";
import { MapPin } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import { motion } from "framer-motion";
import { useState } from "react";

const geoUrl =
  "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

interface Caso {
  estado: string;
  sigla: string;
  cliente: string;
  servico: string;
  resultado?: string;
  venda?: string;
}

const casos: Caso[] = [
  {
    estado: "São Paulo",
    sigla: "SP",
    cliente: "AutoTech Performance",
    servico: "Aquisição de cabine Aquablast® personalizada",
    resultado: "Redução de 35% no tempo de preparação de peças",
    venda: "Abril de 2024",
  },
  {
    estado: "Paraná",
    sigla: "PR",
    cliente: "JetClean Industrial",
    servico: "Implementação do jateamento úmido em linha de produção",
    resultado: "“A Aquablast® nos trouxe economia e modernidade.”",
  },
  {
    estado: "Ceará",
    sigla: "CE",
    cliente: "Oficina Premium Classic",
    servico: "Treinamento técnico + fornecimento de insumos",
    resultado: "Triplicou a demanda de serviços em 6 meses",
  },
];

const NationalPresence = () => {
  const [hoveredCase, setHoveredCase] = useState<Caso | null>(null);

  const handleMouseEnter = (geo: any) => {
    const sigla = geo.properties.sigla;
    const caso = casos.find((c) => c.sigla === sigla) || null;
    setHoveredCase(caso);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Presença <span className="gradient-text">Nacional</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              A Aquablast® já conquistou presença em todo o Brasil: são mais de{" "}
              <strong>180 máquinas instaladas</strong>, com forte atuação nas
              regiões <strong>Sudeste, Sul, Centro-Oeste e Nordeste</strong>.
              Esse alcance reforça nosso compromisso em oferecer atendimento
              nacional com a mesma qualidade técnica e confiabilidade,
              independente da região ou setor.
            </p>
          </div>

          {/* Mapa interativo + Card fixo (sem scroll e sem flicker) */}
          <div className="relative pt-24">
            {/* Card fixo acima do mapa */}
            {hoveredCase && (
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 z-50 bg-white shadow-lg rounded-lg p-4 text-sm w-80 pointer-events-none"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <h4 className="font-bold text-red-600 flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {hoveredCase.estado} ({hoveredCase.sigla})
                </h4>
                <p>
                  <strong>Cliente:</strong> {hoveredCase.cliente}
                </p>
                <p>
                  <strong>Serviço:</strong> {hoveredCase.servico}
                </p>
                {hoveredCase.resultado && (
                  <p>
                    <strong>Resultado:</strong> {hoveredCase.resultado}
                  </p>
                )}
                {hoveredCase.venda && (
                  <p>
                    <strong>Venda:</strong> {hoveredCase.venda}
                  </p>
                )}
              </motion.div>
            )}

            {/* SVG do mapa */}
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 850, center: [-55, -15] }}
              width={800}
              height={600}
              className="mx-auto"
              onMouseLeave={() => setHoveredCase(null)} // sai do mapa = esconde card
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const sigla = geo.properties.sigla;
                    const ativo = casos.some((c) => c.sigla === sigla);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => handleMouseEnter(geo)}
                        className="transition-colors duration-300 cursor-pointer"
                        style={{
                          default: {
                            fill: ativo ? "#2B3D94" : "#e5e7eb",
                            stroke: "#fff",
                            strokeWidth: 0.6,
                          },
                          hover: { fill: "#ef4444", outline: "none" },
                          pressed: { fill: "#dc2626", outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationalPresence;
