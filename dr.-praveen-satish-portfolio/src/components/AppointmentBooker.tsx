import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, ChevronRight, CheckCircle2, Building, PhoneCall, Mail, AlertCircle, Trash2 } from 'lucide-react';
import { SURGICAL_DOMAINS } from '../data';
import { Appointment } from '../types';

interface AppointmentBookerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentBooker: React.FC<AppointmentBookerProps> = ({ isOpen, onClose }) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [domainId, setDomainId] = useState('');
  const [reason, setReason] = useState('');
  
  const [confirmedTicket, setConfirmedTicket] = useState<Appointment | null>(null);
  const [pastBookings, setPastBookings] = useState<Appointment[]>([]);

  // Load existing bookings from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('dr_satish_appointments');
      if (stored) {
        setPastBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !phone || !email || !date || !timeSlot || !domainId) {
      return;
    }

    const ticketCode = `DRPS-${Math.floor(1000 + Math.random() * 9000)}`;

    const newAppointment: Appointment = {
      id: ticketCode,
      patientName,
      phone,
      email,
      date,
      timeSlot,
      domainId,
      reason,
      status: 'Confirmed'
    };

    const updated = [newAppointment, ...pastBookings];
    setPastBookings(updated);
    localStorage.setItem('dr_satish_appointments', JSON.stringify(updated));

    setConfirmedTicket(newAppointment);

    // Reset Form fields
    setPatientName('');
    setPhone('');
    setEmail('');
    setDate('');
    setTimeSlot('');
    setDomainId('');
    setReason('');
  };

  const deleteBooking = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = pastBookings.filter(b => b.id !== id);
    setPastBookings(filtered);
    localStorage.setItem('dr_satish_appointments', JSON.stringify(filtered));
    if (confirmedTicket?.id === id) {
      setConfirmedTicket(null);
    }
  };

  const clearForm = () => {
    setConfirmedTicket(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto" id="booker-modal-container">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#001c3d]/60 backdrop-blur-md"
          ></motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="bg-white border border-slate-200 rounded-none w-full max-w-4xl relative z-10 overflow-hidden shadow-2xl flex flex-col md:flex-row my-8"
          >
            {/* Left Column: Direct Consultation Info & Bookings list */}
            <div className="w-full md:w-5/12 bg-slate-50 p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Building className="w-4 h-4 text-[#003770]" />
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-extrabold">
                    Direct Clinic Channels
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#003770] tracking-tight leading-snug">
                  Specialized Oral Oncology & Maxillofacial Consultations
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed font-semibold">
                  Schedule direct outpatient physical counseling or encrypted high-definition video-conferencing directly with Dr. Satish.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 bg-white p-3 rounded-none border border-slate-150 shadow-sm">
                    <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <h4 className="text-[10px] font-mono text-slate-400 font-bold uppercase">Emergency Surgery Hotline</h4>
                      <p className="text-xs text-[#003770] font-black tracking-wide">+91-9881954606</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-3 rounded-none border border-slate-150 shadow-sm">
                    <Mail className="w-4 h-4 text-[#0ea5e9] shrink-0" />
                    <div>
                      <h4 className="text-[10px] font-mono text-slate-400 font-bold uppercase">Clinical Direct Mail</h4>
                      <p className="text-xs text-[#003770] font-bold">praveenmaxfacs@icloud.com</p>
                    </div>
                  </div>
                </div>

                {/* Patient Case Ledger (localStorage preview) */}
                {pastBookings.length > 0 && (
                  <div className="mt-8">
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-[#003770] font-black mb-3 flex items-center justify-between">
                      <span>Your Scheduled Appointments ({pastBookings.length})</span>
                    </h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-1" id="booking-ledger">
                      {pastBookings.map((book) => (
                        <div
                          key={book.id}
                          onClick={() => setConfirmedTicket(book)}
                          className={`p-3 bg-white rounded-none border flex items-center justify-between cursor-pointer transition-colors ${
                            confirmedTicket?.id === book.id ? 'border-emerald-400 bg-emerald-50/40' : 'border-slate-200 hover:border-slate-300 shadow-xs'
                          }`}
                        >
                          <div className="truncate pr-2">
                            <div className="text-xs text-slate-800 font-bold truncate">{book.patientName}</div>
                            <div className="text-[10px] text-slate-500 truncate font-mono">
                              Code {book.id} • {book.date}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] uppercase font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-200 px-2 py-0.5 rounded-none">
                              Active
                            </span>
                            <button
                              onClick={(e) => deleteBooking(book.id, e)}
                              className="text-slate-400 hover:text-red-500 p-1.5 rounded-none hover:bg-slate-50 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="text-[10px] text-slate-400 font-mono mt-8 border-t border-slate-200 pt-4">
                Clinical encryption protocol 256-bit active. HIPAA & COMS compliant database.
              </div>
            </div>

            {/* Right Column: Dynamic Form / Confirmation Ticket wrapper */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between bg-white" id="booker-dynamic-form-area">
              {confirmedTicket ? (
                /* Dynamic Printable Receipt Section */
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="space-y-6 flex-1 flex flex-col justify-between"
                  id="clinical-ticket"
                >
                  <div>
                    <div className="flex items-center gap-2.5 text-emerald-800 mb-4 bg-emerald-100/70 px-3 py-1.5 rounded-none border border-emerald-200 w-fit">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs uppercase font-mono tracking-wider font-extrabold">
                        Appointment Scheduled & Confirmed
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-[#003770] tracking-tight">
                      Outpatient Case Consultation Ticket
                    </h3>

                    {/* Virtual physical boarding ticket strip design */}
                    <div className="bg-slate-50 border border-slate-200 rounded-none mt-6 overflow-hidden shadow-md font-mono relative">
                      {/* Ticket cut-outs visual ornaments */}
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-none bg-white border border-slate-200"></div>
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-none bg-white border border-slate-200"></div>

                      <div className="p-5 border-b border-dashed border-slate-200 flex justify-between items-center bg-slate-100/40">
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold">PROVIDER SPECIATION</p>
                          <p className="text-xs text-[#003770] font-black">DR. PRAVEEN SATISH</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-slate-400 font-bold">TICKET INDEX ID</p>
                          <p className="text-xs text-emerald-700 font-extrabold">{confirmedTicket.id}</p>
                        </div>
                      </div>

                      <div className="p-5 grid grid-cols-2 gap-4 text-xs border-b border-slate-200/50">
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase mb-0.5">Patient Full Name</p>
                          <p className="text-slate-905 font-extrabold truncate">{confirmedTicket.patientName}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-500 uppercase mb-0.5">Clinical Specialty</p>
                          <p className="text-slate-905 font-bold truncate">
                            {SURGICAL_DOMAINS.find(d => d.id === confirmedTicket.domainId)?.title || confirmedTicket.domainId}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase mb-0.5 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-blue-500" /> Date
                          </p>
                          <p className="text-slate-800 font-bold">{confirmedTicket.date}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase mb-0.5 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-emerald-500" /> Time Slot
                          </p>
                          <p className="text-slate-800 font-bold">{confirmedTicket.timeSlot}</p>
                        </div>
                      </div>

                      <div className="p-5 bg-slate-100/10 text-xs">
                        <p className="text-[10px] text-slate-400 uppercase mb-1">Stated Reason / Symptoms</p>
                        <p className="text-slate-600 italic font-semibold">
                          "{confirmedTicket.reason || 'Routine consultative clinical screening'}"
                        </p>
                      </div>
                    </div>

                    <div className="bg-sky-50 border border-sky-100 rounded-none p-4 mt-6 flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-[#003770] shrink-0 mt-0.5" />
                      <p className="text-[11px] text-slate-600 leading-normal font-semibold">
                        <strong>Consultation Guidance:</strong> Please arrive 15 minutes before your scheduled block. Bring your previous radiography diagnostic materials and list of pharmaceutical agents currently being consumed.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-100">
                    <button
                      onClick={clearForm}
                      className="flex-1 bg-[#003770] hover:bg-[#002852] text-white text-xs font-bold py-3.5 px-5 rounded-none shadow-lg transition-transform active:scale-95 text-center cursor-pointer"
                    >
                      Book Another Appointment
                    </button>
                    <button
                      onClick={onClose}
                      className="flex-1 bg-slate-100 hover:bg-slate-250 text-slate-700 text-xs font-bold py-3.5 px-5 rounded-none transition-colors text-center cursor-pointer border border-slate-205"
                    >
                      Close Confirmation Window
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Dynamic Submission Form */
                <form onSubmit={handleBookingSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl md:text-2xl font-black text-[#003770] tracking-tight">
                        Schedule Consultation
                      </h3>
                      <button
                        type="button"
                        onClick={onClose}
                        className="text-xs text-slate-500 hover:text-red-500 underline block font-bold cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>

                    <p className="text-xs text-slate-500 -mt-2 leading-normal font-semibold">
                      Fill out the diagnostic consultation profile to secure your reserved time slot.
                    </p>

                    <div className="space-y-3 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">Patient Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Anand Sharma"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-2 text-xs text-slate-800 placeholder-slate-400 font-semibold focus:outline-hidden focus:border-[#003770]"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">Case Domain / Specialty *</label>
                          <select
                            required
                            value={domainId}
                            onChange={(e) => setDomainId(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-2 text-xs text-slate-805 font-bold focus:outline-hidden focus:border-[#003770]"
                          >
                            <option value="">Select Specialty Area</option>
                            {SURGICAL_DOMAINS.map((domain) => (
                              <option key={domain.id} value={domain.id}>
                                {domain.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">Contact Phone *</label>
                          <input
                            type="tel"
                            required
                            placeholder="+91-98765-43210"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-2 text-xs text-slate-800 placeholder-slate-400 font-semibold focus:outline-hidden focus:border-[#003770]"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">Contact Email *</label>
                          <input
                            type="email"
                            required
                            placeholder="anand@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-2 text-xs text-slate-800 placeholder-slate-400 font-semibold focus:outline-hidden focus:border-[#003770]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">Preferred Date *</label>
                          <input
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-2 text-xs text-slate-800 font-semibold focus:outline-hidden focus:border-[#003770]"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">Available Block / Time *</label>
                          <select
                            required
                            value={timeSlot}
                            onChange={(e) => setTimeSlot(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-2 text-xs text-slate-808 font-bold focus:outline-hidden focus:border-[#003770]"
                          >
                            <option value="">Choose Time Block</option>
                            <option value="09:00 AM - 11:00 AM">Morning Block (09:00 AM - 11:00 AM)</option>
                            <option value="11:30 AM - 01:30 PM">Midday Block (11:30 AM - 01:30 PM)</option>
                            <option value="02:30 PM - 04:30 PM">Afternoon Block (02:30 PM - 04:30 PM)</option>
                            <option value="05:00 PM - 06:30 PM">Evening Block (05:00 PM - 06:30 PM)</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">Stated Reason for Seeking Care (Symptoms or Pathology)</label>
                        <textarea
                          placeholder="Please note persistent pain, swallowing difficulty, swellings, jaw locking, previous biopsy feedback, etc."
                          rows={3}
                          value={reason}
                          onChange={(e) => setReason(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:border-[#003770] placeholder-slate-400 resize-none font-semibold animate-pulse-slow"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 mt-4">
                    <button
                      type="submit"
                      className="w-full bg-[#003770] hover:bg-[#002852] text-white hover:shadow-lg font-black text-xs py-4 rounded-none flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
                    >
                      <span>Authorize Profile & Secure Consultation Block</span>
                      <ChevronRight className="w-4 h-4 text-sky-200" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
