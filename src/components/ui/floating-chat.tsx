import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, X, Phone, Clock, Users } from 'lucide-react';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Base do link do WhatsApp
  const baseUrl = "https://wa.me/5521991239221?text=";

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            size="lg"
            className="rounded-full w-16 h-16 bg-[#1B285E] hover:bg-[#141D46] text-white 
                       shadow-[0_0_15px_rgba(255,255,255,0.6)] transition-all duration-300"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle className="h-8 w-8" />
          </Button>
        )}
        
        {/* Chat Card */}
        {isOpen && (
          <Card className="w-80 shadow-2xl tech-glow animate-scale-in">
            <CardHeader className="bg-[#1B285E] text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AQUABLAST®</CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm opacity-90">Online agora</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3">
                <Badge variant="outline" className="w-full justify-center py-2">
                  <Clock className="h-4 w-4 mr-2" />
                  Resposta em até 5 minutos
                </Badge>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm mb-3">
                    👋 Olá! Como podemos ajudar com sua necessidade de jateamento úmido?
                  </p>
                  <div className="space-y-2">
                    <a
                      href={`${baseUrl}Olá! Gostaria de solicitar um orçamento`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left text-sm p-2 hover:bg-primary/10 rounded transition-colors"
                    >
                      💰 Solicitar orçamento
                    </a>
                    <a
                      href={`${baseUrl}Olá! Preciso de suporte técnico`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left text-sm p-2 hover:bg-primary/10 rounded transition-colors"
                    >
                      🔧 Suporte técnico
                    </a>
                    <a
                      href={`${baseUrl}Olá! Gostaria de informações sobre os equipamentos`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left text-sm p-2 hover:bg-primary/10 rounded transition-colors"
                    >
                      📋 Informações sobre equipamentos
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {/* WhatsApp Button Azul Escuro */}
                <Button 
                  className="w-full bg-[#1B285E] hover:bg-[#141D46] text-white" 
                  size="lg" 
                  asChild
                >
                  <a
                    href={`${baseUrl}Olá! Gostaria de saber mais sobre os equipamentos de jateamento úmido da AQUABLAST®`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>WhatsApp: (21) 99123-9221</span>
                  </a>
                </Button>
                
                {/* Telefone em Vermelho */}
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  size="lg"
                  asChild
                >
                  <a
                    href="tel:+5521970355775"
                    className="flex items-center space-x-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Ligar: (21) 97035-5775</span>
                  </a>
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3" />
                  <span>+500 clientes</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>Desde 2020</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default FloatingChat;
