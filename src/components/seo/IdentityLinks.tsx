import { sameAsProfiles } from "@/lib/seo";

export default function IdentityLinks() {
  return (
    <>
      {sameAsProfiles.map((profile) => (
        <link key={profile} rel="me" href={profile} />
      ))}
    </>
  );
}
