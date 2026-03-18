import { useState } from 'react';

const steps = [
  { number: '1', title: 'Quick Look', desc: 'Is this CTAS 1? Life-threatening?', color: '#6B2D8B' },
  { number: '2', title: 'Presenting Complaints', desc: 'Identify primary complaint category', color: '#D72B2B' },
  { number: '3', title: '1st Order Modifiers', desc: 'O₂ Sat, Hemodynamics, GCS, Temp', color: '#E8751A' },
  { number: '4', title: '2nd Order Modifiers', desc: 'Pain, BGL, BP, Dehydration, Bleeding', color: '#D4A017' },
  { number: '5', title: 'Assign Highest CTAS', desc: 'Use the most acute level identified', color: '#2E8B57' },
];

export default function AssessmentFlow() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3 rounded-xl shadow-sm overflow-hidden bg-white">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center gap-2 px-4 py-3 text-left active:bg-gray-50 transition-colors"
      >
        <svg className="w-4 h-4 text-ctas-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <path d="M9 5a2 2 0 012-2h2a2 2 0 012 2v0a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          <path d="M9 14l2 2 4-4" />
        </svg>
        <span className="font-semibold text-sm text-gray-900 flex-1">How to Assess CTAS</span>
        <svg
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-4 pb-4 border-t border-gray-100">
          <div className="mt-3 flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-6 bg-gray-200" />
                  )}
                </div>
                <div className="pt-0.5 pb-3">
                  <p className="text-sm font-semibold text-gray-900">{step.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
