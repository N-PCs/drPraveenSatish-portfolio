export interface SurgicalDomain {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  highlights: string[];
  clinicalSignificance: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  domainId: string;
  radiographUrl: string; // The openly visible pre/post radiograph or schematic
  intraOpGraphicUrl: string; // Clinical image hidden behind a consent overlay
  patientAgeGender: string;
  diagnosis: string;
  procedureText: string;
  clinicalOutcome: string;
  keyTakeaway: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  institution: string;
  category: 'leadership' | 'academic' | 'fellowship' | 'credential';
  description: string;
  highlight: string;
}

export interface Publication {
  id: string;
  type: 'journal' | 'lecture';
  year: string;
  title: string;
  venue: string;
  meta: string;
  doi?: string;
}

export interface Appointment {
  id: string;
  patientName: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  domainId: string;
  reason: string;
  status: 'Draft' | 'Confirmed';
}

export interface CaseReferral {
  id: string;
  referredByDoctor: string;
  doctorEmail: string;
  doctorPhone: string;
  patientName: string;
  patientAge: number;
  domainId: string;
  clinicalNotes: string;
  urgency: 'routine' | 'urgent' | 'critical';
  fileCount: number;
  status: 'Pending Review' | 'Accepted' | 'In Progress';
}
