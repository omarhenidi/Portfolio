import Link from "next/link";

export default function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-primary-container focus:px-4 focus:py-2 focus:font-ui focus:text-ui-label focus:uppercase focus:text-on-primary-container focus:outline-none"
    >
      Skip to main content
    </Link>
  );
}
