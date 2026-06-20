import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp, Clock, Info, ShieldAlert, HeartPulse } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'pre-op' | 'post-op' | 'general';
  highlight?: string;
}

const faqData: FAQItem[] = [
  {
    category: 'pre-op',
    question: 'What is Virtual Surgical Planning (VSP) and how does it prepare me for surgery?',
    answer: 'Virtual Surgical Planning uses your high-resolution CT/CBCT scans to reconstruct a 3D digital model of your facial skeleton. Dr. Satish pre-plans osteotomy bounds, jaw alignments, and reconstructive plate configurations in a virtual lab prior to entering the operating room. This reduces operative time by up to 30% and guarantees microscopic precision of critical margins.',
    highlight: 'Completed 1-2 weeks before major reconstructive surgeries.'
  },
  {
    category: 'pre-op',
    question: 'How long must I fast before my scheduled general anesthesia surgery?',
    answer: 'Standard clinical protocols require you to remain NIL PER OS (NPO) or "nothing by mouth" for at least 8 hours prior to the administration of general anesthesia. This means absolutely no food, liquids, water, candy, or chewing gum. For minor oral procedures under local sedation, a lighter 4-hour restriction is sufficient, but always follow your custom pre-anesthesia guideline booklet.',
    highlight: 'Crucial to prevent aspiration risks under general anesthesia.'
  },
  {
    category: 'pre-op',
    question: 'Which home medications must be paused before my surgery?',
    answer: 'Blood thinners (aspirin, clopidogrel, warfarin, or newer anticoagulants) must typically be paused or bridged 5 to 7 days before surgery, under clear supervision from your referring cardiologist. Additionally, stop all non-steroidal anti-inflammatory drugs (NSAIDs like ibuprofen) and herbal supplements',
    highlight: 'Coordinate with Dr. Satish or your primary doctor prior to modifying doses.'
  },
  {
    category: 'post-op',
    question: 'What is the standard recovery timeline and food protocol for jaw or oral tumors surgeries?',
    answer: 'Initial tissue healing takes 10 to 14 days, during which sutures are absorbed or removed. Diet must be strictly restricted to cool, high-protein liquids (smoothies, clear broths, nutritional supplements) for the first 3 to 5 days, transitioning gradually to lukewarm non-chew purees (mashed potatoes, yogurt) for up to 6 weeks to protect newly secured reconstructive bone graft sites.',
    highlight: 'Never use straws for liquids, as suction can dislodge critical mucosal healing seals.'
  },
  {
    category: 'post-op',
    question: 'Is post-surgical jaw swelling normal and how long does it last?',
    answer: 'Yes, swelling is a natural secondary inflammatory response to bone osteotomies and deep tissue transfers. It peaking between 48 and 72 hours postoperative. It begins resolving noticeably after day 5. Apply specialized cold packs periodically (20 minutes on, 20 minutes off) for the first 48 hours, and sleep with your head elevated on 2-3 pillows to assist lymphatic drainage.',
    highlight: 'Warm compresses are safe for muscle rigidity only after day 4.'
  },
  {
    category: 'post-op',
    question: 'When should I contact the clinical triage hotline immediately?',
    answer: 'Please contact our dedicated line (+91 9881954606) or head to the Goa Medical College Emergency Room if you experience any of the following: active bleeding that saturates medical gauze in under 15 minutes, temperature rising above 101.5°F (38.6°C), asymmetrical swelling that causes difficulty swallowing, or breathing congestion.',
    highlight: 'Emergency triage services are active 24/7/365.'
  }
];

export default function FaqAccordion() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pre-op' | 'post-op'>('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const filteredFaqs = faqData.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <section id="faq-section" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#2C7A7B] font-extrabold bg-[#2C7A7B]/10 px-3 py-1 rounded-full">
            Pre & Post-Operative Directory
          </span>
          <h2 className="text-3xl font-display font-bold text-[#1A202C] tracking-tight mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center bg-brand-slate-light p-1 rounded-xl border border-gray-200 w-fit mx-auto mb-8">
          <button
            onClick={() => { setActiveCategory('pre-op'); setExpandedIndex(null); }}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeCategory === 'pre-op'
                ? 'bg-[#2C7A7B] text-white shadow-xs'
                : 'text-gray-600 hover:text-[#1A202C]'
            }`}
          >
            Pre-Operative Planning
          </button>
          <button
            onClick={() => { setActiveCategory('post-op'); setExpandedIndex(null); }}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
              activeCategory === 'post-op'
                ? 'bg-[#2C7A7B] text-white shadow-xs'
                : 'text-gray-600 hover:text-[#1A202C]'
            }`}
          >
            Post-Operative Recovery
          </button>
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={index}
                className="bg-brand-slate-light/50 border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#2C7A7B]/30 hover:shadow-xs"
              >
                {/* Clickable Header bar */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex justify-between items-start gap-4 focus:outline-none cursor-pointer group"
                >
                  <div className="flex gap-3">
                    <span className={`p-1.5 rounded-lg transition-colors mt-0.5 ${isExpanded ? 'bg-[#2C7A7B]/10 text-[#2C7A7B]' : 'bg-gray-100 text-gray-400 group-hover:bg-[#2C7A7B]/5 group-hover:text-[#2C7A7B]'}`}>
                      {faq.category === 'pre-op' ? <Clock className="w-4 h-4" /> : <HeartPulse className="w-4 h-4" />}
                    </span>
                    <div>
                      <span className="text-[9px] font-mono tracking-widest uppercase text-[#2C7A7B] font-bold">
                        {faq.category === 'pre-op' ? 'Pre-Operative Preparation' : 'Post-Operative Recover'}
                      </span>
                      <h3 className="font-display font-bold text-[#1A202C] group-hover:text-[#2C7A7B] transition-colors leading-snug mt-1">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <span className="p-1 rounded-lg bg-white border border-gray-200 text-gray-500 mt-1 shrink-0">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Animated Inner Content Expansion */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-14 sm:pb-6 border-t border-gray-100 pt-4 bg-white">
                        <p className="text-gray-650 text-sm leading-relaxed">
                          {faq.answer}
                        </p>

                        {/* Highlight Advisory Box */}
                        {faq.highlight && (
                          <div className="mt-4 p-3 bg-brand-slate-light border border-gray-200 border-l-4 border-l-[#2C7A7B] rounded-xl flex items-start gap-2.5">
                            <Info className="w-4 h-4 text-[#2C7A7B] shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-700 italic font-medium leading-relaxed">
                              Advisory: {faq.highlight}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Clinical Support Hotline Note */}
        <div className="mt-10 bg-brand-slate-light border border-gray-200 p-4 rounded-2xl flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
          <div className="text-xs text-gray-600 font-sans leading-relaxed">
            <span className="font-bold text-[#1A202C]">Important Disclaimer:</span> Standard guidelines provided above serve as baseline education. Maxillofacial, tongue reconstruction, and skeletal fixation cases involve complex individual anatomical variants. Always consult with Dr. Praveen Satish directly concerning customized medical plans.
          </div>
        </div>

      </div>
    </section>
  );
}
