import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';

const Index = () => {
  return (
    <>
      <Header />
      <AnnouncementBar />
      <div className="section" style={{ minHeight: 'calc(100vh - 114px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container text-center">
          <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Institut de Beauté - Configuration OK</h1>
          <p style={{ color: 'var(--color-secondary)', fontSize: 'var(--text-lg)' }}>
            La configuration est prête. Les sections seront ajoutées une par une.
          </p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)', marginTop: 'var(--spacing-lg)' }}>
            ✅ Fichier client-config.ts créé<br />
            ✅ Thème CSS chargé (Bitter + Raleway)<br />
            ✅ Header avec navigation<br />
            ✅ Menu mobile responsive<br />
            ✅ Bandeau d'annonce
          </p>
        </div>
      </div>
    </>
  );
};

export default Index;
