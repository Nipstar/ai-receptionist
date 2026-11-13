export function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2446F5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`mt-[3px] flex-none ${className}`}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
