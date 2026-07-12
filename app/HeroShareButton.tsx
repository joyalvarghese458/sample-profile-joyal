"use client";

type HeroShareButtonProps = {
  title: string;
  text: string;
  url: string;
};

const shareIcon = (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <circle cx="18" cy="5" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="6" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="18" cy="19" r="2.6" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="m8.4 10.8 7.2-4.5M8.4 13.2l7.2 4.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export default function HeroShareButton({ title, text, url }: HeroShareButtonProps) {
  async function shareProfile() {
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
        return;
      }

      await navigator.clipboard?.writeText(url);
    } catch {
      // User cancelled the system share sheet.
    }
  }

  return (
    <div className="absolute bottom-2 right-0 z-30">
      <button
        aria-label="Share profile"
        className="grid h-11 w-11 place-items-center rounded-full border-4 border-[#101316] bg-white text-[#151515] shadow-[0_12px_26px_rgba(0,0,0,0.38)]"
        onClick={shareProfile}
        type="button"
      >
        {shareIcon}
      </button>
    </div>
  );
}
