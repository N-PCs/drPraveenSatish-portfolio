import { ExpertiseItem, CaseStudy, AcademicAchievement, PublicationItem } from './types';

export const expertiseData: ExpertiseItem[] = [
  {
    id: 'oncology',
    title: 'Oral Oncology & Ablative Surgery',
    subtitle: 'Head & Neck Cancer Resections',
    shortDesc: 'Agressive oncological resections of oral cavity squamous cell carcinomas, salivary tumors, and bone-invasive sarcomas.',
    fullDesc: 'Comprehensive oncological management of head and neck cancers, prioritizing radical tumor clearance (wide local excision, segmental mandibulectomies) alongside anatomical and functional preservation of vital surrounding tissues.',
    procedures: [
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
    shortDesc: 'Restoring oral competence, function, and facial appearance using highly specialized pedicled tissue transfers.',
    fullDesc: 'Expertise in restoring anatomical continuity and speech/swallowing functions following destructive trauma or cancer resection. Focuses on local, regional, and myofascial flaps, and strategic microdissection techniques to reconstruct the tongue, palate, and jaw.',
    procedures: [
      'Pectoralis Major Myocutaneous (PMMC) Flap Reconstruction',
      'Nasolabial & Buccal Fat Pad Local Flap Procedures',
      'Temporalis Myofascial Flaps for Maxillary Defects',
      'Functional Reconstruction of Tongue Defects (K-Technique)',
      'Anatomical Restructuring of Oral Competence & Sphincter'
    ],
    clinicalSignificance: 'Transitioning the patient smoothly from a debilitating postoperative surgical state back to fluent oral communication and swallowing.',
    iconName: 'Sparkles'
  },
  {
    id: 'trauma',
    title: 'Maxillofacial Trauma Surgery',
    subtitle: 'Pan-Facial Fractures & Rigid Fixation',
    shortDesc: 'Reconstruction of complex craniomaxillofacial skeletal injuries, restoring pre-injury alignment, speech, and mastication.',
    fullDesc: 'Surgical management of acute and secondary pan-facial trauma. Utilizes advanced surgical approaches for anatomic reductions and internal rigid fixation of zygomaticomaxillary, orbital, and mandibular skeletal fractures under optical magnification.',
    procedures: [
      'Open Reduction & Internal Fixation (ORIF) of Mandible & Maxilla',
      'Orbital Floor Reconstruction using Titanium Mesh and Autologous Bone',
      'Management of Condylar Fractures of the Temperomandibular Joint',
      'Reduction of Zygomaticomaxillary Complex (ZMC) Fractures',
      'Emergency Management of Craniomaxillofacial Skeletal Trauma'
    ],
    clinicalSignificance: 'Precision alignment matching occlusion exactly, avoiding cranial asymmetry, double vision (diplopia), or chewing disorders.',
    iconName: 'Grid3X3'
  },
  {
    id: 'tmj',
    title: 'TMJ Surgery & Arthroscopy',
    subtitle: 'Lysis, Lavage, and Total Joint Replacement',
    shortDesc: 'Resolving severe jaw lock, arthritic degradation, and chronic TMJ disorders using minimally invasive to total joint replacements.',
    fullDesc: 'Highly specialized TMJ interventions ranging from diagnostics and therapeutic joint arthroscopy (lysis, lavage) to open TMJ arthroplasty, treatment of recurrent ankylosis, and custom or stock total joint reconstruction.',
    procedures: [
      'Minimally Invasive TMJ Arthroscopy & Lysis/Lavage',
      'Meniscectomy & TMJ Disc Repositioning/Anchor Plasty',
      'Release of TMJ Bony Ankylosis with Temporalis Interposition Flap',
      'Custom Patient-Specific Total Joint Replacement (TJR)',
      'Management of Condylar Hyperplasia and TMJ Internal Derangement'
    ],
    clinicalSignificance: 'Restoring optimal inter-incisal distance, relieving chronic temporomandibular pain, and improving standard chewing mechanics.',
    iconName: 'Infinity'
  },
  {
    id: 'orthognathic',
    title: 'Orthognathic & Structural Jaw Surgery',
    subtitle: 'Corrective Jaw Surgery',
    shortDesc: 'Repositioning the maxilla and mandible to correct facial asymmetry, severe bite malocclusion, and sleep apnea.',
    fullDesc: 'Aesthetic and functional transformation through surgical repositioning of the middle and lower facial skeletal framework. Coordinates deeply with orthodontics to solve congenital dentofacial deformities and sleep apnea.',
    procedures: [
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
    shortDesc: 'Restorations in compromise bone sites using advanced sinus lifts, ridge splits, and zygomatic implants.',
    fullDesc: 'Rehabilitating complete or partial tooth loss using advanced implant fixtures in extremely resorbed bone. Includes ridge augmentations, sinus lift procedures, and computer-guided implant planning for immediate functional loading.',
    procedures: [
      'Anterior Maxillary Aesthetic Single-Implant Restorations',
      'Zygomatic & Pterygoid Implants for Severe Maxillary Resorption',
      'Direct and Indirect Sinus Lift with Bone Grafting (Autologous/Xenograft)',
      'Alveolar Ridge Split & Expansion Techniques',
      'Surgical Removal of Impacted Third Molars (Wisdom Teeth)'
    ],
    clinicalSignificance: 'Providing permanent structural support for functional prosthetics even in cases of severe long-term bone atrophy.',
    iconName: 'Layers'
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'case_oscc_01',
    category: 'oncology',
    title: 'Squamous Cell Carcinoma of the Lateral Tongue Margin',
    patientAgeGender: '52-Year-Old Male',
    diagnosis: 'Stage II Oral Squamous Cell Carcinoma (OSCC) of the Right Lateral Tongue',
    technique: 'Wide Local Excision with Selective Neck Dissection (Levels I-III) & Functional Reconstruction via K-Technique',
    preOpImage: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600', 
    postOpImage: 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&q=80&w=600', 
    intraOpImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600', 
    intraOpDesc: 'Intraoperative showing clear surgical margins checked via frozen section, highlighting preservation of the hypoglossal and lingual nerves, followed by functional volume restoration of the tongue.',
    clinicalOutcome: '100% margin clearance achieved. Speech preservation score exceeding 90%; normal swallowing returned at 3 weeks postoperative without secondary aspiration.',
    reconstructionDetail: 'Rebuilt using native robust tissues using the special K-Technique, restoring lateral volume and preserving mobile tongue excursion.'
  },
  {
    id: 'case_trauma_02',
    category: 'trauma',
    title: 'Pan-Facial Trauma: Complex ZMC & Mandible Crushing Fractures',
    patientAgeGender: '29-Year-Old Female, Motor Vehicle Accident',
    diagnosis: 'Unstable bilateral zygomaticomaxillary complex (ZMC) fractures, orbital floor blowout, and symphyseal mandibular fracture.',
    technique: 'Multi-incision open reduction and internal rigid fixation (ORIF) utilizing anatomical low-profile titanium plates and custom orbital floor mesh recreation.',
    preOpImage: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=600',
    postOpImage: 'https://images.unsplash.com/photo-1606318801954-d46d47d3368a?auto=format&fit=crop&q=80&w=600',
    intraOpImage: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=600',
    intraOpDesc: 'Detailed rigid internal fixation of the orbital rim, anterior maxilla buttress, and mandible. Alignment verified via sterile intermaxillary fixation check during surgery.',
    clinicalOutcome: 'Perfect restoration of pre-injury facial projection, symmetric pupillary levels without double vision, and exact restoration of dental occlusion at six-month follow-up.',
    reconstructionDetail: 'Strategic placement of titanium plates along primary structural buttresses of the face, reinforcing mechanical strength without long-term metal-related morbidity.'
  }
];

export const academicTimeline: AcademicAchievement[] = [
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

export const publicationsData: PublicationItem[] = [
  {
    id: 'pub_1',
    title: 'Functional reconstruction of lateral oral tongue defects using K’s technique: Technical Note.',
    authors: 'Kumar Praveen, Gurrala Sthita, Dhupar Vikas, Akkara Francis',
    forum: 'Advances in Oral and Maxillofacial Surgery',
    year: '2021',
    doi: '10.1016/j.adoms.2021.100038',
    type: 'journal',
    highlight: 'Innovative technique for tongue defect reconstruction.'
  },
  {
    id: 'pub_2',
    title: 'Hemangiolymphangioma of buccal cheek - a rare case report with review of literature.',
    authors: 'Khaunte Divyachampa, Kumar Praveen, Dhupar Vikas, Naik Mohan',
    forum: 'Journal of Dental Health, Oral Disorders & Therapy',
    year: '2020',
    doi: '10.15406/jdhodt.2020.11.00534',
    type: 'journal',
    highlight: 'Rare vascular anomaly case report.'
  },
  {
    id: 'pub_3',
    title: 'A Randomized Control Trial to Assess Intraoperative and Postoperative Outcomes of Colorado Microdissection Needle Versus Conventional Surgical Knife in Neck Dissection.',
    authors: 'Kumar Praveen, Rodrigues Edlyn, Dhupar Vikas, Gurrala Sthita',
    forum: 'Journal of Maxillofacial and Oral Surgery',
    year: '2020',
    doi: '10.1007/s12663-020-01377-0',
    type: 'journal',
    highlight: 'Surgical instrument comparative analysis.'
  },
  {
    id: 'pub_4',
    title: 'Jugular Lymphadenitis as a Precursor to Burkholderia Pseudomallei Sepsis.',
    authors: 'Rodrigues Edlyn, Dhupar Vikas, Pinto Maria, Kumar Praveen, Gurrala Sthita',
    forum: 'Journal of Maxillofacial and Oral Surgery',
    year: '2020',
    doi: '10.1007/s12663-020-01333-y',
    type: 'journal',
    highlight: 'Critical sepsis precursor identification.'
  },
  {
    id: 'pub_5',
    title: 'Fractures of Maxillary Tuberosity during Extraction of Maxilloary Molar - A Case Report and Review.',
    authors: 'Naik Mohan, Dhupar Vikas, Akkara Francis, Kumar Praveen',
    forum: 'Medico Research Chronicles',
    year: '2018',
    doi: '10.26838/MEDRECH.2018.5.5.445',
    type: 'journal',
    highlight: 'Exodontia complication management.'
  },
  {
    id: 'pub_6',
    title: 'Extra nodal natural killer lymphoma mimicking canine Fossa infection–a clinical report.',
    authors: 'Kumar Praveen',
    forum: 'International Clinical Pathology Journal',
    year: '2018',
    doi: '10.15406/icpjl.2018.06.00168',
    type: 'journal',
    highlight: 'Pathology diagnostic masking.'
  },
  {
    id: 'pub_7',
    title: 'Tracheal Tube Blockage by Fractured Middle Turbinate During Nasal Intubation: A Rare Airway Cmplication.',
    authors: 'Kumar Praveen, Akkara Francis, Dhupar Vikas',
    forum: 'Journal of Maxillofacial and Oral Surgery',
    year: '2017',
    doi: '10.1007/s12663-017-1049-0',
    type: 'journal',
    highlight: 'Critical airway management complication.'
  },
  {
    id: 'pub_8',
    title: 'Foreign Body in the Orbital Floor: A Case Report.',
    authors: 'Kumar G., Dhupar Vikas, Akkara Francis, Kumar Praveen',
    forum: 'Journal of Maxillofacial and Oral Surgery',
    year: '2015',
    doi: '10.1007/s12663-014-0708-7',
    type: 'journal',
    highlight: 'Trauma and foreign body retrieval.'
  },
  {
    id: 'pub_9',
    title: 'Eruption Status Of Third Molar And Its Possible Influence On The Location Of Mandibular Angle Fracture',
    authors: 'Praveen Satish Kumar, Vikas Dhupar, Francis Akkara, Ananth Kumar',
    forum: 'J.Maxillofac.Oral Surg.',
    year: '2014',
    doi: '10.1007/s12663-014-0621-0',
    type: 'journal',
    highlight: 'Trauma biomechanics.'
  },
  {
    id: 'lect_1',
    title: 'Feasibility and functional outcome of Transpositional flap for reconstruction of medium sized ablative tongue defects',
    authors: 'Dr. Praveen Satish',
    forum: 'ICOMS',
    year: '2025',
    type: 'lecture',
    location: 'Singapore',
    highlight: 'International Lecture on Tongue Reconstruction',
    citation: 'ICOMS 2025'
  },
  {
    id: 'lect_2',
    title: 'Correlation between depth of invasion and nodal metastasis in OSCC- Effect on DFS And OS',
    authors: 'Dr. Praveen Satish',
    forum: 'AFCOMS',
    year: '2025',
    type: 'lecture',
    location: 'Adis Ababa, Ethiopia',
    highlight: 'Oncology Outcomes Presentation',
    citation: 'AFCOMS 2025'
  },
  {
    id: 'lect_3',
    title: 'Moderator – Reconstruction of Head and Neck Ablative Defects',
    authors: 'Dr. Praveen Satish',
    forum: 'ACOMS',
    year: '2024',
    type: 'lecture',
    location: 'Chennai, India',
    highlight: 'National Panel Moderator',
    citation: 'ACOMS 2024'
  },
  {
    id: 'lect_4',
    title: 'Panellist – Maxillofacial Trauma',
    authors: 'Dr. Praveen Satish',
    forum: 'MIDCOMS',
    year: '2023',
    type: 'lecture',
    location: 'Loni, Maharashtra',
    highlight: 'Trauma Symposium Panelist',
    citation: 'MIDCOMS 2023'
  }
];
