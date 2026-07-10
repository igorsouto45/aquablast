import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Wrench, Users, Headphones } from "lucide-react";

const BusinessDelivery = () => {
  const deliveries = [
    {
      title: "Máquinas de alta performance",
      description:
        "Venda e fabricação de máquinas de jateamento úmido desenvolvidas para máxima eficiência e durabilidade.",
      icon: <Wrench className="h-10 w-10 text-primary" />,
    },
    {
      title: "Suporte técnico especializado",
      description:
        "Consultoria na aplicação do método, treinamento completo para uso correto e eficiente dos equipamentos.",
      icon: <Headphones className="h-10 w-10 text-primary" />,
    },
    {
      title: "Fornecimento de mídias",
      description:
        "Disponibilizamos as mídias adequadas para cada tipo de serviço, garantindo resultados de alta qualidade.",
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
    },
    {
      title: "Pós-venda e manutenção",
      description:
        "Garantia, manutenção especializada e atendimento ágil para manter seu negócio sempre em operação.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: "Relacionamento direto",
      description:
        "Atendimento consultivo e próximo, focado em entender as necessidades específicas de cada cliente.",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que entregamos <span className="gradient-text">ao seu negócio?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Máquinas de alta performance, suporte técnico especializado e atendimento consultivo. 
            Nosso compromisso é entregar tecnologia, eficiência e qualidade.
          </p>
        </div>

        {/* Cards centralizados */}
        <div className="flex flex-wrap justify-center gap-8">
          {deliveries.map((item, index) => (
            <div key={index} className="w-full md:w-[45%] lg:w-[30%]">
              <Card className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl h-full">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessDelivery;
