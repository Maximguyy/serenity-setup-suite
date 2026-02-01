import { clientConfig } from '@/config/client-config';
import { SectionWrapper, SectionTitle } from '@/components/core';
import { cn } from '@/lib/utils';

const TeamSection = () => {
  const { team } = clientConfig;

  return (
    <SectionWrapper id="equipe" background="light">
      <SectionTitle title={team.sectionTitle} subtitle={team.sectionSubtitle} />

      {/* Desktop Grid */}
      <div className="hidden grid-cols-4 gap-8 md:grid lg:gap-8">
        {team.members.map((member, index) => (
          <article
            key={index}
            className="group rounded-xl bg-transparent p-4 text-center transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-lg"
          >
            <div className="relative mb-4 aspect-square overflow-hidden rounded-xl">
              <img
                src={member.photo}
                alt={`${member.name} - ${member.role}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div
                className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 to-accent/50 font-heading text-5xl font-semibold text-accent-hover"
                style={{ display: 'none' }}
              >
                {member.name.charAt(0)}
              </div>
            </div>
            <h3 className="mb-1 font-body text-xl font-semibold text-foreground">{member.name}</h3>
            <p className="mb-1 font-body text-sm text-secondary">{member.role}</p>
            {member.specialty && (
              <p className="font-body text-[13px] italic text-accent">{member.specialty}</p>
            )}
          </article>
        ))}
      </div>

      {/* Mobile Alternating Layout */}
      <div className="flex flex-col gap-8 md:hidden">
        {team.members.map((member, index) => (
          <article
            key={index}
            className={cn(
              'flex items-center gap-4',
              index % 2 === 1 && 'flex-row-reverse'
            )}
          >
            <div className="h-[100px] w-[100px] shrink-0 overflow-hidden rounded-lg">
              <img
                src={member.photo}
                alt={`${member.name} - ${member.role}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div
                className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 to-accent/50 font-heading text-3xl font-semibold text-accent-hover"
                style={{ display: 'none' }}
              >
                {member.name.charAt(0)}
              </div>
            </div>
            <div className={cn('flex-1', index % 2 === 1 && 'text-right')}>
              <h3 className="mb-1 font-body text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="mb-1 font-body text-sm text-secondary">{member.role}</p>
              <p className="font-body text-[13px] italic text-accent">
                Professionnelle depuis {member.years} ans
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TeamSection;
