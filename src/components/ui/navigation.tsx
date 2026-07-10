import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink, scroller } from "react-scroll"; // 🔑
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { href: "hero", label: "Home", scroll: true },
    { href: "sobre", label: "Sobre Nós", scroll: true },
    { href: "oque", label: "O que é Jateamento Úmido?", scroll: true },
    { href: "presenca", label: "Presença Nacional", scroll: true },
    { href: "/contato", label: "Contato", scroll: false },
  ];

  const isActive = (href: string) => location.pathname === href;

  // 🔑 função para navegar para Home e depois rolar
  const handleNavigateAndScroll = (section: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          duration: 600,
          offset: -70,
        });
      }, 300);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <img
              src={logo}
              alt="AQUABLAST® Logo"
              className="h-6 w-auto max-h-7 object-contain md:h-7 md:max-h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.scroll ? (
                location.pathname === "/" ? (
                  <ScrollLink
                    key={item.href}
                    to={item.href}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    className="cursor-pointer text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                    activeClass="text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavigateAndScroll(item.href)}
                    className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                  >
                    {item.label}
                  </button>
                )
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+5521991239221" className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(21) 99123-9221</span>
              </a>
            </Button>
            <Button size="sm" className="whatsapp" asChild>
              <a
                href="https://wa.me/5521991239221"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-4 border-t">
            {navItems.map((item) =>
              item.scroll ? (
                location.pathname === "/" ? (
                  <ScrollLink
                    key={item.href}
                    to={item.href}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    className="block py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                    activeClass="text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </ScrollLink>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => {
                      handleNavigateAndScroll(item.href);
                      setIsOpen(false);
                    }}
                    className="block py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                  >
                    {item.label}
                  </button>
                )
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block py-2 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
