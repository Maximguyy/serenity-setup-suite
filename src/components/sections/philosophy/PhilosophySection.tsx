import { Leaf, Sparkles, Heart } from 'lucide-react';
import { clientConfig } from '@/config/client-config';
import { SectionWrapper, SectionTitle } from '@/components/core';

const values = [
  {
    icon: Leaf,
    title: 'Naturel',
    description: 'Des produits sélectionnés avec soin pour respecter votre peau',
  },
  {
    icon: Sparkles,
    title: 'Excellence',
    description: 'Un savoir-faire reconnu et des techniques innovantes',
  },
  {
    icon: Heart,
    title: 'Bien-être',
    description: 'Votre détente et votre satisfaction sont notre priorité',
  },
];

const defaultAboutText =
  'Depuis plus de 10 ans, notre équipe passionnée vous accueille dans un cadre chaleureux et apaisant. Nous mettons tout notre savoir-faire à votre service pour vous offrir une expérience unique de beauté et de bien-être.';

const PhilosophySection = () => {
  const aboutText = (clientConfig as any).about?.text || defaultAboutText;

  return (
    <SectionWrapper id="philosophie" background="white">
      <SectionTitle title="Notre Philosophie" />

      {/* Values Grid */}
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <article key={index} className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                <Icon className="h-12 w-12 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="font-body text-base leading-relaxed text-secondary">
                {value.description}
              </p>
            </article>
          );
        })}
      </div>

      {/* About Text */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-body text-lg italic leading-relaxed text-secondary">
          "{aboutText}"
        </p>
      </div>
    </SectionWrapper>
  );
};

export default PhilosophySection;
