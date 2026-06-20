import React, { useState, useMemo } from 'react';
import { Search, ExternalLink } from 'lucide-react';
import { PUBLICATIONS } from '../data';

type Tab = 'journal' | 'lecture';

const tabs: { key: Tab; label: string }[] = [
  { key: 'journal', label: 'Peer-Reviewed Journals' },
  { key: 'lecture', label: 'Invited International Lectures' },
];

export const PublicationsSection: React.FC = () => {
  const [tab, setTab] = useState<Tab>('journal');
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    return PUBLICATIONS.filter((pub) => {
      const matchesTab = pub.type === tab;
      const matchesSearch = q.trim()
        ? (pub.title + pub.venue + pub.meta + pub.year).toLowerCase().includes(q.toLowerCase())
        : true;
      return matchesTab && matchesSearch;
    });
  }, [tab, q]);

  return (
    <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto" id="publications">
      <div className="text-center mb-12">
        <span className="px-3.5 py-1.5 bg-brand-ice border border-brand-pale text-brand-dark rounded-none text-[10px] font-black tracking-widest uppercase">
          Research & Publications
        </span>
        <h2 className="text-3xl md:text-4xl font-black mt-3 text-brand-dark tracking-tight">
          Scientific authority, openly indexed.
        </h2>
      </div>

      <div className="bg-white border border-brand-pale rounded-none shadow-md shadow-slate-100/50 overflow-hidden">
        {/* Header: Tabs + Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 md:p-6 border-b border-brand-pale/40">
          <div className="inline-flex border border-brand-pale rounded-none p-0.5 bg-brand-ice/50 w-fit">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  tab === key
                    ? 'bg-brand-dark text-white shadow-sm'
                    : 'text-brand-charcoal hover:text-brand-dark'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-slate" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search publications..."
              className="w-full bg-brand-ice/30 border border-brand-pale pl-10 pr-4 py-2 text-xs text-brand-dark placeholder:text-brand-charcoal/50 focus:outline-none focus:border-brand-dark/40 font-semibold"
            />
          </div>
        </div>

        {/* Publication list */}
        <div className="divide-y divide-brand-pale/30">
          {list.length > 0 ? (
            list.map((pub) => (
              <div
                key={pub.id}
                className="grid grid-cols-12 items-start gap-4 p-5 md:p-6 transition-colors hover:bg-brand-ice/20"
              >
                {/* Year */}
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-xl font-black text-brand-dark font-mono tracking-tight">
                    {pub.year}
                  </p>
                </div>

                {/* Content */}
                <div className="col-span-8 sm:col-span-10">
                  <h3 className="text-sm font-bold text-brand-dark leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-brand-charcoal mt-1.5">
                    <span className="font-semibold">{pub.venue}</span>
                    <span className="mx-1.5 text-brand-pale">·</span>
                    {pub.meta}
                  </p>
                </div>

                {/* Actions */}
                <div className="col-span-2 sm:col-span-1 flex justify-end items-start pt-1">
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center border border-brand-pale text-brand-charcoal hover:bg-brand-ice hover:text-brand-dark transition-all"
                      aria-label="View publication"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="p-10 text-center">
              <p className="text-sm text-brand-charcoal font-semibold">
                No publications match your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
