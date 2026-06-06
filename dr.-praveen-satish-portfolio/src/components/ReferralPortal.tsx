import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Upload, CheckCircle, Users, Activity, FileCheck, Stethoscope } from 'lucide-react';
import { SURGICAL_DOMAINS } from '../data';
import { CaseReferral } from '../types';

export const ReferralPortal: React.FC = () => {
  const [referredByDoctor, setReferredByDoctor] = useState('');
  const [doctorEmail, setDoctorEmail] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [domainId, setDomainId] = useState('');
  const [clinicalNotes, setClinicalNotes] = useState('');
  const [urgency, setUrgency] = useState<'routine' | 'urgent' | 'critical'>('routine');
  const [attachmentUploaded, setAttachmentUploaded] = useState(false);
  const [fileCount, setFileCount] = useState(0);

  const [referrals, setReferrals] = useState<CaseReferral[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('dr_satish_referrals');
      if (stored) {
        setReferrals(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleReferralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!referredByDoctor || !doctorEmail || !patientName || !patientAge || !domainId) {
      return;
    }

    const newReferral: CaseReferral = {
      id: `REF-${Math.floor(100000 + Math.random() * 900000)}`,
      referredByDoctor,
      doctorEmail,
      doctorPhone: '+91-9881954606', // Default clinical backup line
      patientName,
      patientAge: Number(patientAge),
      domainId,
      clinicalNotes,
      urgency,
      fileCount: attachmentUploaded ? fileCount || 1 : 0,
      status: 'Pending Review'
    };

    const updated = [newReferral, ...referrals];
    setReferrals(updated);
    localStorage.setItem('dr_satish_referrals', JSON.stringify(updated));

    setShowSuccess(true);

    // Reset Form
    setReferredByDoctor('');
    setDoctorEmail('');
    setPatientName('');
    setPatientAge('');
    setDomainId('');
    setClinicalNotes('');
    setUrgency('routine');
    setAttachmentUploaded(false);
    setFileCount(0);

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleSimulatedUpload = () => {
    setAttachmentUploaded(true);
    setFileCount(prev => prev + 1);
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 bg-[#f5fafb]/70 border-t border-brand-pale/50" id="referral-portal-section">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Header */}
        <div className="text-center">
          <span className="px-3.5 py-1.5 bg-brand-ice border border-brand-pale text-brand-dark rounded-none text-[10px] font-black tracking-widest uppercase">
            Clinical Referral & Direct Lines
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-3 text-brand-dark tracking-tight">
            Inter-Professional Colleague Hub
          </h2>
          <p className="text-slate-600 mt-3 max-w-lg mx-auto text-sm font-semibold">
            For general outpatients seeking direct consultation lines, or medical practitioners requesting co-management of complex cases.
          </p>
        </div>

        {/* Dual-Action Grid utilizing Stark White Containers on Dark background as specified in details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="referral-dual-grid">
          
          {/* Card Option 1: Stark white container for Patient Clinic Outpatient Hub */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white text-slate-900 border border-slate-200 rounded-none p-6 md:p-8 shadow-lg shadow-slate-100/40 flex flex-col justify-between"
            id="patient-clinic-hub-card"
          >
            <div>
              <div className="flex items-center gap-1.5 text-brand-slate font-extrabold text-[11px] uppercase tracking-wider mb-4">
                <span className="h-2 w-2 rounded-none bg-brand-slate animate-ping"></span>
                <span>Active Patient Line</span>
              </div>

              <h3 className="text-3xl font-black tracking-tight text-brand-dark leading-none">
                Patient Clinic Hub
              </h3>
              <p className="text-sm text-slate-600 mt-3 font-semibold leading-relaxed">
                Direct outpatient booking, emergency facial trauma interventions, post-surgical status checks, and telehealth assistance routes.
              </p>

              {/* Patient Hotline details in high contrast layout */}
              <div className="mt-10 space-y-4">
                <a
                  href="tel:+919881954606"
                  className="flex items-center justify-between p-5 bg-slate-50 hover:bg-brand-ice/50 border border-slate-200 rounded-none transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-none bg-brand-dark text-white flex items-center justify-center shadow-md">
                      <Phone className="w-5 h-5 text-brand-ice" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 font-black uppercase">OUTPATIENT CALL / WHATSAPP</p>
                      <p className="text-lg font-black text-brand-dark tracking-wide">+91-9881954606</p>
                    </div>
                  </div>
                  <span className="text-slate-500 font-bold text-xs group-hover:translate-x-1 transition-transform">CALL DIRECT →</span>
                </a>

                <div className="p-5 bg-slate-50 rounded-none border border-slate-200 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <h4 className="font-bold text-slate-800 uppercase text-[10px] font-mono">OPD Hours</h4>
                    <p className="text-slate-600 font-semibold mt-1">Mon - Sat: 10:00 AM - 07:00 PM</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 uppercase text-[10px] font-mono">Clinical Location</h4>
                    <p className="text-slate-600 font-semibold mt-1">Pune & Mumbai Specialized Maxillofacial Care Units</p>
                  </div>
                  <div className="col-span-2">
                    <h4 className="font-bold text-slate-800 uppercase text-[10px] font-mono">Social Media</h4>
                    <a href="https://instagram.com/praveenmaxfacs" target="_blank" rel="noopener noreferrer" className="text-brand-dark font-semibold hover:text-brand-slate transition-colors mt-1 block">
                      Instagram: @praveenmaxfacs
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-slate-200">
              <button
                onClick={() => {
                  const el = document.getElementById('global-navbar');
                  if (el) {
                    const btn = el.querySelector('#nav-book-now-button') as HTMLButtonElement;
                    if (btn) btn.click();
                  }
                }}
                className="w-full bg-brand-dark hover:bg-brand-deep text-white font-black text-xs py-4 rounded-none flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <span>Initiate Patient Booking Protocol</span>
              </button>
            </div>
          </motion.div>

          {/* Card Option 2: Stark white container for Medical Professional Case Referral Portal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white text-slate-900 border border-slate-200 rounded-none p-6 md:p-8 shadow-lg shadow-slate-100/40 flex flex-col justify-between"
            id="doctor-referral-portal-card"
          >
            <div>
              <div className="flex items-center gap-1.5 text-brand-slate font-extrabold text-[11px] uppercase tracking-wider mb-4">
                <span className="h-2 w-2 rounded-none bg-brand-slate"></span>
                <span>Referral Gate</span>
              </div>

              <h3 className="text-3xl font-black tracking-tight text-brand-dark leading-none">
                Practitioner Case Gate
              </h3>
              <p className="text-sm text-slate-600 mt-3 font-semibold leading-relaxed">
                For dental practitioners, ENT specialists, and clinical oncologists seeking direct, immediate emergency or elective tertiary surgical co-management.
              </p>

              {/* Interactive Referral Submission Form */}
              <form onSubmit={handleReferralSubmit} className="mt-8 space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-mono uppercase text-[9px] text-slate-500 font-bold">Your Name (Dr.) *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Satish Nair"
                      value={referredByDoctor}
                      onChange={(e) => setReferredByDoctor(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-2 text-slate-900 focus:outline-hidden focus:border-brand-dark font-semibold"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono uppercase text-[9px] text-slate-500 font-bold">Provider Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="contact@practitioner.com"
                      value={doctorEmail}
                      onChange={(e) => setDoctorEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-2 text-slate-900 focus:outline-hidden focus:border-brand-dark font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2 space-y-1">
                    <label className="font-mono uppercase text-[9px] text-slate-500 font-bold">Patient Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kiran Roy"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-2 text-slate-900 focus:outline-hidden focus:border-brand-dark font-semibold"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono uppercase text-[9px] text-slate-500 font-bold">Patient Age *</label>
                    <input
                      type="number"
                      required
                      placeholder="Aged"
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-2 text-slate-900 focus:outline-hidden focus:border-brand-dark font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-mono uppercase text-[9px] text-slate-500 font-bold">Specialty Focus *</label>
                    <select
                      required
                      value={domainId}
                      onChange={(e) => setDomainId(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-none px-3 py-2 text-slate-950 focus:outline-hidden focus:border-brand-dark font-bold bg-white"
                    >
                      <option value="">Select Domain</option>
                      {SURGICAL_DOMAINS.map((d) => (
                        <option key={d.id} value={d.id}>{d.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono uppercase text-[9px] text-slate-500 font-bold">Urgency Index *</label>
                    <div className="flex gap-1 bg-slate-50 p-1 border border-slate-200 rounded-none">
                      {(['routine', 'urgent', 'critical'] as const).map((urg) => (
                        <button
                          key={urg}
                          type="button"
                          onClick={() => setUrgency(urg)}
                          className={`flex-1 py-1 rounded-none text-[9px] uppercase font-bold transition-all cursor-pointer ${
                            urgency === urg
                              ? urg === 'critical'
                                ? 'bg-red-500 text-white shadow-sm'
                                : urg === 'urgent'
                                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                                  : 'bg-emerald-500 text-white shadow-sm'
                              : 'text-slate-500 hover:bg-slate-100'
                          }`}
                        >
                          {urg}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono uppercase text-[9px] text-slate-500 font-bold">Surgical Co-Mgmt Diagnosis & Pathology Findings</label>
                  <textarea
                    placeholder="Provide diagnostic indicators, bone parameters, lymph node status (if malignant pathology), etc."
                    rows={2}
                    value={clinicalNotes}
                    onChange={(e) => setClinicalNotes(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-2 text-slate-900 focus:outline-hidden focus:border-brand-dark resize-none placeholder-slate-400 font-semibold"
                  />
                </div>

                {/* Simulated file upload block */}
                <div className="flex items-center justify-between bg-slate-50 p-3 rounded-none border border-slate-200">
                  <div className="flex items-center gap-2">
                    <Upload className="w-4 h-4 text-slate-500" />
                    <div>
                      <p className="text-[10px] font-bold text-slate-800">Diagnostic Scans (OPG/CT)</p>
                      <p className="text-[9px] text-slate-500">
                        {attachmentUploaded ? `${fileCount} scan(s) loaded securely` : 'Select digital imaging files'}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleSimulatedUpload}
                    className="bg-white hover:bg-slate-100 text-slate-950 font-black text-[10px] px-3 py-1.5 rounded-none border border-slate-200 shadow-sm cursor-pointer"
                  >
                    + Add File
                  </button>
                </div>

                {/* Direct clinical mail backup text */}
                <p className="text-[10px] text-slate-400 text-center font-mono py-1">
                  Alternative: Direct secure email referral: <span className="text-brand-dark font-black underline">praveenmaxfacs@icloud.com</span>
                </p>

                {/* Success Feedback Banner */}
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-3 rounded-none flex items-center gap-2"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                      <div>
                        <p className="text-[10px] font-black text-emerald-900 uppercase leading-none">Case Log Record Securely Created</p>
                        <p className="text-[9px] text-slate-600 mt-1">The Maxillofacial team will review diagnostics within 120 minutes.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  className="w-full bg-brand-dark hover:bg-brand-deep text-white font-black text-xs py-3.5 rounded-none flex items-center justify-center gap-2 transition-transform active:scale-[0.99] cursor-pointer"
                >
                  <FileCheck className="w-4 h-4 text-brand-ice" />
                  <span>Transmit Patient Clinical Record</span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>

        {/* Colleagues Live Stream Queue (Active caseload monitoring) */}
        {referrals.length > 0 && (
          <div className="bg-white border border-slate-200 rounded-none p-5 md:p-6 shadow-md" id="referrals-queue-table">
            <div className="flex items-center gap-2.5 mb-6">
              <Users className="w-5 h-5 text-brand-slate" />
              <div>
                <h4 className="text-base font-black text-brand-dark tracking-tight">Practitioner-Referred Caseload</h4>
                <p className="text-slate-500 text-xs font-semibold">Live queue of active collaborative care cases routed into tertiary surgical triage.</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-250 text-slate-400 font-mono text-[10px] uppercase tracking-wider bg-slate-50/50">
                    <th className="py-3 px-4 font-bold">Case Code</th>
                    <th className="py-3 px-4 font-bold">Referred By</th>
                    <th className="py-3 px-4 font-bold">Patient Profile</th>
                    <th className="py-3 px-4 font-bold">Focus Area</th>
                    <th className="py-3 px-4 font-bold">Triage Status</th>
                    <th className="py-3 px-4 font-bold">Urgency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {referrals.map((ref) => (
                    <tr key={ref.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-mono font-bold text-brand-slate">{ref.id}</td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-brand-dark">{ref.referredByDoctor}</div>
                        <div className="text-[10px] text-slate-400 font-bold">{ref.doctorEmail}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-extrabold text-brand-dark">{ref.patientName}</div>
                        <div className="text-[10px] text-slate-500 font-bold">Aged {ref.patientAge}</div>
                      </td>
                      <td className="py-3 px-4 font-bold text-slate-800 truncate max-w-[150px]">
                        {SURGICAL_DOMAINS.find(d => d.id === ref.domainId)?.title || ref.domainId}
                      </td>
                      <td className="py-3 px-4">
                        <span className="bg-brand-ice border border-brand-pale text-brand-dark px-2.5 py-0.5 rounded-none font-bold text-[9px] uppercase tracking-wider">
                          {ref.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-2.5 py-0.5 rounded-none font-bold text-[9px] uppercase tracking-widest ${
                          ref.urgency === 'critical'
                            ? 'bg-red-50 border border-red-200 text-red-800'
                            : ref.urgency === 'urgent'
                              ? 'bg-amber-50 border border-amber-200 text-amber-800'
                              : 'bg-emerald-50 border border-emerald-200 text-emerald-800'
                        }`}>
                          {ref.urgency}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
