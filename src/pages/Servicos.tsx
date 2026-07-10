import { Card, CardContent } from '@/components/ui/card';
import { Wrench, Headphones, Book, Package, Handshake, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Servicos = () => {
  const servicos = [
    { icon: <Package className="h-8 w-8 text-white" />, text: "Venda e fabricação de máquinas de jateamento úmido", color: "bg-[#1B285E]" },
    { icon: <Headphones className="h-8 w-8 text-white" />, text: "Suporte técnico e consultoria para aplicação do método", color: "bg-red-600" },
    { icon: <Book className="h-8 w-8 text-white" />, text: "Treinamento e orientações para uso correto dos equipamentos", color: "bg-[#1B285E]" },
    { icon: <Wrench className="h-8 w-8 text-white" />, text: "Fornecimento de micro esferas de vidro e outros abrasivos", color: "bg-red-600" },
    { icon: <Handshake className="h-8 w-8 text-white" />, text: "Pós-venda com garantia, manutenção especializada e contato direto", color: "bg-[#1B285E]" },
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-b from-primary/10 to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            🛠️ Serviços Oferecidos
          </h2>

          {/* Grade com 3 colunas para os 3 primeiros */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {servicos.slice(0, 3).map((s, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="flex">
                <Card className="shadow-xl rounded-2xl bg-white flex-1 transition-all duration-300 hover:shadow-2xl">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${s.color} shadow-lg`}>
                      {s.icon}
                    </div>
                    <p className="text-lg font-medium text-gray-800 leading-relaxed">
                      {s.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Últimos 2 centralizados */}
          <div className="flex flex-col md:flex-row justify-center gap-10 mb-16">
            {servicos.slice(3).map((s, i) => (
              <motion.div key={i + 3} whileHover={{ scale: 1.05 }} className="flex max-w-md">
                <Card className="shadow-xl rounded-2xl bg-white flex-1 transition-all duration-300 hover:shadow-2xl">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${s.color} shadow-lg`}>
                      {s.icon}
                    </div>
                    <p className="text-lg font-medium text-gray-800 leading-relaxed">
                      {s.text}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Final */}
          <div className="text-center mt-40">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              🚀 Pronto para transformar seu processo?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato agora mesmo e descubra como a <strong>Aquablast®</strong> pode revolucionar sua operação.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-[#1B285E] hover:bg-[#141D46] text-white"
                asChild
              >
                <a href="https://wa.me/5521991239221" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6" />
                  <span>Fale no WhatsApp</span>
                </a>
              </Button>

              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700 text-white"
                asChild
              >
                <a href="/contato">Solicitar Orçamento</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
