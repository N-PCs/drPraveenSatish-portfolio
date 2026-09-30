import { useState, useMemo, useEffect } from "react";
import {
  Eye,
  EyeOff,
  Lock,
  Unlock,
  ShieldAlert,
  Maximize2,
  X,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Info,
  SlidersHorizontal,
  LayoutGrid,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  skinCancerPreop,
  skinCancerIntraop,
  skinCancerPostop,
  lipCancerPreop,
  lipCancerKarapandzicPostop,
  oralLeukoplakiaPreop,
  oralLeukoplakiaPostop,
  oralTumorAlveolar,
  parotidectomyPreopMarkings,
  parotidectomyNervePreservation,
  parotidectomyPostopNerveFunction,
  softTissueTraumaAcute,
  softTissueTraumaRepaired,
  panfacialCtPreop,
  panfacialClinicalPreop,
  panfacialOpgPostop,
  mandibleFracture3dCt,
  mandibleFractureOrifOpg,
  condyleFracture3dCt,
  condylarFracturePostopXray,
  condyleFractureHealedScar,
  tmjArthroscopyDirectView,
  tmjArthroscopyEntry,
  tmjSurgicalSuite,
  tmjArthroscopyInfographic,
  tongueVascularLesion,
  lipMelanoticLesionPreop,
  lipMelanoticLesionPostop,
} from "@/assets/cases";

export type Category =
  | "All"
  | "Oral Cancer"
  | "Facial Trauma"
  | "TMJ & Arthroscopy"
  | "Oral Pathology";

export interface CaseImage {
  label: string;
  src: string;
  description: string;
}

export interface CaseItem {
  id: string;
  category: Exclude<Category, "All">;
  title: string;
  procedure: string;
  summary: string;
  clinicalHighlights: string[];
  images: CaseImage[];
}

const cases: CaseItem[] = [
  // ORAL CANCER & ONCOLOGY
  {
    id: "case-skin-cancer",
    category: "Oral Cancer",
    title: "Periorbital Skin Cancer Excision & Local Flap Reconstruction",
    procedure: "Wide local excision with immediate local advancement flap reconstruction",
    summary:
      "Basal cell carcinoma adjacent to the medial canthus resected with histologically verified clear margins, followed by precise local rotational advancement flap reconstruction preserving eyelid function, lacrimal apparatus, and facial contour.",
    clinicalHighlights: [
      "Negative margins confirmed on histological margin clearance",
      "Periorbital aesthetic subunit boundary preservation",
      "Tension-free layered closure with zero ectropion or functional impairment",
    ],
    images: [
      {
        label: "Pre-Op Lesion",
        src: skinCancerPreop,
        description:
          "Pre-operative presentation of noduloulcerative basal cell carcinoma near the medial canthus.",
      },
      {
        label: "Excision Bed",
        src: skinCancerIntraop,
        description:
          "Intra-operative resection with local rotational flap design marked along relaxed skin tension lines.",
      },
      {
        label: "Reconstruction",
        src: skinCancerPostop,
        description:
          "Immediate post-operative local flap advancement with meticulous layered fine-monofilament suturing.",
      },
    ],
  },
  {
    id: "case-lip-cancer",
    category: "Oral Cancer",
    title: "Lower Lip Carcinoma Resection & Functional Karapandzic Flap",
    procedure:
      "Full-thickness vermilionectomy & Karapandzic neurovascular sphincter reconstruction",
    summary:
      "Squamous cell carcinoma of the lower lip involving extensive vermilion border resected with oncologic safety. Reconstructed utilizing bilateral Karapandzic flaps, preserving labial sensation, oral competence, and active sphincter function.",
    clinicalHighlights: [
      "Preservation of labial neurovascular bundles",
      "Restoration of oral sphincter competence with zero microstomia compromise",
      "Symmetrical lip seal preventing involuntary sialorrhea (drooling)",
    ],
    images: [
      {
        label: "Pre-Op Carcinoma",
        src: lipCancerPreop,
        description:
          "Pre-operative ulcerative squamous cell carcinoma of the central and left lower lip vermilion.",
      },
      {
        label: "Karapandzic Repair",
        src: lipCancerKarapandzicPostop,
        description:
          "Post-operative functional outcome demonstrating restored lip circumference, active oral seal, and healed circumoral incisions.",
      },
    ],
  },
  {
    id: "case-parotid",
    category: "Oral Cancer",
    title: "Superficial Parotidectomy with Complete Facial Nerve Preservation",
    procedure:
      "Superficial parotidectomy with intraoperative facial nerve (CN VII) neuromonitoring",
    summary:
      "Extirpation of large benign parotid neoplasm (pleomorphic adenoma) via an aesthetic modified Blair incision. Complete micro-dissection and anatomical preservation of the main trunk and all terminal branches of the facial nerve (cranial nerve VII).",
    clinicalHighlights: [
      "Modified Blair incision placed along natural preauricular and cervical skin creases",
      "Direct anatomical visualization and preservation of temporal, zygomatic, buccal, marginal mandibular, and cervical branches",
      "Flawless post-operative symmetric facial animation and smile symmetry (House-Brackmann Grade I)",
    ],
    images: [
      {
        label: "Surgical Planning",
        src: parotidectomyPreopMarkings,
        description:
          "Pre-operative boundary marking and modified Blair incision design following natural cervico-facial creases.",
      },
      {
        label: "Nerve Preservation",
        src: parotidectomyNervePreservation,
        description:
          "Intra-operative view showing full preservation of all facial nerve (CN VII) branches following complete tumor excision.",
      },
      {
        label: "Symmetrical Smile",
        src: parotidectomyPostopNerveFunction,
        description:
          "Long-term post-operative demonstration of intact bilateral smile symmetry, verifying complete preservation of motor function.",
      },
    ],
  },
  {
    id: "case-oral-tumor",
    category: "Oral Cancer",
    title: "Advanced Maxillo-Alveolar & Palatal Tumor Ablation",
    procedure: "Composite alveolar and palatal resection with surgical reconstruction planning",
    summary:
      "Ablative surgical management of an extensive intraoral neoplasm arising from the right maxillary alveolar ridge and hard palate. Meticulous three-dimensional resection achieving clear margins while safeguarding adjacent vital masticatory structures.",
    clinicalHighlights: [
      "Complete resection with three-dimensional oncologic margins",
      "Preservation of surrounding vital structures and maxillary tuberosity",
      "Immediate temporary obturation transitioning to staged rehabilitation",
    ],
    images: [
      {
        label: "Intraoral Presentation",
        src: oralTumorAlveolar,
        description:
          "Intraoral clinical photograph showing prominent exophytic mass along the maxillary alveolus and posterior hard palate.",
      },
    ],
  },
  {
    id: "case-leukoplakia",
    category: "Oral Cancer",
    title: "Pre-Cancerous Buccal Leukoplakia Wide Surgical Excision",
    procedure: "Mucosal excision with secondary intention and secondary epithelialization",
    summary:
      "Surgical excision of extensive dysplastic white patch (oral leukoplakia) located across the right cheek buccal mucosa and commissure. Complete lesion removal achieved with smooth epithelial mucosal regeneration and zero mouth-opening restriction.",
    clinicalHighlights: [
      "Targeted resection of dysplastic epithelium preventing malignant transformation",
      "Preservation of parotid duct papilla (Stensen's duct) and buccinator function",
      "Full mucosal re-epithelialization with no fibrous band formation",
    ],
    images: [
      {
        label: "Pre-Op Leukoplakia",
        src: oralLeukoplakiaPreop,
        description:
          "Pre-operative presentation of homogeneous dysplastic leukoplakic patch on the right buccal mucosa.",
      },
      {
        label: "Post-Op Mucosa",
        src: oralLeukoplakiaPostop,
        description:
          "Post-surgical follow-up showing complete mucosal regeneration and healthy, supple oral lining.",
      },
    ],
  },

  // FACIAL TRAUMA & RECONSTRUCTION
  {
    id: "case-soft-tissue-trauma",
    category: "Facial Trauma",
    title: "Complex Naso-Facial Soft Tissue Trauma Reconstruction",
    procedure: "Emergency micro-layered structural realignment & aesthetic facial closure",
    summary:
      "Severe acute soft-tissue facial injury featuring extensive lacerations, nasal alar avulsion, and underlying structural cartilage disruption. Managed with emergency debridement, cartilage repositioning, and meticulous micro-layered aesthetic suturing.",
    clinicalHighlights: [
      "Precise anatomical realignment of the nasal ala, columella, and vermilion border",
      "Deep-layer suspension preventing post-traumatic facial soft-tissue ptosis",
      "Favorable scar camouflage matching facial aesthetic subunits",
    ],
    images: [
      {
        label: "Acute Trauma",
        src: softTissueTraumaAcute,
        description:
          "Acute clinical presentation of severe midface laceration with nasal cartilage disruption (sensitive areas blurred).",
      },
      {
        label: "Layered Repair",
        src: softTissueTraumaRepaired,
        description:
          "Immediate post-operative outcome following anatomic cartilage repositioning and fine-layered monofilament closure.",
      },
    ],
  },
  {
    id: "case-panfacial-fracture",
    category: "Facial Trauma",
    title: "Complex Comminuted Panfacial Fracture 3D Reconstruction",
    procedure:
      "3D CT planning, open reduction & rigid internal fixation (ORIF) with titanium miniplates",
    summary:
      "Severe panfacial disruption with bilateral zygomaticomaxillary complex, Le Fort midface, and mandibular symphyseal fractures. Reconstructed using modern AO CMF 'bottom-up, outside-in' sequence, re-establishing facial height, projection, and dental occlusion.",
    clinicalHighlights: [
      "Bottom-up, outside-in sequencing to restore anatomical facial buttresses",
      "Multi-point rigid internal fixation utilizing low-profile titanium miniplates",
      "Complete restoration of pre-morbid occlusion and three-dimensional facial contour",
    ],
    images: [
      {
        label: "3D CT Pre-Op",
        src: panfacialCtPreop,
        description:
          "Three-dimensional computed tomography showing multi-fragment midfacial and mandibular fractures.",
      },
      {
        label: "Clinical Pre-Op",
        src: panfacialClinicalPreop,
        description:
          "Pre-operative clinical trauma presentation showing profound facial edema and occlusal collapse.",
      },
      {
        label: "Post-Op Radiograph",
        src: panfacialOpgPostop,
        description:
          "Post-operative panoramic radiograph confirming anatomic buttress fixation and stable dental intercuspation.",
      },
    ],
  },
  {
    id: "case-mandible-fracture",
    category: "Facial Trauma",
    title: "Mandibular Angle & Parasymphysis Fracture ORIF",
    procedure: "Open reduction and internal fixation per Champy's biomechanical lines",
    summary:
      "Displaced fracture of the mandibular angle combined with a contralateral parasymphysis fracture. Treated with rigid internal fixation using titanium miniplates placed along ideal osteosynthesis lines to neutralize tension and compression strains.",
    clinicalHighlights: [
      "Plate orientation following Champy's biomechanical lines of ideal osteosynthesis",
      "Intraoperative maxillo-mandibular fixation (MMF) ensuring reproducible centric relation",
      "Immediate post-operative jaw mobilization and early nutritional return",
    ],
    images: [
      {
        label: "3D CT Fracture",
        src: mandibleFracture3dCt,
        description:
          "3D volume rendering revealing displaced right mandibular angle fracture with unfavorable muscular pull.",
      },
      {
        label: "Post-Op OPG",
        src: mandibleFractureOrifOpg,
        description:
          "Orthopantomogram verifying stable dual-point miniplate fixation along parasymphysis and angle.",
      },
    ],
  },
  {
    id: "case-condyle-fracture",
    category: "Facial Trauma",
    title: "Temporomandibular Joint Condylar Fracture ORIF with Concealed Scar",
    procedure: "Open reduction & internal fixation via retromandibular minimal-access approach",
    summary:
      "Displaced subcondylar / condylar neck fracture leading to anterior open bite and mandibular deviation. Reduced and fixated via an aesthetic retromandibular approach, protecting the marginal mandibular nerve and yielding an inconspicuous healed scar.",
    clinicalHighlights: [
      "Minimal-access trans-parotid/retromandibular safe zone entry",
      "Prevention of TMJ ankylosis, persistent malocclusion, and facial asymmetry",
      "Inconspicuous scar concealed within the posterior submandibular hairline crease",
    ],
    images: [
      {
        label: "3D CT Condyle",
        src: condyleFracture3dCt,
        description:
          "3D CT scan displaying displaced medially overridden condylar neck fracture disrupting TMJ mechanics.",
      },
      {
        label: "ORIF Radiograph",
        src: condylarFracturePostopXray,
        description:
          "Post-operative PA radiograph showing anatomical condylar realignment and rigid miniplate stabilization.",
      },
      {
        label: "Healed Scar",
        src: condyleFractureHealedScar,
        description:
          "Follow-up photograph demonstrating near-invisible submandibular scar and flawless facial symmetry.",
      },
    ],
  },

  // TMJ & ARTHROSCOPY
  {
    id: "case-tmj-arthroscopy",
    category: "TMJ & Arthroscopy",
    title: "Minimally Invasive TMJ Arthroscopy & Joint Lysis/Lavage",
    procedure: "Level I & II TMJ arthroscopy with disc mobilization and intra-articular lavage",
    summary:
      "Minimally invasive video-assisted arthroscopy for advanced internal derangement (Wilkes Stage III/IV) with chronic TMJ locking and refractory pain. Provides direct high-definition visualization of the superior joint space, freeing fibro-adhesions without open joint surgery.",
    clinicalHighlights: [
      "Sub-2mm micro-arthroscope entry with zero facial nerve trauma",
      "Targeted lysis of intra-articular adhesions and sweep lavage of inflammatory mediators",
      "Rapid recovery with immediate improvement in maximum incisal mouth opening",
    ],
    images: [
      {
        label: "Surgical Suite",
        src: tmjSurgicalSuite,
        description:
          "Dr. Praveen Satish and specialized surgical team performing TMJ arthroscopy in modern OT suite.",
      },
      {
        label: "Micro-Cannulation",
        src: tmjArthroscopyEntry,
        description:
          "Precise preauricular landmark triangulation and cannula entry into the superior joint space.",
      },
      {
        label: "Direct Arthroscopy",
        src: tmjArthroscopyDirectView,
        description:
          "Direct intra-articular arthroscopic view showing joint fibrocartilage, synovial lining, and disc interface.",
      },
      {
        label: "Procedure Overview",
        src: tmjArthroscopyInfographic,
        description:
          "Clinical educational breakdown detailing TMJ arthroscopy indications, anatomy, and benefits.",
      },
    ],
  },

  // ORAL PATHOLOGY
  {
    id: "case-vascular-lesion",
    category: "Oral Pathology",
    title: "Vascular Malformation / Hemangioma of Lateral Tongue",
    procedure: "Surgical evaluation, diagnostic mapping, and precise vascular ablation",
    summary:
      "Benign vascular lesion located along the ventral and lateral borders of the tongue with recurrent masticatory bleeding. Evaluated and managed with advanced haemostatic techniques preserving lingual nerve sensation and tongue motility.",
    clinicalHighlights: [
      "Zero impairment of lingual motor function or speech articulation",
      "Precise haemostatic control without tissue compromise",
      "Prevention of recurrent trauma-induced haemorrhage",
    ],
    images: [
      {
        label: "Clinical Presentation",
        src: tongueVascularLesion,
        description:
          "Intraoral view illustrating distinct vascular lesion along the lateral tongue margin.",
      },
    ],
  },
  {
    id: "case-lip-melanotic",
    category: "Oral Pathology",
    title: "Lower Lip Melanotic Pigmented Lesion Complete Excision",
    procedure: "Aesthetic wedge excision with anatomical vermilion border realignment",
    summary:
      "Pigmented melanotic lesion of the lower lip vermilion border excised with clear margins for histopathological differentiation from malignant melanoma. Repaired with microscopic vermilion realignment to prevent step deformities.",
    clinicalHighlights: [
      "Precise surgical margin clearance ensuring definitive diagnostic pathology",
      "Exact anatomical alignment of the white roll of the vermilion border",
      "Aesthetically seamless healed lip contour and natural lip fullness",
    ],
    images: [
      {
        label: "Pre-Op Markings",
        src: lipMelanoticLesionPreop,
        description:
          "High-definition surgical outline demarcating lesion margins along the lower lip vermilion.",
      },
      {
        label: "Post-Op Suture Line",
        src: lipMelanoticLesionPostop,
        description:
          "Post-operative alignment showing tension-free layered closure and perfect vermilion continuity.",
      },
    ],
  },
];

const filters: Category[] = [
  "All",
  "Oral Cancer",
  "Facial Trauma",
  "TMJ & Arthroscopy",
  "Oral Pathology",
];

function CaseCard({
  item,
  globalUnlocked,
  onOpenLightbox,
}: {
  item: CaseItem;
  globalUnlocked: boolean;
  onOpenLightbox: (item: CaseItem, initialIndex: number) => void;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [localUnlocked, setLocalUnlocked] = useState(false);

  // Card is unlocked if either global override is active OR this card was individually unlocked
  const isUnlocked = globalUnlocked || localUnlocked;
  const currentImage = item.images[activeImageIndex] ?? item.images[0];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:shadow-elevated">
      {/* Media Window */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
        {/* The Surgical Image (blurred until unlocked) */}
        <img
          src={currentImage.src}
          alt={`${item.title} - ${currentImage.label}`}
          loading="lazy"
          className={`h-full w-full object-cover transition-all duration-700 ease-out ${
            isUnlocked ? "scale-100 blur-0" : "scale-110 blur-2xl brightness-75 contrast-125"
          }`}
        />

        {/* Phase Pill Selector (visible whenever there is more than 1 image) */}
        {item.images.length > 1 && (
          <div className="absolute left-3 top-3 z-20 flex max-w-[85%] flex-wrap gap-1.5 rounded-full bg-slate-950/70 p-1 backdrop-blur-md">
            {item.images.map((img, idx) => (
              <button
                key={img.label}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex(idx);
                }}
                className={`rounded-full px-2.5 py-1 text-[10px] font-medium transition-all ${
                  activeImageIndex === idx
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {img.label}
              </button>
            ))}
          </div>
        )}

        {/* Blur Lock Overlay (Shown when Locked) */}
        {!isUnlocked && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-6 text-center text-white backdrop-blur-md bg-slate-950/65 transition-all">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 border border-white/20 text-accent shadow-inner backdrop-blur-sm">
              <Lock size={22} className="stroke-[2.2]" />
            </div>

            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Surgical Content Protected
            </p>
            <p className="mt-1 max-w-[240px] text-[11px] leading-relaxed text-slate-300">
              Clinical photograph containing intraoperative visuals. Patient identifiers are
              anonymized.
            </p>

            <button
              type="button"
              onClick={() => setLocalUnlocked(true)}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-semibold text-accent-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              <Eye size={14} />
              Unlock Clinical Image
            </button>
          </div>
        )}

        {/* Quick Re-lock & Expand Buttons (Shown when Unlocked) */}
        {isUnlocked && (
          <div className="absolute right-3 top-3 z-20 flex items-center gap-1.5">
            <button
              type="button"
              title="Expand image in lightbox"
              onClick={() => onOpenLightbox(item, activeImageIndex)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur transition-all hover:bg-slate-900 hover:scale-105"
            >
              <Maximize2 size={13} />
            </button>
            <button
              type="button"
              title="Lock / Blur image"
              onClick={() => setLocalUnlocked(false)}
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur transition-all hover:bg-slate-900 hover:scale-105"
            >
              <EyeOff size={13} />
              <span>Lock</span>
            </button>
          </div>
        )}

        {/* Bottom Image Caption Bar when Unlocked */}
        {isUnlocked && (
          <div
            onClick={() => onOpenLightbox(item, activeImageIndex)}
            className="absolute inset-x-0 bottom-0 z-20 cursor-pointer bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-3 pt-6 text-left transition-opacity hover:opacity-100"
          >
            <div className="flex items-center justify-between text-[11px] text-slate-200">
              <span className="font-medium text-accent">{currentImage.label}</span>
              <span className="text-[10px] text-slate-400">Click to expand</span>
            </div>
            <p className="mt-0.5 line-clamp-1 text-[11px] text-slate-300">
              {currentImage.description}
            </p>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="eyebrow text-[10px]">{item.category}</span>
          <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
            {item.images.length} {item.images.length === 1 ? "View" : "Phases"}
          </span>
        </div>

        <h3 className="mt-2 text-base font-semibold leading-snug text-foreground lg:text-lg">
          {item.title}
        </h3>

        <p className="mt-1 text-xs font-medium text-accent/90">{item.procedure}</p>

        <p className="mt-2.5 flex-1 text-xs leading-relaxed text-muted-foreground lg:text-sm">
          {item.summary}
        </p>

        {/* Clinical Highlights Bullet Points */}
        <div className="mt-4 border-t border-border/60 pt-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-foreground/70">
            Surgical Highlights
          </p>
          <ul className="mt-1.5 space-y-1 text-[11px] text-muted-foreground">
            {item.clinicalHighlights.slice(0, 2).map((highlight) => (
              <li key={highlight} className="flex items-start gap-1.5">
                <CheckCircle2 size={12} className="mt-0.5 shrink-0 text-accent" />
                <span className="line-clamp-2">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [globalUnlocked, setGlobalUnlocked] = useState(false);
  const [lightboxCase, setLightboxCase] = useState<{
    item: CaseItem;
    index: number;
  } | null>(null);

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(1);
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");

  const filteredCases = useMemo(() => {
    if (activeCategory === "All") return cases;
    return cases.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    if (!carouselApi) return;
    const updateScrollState = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap() + 1);
      setTotalSlides(carouselApi.scrollSnapList().length);
    };

    updateScrollState();
    carouselApi.on("select", updateScrollState);
    carouselApi.on("reInit", updateScrollState);

    return () => {
      carouselApi.off("select", updateScrollState);
      carouselApi.off("reInit", updateScrollState);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (carouselApi) {
      carouselApi.scrollTo(0, true);
    }
  }, [activeCategory, carouselApi]);

  return (
    <section id="portfolio" className="bg-surface-2 py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-2">Surgical Portfolio</p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-5xl">
              Clinical Evidence &amp; Operative Precision
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
              Documented surgical cases from Dr. Praveen Satish's operating theater. Each case
              highlights preoperative planning, meticulous anatomical execution, and restored
              function.
            </p>
          </div>

          {/* Master Blur Lock Control */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setGlobalUnlocked((prev) => !prev)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition-all ${
                globalUnlocked
                  ? "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300"
                  : "border-border bg-surface text-foreground shadow-sm hover:border-accent hover:text-accent"
              }`}
            >
              {globalUnlocked ? (
                <>
                  <Unlock size={14} className="text-amber-500" />
                  <span>Blur Lock: OFF (Revealed)</span>
                </>
              ) : (
                <>
                  <Lock size={14} className="text-accent" />
                  <span>Blur Lock: ON (Protected)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Ethical Patient Confidentiality & Medical Advisory Banner */}
        <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-border bg-surface/80 p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-accent/10 p-2 text-accent">
              <ShieldAlert size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold text-foreground">
                Clinical Content Advisory &amp; Patient Privacy Standards
              </p>
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                Sensitive patient features (including ocular regions and clinical records) have been
                de-identified according to medical ethics guidelines. Images are protected by an
                interactive blur barrier for viewer discretion.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-medium text-accent">
            <Info size={14} />
            <span>Click any card to unlock individually</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActiveCategory(f)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === f
                  ? "border-foreground bg-foreground text-background shadow-sm"
                  : "border-border bg-surface text-muted-foreground hover:border-accent hover:text-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Carousel & View Controls */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span>
              Showing {filteredCases.length}{" "}
              {filteredCases.length === 1 ? "case" : "surgical cases"}
            </span>
            {viewMode === "carousel" && totalSlides > 1 && (
              <>
                <span className="text-border">•</span>
                <span className="font-semibold text-foreground">
                  Card {currentSlide} of {totalSlides}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Switcher (Carousel vs Grid) */}
            <div className="flex items-center rounded-full border border-border bg-surface p-1 shadow-sm">
              <button
                type="button"
                title="Side-by-side Carousel View"
                onClick={() => setViewMode("carousel")}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  viewMode === "carousel"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <SlidersHorizontal size={13} />
                <span>Side by Side</span>
              </button>
              <button
                type="button"
                title="Grid View"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
                  viewMode === "grid"
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <LayoutGrid size={13} />
                <span>Grid</span>
              </button>
            </div>

            {/* Carousel Navigation Buttons */}
            {viewMode === "carousel" && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="Previous case"
                  onClick={() => carouselApi?.scrollPrev()}
                  disabled={!canScrollPrev}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition-all hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Next case"
                  onClick={() => carouselApi?.scrollNext()}
                  disabled={!canScrollNext}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground shadow-sm transition-all hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-30"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Side-by-Side Carousel or Grid View */}
        {viewMode === "carousel" ? (
          <div className="mt-4 -mx-5 px-5 sm:mx-0 sm:px-0">
            <Carousel
              opts={{
                align: "start",
                loop: false,
                dragFree: true,
              }}
              setApi={setCarouselApi}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {filteredCases.map((c) => (
                  <CarouselItem
                    key={c.id}
                    className="pl-6 basis-[88%] sm:basis-[70%] md:basis-[48%] lg:basis-[33.333%]"
                  >
                    <div className="h-full py-2">
                      <CaseCard
                        item={c}
                        globalUnlocked={globalUnlocked}
                        onOpenLightbox={(item, idx) => setLightboxCase({ item, index: idx })}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCases.map((c) => (
              <CaseCard
                key={c.id}
                item={c}
                globalUnlocked={globalUnlocked}
                onOpenLightbox={(item, idx) => setLightboxCase({ item, index: idx })}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxCase && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-lg lg:p-10"
        >
          <div className="relative flex max-h-[95vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 text-white">
              <div>
                <span className="eyebrow text-[10px] text-accent">
                  {lightboxCase.item.category}
                </span>
                <h3 className="text-sm font-semibold sm:text-base">{lightboxCase.item.title}</h3>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={() => setLightboxCase(null)}
                className="rounded-full bg-white/10 p-2 text-slate-300 transition-colors hover:bg-white/20 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex flex-1 flex-col overflow-y-auto lg:flex-row">
              {/* Image Preview Container */}
              <div className="relative flex flex-1 items-center justify-center bg-black p-4">
                <img
                  src={lightboxCase.item.images[lightboxCase.index]?.src}
                  alt={lightboxCase.item.title}
                  className="max-h-[60vh] w-auto max-w-full rounded-lg object-contain lg:max-h-[70vh]"
                />

                {/* Left/Right Arrows for Multi-image cases */}
                {lightboxCase.item.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous view"
                      onClick={() =>
                        setLightboxCase((prev) =>
                          prev
                            ? {
                                ...prev,
                                index:
                                  (prev.index - 1 + prev.item.images.length) %
                                  prev.item.images.length,
                              }
                            : null,
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur transition-all hover:bg-white/30"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      aria-label="Next view"
                      onClick={() =>
                        setLightboxCase((prev) =>
                          prev
                            ? {
                                ...prev,
                                index: (prev.index + 1) % prev.item.images.length,
                              }
                            : null,
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2.5 text-white backdrop-blur transition-all hover:bg-white/30"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
              </div>

              {/* Sidebar with Phase Details */}
              <div className="w-full border-t border-white/10 bg-slate-900/95 p-5 text-slate-200 lg:w-80 lg:border-l lg:border-t-0 lg:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                  Surgical Phase
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {lightboxCase.item.images.map((img, idx) => (
                    <button
                      key={img.label}
                      type="button"
                      onClick={() => setLightboxCase({ ...lightboxCase, index: idx })}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                        lightboxCase.index === idx
                          ? "bg-accent text-accent-foreground"
                          : "bg-white/10 text-slate-300 hover:bg-white/20"
                      }`}
                    >
                      {img.label}
                    </button>
                  ))}
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold text-white">Current View</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">
                    {lightboxCase.item.images[lightboxCase.index]?.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold text-white">Procedure Summary</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {lightboxCase.item.summary}
                  </p>
                </div>

                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold text-white">Key Highlights</p>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
                    {lightboxCase.item.clinicalHighlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-1.5">
                        <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-accent" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
