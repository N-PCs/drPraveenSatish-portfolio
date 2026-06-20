export interface ExpertiseItem {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  fullDesc: string;
  procedures: string[];
  clinicalSignificance: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  category: 'oncology' | 'trauma' | 'joint_pathology' | 'orthognathic';
  title: string;
  patientAgeGender: string;
  diagnosis: string;
  technique: string;
  preOpImage: string; // Non-graphic radiological/diagnostic view
  postOpImage: string; // Non-graphic postoperative radiographic reconstruction or clinical portrait
  intraOpImage: string; // Graphic surgical photograph (with medical warning blur protection)
  intraOpDesc: string; // peer-focused description
  clinicalOutcome: string;
  reconstructionDetail: string;
}

export interface AcademicAchievement {
  id: string;
  year: string;
  title: string;
  institution: string;
  category: 'leadership' | 'academic' | 'credential' | 'fellowship';
  description: string;
  highlight: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  forum: string;  // Journal name or Lecture event name
  year: string;
  doi?: string;
  type: 'journal' | 'lecture';
  location?: string; // For lectures (e.g., Singapore, Ethiopia, Canada)
  highlight: string;
  citation?: string;
}
