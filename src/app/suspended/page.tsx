import Image from "next/image";

export const metadata = {
  title: "Fikiri Communication — Temporarily Unavailable",
  description: "This website is temporarily unavailable.",
};

export default function SuspendedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5 text-center">
      <div className="mx-auto max-w-md">
        <Image
          src="/images/fikiri_communication_logo.png"
          alt="Fikiri Communication"
          width={320}
          height={128}
          className="mx-auto h-auto w-48 sm:w-56"
          priority
        />

        <div className="mx-auto mt-10 h-px w-16 bg-emerald/40" aria-hidden="true" />

        <h1 className="mt-8 font-display text-2xl font-bold text-primary sm:text-3xl">
          This website is temporarily unavailable.
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Please contact the site administrator for further information.
        </p>
      </div>
    </div>
  );
}
