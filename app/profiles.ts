import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import type { IconType } from "react-icons";

export type ProfileAction = {
  label: string;
  href: string;
  icon: string;
  iconClass: string;
};

export type ProfileSocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export type Profile = {
  slug: string;
  variant?: "classic" | "pageme";
  name: string;
  title: string;
  company: string;
  phone: string;
  email: string;
  website: string;
  location: string;
  image: string;
  imageAlt: string;
  badge: string;
  eyebrow: string;
  summary: string;
  passion?: string;
  recentDate?: string;
  recentUpdate?: string;
  aboutTitle: string;
  aboutText: string;
  meetingUrl: string;
  vcardFileName: string;
  vcardAddress: string;
  actions: ProfileAction[];
  socialLinks: ProfileSocialLink[];
};

export const profiles = {
  joyal: {
    slug: "joyal",
    name: "Joyal Varghese",
    title: "Immigration Consultant",
    company: "Future Immigration Services",
    phone: "+971 56 845 0406",
    email: "joyalvarghese458@gmail.com",
    website: "https://joyal.myportfoliowebsite.com",
    location: "https://maps.app.goo.gl/6jvR99NwBE9KZ8D39",
    image: "/joyal.jpeg",
    imageAlt: "Portrait of Joyal Varghese",
    badge: "UAE Based",
    eyebrow: "Verified Consultant",
    summary:
      "Immigration, study abroad, business immigration and tourist visa guidance from a Dubai-based team with up-to-date industry insight.",
    aboutTitle: "Future Immigration Services",
    aboutText:
      "Shape your future with a professional consultation experience for visa planning, documentation support and destination selection.",
    meetingUrl: "https://calendly.com",
    vcardFileName: "joyal-varghese.vcf",
    vcardAddress:
      "ADR;TYPE=WORK:;;Future Immigration Services;Dubai;;;United Arab Emirates",
    actions: [
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
        href: "mailto:joyalvarghese458@gmail.com",
        icon: "mail",
        iconClass:
          "bg-[#2F80ED] text-white shadow-[0_12px_24px_rgba(47,128,237,0.26)]",
      },
      {
        label: "Website",
        href: "https://joyal.myportfoliowebsite.com",
        icon: "globe",
        iconClass:
          "bg-[#7C3AED] text-white shadow-[0_12px_24px_rgba(124,58,237,0.24)]",
      },
      {
        label: "Location",
        href: "https://maps.app.goo.gl/6jvR99NwBE9KZ8D39",
        icon: "pin",
        iconClass:
          "bg-[#EF4444] text-white shadow-[0_12px_24px_rgba(239,68,68,0.25)]",
      },
    ],
    socialLinks: [
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
    ],
  },
  walt: {
    slug: "walt",
    variant: "pageme",
    name: "Walt Wyatt",
    title: "Founder",
    company: "Volar Skateboard Park",
    phone: "+1 288-456-8888",
    email: "walt@me.com",
    website: "https://fine.io",
    location:
      "https://www.google.com/maps/search/?api=1&query=Volar%20Skateboard%20Park",
    image: "/dj-man.webp",
    imageAlt: "Portrait of Walt Wyatt as a DJ",
    badge: "PageMe",
    eyebrow: "I think therefore I am",
    summary: "Founder of Volar Skateboard Park",
    passion: "DJ, Skateboarding",
    recentDate: "Aug 16, 2022",
    recentUpdate: "New Volar Skateboard Deck is out now!",
    aboutTitle: "Volar Skateboard Park",
    aboutText:
      "A clean social profile card for creators, founders and community builders with fast contact actions.",
    meetingUrl: "https://myportfoliowebsite.com",
    vcardFileName: "walt-wyatt.vcf",
    vcardAddress: "ADR;TYPE=WORK:;;Volar Skateboard Park;;;;",
    actions: [
      {
        label: "Call",
        href: "tel:+12884568888",
        icon: "phone",
        iconClass: "bg-white/10 text-white",
      },
      {
        label: "Mail",
        href: "mailto:walt@me.com",
        icon: "mail",
        iconClass: "bg-white/10 text-white",
      },
    ],
    socialLinks: [
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
        label: "X",
        href: "https://x.com",
        icon: FaXTwitter,
      },
      {
        label: "WhatsApp",
        href: "https://wa.me/12884568888",
        icon: FaWhatsapp,
      },
    ],
  },
  joshua: {
    slug: "joshua",
    variant: "pageme",
    name: "Joshua Jose",
    title: "Sales Manager",
    company: "PageMe",
    phone: "+1 288-567-8888",
    email: "your@sample.io",
    website: "https://myportfoliowebsite.com",
    location: "https://maps.google.com",
    image: "/joshua.webp",
    imageAlt: "Portrait of Joshua Jose.",
    badge: "PageMe",
    eyebrow: "I think therefore I am",
    summary: "Sales manager and customer growth lead",
    passion: "Sales, Relationships",
    recentDate: "Jul 21, 2022",
    recentUpdate: "Had a great lunch with Vasya",
    aboutTitle: "PageMe",
    aboutText:
      "A soft personal card for wellness creators with direct contact, social links and profile saving.",
    meetingUrl: "https://myportfoliowebsite.com",
    vcardFileName: "joshua-jose.vcf",
    vcardAddress: "ADR;TYPE=WORK:;;Mindful Studio;;;;",
    actions: [
      {
        label: "Call",
        href: "tel:+12885678888",
        icon: "phone",
        iconClass: "bg-white/10 text-white",
      },
      {
        label: "Mail",
        href: "mailto:your@sample.io",
        icon: "mail",
        iconClass: "bg-white/10 text-white",
      },
    ],
    socialLinks: [
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
        label: "Twitter",
        href: "https://x.com",
        icon: FaXTwitter,
      },
    ],
  },
} satisfies Record<string, Profile>;

export type ProfileSlug = keyof typeof profiles;

export function getProfile(slug: string) {
  return profiles[slug as ProfileSlug];
}

export function getProfileSlugs() {
  return Object.keys(profiles);
}
