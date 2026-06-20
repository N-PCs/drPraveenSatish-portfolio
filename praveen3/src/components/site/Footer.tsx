export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center lg:px-10">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-foreground">
            DR. PRAVEEN SATISH
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Maxillofacial &amp; Oral Onco Surgeon · Bambolim, Goa
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dr. Praveen Satish. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
