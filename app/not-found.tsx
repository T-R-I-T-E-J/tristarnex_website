import Link from "next/link";
export default function NotFound() {
  return (
    <div className="not-found">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>Let’s get you back.</h1>
      <p>The page you’re looking for isn’t here.</p>
      <Link href="/" className="button primary">
        Return to Tristarnex
      </Link>
    </div>
  );
}
