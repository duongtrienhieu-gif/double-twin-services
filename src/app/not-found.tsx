import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6">
        <span className="text-6xl font-extrabold tracking-tight text-brand-600">
          404
        </span>
        <h1 className="mt-4 text-2xl font-bold text-ink">Page Not Found</h1>
        <p className="mt-3 text-muted">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
