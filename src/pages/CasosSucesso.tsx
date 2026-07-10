"use client";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import {
  ComposableMap,
  Geographies,
  Geography,
  GeographyProps,
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

// Tipagem mínima para as propriedades do GeoJSON que vamos usar
interface GeoCustom {
  properties: {
    sigla: string;
    name: string;
  };
  rsmKey: string;
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

const CasosSucesso = () => {
  const [hoveredCase, setHoveredCase] = useState<Caso | null>(null);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (
    evt: React.MouseEvent<SVGPathElement, MouseEvent>,
    geo: GeoCustom
  ) => {
    const sigla = geo.properties.sigla;
    const caso = casos.find((c) => c.sigla === sigla);
    if (caso) {
      setHoveredCase(caso);
      setCoords({ x: evt.clientX, y: evt.clientY });
    } else {
      setHoveredCase(null);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-accent/5 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Casos de{" "}
            <span className="gradient-text">
              Sucesso Aquablast<sup>®</sup>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde sua fundação, a{" "}
            <strong>
              Aquablast<sup>®</sup>
            </strong>{" "}
            vem conquistando espaço no mercado nacional, oferecendo tecnologia
            de ponta em jateamento úmido para empresas de diversos portes e
            segmentos.
          </p>
        </div>
      </section>

      {/* Mapa + Cards lado a lado */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Coluna do Mapa */}
          <div className="relative">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 850, center: [-55, -15] }}
              width={800}
              height={600}
              className="mx-auto"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const g = geo as unknown as GeoCustom;
                    const sigla = g.properties.sigla;
                    const ativo = casos.find((c) => c.sigla === sigla);
                    return (
                      <Geography
                        key={g.rsmKey}
                        geography={geo}
                        onMouseMove={(evt) => handleMouseMove(evt, g)}
                        onMouseLeave={() => setHoveredCase(null)}
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

            {/* Tooltip flutuante */}
            {hoveredCase && coords && (
              <motion.div
                className="absolute z-50 bg-white shadow-lg rounded-lg p-4 text-sm w-64"
                style={{ top: coords.y - 120, left: coords.x - 100 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <h4 className="font-bold text-red-600 flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-1" /> {hoveredCase.estado} (
                  {hoveredCase.sigla})
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
          </div>

          {/* Coluna de Cards fixos */}
          <div className="space-y-6">
            {casos.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="tech-hover p-6 space-y-2">
                  <h3 className="text-xl font-semibold">
                    {c.estado} ({c.sigla})
                  </h3>
                  <p>
                    <strong>Cliente:</strong> {c.cliente}
                  </p>
                  <p>
                    <strong>Serviço:</strong> {c.servico}
                  </p>
                  {c.resultado && (
                    <p>
                      <strong>Resultado:</strong> {c.resultado}
                    </p>
                  )}
                  {c.venda && (
                    <p>
                      <strong>Venda:</strong> {c.venda}
                    </p>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasosSucesso;
