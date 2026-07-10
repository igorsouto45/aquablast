import { Card, CardContent } from '@/components/ui/card';
import Counter from '@/components/ui/counter';
import { Droplets, Clock, Shield, Target } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: <Droplets className="h-8 w-8" />,
      value: 95,
      suffix: '%',
      label: 'Menos Agressivo',
      description: 'Comparado ao jateamento tradicional',
      color: 'hsl(8 89% 56%)'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: 60,
      suffix: '%',
      label: 'Mais Eficiente',
      description: 'Redução no tempo de processo',
      color: 'hsl(8 89% 56%)'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      value: 100,
      suffix: '%',
      label: 'Sustentável',
      description: 'Processo ambientalmente responsável',
      color: 'hsl(8 89% 56%)'
    },
    {
      icon: <Target className="h-8 w-8" />,
      value: 99,
      suffix: '%',
      label: 'Precisão',
      description: 'Acabamento uniforme e controlado',
      color: 'hsl(8 89% 56%)'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Performance <span className="gradient-text">Comprovada</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dados que comprovam a superioridade da tecnologia AQUABLAST® em jateamento úmido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="tech-hover border-t-4 border-t-primary/30 hover:border-t-primary">
              <CardContent className="p-8 text-center">
                <div className={`mx-auto mb-4 ${stat.color === 'hsl(8 89% 56%)'}`}
                  style={stat.color === 'hsl(8 89% 56%)' ? { color: stat.color } : {}}>
                  {stat.icon}
                </div>
                <div
                  className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r gradient-text bg-clip-text text-transparent"
                >
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;