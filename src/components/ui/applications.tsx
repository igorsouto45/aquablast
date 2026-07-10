import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Headphones, GraduationCap, Package, RefreshCcw, Users } from "lucide-react";

import premiumClassicLogo from "@/assets/premiumclassic.jpg";
import autoTechLogo from "@/assets/autotech.jpg";

const WhyAquablast = () => {
  const reasons = [
    {
      icon: <Wrench className="h-12 w-12 text-primary" />,
      title: "Venda e fabricação de máquinas de jateamento úmido",
    },
    {
      icon: <Headphones className="h-12 w-12 text-primary" />,
      title: "Suporte técnico especializado e consultoria na aplicação do método",
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-primary" />,
      title: "Treinamento completo para o uso correto e eficiente dos equipamentos",
    },
    {
      icon: <Package className="h-12 w-12 text-primary" />,
      title: "Fornecimento das mídias adequadas para cada tipo de serviço",
    },
    {
      icon: <RefreshCcw className="h-12 w-12 text-primary" />,
      title: "Pós-venda com garantia, manutenção especializada e atendimento ágil",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Relacionamento direto com o cliente para qualquer necessidade",
    },
  ];

  const cases = [
    {
      title: "AutoTech Performance",
      logo: autoTechLogo,
      service: "Aquisição de cabine Aquablast personalizada",
      result: "Redução de 35% no tempo de preparação de peças",
      date: "Abril de 2024",
    },
    {
      title: "Oficina Premium Classic",
      logo: premiumClassicLogo,
      service: "Treinamento técnico + fornecimento de insumos",
      result: "Triplicou a demanda de serviços em 6 meses",
      date: "Abril de 2024",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que ter a <span className="gradient-text">Aquablast®</span> como parceira?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolher a Aquablast® é contar com uma empresa que une tecnologia, confiança e compromisso
            para transformar a forma como sua oficina, retífica ou indústria realiza a limpeza e o acabamento de peças.
          </p>
        </div>

        {/* Cards de Diferenciais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 p-4">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="tech-hover shadow-sm hover:shadow-md transition-shadow rounded-xl"
            >
              <CardContent className="p-4 h-full flex flex-col items-center text-center">
                <div className="mb-3">{reason.icon}</div>
                <h3 className="text-base font-medium text-foreground">{reason.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <br />
        <br />
        {/* Casos Reais */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Mais que máquinas, uma <span className="gradient-text">parceria para o seu crescimento</span>
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {cases.map((c, idx) => (
              <Card
                key={idx}
                className="shadow-md hover:shadow-lg transition-shadow rounded-2xl max-w-md flex-1"
              >
                <CardContent className="p-6">
                  {/* Logo + Nome */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={c.logo}
                      alt={c.title}
                      className="h-12 w-auto object-contain rounded"
                    />
                    <h4 className="text-xl font-semibold">{c.title}</h4>
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-semibold">Serviço:</span> {c.service}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-semibold">Resultado:</span> {c.result}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Data:</span> {c.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default WhyAquablast;
