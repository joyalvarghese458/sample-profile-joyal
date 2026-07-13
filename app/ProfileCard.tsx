import Image from "next/image";
import { SiGooglepay, SiPaypal, SiPaytm, SiPhonepe } from "react-icons/si";
import HeroShareButton from "./HeroShareButton";
import type { Profile } from "./profiles";

function getEncodedVcard(profile: Profile) {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:${profile.name.split(" ").slice(1).join(" ")};${profile.name.split(" ")[0]};;;
FN:${profile.name}
ORG:${profile.company}
TITLE:${profile.title}
TEL;TYPE=CELL:${profile.phone}
EMAIL:${profile.email}
URL:${profile.website}
${profile.vcardAddress}
END:VCARD`;

  return `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;
}

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

  if (name === "message") {
    return (
      <svg {...baseProps}>
        <path
          d="M5.1 6.4h13.8c.9 0 1.6.7 1.6 1.6v7.1c0 .9-.7 1.6-1.6 1.6h-6.2l-3.8 2.9v-2.9H5.1c-.9 0-1.6-.7-1.6-1.6V8c0-.9.7-1.6 1.6-1.6Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
        <path
          d="M8 10.4h8M8 13h5.4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg {...baseProps}>
        <path
          d="M4.2 20.1 5.4 16a8 8 0 1 1 3.1 3l-4.3 1.1Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
        <path
          d="M9.3 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .6l-.5.6c.5.9 1.2 1.6 2.2 2.1l.6-.6c.2-.2.4-.2.7-.1l1.6.8c.3.1.4.3.4.6v.5c0 .3-.1.5-.4.7-.5.3-1 .5-1.6.4-2.9-.5-5.4-2.8-6-5.7-.1-.5.1-1.1.4-1.5Z"
          fill="currentColor"
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

export default function ProfileCard({ profile }: { profile: Profile }) {
  const encodedVcard = getEncodedVcard(profile);

  if (profile.variant === "pageme") {
    return <PageMeProfileCard encodedVcard={encodedVcard} profile={profile} />;
  }

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
              {profile.badge}
            </span>
          </div>

          <div className="relative z-20 mt-9 flex flex-col items-center px-5 text-center text-white">
            <div className="hero-avatar-ring relative h-36 w-36 rounded-full">
              <div className="absolute inset-2 overflow-hidden rounded-full bg-[#11161a]">
                <Image
                  src={profile.image}
                  alt={profile.imageAlt}
                  fill
                  priority
                  sizes="144px"
                  className="object-cover object-top"
                />
              </div>
              <HeroShareButton
                text={`${profile.title} at ${profile.company}`}
                title={profile.name}
                url={profile.website}
              />
            </div>

            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.24em] text-white/62">
              {profile.eyebrow}
            </p>
            <h1 className="mt-2 text-[32px] font-black leading-tight text-white">
              {profile.name}
            </h1>
            <p className="mt-1 text-lg font-medium text-white/78">
              {profile.title}
            </p>
            <p className="mt-3 text-sm font-extrabold text-white/72">
              {profile.company}
            </p>
          </div>
        </section>

        <section className="-mt-7 rounded-t-[34px] bg-white px-5 pb-7 pt-8 text-center shadow-[0_-18px_38px_rgba(0,0,0,0.1)]">
          <div>
            <p className="mx-auto mt-5 max-w-[330px] text-[16px] leading-7 text-[#6f6768]">
              {profile.summary}
            </p>
          </div>

          <a
            className="mx-auto mt-8 flex h-16 w-full max-w-[292px] items-center justify-center rounded-full bg-[#171313] px-8 text-lg font-extrabold text-white shadow-[0_16px_34px_rgba(23,19,19,0.28)] transition hover:bg-[#94181f]"
            download={profile.vcardFileName}
            href={encodedVcard}
          >
            Save Contact
          </a>

          <nav
            aria-label="Contact actions"
            className="mt-8 grid grid-cols-5 gap-3"
          >
            {profile.actions.map((action) => (
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
            <h2 className="mt-2 text-xl font-extrabold">
              {profile.aboutTitle}
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#6f6768]">
              {profile.aboutText}
            </p>
            <a
              className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full border border-[#94181f] text-sm font-extrabold text-[#94181f]"
              href={profile.meetingUrl}
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
              {profile.socialLinks.map((social) => {
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

function PageMeProfileCard({
  encodedVcard,
  profile,
}: {
  encodedVcard: string;
  profile: Profile;
}) {
  const isJessie = profile.slug === "joshua";

  if (isJessie) {
    return <JessieProfileCard encodedVcard={encodedVcard} profile={profile} />;
  }

  return (
    <main className="page-me-stage min-h-screen px-0 py-0 text-white sm:px-4 sm:py-6">
      <article
        className={`mx-auto min-h-screen w-full max-w-[430px] transform-none overflow-hidden rounded-none shadow-[0_34px_90px_rgba(4,15,24,0.34)] sm:min-h-[760px] sm:rounded-[34px] ${
          isJessie ? "page-me-card-light text-[#4b4748]" : "page-me-card-dark"
        }`}
        style={{ transform: "none" }}
      >
        <section
          className={`page-me-cover relative h-[176px] sm:h-[230px] ${
            isJessie ? "page-me-cover-mountain" : "page-me-cover-concert"
          }`}
        >
          <div className="absolute inset-0 bg-black/10" />
        </section>

        <section className="relative px-5 pb-6 pt-12 text-center sm:px-8 sm:pb-8 sm:pt-14">
          <div
            className={`absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[6px] sm:h-28 sm:w-28 sm:border-[7px] ${
              isJessie
                ? "border-[#f4efed] bg-[#f2d8ca]"
                : "border-[#067f7b] bg-[#f3c874]"
            } shadow-[0_16px_34px_rgba(0,0,0,0.2)]`}
          >
            <Image
              src={profile.image}
              alt={profile.imageAlt}
              fill
              priority
              sizes="112px"
              className="object-cover object-top"
            />
          </div>

          <h1 className="text-[31px] font-normal italic leading-tight sm:text-[34px]">
            {profile.name}
          </h1>
          <p
            className={`mx-auto mt-3 max-w-[320px] text-[16px] italic leading-6 sm:text-[18px] sm:leading-7 ${
              isJessie ? "text-[#5f595a]" : "text-white/88"
            }`}
          >
            {profile.summary}
          </p>
          <p
            className={`mt-4 text-[16px] italic sm:mt-6 sm:text-[18px] ${
              isJessie ? "text-[#5f595a]" : "text-white/90"
            }`}
          >
            Passion : {profile.passion}
          </p>

          <div
            className={`my-5 h-px sm:my-9 ${
              isJessie ? "bg-[#bdb6b4]" : "bg-white/36"
            }`}
          />

          <div className="italic">
            <p
              className={`text-xs ${
                isJessie ? "text-[#6f6969]" : "text-white/68"
              }`}
            >
              Recent update {profile.recentDate}
            </p>
            <p className="mx-auto mt-1 max-w-[320px] text-[16px] leading-6 sm:text-[18px] sm:leading-7">
              {profile.recentUpdate}
            </p>
          </div>

          <div
            className={`my-5 h-px sm:my-9 ${
              isJessie ? "bg-[#bdb6b4]" : "bg-white/36"
            }`}
          />

          <nav
            aria-label="Social links"
            className={`mx-auto grid max-w-[300px] gap-3 sm:max-w-[320px] sm:gap-5 ${
              profile.socialLinks.length === 3 ? "grid-cols-3" : "grid-cols-4"
            }`}
          >
            {profile.socialLinks.map((social) => {
              const SocialIcon = social.icon;

              return (
                <a
                  aria-label={social.label}
                  className={`grid h-14 w-14 place-items-center justify-self-center rounded-full border transition hover:-translate-y-1 sm:h-16 sm:w-16 ${
                    isJessie
                      ? "border-[#9e9797] text-[#4b4748] hover:bg-white/70"
                      : "border-white/42 text-white hover:bg-white/10"
                  }`}
                  href={social.href}
                  key={social.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <SocialIcon size={27} aria-hidden="true" />
                </a>
              );
            })}
          </nav>

          <div
            className={`my-5 h-px sm:my-8 ${
              isJessie ? "bg-[#bdb6b4]" : "bg-white/36"
            }`}
          />

          <div className="mx-auto max-w-[320px] space-y-5 text-left sm:space-y-7">
            <a
              className="grid grid-cols-[42px_1fr] items-center gap-4 sm:grid-cols-[48px_1fr] sm:gap-6"
              href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
            >
              <span className="grid h-11 w-11 place-items-center sm:h-12 sm:w-12">
                <Icon name="phone" />
              </span>
              <span className="text-[16px] italic sm:text-[18px]">
                {profile.phone}
              </span>
            </a>
            <a
              className="grid grid-cols-[42px_1fr] items-center gap-4 sm:grid-cols-[48px_1fr] sm:gap-6"
              href={`mailto:${profile.email}`}
            >
              <span className="grid h-11 w-11 place-items-center sm:h-12 sm:w-12">
                <Icon name="mail" />
              </span>
              <span>
                <span
                  className={`block text-xs italic ${
                    isJessie ? "text-[#6f6969]" : "text-white/68"
                  }`}
                >
                  Work
                </span>
                <span className="block text-[16px] italic leading-5 sm:text-[18px]">
                  {profile.email}
                </span>
              </span>
            </a>
          </div>

          <div
            className={`my-5 h-px sm:my-8 ${
              isJessie ? "bg-[#bdb6b4]" : "bg-white/36"
            }`}
          />

          <div className="mx-auto grid max-w-[340px] grid-cols-2 gap-3">
            <a
              className={`flex h-12 min-w-0 items-center justify-center rounded-full px-3 text-center text-[14px] italic sm:h-14 sm:px-5 sm:text-[15px] ${
                isJessie
                  ? "bg-[#3f3d3d] text-white"
                  : "bg-[#101010] text-white"
              }`}
              download={profile.vcardFileName}
              href={encodedVcard}
            >
              Save to phone
            </a>
            <a
              className={`flex h-12 min-w-0 items-center justify-center rounded-full px-3 text-center text-[14px] italic sm:h-14 sm:px-5 sm:text-[15px] ${
                isJessie
                  ? "bg-white text-[#5a5555]"
                  : "bg-white text-[#454545]"
              }`}
              href={profile.location}
              rel="noopener noreferrer"
              target="_blank"
            >
              Directions
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}

function JessieProfileCard({
  encodedVcard,
  profile,
}: {
  encodedVcard: string;
  profile: Profile;
}) {
  const phoneDigits = profile.phone.replace(/[^\d]/g, "");
  const dialablePhone = profile.phone.replace(/[^\d+]/g, "");
  const quickActions = [
    {
      label: "Call",
      href: `tel:${dialablePhone}`,
      icon: "phone",
    },
    {
      label: "Email",
      href: `mailto:${profile.email}`,
      icon: "mail",
    },
    {
      label: "Message",
      href: `sms:${dialablePhone}`,
      icon: "message",
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${phoneDigits}`,
      icon: "whatsapp",
    },
  ];
  const paymentOptions = [
    {
      label: "GPay",
      href: "upi://pay?pa=your@upi&pn=Joshua%20B",
      icon: SiGooglepay,
      tone: "bg-[#eef5ff] text-[#1a73e8]",
    },
    {
      label: "PhonePe",
      href: "upi://pay?pa=your@upi&pn=Joshua%20B",
      icon: SiPhonepe,
      tone: "bg-[#f3edff] text-[#5f259f]",
    },
    {
      label: "Paytm",
      href: "upi://pay?pa=your@upi&pn=Joshua%20B",
      icon: SiPaytm,
      tone: "bg-[#eaf8ff] text-[#00baf2]",
    },
    {
      label: "PayPal",
      href: "https://paypal.me",
      icon: SiPaypal,
      tone: "bg-[#edf4ff] text-[#003087]",
    },
  ];

  return (
    <main className="jessie-stage min-h-screen px-0 py-0 text-white sm:px-5 sm:py-8">
      <article className="jessie-profile-card mx-auto min-h-screen w-full overflow-hidden shadow-[0_24px_70px_rgba(21,28,68,0.2)] sm:min-h-0 sm:max-w-[430px] sm:rounded-[28px]">
        <section className="jessie-hero relative overflow-hidden px-5 pb-7 pt-14 text-center sm:px-6 sm:pt-16">
          <div className="jessie-ribbon jessie-ribbon-one" />
          <div className="jessie-ribbon jessie-ribbon-two" />
          <div className="jessie-ribbon jessie-ribbon-three" />

          <div className="relative z-10 mx-auto h-32 w-32 overflow-hidden rounded-full bg-white shadow-[0_10px_28px_rgba(33,36,72,0.28)]">
            <Image
              src={profile.image}
              alt={profile.imageAlt}
              fill
              priority
              sizes="128px"
              className="object-cover object-top"
            />
          </div>

          <h1 className="relative z-10 mt-4 text-[27px] font-extrabold leading-tight text-white">
            {profile.name}
          </h1>
          <p className="relative z-10 mt-1 text-[12px] font-medium text-white/82">
            {profile.title}
          </p>

          <nav
            aria-label="Contact actions"
            className="relative z-10 mx-auto mt-5 grid max-w-[240px] grid-cols-4 gap-3"
          >
            {quickActions.map((action) => (
              <a
                aria-label={action.label}
                className="grid h-12 w-12 place-items-center justify-self-center rounded-full bg-white text-[#25a9ef] shadow-[0_10px_20px_rgba(22,33,74,0.2)] transition hover:-translate-y-0.5"
                href={action.href}
                key={action.label}
                rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                target={action.href.startsWith("http") ? "_blank" : undefined}
              >
                <Icon name={action.icon} />
              </a>
            ))}
          </nav>
        </section>

        <section className="jessie-content relative z-10 -mt-1 px-4 pb-7">
          <a
            className="sr-only"
            download={profile.vcardFileName}
            href={encodedVcard}
          >
            Save Contact
          </a>

          <nav aria-label="Social links" className="space-y-3">
            {profile.socialLinks.map((social) => {
              const SocialIcon = social.icon;
              const isInstagram = social.label === "Instagram";
              const isX = social.label === "Twitter" || social.label === "X";

              return (
                <a
                  className="jessie-social-link grid min-h-[62px] grid-cols-[48px_1fr_18px] items-center gap-3 rounded-[9px] bg-white px-3 text-left text-[#1f2937] shadow-[0_8px_18px_rgba(18,28,66,0.16)] transition hover:-translate-y-0.5"
                  href={social.href}
                  key={social.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full text-white ${
                      isInstagram
                        ? "bg-[radial-gradient(circle_at_30%_105%,#fdf497_0_18%,#fd5949_42%,#d6249f_66%,#285AEB_100%)]"
                        : isX
                          ? "bg-black"
                          : "bg-[#1877f2]"
                    }`}
                  >
                    <SocialIcon size={24} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[14px] font-bold leading-5">
                      {social.label}
                    </span>
                    <span className="block truncate text-[10px] font-medium text-[#6b7280]">
                      Follow us on {social.label}
                    </span>
                  </span>
                  <span className="text-[30px] font-light leading-none text-[#33aef2]">
                    &rsaquo;
                  </span>
                </a>
              );
            })}
          </nav>

          <section aria-labelledby="payment-title" className="mt-5">
            <h2
              id="payment-title"
              className="mb-3 text-center text-[12px] font-bold uppercase tracking-[0.16em] text-white/78"
            >
              Payment Options
            </h2>
            <div className="jessie-payment-grid grid grid-cols-2 gap-3">
              {paymentOptions.map((payment) => {
                const PaymentIcon = payment.icon;

                return (
                  <a
                    className="jessie-payment-link flex min-h-[54px] items-center gap-3 rounded-[9px] bg-white px-3 text-[#1f2937] shadow-[0_8px_18px_rgba(18,28,66,0.14)] transition hover:-translate-y-0.5"
                    href={payment.href}
                    key={payment.label}
                    rel={
                      payment.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    target={payment.href.startsWith("http") ? "_blank" : undefined}
                  >
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${payment.tone}`}
                    >
                      <PaymentIcon size={21} aria-hidden="true" />
                    </span>
                    <span className="truncate text-[13px] font-bold">
                      {payment.label}
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
