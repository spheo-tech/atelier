type IconProps = { className?: string };

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M4.5 11.5 11.5 4.5M6 4.5h5.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeft({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M13 8H3M7 4 3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Check({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Plus({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Sparkle({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
      <path d="M8 0c.5 4.2 3.8 7.5 8 8-4.2.5-7.5 3.8-8 8-.5-4.2-3.8-7.5-8-8 4.2-.5 7.5-3.8 8-8Z" fill="currentColor" />
    </svg>
  );
}
