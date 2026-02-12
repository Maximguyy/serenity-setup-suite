import Header from '@/components/layout/Header';
import { Footer } from '@/components/layout';
import { SectionWrapper } from '@/components/core';

const ConfidentialitePage = () => {
  return (
    <>
      <Header forceScrolledStyle />
      <main className="pt-[70px]">
        <SectionWrapper id="confidentialite" background="white" className="py-12 md:py-16">
          <h1 className="mb-8 font-heading text-3xl font-semibold text-foreground md:text-4xl">
            Politique de confidentialité
          </h1>

          <div className="prose prose-lg max-w-none font-body text-secondary">
            <p>
              <strong>Dernière mise à jour :</strong> Février 2026
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">1. Introduction</h2>
            <p>
              Skin Studio Paris La Défense Arena, situé au 47 Bd des Bouvets, 92000 Nanterre, s'engage à protéger la vie privée de ses clients et visiteurs. La présente politique de confidentialité décrit les types de données personnelles collectées, les finalités de leur traitement et les droits dont vous disposez.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">2. Données collectées</h2>
            <p>Nous pouvons collecter les données suivantes :</p>
            <ul>
              <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
              <li><strong>Données de réservation :</strong> date, heure, type de soin choisi, préférences</li>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages consultées, durée de visite</li>
              <li><strong>Données de paiement :</strong> traitées de manière sécurisée par nos prestataires de paiement (nous ne stockons pas vos coordonnées bancaires)</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-foreground">3. Finalités du traitement</h2>
            <p>Vos données personnelles sont collectées pour :</p>
            <ul>
              <li>La gestion des réservations et rendez-vous</li>
              <li>La communication relative à vos soins (confirmations, rappels)</li>
              <li>L'envoi d'offres promotionnelles et d'actualités (avec votre consentement)</li>
              <li>L'amélioration de nos services et de votre expérience utilisateur</li>
              <li>Le respect de nos obligations légales et réglementaires</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-foreground">4. Base légale du traitement</h2>
            <p>Le traitement de vos données repose sur :</p>
            <ul>
              <li><strong>L'exécution d'un contrat :</strong> gestion de vos réservations et prestations</li>
              <li><strong>Le consentement :</strong> envoi de communications marketing</li>
              <li><strong>L'intérêt légitime :</strong> amélioration de nos services</li>
              <li><strong>L'obligation légale :</strong> conservation des factures et documents comptables</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-foreground">5. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, et au maximum :
            </p>
            <ul>
              <li><strong>Données clients :</strong> 3 ans après le dernier contact</li>
              <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
              <li><strong>Cookies de navigation :</strong> 13 mois maximum</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-foreground">6. Partage des données</h2>
            <p>
              Vos données ne sont jamais vendues à des tiers. Elles peuvent être partagées avec :
            </p>
            <ul>
              <li>Nos prestataires de services (plateforme de réservation, paiement en ligne)</li>
              <li>Les autorités compétentes en cas d'obligation légale</li>
            </ul>

            <h2 className="font-heading text-xl font-semibold text-foreground">7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
              <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit de retirer votre consentement :</strong> à tout moment pour les communications marketing</li>
            </ul>
            <p>
              Pour exercer vos droits, contactez-nous à : <strong>contact@skins-and-lights.fr</strong> ou au <strong>06 44 77 27 53</strong>.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">8. Cookies</h2>
            <p>
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil. Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne plus être disponibles.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">9. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground">10. Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité :<br />
              <strong>Skin Studio Paris La Défense Arena</strong><br />
              47 Bd des Bouvets, 92000 Nanterre<br />
              Email : contact@skins-and-lights.fr<br />
              Téléphone : 06 44 77 27 53
            </p>
            <p>
              Vous pouvez également adresser une réclamation à la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.cnil.fr</a>.
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
};

export default ConfidentialitePage;
