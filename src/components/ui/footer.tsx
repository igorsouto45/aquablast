import { Instagram, Star, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-industrial text-industrial-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              AQUABLAST<sup>®</sup>
            </div>
            <p className="text-sm opacity-90">
              Transformando a indústria com tecnologia de jateamento úmido inovadora e sustentável.
            </p>
            <div className="text-sm opacity-80">
              <p>CNPJ: 49.439.397/0001-01</p>
              <p>Bonsucesso, Av. Itaoca – 01089</p>
              <p>Loja A – CEP 21.061-021</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/sobre" className="opacity-80 hover:opacity-100 transition-opacity">Sobre a Empresa</a></li>
              <li><a href="/jateamento-umido" className="opacity-80 hover:opacity-100 transition-opacity">Jateamento Úmido</a></li>
              <li><a href="/servicos" className="opacity-80 hover:opacity-100 transition-opacity">Serviços</a></li>
              <li><a href="/casos-sucesso" className="opacity-80 hover:opacity-100 transition-opacity">Casos de Sucesso</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="tel:+5521991239221" className="text-sm">
                  (21) 99123-9221
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="tel:+5521970355775" className="text-sm">
                  (21) 97035-5775
                </a>
              </Button>
              <Button size="sm" className="w-full whatsapp" asChild>
                <a
                  href="https://wa.me/5521991239221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Social & Reviews */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Redes Sociais</h3>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a
                  href="https://www.instagram.com/aquablastbrasil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <Instagram className="h-4 w-4" />
                  <span>@aquablastbrasil</span>
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a
                  href="https://g.page/r/CSgu4f9zedvOEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <Star className="h-4 w-4" />
                  <span>Avaliar no Google</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm opacity-80">
            © 2025 Aquablast® Brasil. Todos os direitos reservados.
          </p>
          <p className="text-sm opacity-60">
            Desenvolvido por Agência Sempre Visto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;