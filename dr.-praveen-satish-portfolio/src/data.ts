import { SurgicalDomain, CaseStudy, TimelineEvent, Publication } from './types';

export const SURGICAL_DOMAINS: SurgicalDomain[] = [
  {
    id: 'oncology',
    title: 'Oral Oncology & Ablative Surgery',
    description: 'Advanced tumor resections, jaw cancer therapeutics, and precancerous lesion excisions with strict margin controls.',
    longDescription: 'Dr. Praveen Satish provides comprehensive diagnostic and surgical therapeutic management for malignant and benign tumors of the oral cavity and surrounding structures. Utilizing intraoperative margin monitoring and cutting-edge medical planning, therapy focuses on maximizing local control while optimizing conditions for immediate functional reconstruction.',
    iconName: 'ShieldAlert',
    highlights: [
      'Edge-clearance precision resections',
      'Minimally invasive sentinel node biopsy',
      'Comprehensive neck dissection management',
      'Precancerous status screening & laser ablations'
    ]
  },
  {
    id: 'reconstruction',
    title: 'Advanced Reconstructive Flaps',
    description: 'Complex microvascular free flaps and regional pedicled flaps restoring critical oral functions, occlusion, and facial harmony.',
    longDescription: 'Restoring facial symmetry, mastication, and speech pathways after tumor ablative surgery or trauma. Dr. Satish specializes in customizing osteocutaneous free flaps (such as fibula, iliac crest) and soft tissue free flaps (anterolateral thigh, radial forearm) to perfectly match the patient’s anatomical defects.',
    iconName: 'Sparkles',
    highlights: [
      'Microvascular free fibula jaw mapping',
      'Anterolateral Thigh (ALT) soft tissue flaps',
      'Computer-aided custom plates & Guides (CAD/CAM)',
      'Simultaneous dental implant reconstruction'
    ]
  },
  {
    id: 'trauma',
    title: 'Maxillofacial Trauma & Rigid Fixation',
    description: 'Emergency and delayed secondary correction of skull, orbital, and jaw fractures utilizing customized titanium plating.',
    longDescription: 'Treating complex facial skeleton trauma with dual-board precision, minimizing visible external scars while restoring perfect dental alignment (occlusion) and orbital volumes. Using virtual surgical planning (VSP) to pre-bend premium titanium load-sharing plates for custom anatomical fit.',
    iconName: 'Activity',
    highlights: [
      'Comminuted mandibular & subcondylar fractures',
      'Orbitomalar complex re-contouring & mesh',
      'Internal rigid fixation with transoral access',
      '3D-planned secondary post-traumatic corrections'
    ]
  },
  {
    id: 'tmj',
    title: 'TMJ Arthroscopy & Joint Replacement',
    description: 'Restorative diagnostics and complete surgical relief for severe TMJ ankylosis, arthrose, and persistent pain syndromes.',
    longDescription: 'Providing elite diagnostic arthroscopy, joint lavage, and complete customized joint replacements (TMJR) for patients suffering from persistent temporomandibular joint ankylosis, internal disc derangements, or rheumatoid joint destruction.',
    iconName: 'Maximize2',
    highlights: [
      'Minimally invasive TMJ lysis & lavage',
      'Alloplastic custom-made joint replacement',
      'Autogenous bone grafts for TMJ ankylosis',
      'Trigger point & arthrocentesis relief'
    ]
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
  // Education
  { year: '2024', title: 'Diploma in Oral Oncology', institution: 'AOCMF', description: 'Specialized advanced training.', type: 'academic' },
  { year: '2023', title: 'Diploma of Fellowship', institution: 'FDS RCPS (Glasgow)', description: 'Fellow of the Royal College of Physicians and Surgeons.', type: 'academic' },
  { year: '2015', title: 'Fellowship in CMF Surgery', institution: 'University Klinik Innsbruck, Austria', description: 'Specialized Cranio-Maxillofacial Surgery training.', type: 'academic' },
  { year: '2007', title: 'MDS: Oral & Maxillofacial Surgery', institution: 'Rajiv Gandhi University of Health Sciences', description: 'Passed with first class marks.', type: 'academic' },

  // Employment
  { year: '2009 - 2026', title: 'Consultant Maxillofacial Surgeon', institution: 'Goa Medical College and Hospital', description: 'Handling complex trauma and oncology cases.', type: 'clinical' },
  { year: '2014 - 2026', title: 'Assistant Professor, Dept of OMFS', institution: 'Goa Dental College and Hospital', description: 'Academic teaching and surgical guidance.', type: 'academic' },

  // Leadership
  { year: 'Present', title: 'Senate Member & Exam Director', institution: 'IBSCOMS', description: 'International Board Certification direction.', type: 'leadership' },
  { year: '2023 - 2024', title: 'President', institution: 'Goa State Chapter of AOMSI', description: 'Led state-level oral and maxillofacial surgical initiatives.', type: 'leadership' },
  { year: '2015 - 2016', title: 'President', institution: 'IDA Goa State Branch', description: 'Presided over the Indian Dental Association state branch.', type: 'leadership' },
  { year: '2014 - 2019', title: 'Secretary', institution: 'Goa chapter Of AOMSI', description: 'State-level organizational administration.', type: 'leadership' }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub_1',
    title: 'Functional reconstruction of lateral oral tongue defects using K’s technique: Technical Note.',
    journal: 'Advances in Oral and Maxillofacial Surgery',
    year: '2021',
    authors: 'Kumar Praveen, Gurrala Sthita, Dhupar Vikas, Akkara Francis',
    abstract: 'Technical note on an innovative method for functional volume restoration.',
    doi: '10.1016/j.adoms.2021.100038',
    category: 'reconstruction'
  },
  {
    id: 'pub_2',
    title: 'Hemangiolymphangioma of buccal cheek - a rare case report with review of literature.',
    journal: 'Journal of Dental Health, Oral Disorders & Therapy',
    year: '2020',
    authors: 'Khaunte Divyachampa, Kumar Praveen, Dhupar Vikas, Naik Mohan',
    abstract: 'Review and presentation of a rare vascular anomaly case.',
    doi: '10.15406/jdhodt.2020.11.00534',
    category: 'oncology'
  },
  {
    id: 'pub_3',
    title: 'A Randomized Control Trial to Assess Intraoperative and Postoperative Outcomes of Colorado Microdissection Needle Versus Conventional Surgical Knife in Neck Dissection.',
    journal: 'Journal of Maxillofacial and Oral Surgery',
    year: '2020',
    authors: 'Kumar Praveen, Rodrigues Edlyn, Dhupar Vikas, Gurrala Sthita',
    abstract: 'Evaluation of surgical instrument outcomes in neck dissections.',
    doi: '10.1007/s12663-020-01377-0',
    category: 'oncology'
  },
  {
    id: 'pub_4',
    title: 'Fractures of Maxillary Tuberosity during Extraction of Maxilloary Molar - A Case Report and Review.',
    journal: 'Medico Research Chronicles',
    year: '2018',
    authors: 'Naik Mohan, Dhupar Vikas, Akkara Francis, Kumar Praveen',
    abstract: 'Complications in exodontia and effective clinical management.',
    doi: '10.26838/MEDRECH.2018.5.5.445',
    category: 'trauma'
  },
  {
    id: 'pub_5',
    title: 'Tracheal Tube Blockage by Fractured Middle Turbinate During Nasal Intubation: A Rare Airway Cmplication.',
    journal: 'Journal of Maxillofacial and Oral Surgery',
    year: '2017',
    authors: 'Kumar Praveen, Akkara Francis, Dhupar Vikas',
    abstract: 'Management of an unusual airway complication in facial surgery.',
    doi: '10.1007/s12663-017-1049-0',
    category: 'trauma'
  }
];
