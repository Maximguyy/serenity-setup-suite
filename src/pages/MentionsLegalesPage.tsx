import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout';
import { SectionWrapper } from '@/components/core';

const MentionsLegalesPage = () => {
  return (
    <>
      <Header forceScrolledStyle />
      <main className="pt-[70px]">
        <SectionWrapper id="mentions-legales" background="white" className="py-12 md:py-16">
          <h1 className="mb-8 font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Mentions légales
          </h1>

          <div className="prose prose-lg max-w-none font-body text-secondary">
            <h2 className="font-heading text-xl font-semibold text-foreground">1. Éditeur du site</h2>
            <p>
              Le site <strong>skinstudio-paris.lovable.app</strong> est édité par :<br />
              <strong>Skin Studio Paris La Défense Arena</strong><br />
              Forme juridique : Micro-entreprise / SAS (à préciser)<br />
              Siège social : 47 Bd des Bouvets, 92000 Nanterre, France<br />
              Téléphone : 06 44 77 27 53<br />
              Email : contact@skins-and-lights.fr<br />
              Numéro SIRET : (à compléter)<br />
              Numéro de TVA intracommunautaire : (à compléter)
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">2. Directeur de la publication</h2>
            <p>
              Le directeur de la publication est le représentant légal de Skin Studio Paris La Défense Arena (nom à compléter).
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">3. Hébergement</h2>
            <p>
              Le site est hébergé par :<br />
              <strong>Lovable / Netlify</strong><br />
              Adresse : San Francisco, CA, États-Unis<br />
              Site web : lovable.dev
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu du site (textes, images, vidéos, logos, icônes, graphismes, etc.) est protégé par le droit d'auteur et le droit de la propriété intellectuelle. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site est interdite sans l'autorisation écrite préalable de Skin Studio Paris La Défense Arena.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">5. Limitation de responsabilité</h2>
            <p>
              Skin Studio Paris La Défense Arena s'efforce de fournir des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p>
              Les informations présentes sur ce site sont données à titre indicatif et sont susceptibles d'évoluer. En aucun cas, les informations diffusées sur le site ne sauraient constituer un engagement contractuel.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">6. Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers d'autres sites internet. Skin Studio Paris La Défense Arena ne dispose d'aucun contrôle sur le contenu de ces sites tiers et décline toute responsabilité quant à leur contenu.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de l'éditeur.
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
};

export default MentionsLegalesPage;
