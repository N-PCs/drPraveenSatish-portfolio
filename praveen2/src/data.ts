import { SurgicalDomain, CaseStudy, TimelineEvent, Publication } from './types';

export const SURGICAL_DOMAINS: SurgicalDomain[] = [
  {
    id: 'oncology',
    title: 'Oral Oncology & Ablative Surgery',
    subtitle: 'Head & Neck Cancer Resections',
    description: 'Aggressive oncological resections of oral cavity squamous cell carcinomas, salivary tumors, and bone-invasive sarcomas.',
    longDescription: 'Comprehensive oncological management of head and neck cancers, prioritizing radical tumor clearance (wide local excision, segmental mandibulectomies) alongside anatomical and functional preservation of vital surrounding tissues.',
    highlights: [
      'Wide Local Excision of Oral Squamous Cell Carcinoma (OSCC)',
      'Segmental & Marginal Mandibulectomy',
      'Selective & Modified Radical Neck Dissections (Levels I-V)',
      'Management of Complex Maxillary & Sinus Malignancies',
      'Salivary Gland Tumor Resection (Parotidectomy)'
    ],
    clinicalSignificance: 'Achieving safe oncological margins while carefully preserving sensory and motor nerves, ensuring optimal conditions for subsequent structural reconstruction.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'reconstruction',
    title: 'Advanced Reconstructive Surgery',
    subtitle: 'Locoregional Flaps & Microdissection',
    description: 'Restoring oral competence, function, and facial appearance using highly specialized pedicled tissue transfers.',
    longDescription: 'Restoring facial symmetry, mastication, and speech pathways after tumor ablative surgery or trauma. Focuses on local, regional, and myofascial flaps, and strategic microdissection techniques to reconstruct the tongue, palate, and jaw.',
    highlights: [
      'Pectoralis Major Myocutaneous (PMMC) Flap Reconstruction',
      'Nasolabial & Buccal Fat Pad Local Flap Procedures',
      'Temporalis Myofascial Flaps for Maxillary Defects',
      'Functional Reconstruction of Tongue Defects (K-Technique)',
      'Anatomical Restructuring of Oral Competence & Sphincter'
    ],
    clinicalSignificance: 'Transitioning the patient smoothly from a debilitating postoperative state back to fluent oral communication and swallowing.',
    iconName: 'Sparkles'
  },
  {
    id: 'trauma',
    title: 'Maxillofacial Trauma Surgery',
    subtitle: 'Pan-Facial Fractures & Rigid Fixation',
    description: 'Reconstruction of complex craniomaxillofacial skeletal injuries, restoring pre-injury alignment, speech, and mastication.',
    longDescription: 'Surgical management of acute and secondary pan-facial trauma. Utilizes advanced surgical approaches for anatomic reductions and internal rigid fixation of zygomaticomaxillary, orbital, and mandibular skeletal fractures.',
    highlights: [
      'Open Reduction & Internal Fixation (ORIF) of Mandible & Maxilla',
      'Orbital Floor Reconstruction using Titanium Mesh and Autologous Bone',
      'Management of Condylar Fractures of the Temperomandibular Joint',
      'Reduction of Zygomaticomaxillary Complex (ZMC) Fractures',
      'Emergency Management of Craniomaxillofacial Skeletal Trauma'
    ],
    clinicalSignificance: 'Precision alignment matching occlusion exactly, avoiding cranial asymmetry, double vision (diplopia), or chewing disorders.',
    iconName: 'Activity'
  },
  {
    id: 'tmj',
    title: 'TMJ Surgery & Arthroscopy',
    subtitle: 'Lysis, Lavage, and Total Joint Replacement',
    description: 'Resolving severe jaw lock, arthritic degradation, and chronic TMJ disorders using minimally invasive to total joint replacements.',
    longDescription: 'Highly specialized TMJ interventions ranging from diagnostics and therapeutic joint arthroscopy (lysis, lavage) to open TMJ arthroplasty, treatment of recurrent ankylosis, and custom or stock total joint reconstruction.',
    highlights: [
      'Minimally Invasive TMJ Arthroscopy & Lysis/Lavage',
      'Meniscectomy & TMJ Disc Repositioning/Anchor Plasty',
      'Release of TMJ Bony Ankylosis with Temporalis Interposition Flap',
      'Custom Patient-Specific Total Joint Replacement (TJR)',
      'Management of Condylar Hyperplasia and TMJ Internal Derangement'
    ],
    clinicalSignificance: 'Restoring optimal inter-incisal distance, relieving chronic temporomandibular pain, and improving standard chewing mechanics.',
    iconName: 'Maximize2'
  },
  {
    id: 'orthognathic',
    title: 'Orthognathic & Structural Jaw Surgery',
    subtitle: 'Corrective Jaw Surgery',
    description: 'Repositioning the maxilla and mandible to correct facial asymmetry, severe bite malocclusion, and sleep apnea.',
    longDescription: 'Aesthetic and functional transformation through surgical repositioning of the middle and lower facial skeletal framework. Coordinates deeply with orthodontics to solve congenital dentofacial deformities and sleep apnea.',
    highlights: [
      'Le Fort I Osteotomy for Maxillary Repositioning',
      'Bilateral Sagittal Split Osteotomy (BSSO) of the Mandible',
      'Genioplasty / Chin Sculpting and Advancement',
      'Correction of Hemifacial Microsomia & Facial Asymmetry',
      'Surgical Expansion of the Airway for Obstructive Sleep Apnea'
    ],
    clinicalSignificance: 'Simultaneous correction of chewing function, severe airway restriction, and proportional facial aesthetics.',
    iconName: 'Activity'
  },
  {
    id: 'implantology',
    title: 'Advanced Implantology & Minor Procedures',
    subtitle: 'Aesthetic Dental Reconstruction & Bone Grafting',
    description: 'Restorations in compromise bone sites using advanced sinus lifts, ridge splits, and zygomatic implants.',
    longDescription: 'Rehabilitating complete or partial tooth loss using advanced implant fixtures in extremely resorbed bone. Includes ridge augmentations, sinus lift procedures, and computer-guided implant planning for immediate functional loading.',
    highlights: [
      'Anterior Maxillary Aesthetic Single-Implant Restorations',
      'Zygomatic & Pterygoid Implants for Severe Maxillary Resorption',
      'Direct and Indirect Sinus Lift with Bone Grafting (Autologous/Xenograft)',
      'Alveolar Ridge Split & Expansion Techniques',
      'Surgical Removal of Impacted Third Molars (Wisdom Teeth)'
    ],
    clinicalSignificance: 'Providing permanent structural support for functional prosthetics even in cases of severe long-term bone atrophy.',
    iconName: 'Maximize2'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case_01',
    title: 'Microvascular Jaw Reconstruction',
    subtitle: 'Mandibular Ameloblastoma Ablation & Fibula Free Flap',
    domainId: 'reconstruction',
    radiographUrl: '/src/assets/images/radiograph_case1_1780592027633.png',
    intraOpGraphicUrl: '/src/assets/images/resection_prep_1780592043662.png',
    patientAgeGender: '34-year-old Female',
    diagnosis: 'Recurrent Aggressive Mandibular Ameloblastoma (Right Body & Ramus)',
    procedureText: 'Segmental resection of right mandible with 1.5cm healthy bone margins. Concurrently harvested microvascular vascularized fibula free flap, shaped using 3D-printed resection guides, and anchored using customized reconstruction titanium plates. Microsurgical anastomosis of facial artery and facial vein.',
    clinicalOutcome: 'Complete tumor clearance with negative pathological margins. Excellent oral function restored, allowing normal diet and speech at 3 months post-op. Complete aesthetic symmetry of lower face jaw line.',
    keyTakeaway: 'The integration of virtual surgical planning (VSP) and CAD/CAM guides reduced operative ischemia time by 42 minutes, ensuring optimal microvascular bone graft survival and flawless cosmetic symmetry.'
  },
  {
    id: 'case_02',
    title: 'Orbito-Maxillary Trauma Restoration',
    subtitle: 'Comminuted Zygomaticomaxillary Complex (ZMC) Fracture',
    domainId: 'trauma',
    radiographUrl: '/src/assets/images/resection_prep_1780592043662.png',
    intraOpGraphicUrl: '/src/assets/images/radiograph_case1_1780592027633.png',
    patientAgeGender: '45-year-old Male',
    diagnosis: 'Severe Traumatic Right ZMC Fracture and Orbital Floor Blowout from high-velocity impact',
    procedureText: 'Transconjunctival and intraoral approach to reduce orbital floor and anterior maxillary walls. Pre-bent titanium mesh was placed to support the orbital globe, restoring facial projection and intraorbital volume without external scars.',
    clinicalOutcome: 'Immediate resolution of diplopia (double vision) and infraorbital nerve numbness. Normal eyeball projection (no enophthalmos) with balanced horizontal and skeletal projection.',
    keyTakeaway: 'Early transconjunctival internal rigid fixation avoids any visible aesthetic facial scarring while guaranteeing the return of normal orbital volume and binocular vision.'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  // Leadership & Administration
  { id: 'admin_1', year: 'Present', title: 'Senate Member', institution: 'IBSCOMS', category: 'leadership', description: 'Governing board member establishing certification protocols.', highlight: 'Global Certification Standards' },
  { id: 'admin_2', year: '2023 - 2024', title: 'President', institution: 'Goa State Chapter of AOMSI', category: 'leadership', description: 'Led state-level oral and maxillofacial surgical initiatives and continued medical education programs.', highlight: 'State Surgical Leadership' },
  { id: 'admin_3', year: '2021 - 2022', title: 'Vice President', institution: 'Goa State Chapter of AOMSI', category: 'leadership', description: 'Supported presidential duties and coordinated regional conferences.', highlight: 'Regional Leadership' },
  { id: 'admin_4', year: '2019', title: 'Scientific Chair', institution: 'AOMSI Master Class', category: 'leadership', description: 'Curated and managed the scientific program for the national master class.', highlight: 'Scientific Program Direction' },
  { id: 'admin_5', year: '2015 - 2016', title: 'President', institution: 'IDA Goa State Branch', category: 'leadership', description: 'Presided over the Indian Dental Association state branch.', highlight: 'Dental Association Leadership' },
  { id: 'admin_6', year: '2014 - 2019', title: 'Secretary', institution: 'Goa chapter Of AOMSI', category: 'leadership', description: 'Managed administrative and organizational duties for the state chapter.', highlight: 'Organizational Management' },
  
  // Employment
  { id: 'emp_1', year: '2009 - 2026', title: 'Consultant Maxillofacial Surgeon', institution: 'Goa Medical College and Hospital', category: 'academic', description: 'Consultant Surgeon handling complex maxillofacial trauma and oncology cases.', highlight: 'Tertiary Care Consultant' },
  { id: 'emp_2', year: '2014 - 2026', title: 'Assistant Professor, Dept of OMFS', institution: 'Goa Dental College and Hospital', category: 'academic', description: 'Academic faculty responsible for training postgraduate residents.', highlight: 'Postgraduate Educator' },
  { id: 'emp_3', year: '2009 - 2014', title: 'Senior Lecturer, Dept of OMFS', institution: 'Goa Dental College and Hospital', category: 'academic', description: 'Lectured undergraduate and postgraduate dental students in OMFS.', highlight: 'Academic Lecturer' },
  
  // Education & Training
  { id: 'edu_1', year: '2024 - 2025', title: 'Diploma in Oral Oncology', institution: 'AOCMF', category: 'fellowship', description: 'Advanced specialized training in oral oncological resections.', highlight: 'Oncology Specialization' },
  { id: 'edu_2', year: '2023', title: 'Diploma of Fellowship', institution: 'FDS RCPS (Glasgow)', category: 'fellowship', description: 'Elected Fellow of the Royal College of Physicians and Surgeons of Glasgow.', highlight: 'International Fellowship' },
  { id: 'edu_3', year: '2015', title: 'Fellowship in Cranio-Maxillo-Facial Surgery', institution: 'University Klinik Innsbruck, Austria', category: 'fellowship', description: 'European fellowship focusing on complex facial reconstruction.', highlight: 'Craniofacial Reconstruction' },
  { id: 'edu_4', year: '2004 - 2007', title: 'Master of Dental Surgery (MDS): OMFS', institution: 'Rajiv Gandhi University of Health Sciences', category: 'credential', description: 'Passed with first class marks. Specialized in Oral & Maxillofacial Surgery.', highlight: 'Highest Marks Award' }
];

export const PUBLICATIONS: Publication[] = [
  // ── Peer-Reviewed Journals ──
  {
    id: 'pub_1',
    type: 'journal',
    year: '2021',
    title: 'Functional reconstruction of lateral oral tongue defects using K\'s technique: Technical Note.',
    venue: 'Advances in Oral and Maxillofacial Surgery',
    meta: 'Kumar Praveen, Gurrala Sthita, Dhupar Vikas, Akkara Francis',
    doi: '10.1016/j.adoms.2021.100038',
  },
  {
    id: 'pub_2',
    type: 'journal',
    year: '2020',
    title: 'Hemangiolymphangioma of buccal cheek - a rare case report with review of literature.',
    venue: 'Journal of Dental Health, Oral Disorders & Therapy',
    meta: 'Khaunte Divyachampa, Kumar Praveen, Dhupar Vikas, Naik Mohan',
    doi: '10.15406/jdhodt.2020.11.00534',
  },
  {
    id: 'pub_3',
    type: 'journal',
    year: '2020',
    title: 'A Randomized Control Trial to Assess Intraoperative and Postoperative Outcomes of Colorado Microdissection Needle Versus Conventional Surgical Knife in Neck Dissection.',
    venue: 'Journal of Maxillofacial and Oral Surgery',
    meta: 'Kumar Praveen, Rodrigues Edlyn, Dhupar Vikas, Gurrala Sthita',
    doi: '10.1007/s12663-020-01377-0',
  },
  {
    id: 'pub_4',
    type: 'journal',
    year: '2018',
    title: 'Fractures of Maxillary Tuberosity during Extraction of Maxilloary Molar - A Case Report and Review.',
    venue: 'Medico Research Chronicles',
    meta: 'Naik Mohan, Dhupar Vikas, Akkara Francis, Kumar Praveen',
    doi: '10.26838/MEDRECH.2018.5.5.445',
  },
  {
    id: 'pub_5',
    type: 'journal',
    year: '2017',
    title: 'Tracheal Tube Blockage by Fractured Middle Turbinate During Nasal Intubation: A Rare Airway Cmplication.',
    venue: 'Journal of Maxillofacial and Oral Surgery',
    meta: 'Kumar Praveen, Akkara Francis, Dhupar Vikas',
    doi: '10.1007/s12663-017-1049-0',
  },
  {
    id: 'pub_6',
    type: 'journal',
    year: '2015',
    title: 'Foreign Body in the Orbital Floor: A Case Report.',
    venue: 'Journal of Maxillofacial and Oral Surgery',
    meta: 'Kumar G. et al.',
  },
  {
    id: 'pub_7',
    type: 'journal',
    year: '2014',
    title: 'Eruption Status Of Third Molar And Its Possible Influence On The Location Of Mandibular Angle Fracture',
    venue: 'J.Maxillofac.Oral Surg.',
    meta: 'Praveen Satish Kumar et al.',
  },
  // ── Invited International Lectures ──
  {
    id: 'lec_1',
    type: 'lecture',
    year: '2025',
    title: 'Feasibility and functional outcome of Transpositional flap for reconstruction of medium sized ablative tongue defects',
    venue: 'ICOMS',
    meta: 'Singapore',
  },
  {
    id: 'lec_2',
    type: 'lecture',
    year: '2025',
    title: 'Correlation between depth of invasion and nodal metastasis in OSCC- Effect on DFS And OS',
    venue: 'AFCOMS',
    meta: 'Adis Ababa, Ethiopia',
  },
  {
    id: 'lec_3',
    type: 'lecture',
    year: '2024',
    title: 'Moderator – Reconstruction of Head and Neck Ablative Defects',
    venue: 'ACOMS',
    meta: 'Chennai, India',
  },
  {
    id: 'lec_4',
    type: 'lecture',
    year: '2023',
    title: 'Panellist – Maxillofacial Trauma',
    venue: 'MIDCOMS',
    meta: 'Loni, Maharashtra',
  },
];
