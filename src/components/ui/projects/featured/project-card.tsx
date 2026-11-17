import { Icon } from '@/components/atoms/icon';
import { Img } from '@/components/atoms/img';
import { TiltCard } from '@/components/motion/tilt-card';
import type { Project } from '@/content';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';
import { getUrlDomain } from '@/utils/domain';

import { CardIcon, CardLink, HostChip, VisitBadge } from './featured.styles';

const arrowPath = 'M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z';

const hostLabels: Record<string, string> = {
  'github.com': 'GitHub',
  't.me': 'Telegram',
};

const getHostLabel = (url: string) => {
  const domain = getUrlDomain(url, true) || '';
  return hostLabels[domain] || domain;
};

interface ProjectCardProps {
  project: Project;
  highlighted?: boolean;
  compact?: boolean;
}

export const ProjectCard = ({
  project,
  highlighted,
  compact,
}: ProjectCardProps) => {
  const color =
    hexToRgb(project.darkColor || project.color, 1, true) ||
    'var(--color-accent-dark)';
  const iconSrc = `/media/projects/${project.icon || ''}`;
  return (
    <TiltCard
      tint={color}
      className={'h-full'}
      glowClassName={'inset-0 z-1 rounded-5'}
    >
      <CardLink
        title={project.name}
        href={project.url}
        className={cx(
          compact && 'gap-3 p-3 tablet-sm:p-4',
          highlighted && 'tablet-sm:flex-row tablet-sm:gap-5',
        )}
        data-umami-event={'View project'}
        data-umami-event-project={project.name}
      >
        {highlighted ? (
          <Img
            src={iconSrc}
            alt={''}
            aria-hidden={'true'}
            width={192}
            height={192}
            className={cx(
              'absolute -z-1 -right-12 -bottom-16 size-48 opacity-20',
              'blur-2xl saturate-150 pointer-events-none select-none',
            )}
          />
        ) : null}

        <div className={'flex flex-row items-start justify-between gap-3'}>
          <CardIcon
            src={iconSrc}
            alt={`Icon for project "${project.name}"`}
            width={highlighted ? 80 : 48}
            height={highlighted ? 80 : 48}
            blurDataURL={project.iconMeta?.blurDataURL}
            placeholder={project.iconMeta?.placeholder}
            className={highlighted ? 'size-12 tablet-sm:size-20' : 'size-12'}
          />
          <VisitBadge
            className={highlighted ? 'tablet-sm:hidden' : ''}
            aria-hidden={'true'}
          >
            <Icon className={'size-4'} path={arrowPath} />
          </VisitBadge>
        </div>

        <div className={'flex flex-col flex-1 gap-1.5'}>
          {highlighted ? (
            <span
              className={cx(
                'inline-flex items-center gap-1.5 text-3xs font-semibold',
                'uppercase tracking-wider text-tertiary-txt',
              )}
            >
              <span
                className={'size-1.5 rounded-full bg-[rgb(var(--tint))]'}
                aria-hidden={'true'}
              />
              Featured
            </span>
          ) : null}
          <p
            className={cx(
              'font-bold tracking-tight text-primary-txt text-pretty',
              highlighted ? 'text-lg' : 'text-xs',
            )}
          >
            {project.name}
          </p>
          <p
            className={cx(
              'text-2xs text-secondary-txt text-pretty',
              highlighted ? 'line-clamp-3' : 'line-clamp-2',
            )}
          >
            {project.description}
          </p>
          <HostChip className={'mt-auto pt-1'}>
            {getHostLabel(project.url)}
          </HostChip>
        </div>

        {highlighted ? (
          <VisitBadge
            className={'hidden tablet-sm:grid self-start'}
            aria-hidden={'true'}
          >
            <Icon className={'size-4'} path={arrowPath} />
          </VisitBadge>
        ) : null}
      </CardLink>
    </TiltCard>
  );
};
