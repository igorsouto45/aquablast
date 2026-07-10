import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, MessageCircle, Shield, Sparkles, Wrench } from "lucide-react";

const JateamentoUmido = () => {
  return (
    <div className="min-h-screen pt-40 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-600 ">
            O Que é Wet Blasting<sup>®</sup>?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            O <strong>Wet Blasting</strong>, também conhecido como <strong>Vapor Honing</strong>, é uma tecnologia avançada de tratamento de superfície que combina água, ar e abrasivo para limpar e polir peças simultaneamente. Este processo controlado por fluxo é ideal para materiais delicados e proporciona acabamentos superiores inalcançáveis por processos convencionais.
          </p>
        </div>

        {/* Lista de benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primeiro tópico obrigatório */}
          <Card className="tech-hover border-l-4 border-l-red-600">
            <CardContent className="p-6 flex items-start space-x-4">
              <Droplets className="h-10 w-10 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Acabamento Consistente e Suave</h3>
                <p className="text-muted-foreground">
                  A combinação de água e abrasivo cria um filme lubrificante que elimina embedment e proporciona 
                  acabamentos suaves e consistentes com valores de rugosidade controlados e repetíveis.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Demais tópicos */}
          <Card className="tech-hover border-l-4 border-l-primary">
            <CardContent className="p-6 flex items-start space-x-4">
              <Shield className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Versatilidade de Abrasivos</h3>
                <p className="text-muted-foreground">
                  Compatível com diversos tipos de abrasivos: esferas de vidro, óxido de alumínio, 
                  carboneto de silício e abrasivos especiais para aplicações específicas em diferentes granulometrias.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="tech-hover border-l-4 border-l-red-600">
            <CardContent className="p-6 flex items-start space-x-4">
              <Sparkles className="h-10 w-10 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Precisão e Segurança</h3>
                <p className="text-muted-foreground">
                  Garante acabamento preciso, reduzindo riscos e distorções, mesmo em peças delicadas.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="tech-hover border-l-4 border-l-primary">
            <CardContent className="p-6 flex items-start space-x-4">
              <Wrench className="h-10 w-10 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Aplicações</h3>
                <p className="text-muted-foreground">
                  Ideal para restauração automotiva, motores e componentes metálicos, oferecendo
                  desempenho superior ao jateamento a seco.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>


      </div>
      {/* CTA Section */}
      <section className="mt-20 py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quer Saber Mais Sobre Jateamento Úmido?
            </h2>
            <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
              Descubra como o jateamento úmido pode transformar seus processos com eficiência e sustentabilidade.
            </p>
            <Button size="lg" className="mr-4">
              <MessageCircle className="h-5 w-5 mr-2" />
              Falar com Especialista
            </Button>
            <Button size="lg" className="text-white bg-red-600 hover:bg-blue-900">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JateamentoUmido;
