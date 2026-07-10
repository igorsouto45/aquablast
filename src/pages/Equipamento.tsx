import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, MessageCircle, Shield, Sparkles, Wrench, Cog, CheckCircle } from "lucide-react";

const Equipamento = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge
            className="bg-red-100 text-red-800 border-red-200 mb-4 text-md px-6 py-3 font-semibold"
            variant="outline"
          >
            🔧 Equipamento AQUABLAST®
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Equipamento <span className="text-red-600">AQUABLAST®</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Equipamento pioneiro de wet blasting desenvolvido especificamente para o mercado brasileiro. 
            Solução completa para limpeza eficiente de peças em retíficas e indústrias, com tecnologia que combina sustentabilidade e alta performance.
          </p>
        </div>

        {/* O que é o equipamento */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                O Que Faz Nosso <span className="text-red-600">Equipamento</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                O equipamento AQUABLAST® utiliza tecnologia de wet blasting (jateamento úmido) que combina água, ar comprimido 
                e micro esferas de vidro para limpeza controlada e eficiente. Remove completamente crostas de fundição, óleo, 
                tinta, oxidação e contaminantes, preservando tolerâncias dimensionais e oferecendo acabamento superior.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-lg">Limpeza profunda de blocos de motor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-lg">Preparação de cabeçotes para retífica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-lg">Limpeza de bielas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-lg">Componentes industriais em geral</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/15 to-red-600/15 rounded-3xl p-8 border border-primary/20">
              <div className="text-center">
                <Cog className="h-20 w-20 mx-auto mb-4 text-red-600" />
                <h3 className="text-2xl font-bold mb-4">Equipamento Personalizado</h3>
                <p className="text-muted-foreground mb-6">
                  Desenvolvemos um modelo único de equipamento, dimensionado sob medida conforme suas necessidades específicas de espaço e volume de produção
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-600">95%</div>
                    <div className="text-sm text-muted-foreground">Menos Agressivo</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">Sob Medida</div>
                    <div className="text-sm text-muted-foreground">Para Seu Espaço</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section className="mb-20 bg-muted/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Como Funciona o <span className="text-red-600">Wet Blasting</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Processo revolucionário que combina água + ar comprimido + micro esferas de vidro para resultados superiores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="tech-hover border-l-4 border-l-blue-500">
              <CardContent className="p-6 text-center">
                <Droplets className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Água + Micro Esferas</h3>
                <p className="text-muted-foreground">
                  Combinação de água e micro esferas de vidro cria processo controlado e menos agressivo
                </p>
              </CardContent>
            </Card>

            <Card className="tech-hover border-l-4 border-l-blue-500">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Limpeza Controlada</h3>
                <p className="text-muted-foreground">
                  Remove crostas de fundição, óleo e oxidação preservando tolerâncias dimensionais
                </p>
              </CardContent>
            </Card>

            <Card className="tech-hover border-l-4 border-l-blue-500">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Acabamento Profissional</h3>
                <p className="text-muted-foreground">
                  Superfície limpa e uniforme, pronta para usinagem ou montagem
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefícios específicos para retíficas */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por Que Escolher <span className="text-red-600">AQUABLAST®</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Benefícios comprovados para retíficas e indústrias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Eficiência Comprovada</h3>
                  <p className="text-muted-foreground">
                    Processo mais rápido que métodos convencionais, aumentando capacidade produtiva da retífica
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tecnologia Sustentável</h3>
                  <p className="text-muted-foreground">
                    Processo ambientalmente responsável, sem produtos químicos agressivos
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Precisão Dimensional</h3>
                  <p className="text-muted-foreground">
                    Mantém tolerâncias críticas das peças, essencial para componentes de motor
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Projeto Personalizado</h3>
                  <p className="text-muted-foreground">
                    Equipamento dimensionado conforme layout da retífica e volume de produção
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Suporte Completo</h3>
                  <p className="text-muted-foreground">
                    Instalação, treinamento operacional e suporte técnico contínuo
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Inovação Nacional</h3>
                  <p className="text-muted-foreground">
                    Tecnologia pioneira desenvolvida especificamente para o mercado brasileiro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Revolucione sua Retífica com AQUABLAST®
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Converse com nossos especialistas e descubra como a tecnologia de wet blasting pode transformar 
            a eficiência e qualidade da sua operação
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-white text-red-600 hover:bg-gray-100"
            >
              <a
                href="https://wa.me/5521991239221"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <MessageCircle className="h-6 w-6" />
                <span>WhatsApp: (21) 99123-9221</span>
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-red-600"
            >
              <a href="/contato" className="flex items-center space-x-3">
                <span>Solicitar Orçamento</span>
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Equipamento;
