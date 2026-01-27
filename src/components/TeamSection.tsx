import { clientConfig } from '@/config/client-config';

const TeamSection = () => {
  const { team } = clientConfig;

  return (
    <section className="team-section" id="equipe">
      <style>{`
        .team-section {
          background-color: #F8F8F8;
          padding: 80px 32px;
        }

        .team-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .team-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .team-title {
          font-family: 'Bitter', serif;
          font-size: 42px;
          font-weight: 600;
          color: #1A1A1A;
          margin: 0 0 16px 0;
        }

        .team-subtitle {
          font-family: 'Raleway', sans-serif;
          font-size: 18px;
          font-weight: 400;
          color: #6B6B6B;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Desktop Grid */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          padding: 8px;
          margin: -8px;
        }

        .team-card {
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 12px;
          padding: 16px;
          background: transparent;
        }

        .team-card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          background: #FFFFFF;
        }

        .team-photo-container {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .team-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .team-card:hover .team-photo {
          transform: scale(1.05) rotate(2deg);
        }

        .team-photo-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #E8D4C4 0%, #D4B8A0 100%);
          color: #8B7355;
          font-family: 'Bitter', serif;
          font-size: 48px;
          font-weight: 600;
        }

        .team-name {
          font-family: 'Raleway', sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #1A1A1A;
          margin: 0 0 4px 0;
        }

        .team-role {
          font-family: 'Raleway', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #6B6B6B;
          margin: 0 0 4px 0;
        }

        .team-specialty {
          font-family: 'Raleway', sans-serif;
          font-size: 13px;
          font-weight: 400;
          font-style: italic;
          color: var(--color-accent, #C9A86C);
          margin: 0;
        }

        .team-years {
          display: none;
        }

        /* Mobile Layout */
        .team-mobile {
          display: none;
        }

        @media (max-width: 1023px) {
          .team-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 767px) {
          .team-section {
            padding: 60px 24px;
          }

          .team-title {
            font-size: 32px;
          }

          .team-subtitle {
            font-size: 16px;
          }

          .team-header {
            margin-bottom: 40px;
          }

          .team-grid {
            display: none;
          }

          .team-mobile {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }

          .team-member-row {
            display: flex;
            align-items: center;
            gap: 16px;
          }

          .team-member-row.reversed {
            flex-direction: row-reverse;
          }

          .team-member-row.reversed .team-member-info {
            text-align: right;
          }

          .team-photo-mobile {
            width: 100px;
            height: 100px;
            border-radius: 8px;
            overflow: hidden;
            flex-shrink: 0;
          }

          .team-photo-mobile img,
          .team-photo-mobile .team-photo-fallback {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .team-photo-mobile .team-photo-fallback {
            font-size: 32px;
          }

          .team-member-info {
            flex: 1;
          }

          .team-name-mobile {
            font-family: 'Raleway', sans-serif;
            font-size: 18px;
            font-weight: 600;
            color: #1A1A1A;
            margin: 0 0 4px 0;
          }

          .team-role-mobile {
            font-family: 'Raleway', sans-serif;
            font-size: 14px;
            font-weight: 400;
            color: #6B6B6B;
            margin: 0 0 4px 0;
          }

          .team-years-mobile {
            font-family: 'Raleway', sans-serif;
            font-size: 13px;
            font-weight: 400;
            font-style: italic;
            color: var(--color-accent, #C9A86C);
            margin: 0;
          }
        }
      `}</style>

      <div className="team-container">
        <header className="team-header">
          <h2 className="team-title">{team.sectionTitle}</h2>
          <p className="team-subtitle">{team.sectionSubtitle}</p>
        </header>

        {/* Desktop Grid */}
        <div className="team-grid">
          {team.members.map((member, index) => (
            <article key={index} className="team-card">
              <div className="team-photo-container">
                <img
                  src={member.photo}
                  alt={`${member.name} - ${member.role}`}
                  className="team-photo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="team-photo-fallback" style={{ display: 'none' }}>
                  {member.name.charAt(0)}
                </div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              {member.specialty && (
                <p className="team-specialty">{member.specialty}</p>
              )}
            </article>
          ))}
        </div>

        {/* Mobile Alternating Layout */}
        <div className="team-mobile">
          {team.members.map((member, index) => (
            <article
              key={index}
              className={`team-member-row ${index % 2 === 1 ? 'reversed' : ''}`}
            >
              <div className="team-photo-mobile">
                <img
                  src={member.photo}
                  alt={`${member.name} - ${member.role}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="team-photo-fallback" style={{ display: 'none' }}>
                  {member.name.charAt(0)}
                </div>
              </div>
              <div className="team-member-info">
                <h3 className="team-name-mobile">{member.name}</h3>
                <p className="team-role-mobile">{member.role}</p>
                <p className="team-years-mobile">
                  Professionnelle depuis {member.years} ans
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
