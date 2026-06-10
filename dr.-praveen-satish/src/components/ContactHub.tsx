import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  Send, 
  Users, 
  Activity, 
  ShieldCheck, 
  Copy, 
  Check, 
  FileCheck2,
  Lock
} from 'lucide-react';

export default function ContactHub() {
  // Patient Intake States
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [patientConcern, setPatientConcern] = useState('Oral Tumor Screening / Lesions');
  const [contactTime, setContactTime] = useState('Morning (8 AM - 12 PM)');
  const [patientRemarks, setPatientRemarks] = useState('');
  const [patientSubmitted, setPatientSubmitted] = useState(false);
  const [patientTicket, setPatientTicket] = useState('');

  // Referral Desk States
  const [docName, setDocName] = useState('');
  const [docSpecialty, setDocSpecialty] = useState('');
  const [docHospital, setDocHospital] = useState('');
  const [docEmail, setDocEmail] = useState('');
  const [refPatientName, setRefPatientName] = useState('');
  const [refUrgency, setRefUrgency] = useState('Standard Elective');
  const [refClinicalSummary, setRefClinicalSummary] = useState('');
  const [referralSubmitted, setReferralSubmitted] = useState(false);
  const [referralTicket, setReferralTicket] = useState('');

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handlePatientSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;
    
    // Simulate generation of a secure patient clinical-intake code
    const ticketId = `PS-INT-${Math.floor(100000 + Math.random() * 900000)}`;
    setPatientTicket(ticketId);
    setPatientSubmitted(true);
  };

  const handleReferralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docName || !refPatientName || !docEmail) return;

    // Simulate generation of peer consultation reference number
    const codeId = `PS-REF-${Math.floor(200000 + Math.random() * 800000)}`;
    setReferralTicket(codeId);
    setReferralSubmitted(true);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('praveenmaxfacs@icloud.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-teal font-extrabold bg-brand-teal/10 px-3 py-1 rounded-full">
            PATIENT & PHYSICIAN GATEWAY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-primary tracking-tight mt-4">
            Clinical Consultation & Patient Intake
          </h2>
        </div>

        {/* Dual Panels Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card A: Patient Portal (6 columns) */}
          <div className="lg:col-span-6 bg-brand-slate-light border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-3 border-b border-gray-200/60 pb-4 mb-6">
                <div className="p-2.5 bg-brand-teal rounded-xl text-white">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-primary tracking-tight">
                    For Outpatients / Consultees
                  </h3>
                  <p className="text-[11px] text-gray-500 font-mono uppercase tracking-wider">
                    Diagnostic Intake Submission Desk
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed mb-6 font-sans">
                If you are a patient seeking consultation for persistent oral ulcers, jaw joint locking, corrective facial alignment or minor oral wisdom teeth, complete the credentials below. Dr. Satish's clinical coordinator will triage and reach back directly.
              </p>

              <AnimatePresence mode="wait">
                {!patientSubmitted ? (
                  <motion.form 
                    key="patient-form"
                    onSubmit={handlePatientSubmit} 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Patient Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="e.g. Anand Naik"
                        className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-xs text-brand-primary focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                      />
                    </div>

                    {/* Phone & Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Mobile Tel Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          placeholder="e.g. +91 98XXX XXXXX"
                          className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-xs text-brand-primary focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={patientEmail}
                          onChange={(e) => setPatientEmail(e.target.value)}
                          placeholder="e.g. anand@outlook.com"
                          className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2 text-xs text-brand-primary focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                        />
                      </div>
                    </div>

                    {/* Concern Dropdown & Preferred Time row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Nature of Surgical Concern
                        </label>
                        <select
                          value={patientConcern}
                          onChange={(e) => setPatientConcern(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-brand-primary focus:outline-none focus:border-brand-teal cursor-pointer"
                        >
                          <option>Oral Tumor Screening / Lesions</option>
                          <option>Corrective Jaw Surgery / Orthognathic</option>
                          <option>TMJ Locking / Joint Joint Pain</option>
                          <option>Maxillofacial Trauma / Scar Revision</option>
                          <option>Wisdom Teeth / Surgical Implants</option>
                          <option>Academic Advice or Training Queries</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Preferred Call Time
                        </label>
                        <select
                          value={contactTime}
                          onChange={(e) => setContactTime(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-xs text-brand-primary focus:outline-none focus:border-brand-teal cursor-pointer"
                        >
                          <option>Morning (8 AM - 12 PM)</option>
                          <option>Afternoon (1 PM - 5 PM)</option>
                          <option>Evening (6 PM - 9 PM)</option>
                        </select>
                      </div>
                    </div>

                    {/* Clinical Details */}
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Brief Symptoms Duration & Medical History
                      </label>
                      <textarea
                        rows={3}
                        value={patientRemarks}
                        onChange={(e) => setPatientRemarks(e.target.value)}
                        placeholder="Please note symptoms, painful areas, or prior diagnoses (biopsies, scans)..."
                        className="w-full bg-white border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-brand-primary focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-brand-teal hover:bg-brand-teal/95 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm active:scale-[0.99]"
                    >
                      <Send className="w-4 h-4 text-white" />
                      Submit Secure Intake Code
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="patient-success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white border-l-4 border-emerald-500 rounded-2xl p-6 shadow-xs relative"
                  >
                    <div className="flex gap-4">
                      <div className="p-1 px-2.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-mono font-bold h-fit">
                        SUCCESS
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-brand-primary leading-tight">
                          Intake Protocol Authorized
                        </h4>
                        <div className="mt-2 text-xs font-mono bg-brand-slate-light text-brand-teal px-2.5 py-1 rounded-lg inline-block font-extrabold border border-brand-teal/15">
                          Receipt ID: {patientTicket}
                        </div>
                        <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                          Your preliminary request for clinical evaluation of <span className="font-bold text-brand-primary">{patientConcern}</span> has been securely logged.
                        </p>
                        
                        <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                          <div className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-brand-teal flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-brand-teal" />
                            Next Clinical Action Steps
                          </div>
                          <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                            <li>Keep copies of all previous CT Scans, OPGs, or biopsy slides.</li>
                            <li>A triage coordinator will telephone you within 2-4 hours to configure pre-operative schedules.</li>
                            <li>For active severe breathing issues or oral fractures, visit Goa Medical College trauma clinic immediately.</li>
                          </ul>
                        </div>

                        <button
                          onClick={() => {
                            setPatientSubmitted(false);
                            setPatientName('');
                            setPatientPhone('');
                            setPatientRemarks('');
                          }}
                          className="mt-6 text-[10px] font-mono text-brand-teal hover:text-brand-primary underline font-bold uppercase tracking-wider cursor-pointer"
                        >
                          Submit New Consultation Intake
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Card B: Physician Referral & Boards Panel (6 columns) */}
          <div className="lg:col-span-6 bg-slate-900 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
                <div className="p-2.5 bg-brand-teal/20 rounded-xl border border-brand-teal/30 text-brand-teal">
                  <Users className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white tracking-tight">
                    For Medical Professionals
                  </h3>
                  <p className="text-[11px] text-gray-400 font-mono uppercase tracking-wider">
                    Physician & Referral Gateway
                  </p>
                </div>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mb-6 font-sans">
                Referring physicians, pathologists, and dental orthodonics colleagues can expedite cases for oncology resection reconstructions or total jaw joint arthroplasty directly below. Case details are instantly routed securely to <span className="font-mono text-brand-teal font-semibold">praveenmaxfacs@icloud.com</span>.
              </p>

              <AnimatePresence mode="wait">
                {!referralSubmitted ? (
                  <motion.form 
                    key="referral-form"
                    onSubmit={handleReferralSubmit} 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Doctor Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                          Referring Doctor <span className="text-brand-teal">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={docName}
                          onChange={(e) => setDocName(e.target.value)}
                          placeholder="e.g. Dr. Vivek Shinde"
                          className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                          Specialty <span className="text-brand-teal">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={docSpecialty}
                          onChange={(e) => setDocSpecialty(e.target.value)}
                          placeholder="e.g. Surgical Oncologist"
                          className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                        />
                      </div>
                    </div>

                    {/* Referring Hospital & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                          Clinic / Hospital Name
                        </label>
                        <input
                          type="text"
                          value={docHospital}
                          onChange={(e) => setDocHospital(e.target.value)}
                          placeholder="e.g. Apollo / GMC Goa"
                          className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                          Surgical Referral Email <span className="text-brand-teal">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={docEmail}
                          onChange={(e) => setDocEmail(e.target.value)}
                          placeholder="e.g. doc.vivek@hospital.org"
                          className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                        />
                      </div>
                    </div>

                    {/* Patient detail & Urgency */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                          Patient Initials & Age <span className="text-brand-teal">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={refPatientName}
                          onChange={(e) => setRefPatientName(e.target.value)}
                          placeholder="e.g. Mrs. S.K., 64Y"
                          className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                          Surgical Urgency Level
                        </label>
                        <select
                          value={refUrgency}
                          onChange={(e) => setRefUrgency(e.target.value)}
                          className="w-full bg-slate-950 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-brand-teal cursor-pointer"
                        >
                          <option>Standard Elective</option>
                          <option>Urgent Pathological Resection</option>
                          <option>Bony Ankylosis Release</option>
                          <option>Acute Skeletal Trauma Call</option>
                        </select>
                      </div>
                    </div>

                    {/* Clinical Summary */}
                    <div>
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                        Clinical Diagnostic Details & Referral Goals
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={refClinicalSummary}
                        onChange={(e) => setRefClinicalSummary(e.target.value)}
                        placeholder="Please note biopsy staging, TMJ translation indices, or virtual surgical simulation directives required..."
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-md active:scale-[0.99] border border-teal-500/20"
                    >
                      <Lock className="w-3.5 h-3.5 text-white shrink-0" />
                      Dispatch Secure Colleague Referral
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="referral-success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-950 border-l-4 border-brand-teal rounded-2xl p-6 shadow-xl relative"
                  >
                    <div className="flex gap-4">
                      <div className="p-1 px-2.5 rounded-lg bg-brand-teal/20 text-brand-teal text-xs font-mono font-bold h-fit border border-brand-teal/30">
                        ROUTED
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-white leading-tight">
                          Referral Dispatched to Surgeon Desk
                        </h4>
                        <div className="mt-2 text-xs font-mono bg-white/5 text-gray-300 px-2.5 py-1 rounded-lg inline-block font-extrabold border border-white/10">
                          Ref Code: {referralTicket}
                        </div>
                        <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                          Your clinical consultation referral of patient <span className="font-bold text-white">{refPatientName}</span> has been securely dispatched.
                        </p>
                        
                        <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                          <div className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-brand-teal flex items-center gap-1.5">
                            <FileCheck2 className="w-3.5 h-3.5 text-brand-teal" />
                            Secure Medical Routing Rules
                          </div>
                          <ul className="text-xs text-gray-400 list-disc list-inside space-y-1">
                            <li>A secure clinical copy is dispatched directly to <strong>praveenmaxfacs@icloud.com</strong>.</li>
                            <li>Colleague priority hotline enabled for Reference: <strong>{referralTicket}</strong>.</li>
                            <li>If sending raw radiological dicom sets, coordinate direct files transfer via security line below.</li>
                          </ul>
                        </div>

                        <button
                          onClick={() => {
                            setReferralSubmitted(false);
                            setDocName('');
                            setRefPatientName('');
                            setRefClinicalSummary('');
                          }}
                          className="mt-6 text-[10px] font-mono text-brand-teal hover:text-white underline font-bold uppercase tracking-wider cursor-pointer"
                        >
                          Execute New Colleague Referral
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Directory, Contact Details & Hours Row */}
        <div className="mt-12 bg-brand-slate-light border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-sans text-gray-600">
            
            {/* GMC & Outpatients Coordinates */}
            <div className="space-y-3.5">
              <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-brand-teal flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-teal" />
                CLINICAL CENTER COORDINATES
              </span>
              <div>
                <p className="font-bold text-brand-primary">Goa Medical College and Hospital</p>
                <p className="text-gray-500 mt-0.5">Dept of Oral & Maxillofacial Surgery, Bambolim, Goa, India - 403202</p>
              </div>
              <div className="pt-2 border-t border-gray-200/50">
                <p className="font-bold text-brand-primary">Private Consulting Chamber</p>
                <p className="text-gray-500 mt-0.5">Bambolim Clinic Complex, Goa</p>
              </div>
            </div>

            {/* Direct Lines Dial */}
            <div className="space-y-3.5">
              <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-brand-teal flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-brand-teal" />
                TELEPHONE & EMERGENCY LINES
              </span>
              <div>
                <p className="font-semibold">Call & WhatsApp:</p>
                <a href="tel:+919881954606" className="text-brand-primary font-bold text-base hover:text-brand-teal transition-colors block mt-0.5">
                  +91-9881954606
                </a>
              </div>
              <div className="pt-2 border-t border-gray-200/50">
                <p className="text-gray-500 font-semibold mb-1">Social Media:</p>
                <a href="https://instagram.com/praveenmaxfacs" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold text-xs hover:text-brand-teal transition-colors">
                  Instagram: @praveenmaxfacs
                </a>
              </div>
            </div>

            {/* SECURE SCHEDULING DETAILS */}
            <div className="space-y-3.5">
              <span className="text-[10px] font-mono uppercase tracking-wider font-extrabold text-brand-teal flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-brand-teal" />
                SECURE MEDICAL CORRESPONDENCE
              </span>
              <div>
                <p className="font-semibold">Direct Surgeon Mailbox:</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="font-bold text-brand-primary">praveenmaxfacs@icloud.com</span>
                  <button
                    onClick={copyEmailToClipboard}
                    className="p-1 rounded-lg bg-brand-teal/10 hover:bg-brand-teal text-brand-teal hover:text-white transition-all cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-200/50">
                <p className="text-xs text-gray-500">Security Note: Patient records are processed in conformity with standard medical confidentiality (HIPAA compliant metadata transfers).</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
