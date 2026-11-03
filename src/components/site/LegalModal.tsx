import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ShieldCheck, FileText, Lock, Scale, AlertTriangle, Building2 } from "lucide-react";
import type { LegalTab } from "@/lib/legal";

interface LegalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab?: LegalTab;
}

export function LegalModal({ open, onOpenChange, defaultTab = "disclaimer" }: LegalModalProps) {
  const [currentTab, setCurrentTab] = useState<LegalTab>(defaultTab);

  useEffect(() => {
    setCurrentTab(defaultTab);
  }, [defaultTab]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[88vh] overflow-hidden flex flex-col p-0 gap-0 border-border bg-surface text-foreground shadow-2xl">
        <DialogHeader className="p-5 sm:p-6 pb-4 border-b border-border bg-surface-2 text-left">
          <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck size={16} />
            <span>Statutory &amp; Medical Regulatory Disclosures</span>
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-1">
            Legal, Ethics &amp; Patient Privacy Center
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground mt-1">
            Practice governance for Dr. Praveen Satish in accordance with the Dental Council of
            India (DCI), National Medical Commission (NMC), and Digital Personal Data Protection Act
            (DPDP Act 2023).
          </DialogDescription>
        </DialogHeader>

        <Tabs
          value={currentTab}
          onValueChange={(val) => setCurrentTab(val as LegalTab)}
          className="flex-1 flex flex-col overflow-hidden"
        >
          <div className="border-b border-border px-4 sm:px-6 bg-surface-2/50 overflow-x-auto">
            <TabsList className="bg-transparent h-11 p-0 gap-2 sm:gap-4 justify-start w-full">
              <TabsTrigger
                value="disclaimer"
                className="rounded-none border-b-2 border-transparent px-2.5 sm:px-3 py-2 text-xs font-semibold data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-accent data-[state=active]:shadow-none"
              >
                <AlertTriangle size={13} className="mr-1.5 shrink-0" />
                Medical Disclaimer
              </TabsTrigger>
              <TabsTrigger
                value="consent"
                className="rounded-none border-b-2 border-transparent px-2.5 sm:px-3 py-2 text-xs font-semibold data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-accent data-[state=active]:shadow-none"
              >
                <FileText size={13} className="mr-1.5 shrink-0" />
                Case Consent &amp; Photos
              </TabsTrigger>
              <TabsTrigger
                value="privacy"
                className="rounded-none border-b-2 border-transparent px-2.5 sm:px-3 py-2 text-xs font-semibold data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-accent data-[state=active]:shadow-none"
              >
                <Lock size={13} className="mr-1.5 shrink-0" />
                Privacy (DPDP Act)
              </TabsTrigger>
              <TabsTrigger
                value="terms"
                className="rounded-none border-b-2 border-transparent px-2.5 sm:px-3 py-2 text-xs font-semibold data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-accent data-[state=active]:shadow-none"
              >
                <Scale size={13} className="mr-1.5 shrink-0" />
                Terms &amp; Jurisdiction
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 text-sm text-foreground/90 leading-relaxed">
            {/* TAB 1: MEDICAL & SURGICAL DISCLAIMER */}
            <TabsContent value="disclaimer" className="space-y-4 m-0 focus-visible:outline-none">
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-xs text-foreground space-y-1">
                <p className="font-semibold text-destructive flex items-center gap-1.5">
                  <AlertTriangle size={14} />
                  Emergency Medical Notice (Immediate Action)
                </p>
                <p className="text-muted-foreground leading-normal">
                  This website is not an emergency response service. If you or someone you are
                  assisting is experiencing an acute medical emergency, acute maxillofacial trauma,
                  active uncontrolled hemorrhage, acute facial swelling causing airway compromise,
                  or difficulty breathing, please immediately call <strong>108 / 112</strong> (in
                  India) or proceed directly to the nearest hospital emergency/casualty department.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  1. Informational &amp; Educational Purpose Only
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  All content, surgical case presentations, radiological imaging, operative notes,
                  academic articles, and textual commentary published on this website are provided
                  strictly for general informational, educational, and academic reference. Nothing
                  on this site constitutes professional medical, dental, or surgical advice,
                  diagnosis, or treatment planning.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  2. No Doctor-Patient Relationship
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Reviewing this website, submitting an inquiry via electronic mail, or contacting
                  the consultation desk by phone does <strong>not</strong> establish a
                  doctor-patient relationship between you and Dr. Praveen Satish. A formal
                  doctor-patient relationship is legally constituted solely upon an in-person
                  clinical examination, diagnostic review, and execution of formal institutional
                  admission or outpatient consultation protocols at an accredited hospital facility.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  3. Individual Clinical Outcome Variability (Zero Guarantees)
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  In compliance with the Dental Council of India (Revised Dentists Code of Ethics)
                  and National Medical Commission regulations, no warranty, representation, or
                  guarantee of any specific surgical, anatomical, or aesthetic outcome is made.
                  Every patient’s anatomy, pathology, tissue healing dynamics, systemic
                  comorbidities, and response to surgical interventions are biologically unique.
                  Outcomes shown in case records reflect individual patient journeys and must not be
                  construed as an assurance of identical results for other individuals.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  4. Non-Solicitation &amp; Professional Ethics
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  This portal is maintained in compliance with the ethics regulations prohibiting
                  commercial advertising or solicitation of patients. Its purpose is to
                  transparently present Dr. Praveen Satish’s verifiable qualifications, academic
                  peer-reviewed contributions, clinical hospital affiliations, and contact
                  coordinates for peer referrals and patient appointments.
                </p>
              </div>
            </TabsContent>

            {/* TAB 2: PATIENT CONSENT & CLINICAL PHOTOGRAPHY */}
            <TabsContent value="consent" className="space-y-4 m-0 focus-visible:outline-none">
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  1. Documented Patient Informed Consent
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  All clinical photographs, diagnostic radiographs, intra-operative records, and
                  histological documentation presented in the Surgical Portfolio have been published
                  with documented informed consent obtained from the patients (or legal guardians in
                  pediatric/trauma cases) specifically permitting academic, scientific, and medical
                  educational presentation.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  2. Patient Anonymization &amp; Privacy Standards
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  In accordance with the Declaration of Helsinki, Indian Council of Medical Research
                  (ICMR) biomedical ethics, and medical privacy norms, all identifying patient
                  features—including names, registration identifiers, institutional file numbers,
                  and sensitive facial landmarks (such as eye/ocular zones where irrelevant to
                  reconstruction)—have been de-identified, cropped, or masked.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  3. Protective Blur Filter &amp; Viewer Discretion
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  A high-grade interactive blur shield is enabled by default across all clinical and
                  surgical case records to ensure sensitive anatomical content is viewed strictly by
                  voluntary choice. By unlocking or viewing these clinical records, the user
                  confirms that they are doing so solely for genuine informational or clinical
                  educational reference.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  4. Strict Intellectual Property &amp; Anti-Piracy Warning
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  All operative photographs, radiographs, technical diagrams, and surgical texts are
                  the exclusive intellectual property of Dr. Praveen Satish and associated clinical
                  units. Any unauthorized downloading, screen recording, scraping, reproduction,
                  re-publishing on social media, or commercial exploitation is strictly prohibited
                  and constitutes a criminal violation of the Indian Copyright Act, 1957 and the
                  Information Technology Act, 2000.
                </p>
              </div>
            </TabsContent>

            {/* TAB 3: PRIVACY & DATA PROTECTION (DPDP ACT 2023) */}
            <TabsContent value="privacy" className="space-y-4 m-0 focus-visible:outline-none">
              <div className="rounded-xl border border-accent/20 bg-accent/5 p-4 text-xs text-foreground space-y-1">
                <p className="font-semibold text-accent flex items-center gap-1.5">
                  <Lock size={14} />
                  Digital Personal Data Protection Act (DPDP Act 2023) Statement
                </p>
                <p className="text-muted-foreground leading-normal">
                  We are committed to the highest standards of data security, confidentiality, and
                  ethical medical data governance in full compliance with the Digital Personal Data
                  Protection Act, 2023 and the Information Technology (SPDI) Rules, 2011.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  1. Nature of Data Collected
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  When you voluntarily contact Dr. Praveen Satish via telephone, electronic mail, or
                  appointment inquiry channels, we may collect: your full name, contact phone
                  number, email address, referring physician’s details, and any health-related notes
                  or diagnostic reports you elect to transmit for triage purposes.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  2. Purpose of Processing
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Your personal and clinical inquiry information is utilized strictly to: (a)
                  facilitate outpatient consultation scheduling at our affiliated hospital locations
                  (Healthway Hospitals, Optimus Hospital, Apex Care Hospital), (b) coordinate
                  inter-specialty surgical referrals, and (c) respond to verified patient queries.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  3. Zero Commercial Monetization or Third-Party Sale
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  We maintain a strict zero-monetization policy. Your health information and contact
                  coordinates are <strong>never</strong> sold, rented, leased, or shared with
                  third-party marketers, insurance brokers, or commercial data brokers under any
                  circumstances.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  4. Transmission Risks &amp; Data Security
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  While our administrative channels employ industry-standard protocols, standard
                  internet emails are not end-to-end encrypted medical communication channels. You
                  acknowledge this inherent risk when transmitting unencrypted personal health
                  information. For sensitive records, direct in-person presentation during clinical
                  OPD hours is strongly advised.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  5. Data Principal Rights &amp; Grievance Redressal
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Under the DPDP Act 2023, you retain the right to access, rectify, or request the
                  erasure of your administrative inquiry data. For inquiries regarding data
                  protection, contact our administrative desk at:{" "}
                  <a
                    href="mailto:praveenmaxfacs@icloud.com"
                    className="text-accent underline font-medium"
                  >
                    praveenmaxfacs@icloud.com
                  </a>
                  .
                </p>
              </div>
            </TabsContent>

            {/* TAB 4: TERMS OF USE & JURISDICTION */}
            <TabsContent value="terms" className="space-y-4 m-0 focus-visible:outline-none">
              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  1. Agreement to Terms
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  By accessing, browsing, or utilizing any portion of this website, you explicitly
                  agree to be bound by these Terms of Use, Disclaimers, and Privacy Policies. If you
                  do not agree to these terms in full, your sole remedy is to immediately cease
                  browsing this site.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  2. Limitation of Legal Liability
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  To the maximum extent permissible under applicable law, Dr. Praveen Satish, his
                  clinical associates, staff, and affiliated hospitals (Healthway, Optimus, Apex
                  Care) disclaim all liability for any direct, indirect, incidental, punitive, or
                  consequential damages arising out of your access to, reliance upon, or inability
                  to access the informational content provided on this website.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  3. Hospital Affiliations &amp; Institutional Governance
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Clinical procedures, surgeries, and admissions are hosted within and governed by
                  the independent institutional policies, bylaws, and clinical audit boards of the
                  respective licensed hospital facilities:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 text-xs">
                  <div className="rounded-lg border border-border bg-surface-2 p-2.5">
                    <p className="font-semibold text-foreground">Healthway Hospitals</p>
                    <p className="text-muted-foreground text-[11px]">Old Goa, Goa, India</p>
                  </div>
                  <div className="rounded-lg border border-border bg-surface-2 p-2.5">
                    <p className="font-semibold text-foreground">Optimus Hospital</p>
                    <p className="text-muted-foreground text-[11px]">Mapusa, Goa, India</p>
                  </div>
                  <div className="rounded-lg border border-border bg-surface-2 p-2.5">
                    <p className="font-semibold text-foreground">Apex Care Hospital</p>
                    <p className="text-muted-foreground text-[11px]">Panjim, Goa, India</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider text-accent mb-1.5">
                  4. Governing Law &amp; Exclusive Territorial Jurisdiction
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  All matters, disputes, or claims arising out of or related to the use of this
                  website, clinical information, or electronic communications shall be governed
                  exclusively by the laws of the Republic of India. You irrevocably agree that the
                  competent courts located at <strong>Panaji, North Goa, Goa, India</strong> shall
                  have exclusive subject-matter and territorial jurisdiction over any and all legal
                  proceedings.
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <div className="border-t border-border p-4 bg-surface-2/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Building2 size={14} className="text-accent shrink-0" />
            <span>State Dental Council / Dental Council of India (DCI) Regulated</span>
          </div>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background hover:bg-foreground/90 transition-colors cursor-pointer"
          >
            I Understand &amp; Acknowledge
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function LegalModalController() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<LegalTab>("disclaimer");

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ tab?: LegalTab }>;
      if (customEvent.detail?.tab) {
        setTab(customEvent.detail.tab);
      }
      setOpen(true);
    };

    window.addEventListener("open-legal-modal", handleOpen);
    return () => window.removeEventListener("open-legal-modal", handleOpen);
  }, []);

  return <LegalModal open={open} onOpenChange={setOpen} defaultTab={tab} />;
}
