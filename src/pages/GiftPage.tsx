import { useState } from 'react';
import { Gift, Heart, Sparkles, Mail, Check } from 'lucide-react';
import { Header, Footer, MobileStickyBadge, StickyBookingButton } from '@/components/layout';
import { SectionWrapper, SectionTitle } from '@/components/core';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const amounts = [25, 50, 75, 100, 150, 200];

const valentineFeatures = [
  {
    icon: Gift,
    title: 'Cadeau parfait',
    description: 'Un moment de détente à offrir',
  },
  {
    icon: Heart,
    title: 'Saint-Valentin',
    description: 'Le meilleur cadeau pour votre moitié',
  },
  {
    icon: Sparkles,
    title: 'Expérience unique',
    description: 'Un souvenir inoubliable',
  },
];

const GiftPage = () => {
  const [email, setEmail] = useState('');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const finalAmount = selectedAmount || (customAmount ? parseInt(customAmount) : null);

  const handleCheckout = () => {
    if (!email || !finalAmount) return;
    // TODO: Implement checkout logic
    console.log('Checkout:', { email, amount: finalAmount });
  };

  return (
    <>
      <Header forceScrolledStyle />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-accent/10 via-background to-accent/5 pb-8 pt-28 md:pb-12 md:pt-32">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <Gift className="h-4 w-4" />
            Carte Cadeau
          </div>
          <h1 className="mb-4 font-heading text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Offrez un moment de bien-être
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg text-secondary">
            Faites plaisir à vos proches avec une carte cadeau utilisable sur tous nos soins
          </p>
        </div>
      </div>

      {/* Valentine's Section */}
      <div className="bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div className="mb-6 text-center">
            <span className="inline-flex items-center gap-2 font-heading text-lg font-semibold text-accent md:text-xl">
              <Heart className="h-5 w-5 fill-accent" />
              Meilleur cadeau de Saint-Valentin
              <Heart className="h-5 w-5 fill-accent" />
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {valentineFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-xl bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm"
                >
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-1 font-heading text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-secondary">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gift Card Form */}
      <SectionWrapper id="offrir-form" background="white" className="py-12 md:py-16">
        <div className="mx-auto max-w-xl">
          <SectionTitle 
            title="Créez votre carte cadeau" 
            subtitle="Choisissez le montant et recevez votre carte par email"
          />

          {/* Email Input */}
          <div className="mb-8">
            <label className="mb-2 block font-body text-sm font-medium text-foreground">
              Email du destinataire
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-secondary" />
              <Input
                type="email"
                placeholder="email@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-11"
              />
            </div>
          </div>

          {/* Amount Selection */}
          <div className="mb-8">
            <label className="mb-3 block font-body text-sm font-medium text-foreground">
              Choisissez un montant
            </label>
            <div className="grid grid-cols-3 gap-3">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className={cn(
                    'flex items-center justify-center rounded-lg border-2 px-4 py-4 font-heading text-lg font-semibold transition-all',
                    selectedAmount === amount
                      ? 'border-accent bg-accent/10 text-accent'
                      : 'border-border-light bg-white text-foreground hover:border-accent/50'
                  )}
                >
                  {amount}€
                </button>
              ))}
            </div>
            
            {/* Custom Amount */}
            <div className="mt-4">
              <label className="mb-2 block font-body text-sm text-secondary">
                Ou entrez un montant personnalisé
              </label>
              <div className="relative">
                <Input
                  type="number"
                  placeholder="Montant"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  min={10}
                  className="pr-8"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 font-body text-secondary">
                  €
                </span>
              </div>
            </div>
          </div>

          {/* Summary & Checkout */}
          {finalAmount && (
            <div className="mb-6 rounded-xl bg-muted p-4">
              <div className="flex items-center justify-between">
                <span className="font-body text-secondary">Total</span>
                <span className="font-heading text-2xl font-semibold text-foreground">
                  {finalAmount}€
                </span>
              </div>
            </div>
          )}

          <Button
            onClick={handleCheckout}
            disabled={!email || !finalAmount}
            className="w-full rounded-lg bg-accent py-6 font-body text-base font-semibold text-accent-foreground transition-all hover:bg-accent-hover disabled:opacity-50"
          >
            <Check className="mr-2 h-5 w-5" />
            Procéder au paiement
          </Button>

          <p className="mt-4 text-center font-body text-xs text-secondary">
            Paiement sécurisé • Carte envoyée instantanément par email
          </p>
        </div>
      </SectionWrapper>

      <Footer />
      <MobileStickyBadge />
      <StickyBookingButton />
    </>
  );
};

export default GiftPage;
