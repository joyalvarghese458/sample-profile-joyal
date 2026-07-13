import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProfileCard from "../ProfileCard";
import { getProfile, getProfileSlugs } from "../profiles";

type ProfilePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getProfileSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getProfile(slug);

  if (!profile) {
    return {
      title: "Profile not found",
    };
  }

  return {
    title: `${profile.name} | ${profile.company}`,
    description: `Digital profile card for ${profile.name}, ${profile.title}.`,
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const profile = getProfile(slug);

  if (!profile) {
    notFound();
  }

  return <ProfileCard profile={profile} />;
}
