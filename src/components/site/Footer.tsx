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
              href="https://www.google.com/maps/place/Goa+Dental+College+and+Hospital/@15.4652614,73.8570885,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfbf4c4ef3f9eb:0x5bc4c62df09d48af!8m2!3d15.4652614!4d73.8570885!16s%2Fm%2F06w9gkb?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              style={{ color: "#040cffa0" }}
            >
              Bambolim, Goa{" "}
              <MapPin
                width={"15px"}
                height={"15px"}
                strokeWidth={2}
                className="inline-flex"
              ></MapPin>
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
