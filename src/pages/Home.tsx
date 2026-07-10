import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Zap, Shield, Award, Eye, Target } from 'lucide-react';
import heroImage from '@/assets/aquablast-hero.jpg';
import Statistics from '@/components/ui/statistics';
import EquipmentShowcase from '@/components/ui/equipment-showcase';
import Applications from '@/components/ui/applications';
import { Settings, Droplets, Users } from 'lucide-react';
import IdeaSection from './IdeaSection';
import NationalPresence from './NationalPresence';
import InteractiveImage from './InteractiveImage';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1B285E]/90 to-[#2B3D94]/70"></div>

        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="fade-in">
            <div className="mb-8">
              <Badge
                className="bg-white/20 text-white border-white/30 mb-4 text-md px-6 py-3 font-semibold"
                variant="outline"
              >
                🏆 Pioneiros em Wet Blasting no Brasil
              </Badge>
            </div>




            <h2 className="text-3xl md:text-6xl font-bold mb-4 max-w-4xl mx-auto">
              AQUABLAST<span className="text-red-600">®</span>
              <br />Tecnologia em Wet Blasting
            </h2>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Pioneira no Brasil em tecnologia de jateamento úmido para retíficas e indústrias.
              Limpeza eficiente e precisa de blocos, cabeçotes e componentes industriais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {/* 🔵 Botão Azul */}
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-[#1B285E] hover:bg-[#141D46] text-white"
              >
                <a
                  href="https://wa.me/5521991239221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>Fale pelo WhatsApp</span>
                </a>
              </Button>

              {/* 🔴 Botão Vermelho */}
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700 text-white"
              >
                <a href="#sobre" className="flex items-center space-x-3">
                  <span>Conheça a Empresa</span>
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">2023</div>
                <div className="text-sm opacity-80">Fundação da Empresa</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-80">Menos Agressivo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-80">Nacional</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">24h</div>
                <div className="text-sm opacity-80">Suporte Técnico</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <IdeaSection />

      {/* Equipment Showcase */}

      <EquipmentShowcase/>

      {/* Applications Section */}
      <Applications />

      {/* About Section */}
      <section
        id="sobre"
        className="py-20 bg-gradient-to-b from-primary/5 via-blue-50 to-primary/10"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center slide-up">
            {/* Título */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a <span className="gradient-text">AQUABLAST®</span>
            </h2>

            {/* Texto introdutório */}
            <div className="text-lg text-muted-foreground mb-12 leading-relaxed space-y-4">
              <p>
                A Aquablast Brasil foi oficialmente fundada em 02 de fevereiro de
                2023 por William de Abreu Primo, um visionário apaixonado por
                inovação industrial. Desde sua criação, a empresa tem se destacado por
                trazer ao Brasil uma tecnologia revolucionária: o jateamento úmido de
                alta qualidade, também conhecido como Wet Blasting®.
              </p>
              <p>
                William identificou uma lacuna no mercado nacional: a ausência de
                processos mais eficientes, limpos e sustentáveis para o tratamento de
                peças automotivas e industriais. Inspirado por referências
                internacionais e com uma visão de futuro, ele decidiu fundar a
                Aquablast® com o objetivo de transformar o setor e elevar o padrão
                técnico das soluções oferecidas.
              </p>
              <p>
                Com um início focado na pesquisa e desenvolvimento das melhores
                máquinas e técnicas, a empresa rapidamente conquistou o mercado,
                tornando-se referência em diversos estados do Brasil. Hoje, a
                Aquablast® é sinônimo de qualidade, tecnologia e compromisso com o
                cliente, atendendo retíficas, mecânicas, oficinas especializadas,
                restauradores e indústrias com máquinas de última geração e suporte
                técnico especializado.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Missão */}
              <Card className="bg-white border-l-4 border-l-primary rounded-xl shadow-md hover:shadow-lg hover:translate-y-1 transition-all">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Missão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tornar-se a principal referência em jateamento úmido na América Latina,
                    sendo reconhecida pela excelência em tecnologia, compromisso ambiental
                    e desenvolvimento de equipamentos sob medida, sempre com foco na evolução
                    contínua do setor.
                  </p>
                </CardContent>
              </Card>

              {/* Visão */}
              <Card className="bg-white border-l-4 border-l-primary rounded-xl shadow-md hover:shadow-lg hover:translate-y-1 transition-all">
                <CardContent className="p-6 text-center">
                  <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Visão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Transformar o mercado de limpeza e acabamento de peças, tornando o
                    jateamento úmido a escolha nº1 de oficinas, retíficas e indústrias,
                    e consolidando a Aquablast como sinônimo de inovação, qualidade e confiança.
                  </p>
                </CardContent>
              </Card>

              {/* Valores (ocupa toda a linha) */}
              <Card className="bg-white border-l-4 border-l-primary rounded-xl shadow-md hover:shadow-lg hover:translate-y-1 transition-all md:col-span-2">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-6">Valores</h3>

                  <ul className="text-muted-foreground text-left max-w-3xl mx-auto space-y-2">
                    <li>
                      <span className="font-semibold text-primary">Inovação e Relacionamento:</span>{" "}
                      Evoluímos continuamente nossos equipamentos e processos, sempre próximos dos clientes.
                    </li>
                    <li>
                      <span className="font-semibold text-primary">Sustentabilidade:</span>{" "}
                      Priorizamos tecnologias que respeitam o meio ambiente e reduzem impactos.
                    </li>
                    <li>
                      <span className="font-semibold text-primary">Excelência:</span>{" "}
                      Atuamos com conhecimento, precisão e melhoria constante.
                    </li>
                    <li>
                      <span className="font-semibold text-primary">Respeito ao Cliente:</span>{" "}
                      Ética, transparência e atenção exclusiva em cada venda.
                    </li>
                    <li>
                      <span className="font-semibold text-primary">Responsabilidade:</span>{" "}
                      Cumprimos prazos, garantimos resultados e segurança em cada projeto.
                    </li>
                    <li>
                      <span className="font-semibold text-primary">Paixão:</span>{" "}
                      Trabalhamos com propósito e acreditamos na transformação do setor.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>


      {/* Wet Blasting Highlight */}
      <section id="oque" className="p-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 items-center slide-up">

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                O que é <span className="text-[hsl(8,89%,56%)]">Jateamento Úmido?</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl">
                O jateamento com água, também conhecido como Wet Blasting® ou jateamento a vapor,
                é um processo inovador que:
              </p>

              {/* Grid 2x2 dos itens */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                    01
                  </span>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Por estar envolto em água, o abrasivo tem menor impacto na superfície,
                    proporcionando um acabamento suave.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                    02
                  </span>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Garante acabamento preciso, reduzindo riscos e distorções, pois utiliza
                    micro esferas de vidro e outros abrasivos de várias granulometrias.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                    03
                  </span>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    É menos agressivo que o jateamento a seco.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                    04
                  </span>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Ideal para peças delicadas, restauração automotiva, motores e outros componentes metálicos.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="presenca"><NationalPresence /></section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-gradient-to-b from-primary/5 via-blue-50 to-background">

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Depoimentos de <span className="text-red-600">Clientes</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja o que nossos clientes falam sobre nossos equipamentos
            </p>
          </div>

          {/* Grid centralizada */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 justify-items-center">
            {/* Avaliação 1 */}
            <Card className="tech-hover max-w-md w-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">{"★".repeat(5)}</div>
                </div>
                <p className="text-muted-foreground mb-4 italic">"Muito bom"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                    L
                  </div>
                  <div>
                    <p className="font-semibold">Luis Henrique</p>
                    <p className="text-sm text-muted-foreground">1 semana atrás</p>
                  </div>
                </div>
              </CardContent>
            </Card>



            {/* Avaliação 2 */}
            <Card className="tech-hover max-w-md w-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">{"★".repeat(5)}</div>
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Uma empresa familiar que serve com toda matéria possível. Eu super recomendo"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                    M
                  </div>
                  <div>
                    <p className="font-semibold">Mychely Pergentino</p>
                    <p className="text-sm text-muted-foreground">4 meses atrás</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>





      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolucione Sua Retífica Hoje
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e descubra como nosso equipamento pode transformar
              a produtividade e qualidade da sua retífica
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* 🔵 Botão Azul */}
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-[#1B285E] hover:bg-[#141D46] text-white"
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

              {/* 🔴 Botão Vermelho */}
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700 text-white"
              >
                <a href="/contato" className="flex items-center space-x-3">
                  <span>Solicitar Orçamento</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;