import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Target, Users, Leaf, MessageCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre a <span className="gradient-text">AQUABLAST®</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              A Aquablast Brasil foi oficialmente fundada em 02 de fevereiro de 2023 por William de Abreu Primo, um visionário apaixonado por inovação industrial. Desde sua criação, a empresa tem se destacado por trazer ao Brasil uma tecnologia revolucionária: o jateamento úmido de alta qualidade, também conhecido como Wet Blasting®
              <br />
              <br />
              <p>William identificou uma lacuna no mercado nacional: a ausência de processos mais eficientes, limpos e sustentáveis para o tratamento de peças automotivas e industriais. Inspirado por referências internacionais e com uma visão de futuro, ele decidiu fundar a Aquablast® com o objetivo de transformar o setor e elevar o padrão técnico das soluções oferecidas.</p>
              <br />
              <p>Com um início focado na pesquisa e desenvolvimento das melhores máquinas e técnicas, a empresa rapidamente conquistou o mercado, tornando-se referência em diversos estados do Brasil. Hoje, a Aquablast® é sinônimo de qualidade, tecnologia e compromisso com o cliente, atendendo RETIFICAS, mecânicas, oficinas especializadas, restauradores e indústrias com máquinas de última geração e suporte técnico especializado.</p>
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">💡 Como Surgiu a Ideia</h2>

            <div className="space-y-8 slide-up">
              <Card className="tech-hover">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <Lightbulb className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <p className="text-muted-foreground leading-relaxed">
                        Durante uma consultoria técnica no exterior voltada à recuperação automotiva de alto padrão,
                        <strong> William Primo</strong>, fundador da Aquablast Brasil, teve seu primeiro contato com o processo de
                        <strong> jateamento úmido (wet blasting<sup>®</sup>)</strong>.
                        Marca registrada pela <strong>Aquablast® no Brasil</strong>.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mt-4">
                        Ao observar de perto a eficiência, o acabamento preciso e o impacto ambiental reduzido dessa tecnologia,
                        William percebeu o enorme potencial de aplicação no mercado brasileiro — ainda carente de soluções sustentáveis
                        e de alto desempenho nesse segmento.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mt-4">
                        Motivado por essa descoberta e com um olhar estratégico voltado à inovação, ele decidiu trazer essa técnica para o Brasil,
                        adaptando os processos e desenvolvendo máquinas específicas para as necessidades locais. Assim nasceu a
                        <strong> Aquablast<sup>®</sup></strong>, com a missão de transformar a indústria automotiva por meio de soluções mais limpas,
                        eficientes e tecnológicas, reposicionando o jateamento como um serviço de alta qualidade e responsabilidade ambiental.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossos Diferenciais</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="tech-hover text-center">
                <CardContent className="p-6">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Inovação</h3>
                  <p className="text-muted-foreground">
                    Pioneiros em tecnologia Wet Blasting® no Brasil, sempre buscando as soluções mais avançadas
                  </p>
                </CardContent>
              </Card>

              <Card className="tech-hover text-center">
                <CardContent className="p-6">
                  <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Sustentabilidade</h3>
                  <p className="text-muted-foreground">
                    Compromisso com o meio ambiente através de processos mais limpos e eficientes
                  </p>
                </CardContent>
              </Card>

              <Card className="tech-hover text-center">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Excelência Técnica</h3>
                  <p className="text-muted-foreground">
                    Equipamentos sob medida com a mais alta qualidade e precisão técnica
                  </p>
                </CardContent>
              </Card>

              <Card className="tech-hover text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Relacionamento</h3>
                  <p className="text-muted-foreground">
                    Parceria duradoura com suporte técnico especializado e atendimento personalizado
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quer Conhecer Mais Nossa História?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e descubra como podemos revolucionar
              seus processos de tratamento de superfície.
            </p>

            <Button
              size="lg"
              className="text-lg px-8 py-4 bg-white text-white hover:bg-gray-100 bg-red-500 hover:bg-red-600"
            >
              <a
                href="https://wa.me/5521991239221"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Fale Conosco pelo WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
