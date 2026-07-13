import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
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
} satisfies Record<string, Profile>;

export type ProfileSlug = keyof typeof profiles;

export function getProfile(slug: string) {
  return profiles[slug as ProfileSlug];
}

export function getProfileSlugs() {
  return Object.keys(profiles);
}
