import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout';
import { SectionWrapper } from '@/components/core';

const CGVPage = () => {
  return (
    <>
      <Header forceScrolledStyle />
      <main className="pt-[70px]">
        <SectionWrapper id="cgv" background="white" className="py-12 md:py-16">
          <h1 className="mb-8 font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Conditions Générales de Vente
          </h1>

          <div className="prose prose-lg max-w-none font-body text-secondary">
            <p>
              <strong>Dernière mise à jour :</strong> Février 2026
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">1. Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Skin Studio Paris La Défense Arena, situé au 47 Bd des Bouvets, 92000 Nanterre, et toute personne effectuant une réservation ou un achat de prestation de soins esthétiques (ci-après « le Client »).
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">2. Prestations proposées</h2>
            <p>
              Skin Studio Paris La Défense Arena propose des soins esthétiques du visage, incluant notamment :
            </p>
            <ul>
              <li>HYDRASKIN EXPERT – Soin visage technologique (60 min)</li>
              <li>NANONEEDLING – Soin visage ciblé (60 min)</li>
              <li>DUO SIGNATURE – Protocole complet (90 min)</li>
              <li>SOIN EXPRESS – Soin visage rapide (25 min)</li>
              <li>Luminothérapie – Offerte à chaque séance (30 min)</li>
            </ul>
            <p>
              Les tarifs sont indiqués en euros TTC et sont susceptibles d'être modifiés à tout moment. Le tarif applicable est celui en vigueur au moment de la réservation.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">3. Réservation</h2>
            <p>
              Les réservations peuvent être effectuées :
            </p>
            <ul>
              <li>En ligne via notre plateforme de réservation</li>
              <li>Par téléphone au 06 44 77 27 53</li>
              <li>Directement à l'institut</li>
            </ul>
            <p>
              Toute réservation est considérée comme ferme et définitive. Un email ou SMS de confirmation est envoyé au Client.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">4. Annulation et modification</h2>
            <p>
              <strong>Par le Client :</strong>
            </p>
            <ul>
              <li>Toute annulation ou modification doit être effectuée au minimum <strong>24 heures</strong> avant le rendez-vous.</li>
              <li>En cas d'annulation tardive (moins de 24h) ou de non-présentation sans prévenir, Skin Studio Paris se réserve le droit de facturer <strong>50 % du montant</strong> de la prestation réservée.</li>
              <li>En cas de retard supérieur à 15 minutes, l'institut se réserve le droit d'annuler le rendez-vous ou de réduire la durée du soin.</li>
            </ul>
            <p>
              <strong>Par l'institut :</strong>
            </p>
            <ul>
              <li>En cas de force majeure ou d'indisponibilité, l'institut se réserve le droit d'annuler ou reporter un rendez-vous. Le Client sera prévenu dans les meilleurs délais et un nouveau créneau lui sera proposé.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-foreground">5. Tarifs et paiement</h2>
            <p>
              Le paiement s'effectue à l'institut, à l'issue de la prestation. Les moyens de paiement acceptés sont :
            </p>
            <ul>
              <li>Carte bancaire</li>
              <li>Espèces</li>
              <li>Carte cadeau Skin Studio Paris</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-foreground">6. Cartes cadeaux</h2>
            <ul>
              <li>Les cartes cadeaux sont valables <strong>12 mois</strong> à compter de la date d'achat.</li>
              <li>Elles sont utilisables sur l'ensemble des prestations proposées par l'institut.</li>
              <li>Elles ne sont ni remboursables, ni échangeables contre de l'argent.</li>
              <li>En cas de perte ou de vol, aucun duplicata ne sera délivré.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-foreground">7. Responsabilité</h2>
            <p>
              Skin Studio Paris La Défense Arena s'engage à réaliser les prestations avec le plus grand professionnalisme. Toutefois :
            </p>
            <ul>
              <li>Le Client doit signaler toute allergie, pathologie cutanée, traitement médical en cours ou grossesse avant le début du soin.</li>
              <li>L'institut ne pourra être tenu responsable en cas d'omission d'informations de la part du Client.</li>
              <li>Les résultats des soins peuvent varier en fonction du type de peau et de l'état cutané de chaque Client.</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-foreground">8. Hygiène et sécurité</h2>
            <p>
              L'institut respecte les normes d'hygiène en vigueur. Le matériel est désinfecté entre chaque client et les produits utilisés sont conformes à la réglementation européenne en matière de cosmétiques.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">9. Droit de rétractation</h2>
            <p>
              Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne s'applique pas aux prestations de services de soins esthétiques dès lors que la prestation a été exécutée.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">10. Réclamations</h2>
            <p>
              Toute réclamation doit être adressée par email à <strong>contact@skins-and-lights.fr</strong> ou par courrier à l'adresse de l'institut dans un délai de 7 jours suivant la prestation.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">11. Médiation</h2>
            <p>
              En cas de litige non résolu à l'amiable, le Client peut recourir gratuitement au service de médiation de la consommation. Le médiateur compétent peut être saisi via la plateforme européenne de règlement en ligne des litiges : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://ec.europa.eu/consumers/odr</a>.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">12. Droit applicable</h2>
            <p>
              Les présentes CGV sont soumises au droit français. Tout litige sera soumis à la compétence des tribunaux du ressort du siège social de Skin Studio Paris La Défense Arena.
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
};

export default CGVPage;
