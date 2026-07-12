import Image from "next/image";
import HeroShareButton from "./HeroShareButton";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const contact = {
  name: "Joyal Varghese",
  title: "Immigration Consultant",
  company: "Future Immigration Services",
  phone: "+971 56 845 0406",
  email: "joyalvarghese458@gmail.com",
  website: "https://joyal.myportfoliowebsite.com",
  location: "https://maps.app.goo.gl/6jvR99NwBE9KZ8D39",
};

const vcard = `BEGIN:VCARD
VERSION:3.0
N:Varghese;Joyal;;;
FN:${contact.name}
ORG:${contact.company}
TITLE:${contact.title}
TEL;TYPE=CELL:${contact.phone}
EMAIL:${contact.email}
URL:${contact.website}
ADR;TYPE=WORK:;;Future Immigration Services;Dubai;;;United Arab Emirates
END:VCARD`;

const encodedVcard = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;

const actions = [
  {
    label: "Whatsapp",
    href: "https://wa.me/971568450406",
    icon: "whatsapp",
    iconClass:
      "bg-[#25D366] text-white shadow-[0_12px_24px_rgba(37,211,102,0.28)]",
  },
  {
    label: "Call",
    href: "tel:+971568450406",
    icon: "phone",
    iconClass:
      "bg-[#12B7D8] text-white shadow-[0_12px_24px_rgba(18,183,216,0.28)]",
  },
  {
    label: "Mail",
    href: `mailto:${contact.email}`,
    icon: "mail",
    iconClass:
      "bg-[#2F80ED] text-white shadow-[0_12px_24px_rgba(47,128,237,0.26)]",
  },
  {
    label: "Website",
    href: contact.website,
    icon: "globe",
    iconClass:
      "bg-[#7C3AED] text-white shadow-[0_12px_24px_rgba(124,58,237,0.24)]",
  },
  {
    label: "Location",
    href: contact.location,
    icon: "pin",
    iconClass:
      "bg-[#EF4444] text-white shadow-[0_12px_24px_rgba(239,68,68,0.25)]",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
  },
];

function Icon({ name }: { name: string }) {
  const baseProps = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  if (name === "phone") {
    return (
      <svg {...baseProps}>
        <path
          d="M8.7 5.2 10 8.1c.2.5.1 1.1-.3 1.5l-1 1c1.1 2.1 2.7 3.7 4.8 4.8l1-1c.4-.4 1-.5 1.5-.3l2.9 1.3c.6.3.9.9.8 1.6l-.5 2.3c-.1.6-.7 1.1-1.4 1.1C10 20.4 3.6 14 3.6 6.2c0-.7.5-1.3 1.1-1.4L7 4.3c.7-.1 1.4.3 1.7.9Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...baseProps}>
        <path
          d="M4.8 6.5h14.4c.8 0 1.5.7 1.5 1.5v8c0 .8-.7 1.5-1.5 1.5H4.8c-.8 0-1.5-.7-1.5-1.5V8c0-.8.7-1.5 1.5-1.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="m4.2 7.4 7.8 5.4 7.8-5.4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "globe") {
    return (
      <svg {...baseProps}>
        <circle
          cx="12"
          cy="12"
          r="8.3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M3.8 12h16.4M12 3.7c2.1 2.2 3.1 5 3.1 8.3s-1 6.1-3.1 8.3c-2.1-2.2-3.1-5-3.1-8.3s1-6.1 3.1-8.3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "pin") {
    return (
      <svg {...baseProps}>
        <path
          d="M19 10.4c0 4.8-7 9.7-7 9.7s-7-4.9-7-9.7a7 7 0 1 1 14 0Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="10.4"
          r="2.3"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  return (
    <svg {...baseProps}>
      <path
        d="M18.4 13.2c-.3 1.7-1.8 4.8-5.7 4.9a8 8 0 0 1-6.8-3.5c-2.8-4.3.3-8.6 4.1-9.2 2.1-.3 3.7.3 4.9 1.3 1.1.9 1.7 2.2 1.8 3.6.1 1.2-.6 2.4-1.7 2.4-.7 0-1.1-.4-1.2-1.1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M13.8 9c-.6-.7-1.5-1-2.5-.7-1.6.4-2.4 2.2-1.6 3.6.7 1.2 2.2 1.6 3.3.9 1.1-.7 1.5-2.3.8-3.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f0ec] px-3 py-4 text-[#181516]">
      <article className="mx-auto min-h-[calc(100vh-2rem)] w-full max-w-[430px] overflow-hidden rounded-[30px] bg-white shadow-[0_24px_80px_rgba(44,31,27,0.18)]">
        <section className="phone-hero relative h-[410px] overflow-hidden bg-[#101316]">
          <div className="hero-spotlight" />
          <div className="hero-ambient hero-ambient-left" />
          <div className="hero-ambient hero-ambient-right" />
          <div className="hero-frame-line hero-frame-line-one" />
          <div className="hero-frame-line hero-frame-line-two" />

          <div className="relative z-20 flex items-center justify-end px-5 pt-5">
            <span className="hero-chip rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              UAE Based
            </span>
          </div>

          <div className="relative z-20 mt-9 flex flex-col items-center px-5 text-center text-white">
            <div className="hero-avatar-ring relative h-36 w-36 rounded-full">
              <div className="absolute inset-2 overflow-hidden rounded-full bg-[#11161a]">
                <Image
                  src="/joyal.jpeg"
                  alt="Portrait of Joyal Varghese"
                  fill
                  priority
                  sizes="144px"
                  className="object-cover object-top"
                />
              </div>
              <HeroShareButton
                text={`${contact.title} at ${contact.company}`}
                title={contact.name}
                url={contact.website}
              />
            </div>

            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.24em] text-white/62">
              Verified Consultant
            </p>
            <h1 className="mt-2 text-[32px] font-black leading-tight text-white">
              {contact.name}
            </h1>
            <p className="mt-1 text-lg font-medium text-white/78">
              {contact.title}
            </p>
            <p className="mt-3 text-sm font-extrabold text-white/72">
              {contact.company}
            </p>
          </div>
        </section>

        <section className="-mt-7 rounded-t-[34px] bg-white px-5 pb-7 pt-8 text-center shadow-[0_-18px_38px_rgba(0,0,0,0.1)]">
          <div>
            <p className="mx-auto mt-5 max-w-[330px] text-[16px] leading-7 text-[#6f6768]">
              Immigration, study abroad, business immigration and tourist visa
              guidance from a Dubai-based team with up-to-date industry insight.
            </p>
          </div>

          <a
            className="mx-auto mt-8 flex h-16 w-full max-w-[292px] items-center justify-center rounded-full bg-[#171313] px-8 text-lg font-extrabold text-white shadow-[0_16px_34px_rgba(23,19,19,0.28)] transition hover:bg-[#94181f]"
            download="joyal-varghese.vcf"
            href={encodedVcard}
          >
            Save Contact
          </a>

          <nav
            aria-label="Contact actions"
            className="mt-8 grid grid-cols-5 gap-3"
          >
            {actions.map((action) => (
              <a
                className="group flex min-w-0 flex-col items-center gap-2 text-[#7a2228]"
                href={action.href}
                key={action.label}
                rel="noopener noreferrer"
                target={action.href.startsWith("http") ? "_blank" : undefined}
              >
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl transition group-hover:-translate-y-0.5 ${action.iconClass}`}
                >
                  <Icon name={action.icon} />
                </span>
                <span className="w-full truncate text-[10px] font-bold text-[#4d4748]">
                  {action.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-9 rounded-3xl bg-[#f8f3f0] p-5 text-left">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#94181f]">
              About
            </p>
            <h2 className="mt-2 text-xl font-extrabold">{contact.company}</h2>
            <p className="mt-3 text-sm leading-6 text-[#6f6768]">
              Shape your future with a professional consultation experience for
              visa planning, documentation support and destination selection.
            </p>
            <a
              className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full border border-[#94181f] text-sm font-extrabold text-[#94181f]"
              href="https://calendly.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Book Meeting
            </a>
          </div>

          <section className="mt-8" aria-labelledby="follow-title">
            <h2 id="follow-title" className="text-base font-extrabold">
              Follow Us
            </h2>
            <div className="mt-5 grid grid-cols-3 gap-4">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <a
                    className="group flex flex-col items-center gap-2"
                    href={social.href}
                    key={social.label}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={social.label}
                  >
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#94181f] text-white shadow-[0_10px_24px_rgba(148,24,31,0.22)] transition duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_16px_30px_rgba(148,24,31,0.3)]">
                      <SocialIcon size={23} aria-hidden="true" />
                    </span>

                    <span className="text-[10px] font-semibold text-[#5c5556]">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        </section>
      </article>
    </main>
  );
}
