import { Card, CardContent } from '@/components/ui/card';
import { Target, Compass, Heart, Users, Leaf, Wrench, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const MissaoVisao = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1B285E] via-[#24337d] to-[#2B3D94] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            🎯 Missão, Visão e Valores
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            O que guia nossa trajetória e fortalece nosso compromisso com inovação, sustentabilidade e excelência.
          </p>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 1.03 }}>
            <Card className="shadow-lg border-t-4 border-red-600">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fornecer soluções de jateamento úmido que combinem inovação tecnológica, sustentabilidade e excelência técnica,
                  atendendo às necessidades específicas de cada cliente e fortalecendo parcerias de longo prazo.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Card className="shadow-lg border-t-4 border-[#1B285E]">
              <CardContent className="p-8 text-center">
                <Compass className="h-12 w-12 text-[#1B285E] mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-3">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tornar-se a principal referência em jateamento úmido na América Latina, reconhecida pela inovação, responsabilidade ambiental
                  e desenvolvimento contínuo de equipamentos de alta performance.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h3 className="text-3xl font-bold mb-12">Nossos Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap className="h-8 w-8 text-red-600" />, text: "Inovação contínua – aprimoramento constante e relacionamento próximo com o cliente" },
              { icon: <Leaf className="h-8 w-8 text-green-600" />, text: "Sustentabilidade – soluções que respeitam o meio ambiente" },
              { icon: <Wrench className="h-8 w-8 text-[#1B285E]" />, text: "Excelência técnica – conhecimento, precisão e alto padrão de qualidade" },
              { icon: <Users className="h-8 w-8 text-[#1B285E]" />, text: "Respeito ao cliente – cada venda é única e tratada com ética" },
              { icon: <Target className="h-8 w-8 text-red-600" />, text: "Responsabilidade – compromisso com prazos e resultados" },
              { icon: <Heart className="h-8 w-8 text-red-600" />, text: "Paixão – acreditamos na transformação do setor" },
            ].map((val, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }}>
                <Card className="h-full shadow-md">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    {val.icon}
                    <p className="text-muted-foreground">{val.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissaoVisao;
