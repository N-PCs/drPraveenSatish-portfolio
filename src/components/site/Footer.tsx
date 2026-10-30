import {
  ArrowUpRight,
  Link,
  Locate,
  LocateFixedIcon,
  LocateIcon,
  MapPin,
  Pointer,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center lg:gap-6 lg:px-10 lg:py-10">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-foreground">
            DR. PRAVEEN SATISH
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Maxillofacial &amp; Oral Onco Surgeon ·{" "}
            <a
              href="https://maps.app.goo.gl/q31XrD5zoB65SoQR9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors text-accent inline-flex items-center gap-0.5"
            >
              Old Goa
            </a>
            {" · "}
            <a
              href="https://maps.app.goo.gl/Cu2k5zeTHPEn9rXY9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors text-accent inline-flex items-center gap-0.5"
            >
              Mapusa
            </a>
            {" · "}
            <a
              href="https://maps.app.goo.gl/4kTNZ4JSW1Y7joKS9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors text-accent inline-flex items-center gap-0.5"
            >
              Panjim <MapPin size={13} className="inline-flex shrink-0 ml-0.5" />
            </a>
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dr. Praveen Satish. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
