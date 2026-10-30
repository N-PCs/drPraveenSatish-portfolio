import { useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Stethoscope,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
  ExternalLink,
  Maximize2,
  ZoomIn,
  ZoomOut,
  X,
} from "lucide-react";
import clinic from "@/assets/clinic-interior.jpg";

interface HospitalImage {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
}

interface Hospital {
  id: string;
  name: string;
  shortName: string;
  locationName: string;
  address: string;
  mapsUrl: string;
  images: HospitalImage[];
}

const hospitals: Hospital[] = [
  {
    id: "healthway",
    name: "Healthway Hospitals",
    shortName: "Old Goa",
    locationName: "Old Goa, Goa",
    address: "Kadamba Plateau, Bypass Road, Old Goa 403402, India",
    mapsUrl: "https://maps.app.goo.gl/q31XrD5zoB65SoQR9",
    images: [
      {
        src: "/heathwayhosp.webp",
        alt: "Healthway Hospitals exterior building, Old Goa",
        label: "Hospital Facility",
        width: 680,
        height: 486,
      },
      {
        src: "/healthwayhospdr.webp",
        alt: "Dr. Praveen Satish OPD Consultation schedule at Healthway Hospitals",
        label: "OPD Schedule & Profile",
        width: 399,
        height: 501,
      },
    ],
  },
  {
    id: "optimus",
    name: "Optimus Hospital",
    shortName: "Mapusa",
    locationName: "Mapusa, Goa",
    address: "Khorlim, Mapusa, Goa 403507, India",
    mapsUrl: "https://maps.app.goo.gl/Cu2k5zeTHPEn9rXY9",
    images: [
      {
        src: "/optimushosp.webp",
        alt: "Optimus Hospital building, Mapusa",
        label: "Hospital Facility",
        width: 680,
        height: 510,
      },
      {
        src: "/optimushospdr.webp",
        alt: "Dr. Praveen Satish Maxillofacial Surgery at Optimus Hospital",
        label: "Department & Doctors Board",
        width: 680,
        height: 301,
      },
    ],
  },
  {
    id: "apex",
    name: "Apex Care Hospital",
    shortName: "Panjim",
    locationName: "Panjim, Goa",
    address: "Near Caculo Mall, St Inez, Panjim, Goa 403001, India",
    mapsUrl: "https://maps.app.goo.gl/4kTNZ4JSW1Y7joKS9",
    images: [
      {
        src: "/apexhosp.webp",
        alt: "Apex Care Hospital building, Panjim",
        label: "Hospital Facility",
        width: 472,
        height: 510,
      },
      {
        src: "/apexhospdr.webp",
        alt: "Dr. Praveen Satish at Apex Care Hospital Panjim",
        label: "Consultant Profile",
        width: 399,
        height: 501,
      },
    ],
  },
];

export function Contact() {
  const [activeHospitalIndex, setActiveHospitalIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  const activeHospital = hospitals[activeHospitalIndex];
  const currentImage = activeHospital.images[currentImageIndex] || activeHospital.images[0];

  const handleSelectHospital = (index: number) => {
    setActiveHospitalIndex(index);
    setCurrentImageIndex(0);
  };

  const handlePrevHospital = () => {
    setActiveHospitalIndex((prev) => (prev === 0 ? hospitals.length - 1 : prev - 1));
    setCurrentImageIndex(0);
  };

  const handleNextHospital = () => {
    setActiveHospitalIndex((prev) => (prev === hospitals.length - 1 ? 0 : prev + 1));
    setCurrentImageIndex(0);
  };

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const total = activeHospital.images.length;
    setCurrentImageIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const total = activeHospital.images.length;
    setCurrentImageIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section id="contact" className="relative py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3 lg:mb-4">Patient & Referral Hub</p>
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl lg:text-5xl">
            Two paths in — both received with care.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6">
          {/* Card A — Contact Details */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-foreground p-8 text-background shadow-card transition-all hover:shadow-elevated lg:p-10">
            <div
              className="absolute inset-0 -z-0 opacity-20"
              style={{
                backgroundImage: `url(${clinic})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(1)",
              }}
            />
            <div className="absolute inset-0 -z-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/80" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Stethoscope size={20} strokeWidth={1.6} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  For Patients &amp; Doctors
                </p>
              </div>
              <h3 className="mt-6 text-2xl font-semibold">Refer a patient securely</h3>
              <p className="mt-3 text-sm leading-relaxed text-background/70">
                A secure channel for case consultations, second opinions and inter-specialty
                referrals. Encrypted intake. Acknowledged within 24 hours.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:praveenmaxfacs@icloud.com"
                  className="group/btn flex items-center justify-between gap-4 rounded-xl border border-background/15 bg-background/5 px-5 py-4 transition-colors hover:bg-background/10"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-background/60">
                        Professional Email
                      </p>
                      <p className="text-sm font-medium">praveenmaxfacs@icloud.com</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-background/60 transition-transform group-hover/btn:translate-x-1"
                  />
                </a>
                <a
                  href="tel:+919881954606"
                  className="group/btn flex items-center justify-between gap-4 rounded-xl border border-background/15 bg-background/5 px-5 py-4 transition-colors hover:bg-background/10"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-accent" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-background/60">
                        Direct Consultation Desk
                      </p>
                      <p className="text-sm font-medium">+91 98819 54606</p>
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-background/60 transition-transform group-hover/btn:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Card B — Hospital Practice Locations Carousel */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-card transition-all hover:shadow-elevated sm:p-8 lg:p-10">
            <div>
              {/* Header: Title & Carousel Navigation */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Building2 size={20} strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="eyebrow">Practice Locations</p>
                    <p className="text-xs text-muted-foreground">3 Clinical Hospital Attachments</p>
                  </div>
                </div>

                {/* Hospital Carousel Arrows */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrevHospital}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface-2 text-foreground transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                    aria-label="Previous hospital"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="px-1 text-xs font-medium text-muted-foreground">
                    {activeHospitalIndex + 1} / {hospitals.length}
                  </span>
                  <button
                    onClick={handleNextHospital}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface-2 text-foreground transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                    aria-label="Next hospital"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Hospital Selection Tabs */}
              <div className="mt-5 grid grid-cols-3 gap-1.5 rounded-xl border border-border bg-surface-2 p-1">
                {hospitals.map((hospital, idx) => (
                  <button
                    key={hospital.id}
                    onClick={() => handleSelectHospital(idx)}
                    className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all ${
                      idx === activeHospitalIndex
                        ? "bg-foreground text-background shadow-sm"
                        : "text-muted-foreground hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    <span className="block truncate">{hospital.shortName}</span>
                  </button>
                ))}
              </div>

              {/* Active Hospital Details — Clean header */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                  {activeHospital.name}
                </h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                  <MapPin size={12} />
                  {activeHospital.locationName}
                </span>
              </div>

              {/* Dynamic Dimensions Image Carousel */}
              <div
                className="relative mt-5 w-full overflow-hidden rounded-xl border border-border bg-slate-950 transition-all duration-300 ease-out"
                style={{
                  aspectRatio: `${currentImage.width} / ${currentImage.height}`,
                  maxHeight: "440px",
                }}
              >
                <div
                  className="group/img relative h-full w-full cursor-zoom-in overflow-hidden bg-slate-900"
                  onClick={() => {
                    setZoomScale(1);
                    setIsLightboxOpen(true);
                  }}
                >
                  <img
                    key={currentImage.src}
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="h-full w-full object-contain transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                  {/* Zoom / Fullscreen Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setZoomScale(1);
                      setIsLightboxOpen(true);
                    }}
                    title="Zoom / Expand Image"
                    className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-all hover:bg-black/90 hover:scale-105"
                  >
                    <Maximize2 size={14} />
                  </button>

                  {/* Left / Right Carousel Arrows */}
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-all hover:bg-black/90 hover:scale-105"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-all hover:bg-black/90 hover:scale-105"
                    aria-label="Next image"
                  >
                    <ChevronRight size={18} />
                  </button>

                  {/* Bottom Bar: Dot Indicators & Open in Maps */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 text-white">
                    {/* Dot Indicators */}
                    <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                      {activeHospital.images.map((img, i) => (
                        <button
                          key={img.src}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`h-2 rounded-full transition-all ${
                            i === currentImageIndex ? "w-6 bg-accent" : "w-2 bg-white/50 hover:bg-white/80"
                          }`}
                          aria-label={`Slide ${i + 1}`}
                        />
                      ))}
                    </div>

                    {/* Open in Maps Button */}
                    <a
                      href={activeHospital.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-medium text-accent-foreground shadow-sm transition-transform hover:scale-105"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Hospital Location Card with Direct Link */}
            <div className="mt-5">
              <a
                href={activeHospital.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-between gap-4 rounded-xl border border-border bg-surface-2 px-5 py-3.5 transition-colors hover:border-accent/40 hover:bg-accent/5"
              >
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-accent shrink-0" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      {activeHospital.name} · Location
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-foreground">
                      {activeHospital.address}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className="text-muted-foreground transition-transform group-hover/btn:translate-x-1 group-hover/btn:text-foreground shrink-0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Zoom Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950/90 p-3 backdrop-blur-md sm:p-6"
          onClick={() => {
            setIsLightboxOpen(false);
            setZoomScale(1);
          }}
        >
          {/* Top Control Bar */}
          <div
            className="mb-3 flex w-full max-w-4xl items-center justify-between px-2 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {activeHospital.name}
              </span>
              <span className="text-xs text-white/60">
                ({currentImageIndex + 1} / {activeHospital.images.length})
              </span>
            </div>

            {/* Zoom Controls & Close */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoomScale((prev) => Math.max(1, prev - 0.5))}
                disabled={zoomScale <= 1}
                title="Zoom Out"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-40"
              >
                <ZoomOut size={16} />
              </button>
              <button
                type="button"
                onClick={() => setZoomScale((prev) => (prev >= 2 ? 1 : prev + 0.5))}
                title="Toggle Zoom"
                className="rounded-lg border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-medium text-white transition-colors hover:bg-white/20"
              >
                {Math.round(zoomScale * 100)}%
              </button>
              <button
                type="button"
                onClick={() => setZoomScale((prev) => Math.min(3, prev + 0.5))}
                disabled={zoomScale >= 3}
                title="Zoom In"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-40"
              >
                <ZoomIn size={16} />
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsLightboxOpen(false);
                  setZoomScale(1);
                }}
                className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Image Container with Zoom & Pan */}
          <div
            className="relative flex max-h-[82vh] w-full max-w-4xl flex-1 items-center justify-center overflow-auto rounded-2xl border border-white/10 bg-slate-900/90 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`flex items-center justify-center transition-transform duration-200 ${
                zoomScale > 1 ? "cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setZoomScale((prev) => (prev > 1 ? 1 : 2))}
            >
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                style={{ transform: `scale(${zoomScale})`, transformOrigin: "center center" }}
                className="max-h-[76vh] w-auto max-w-full rounded-xl object-contain transition-transform duration-200 select-none"
              />
            </div>

            {/* Lightbox Prev / Next Arrows */}
            {activeHospital.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-all hover:bg-black/90 hover:scale-105"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-all hover:bg-black/90 hover:scale-105"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
