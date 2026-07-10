import { Lightbulb } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// Importa as imagens da pasta /src/assets
import img1 from "@/assets/1.jpg";
import img3 from "@/assets/3.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img8 from "@/assets/8.jpg";
import img9 from "@/assets/9.jpg";
import img12 from "@/assets/12.jpg";
import img15 from "@/assets/15.jpg";
import img16 from "@/assets/16.jpg";
import img20 from "@/assets/20.jpg";
import img24 from "@/assets/24.jpg";
import img28 from "@/assets/28.jpg";
import img32 from "@/assets/32.jpg";
import img33 from "@/assets/33.jpg";
import img34 from "@/assets/34.jpg";
import img36 from "@/assets/36.jpg";
import img43 from "@/assets/43.jpg";
import img48 from "@/assets/48.jpg";
import ab900 from "@/assets/ab900.png";

const IdeaSection = () => {
    const images = [
        ab900,
        img1,
        img3,
        img5,
        img6,
        img8,
        img9,
        img12,
        img15,
        img16,
        img20,
        img24,
        img28,
        img32,
        img33,
        img34,
        img36,
        img43,
        img48,
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-primary/5 via-blue-50 to-background">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Texto */}
                    <div className="space-y-6 slide-up">
                        <div className="flex items-center gap-3 mb-4">
                            <Lightbulb className="h-10 w-10 text-primary" />
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Como surgiu a <span className="gradient-text">ideia?</span>
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Durante uma consultoria técnica no exterior voltada à recuperação
                            automotiva de alto padrão, <strong>William Primo</strong>, fundador
                            da <strong>Aquablast® Brasil</strong>, teve seu primeiro contato com o
                            processo de jateamento úmido <strong>Wet Blasting®</strong>.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Impressionado com a eficiência, o acabamento preciso e o impacto
                            ambiental reduzido da tecnologia, percebeu o enorme potencial para o
                            mercado brasileiro, ainda carente de soluções sustentáveis e de alto
                            desempenho.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Motivado por essa descoberta, decidiu trazer a técnica ao Brasil,
                            adaptando os processos e desenvolvendo máquinas específicas para as
                            necessidades locais.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Assim nasceu a <strong>Aquablast®</strong>, com a missão de oferecer
                            soluções mais limpas, eficientes e tecnológicas, reposicionando o
                            jateamento como um serviço de qualidade e responsabilidade ambiental.
                        </p>

                    </div>

                    {/* Slider de Imagens */}
                    <div className="relative w-full rounded-2xl">
                        <Carousel className="w-full max-w-lg mx-auto ">
                            <CarouselContent>
                                {images.map((img, index) => (
                                    <CarouselItem key={index}>
                                        <div className="w-full h-[500px]">
                                            <img
                                                src={img}
                                                alt={`Slide ${index + 1}`}
                                                className=" shadow-lg object-contain w-full h-full"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IdeaSection;
