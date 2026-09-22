const ICONS = {
  poultry: (
    <g stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* body */}
      <ellipse cx="50" cy="62" rx="20" ry="16" />
      {/* head */}
      <circle cx="50" cy="34" r="10" />
      {/* neck */}
      <line x1="50" y1="44" x2="50" y2="46" />
      {/* comb */}
      <path d="M44 26 Q46 20 48 25 Q50 18 52 25 Q54 20 56 26" />
      {/* beak */}
      <path d="M56 34 L63 36 L56 38" />
      {/* eye */}
      <circle cx="53" cy="32" r="1.5" fill="currentColor" stroke="none" />
      {/* wattle */}
      <path d="M50 42 Q54 46 50 50" />
      {/* wing */}
      <path d="M32 58 Q38 50 50 52 Q62 50 68 58" />
      {/* legs */}
      <line x1="44" y1="77" x2="40" y2="88" />
      <line x1="56" y1="77" x2="60" y2="88" />
      <path d="M36 88 L40 88 L44 85" />
      <path d="M56 85 L60 88 L64 88" />
      {/* tail feathers */}
      <path d="M68 58 Q76 48 74 40" />
      <path d="M68 62 Q78 56 78 46" />
    </g>
  ),

  honey: (
    <g stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* jar body */}
      <path d="M36 42 Q34 78 50 80 Q66 78 64 42 Z" />
      {/* jar neck */}
      <rect x="40" y="32" width="20" height="12" rx="3" />
      {/* lid */}
      <rect x="38" y="26" width="24" height="8" rx="3" />
      {/* honey drip */}
      <path d="M50 80 Q50 86 50 88" strokeWidth="4" />
      <circle cx="50" cy="90" r="2.5" fill="currentColor" stroke="none" />
      {/* honeycomb pattern inside */}
      <path d="M44 52 L47 49 L53 49 L56 52 L53 55 L47 55 Z" />
      <path d="M44 62 L47 59 L53 59 L56 62 L53 65 L47 65 Z" />
      {/* shine */}
      <path d="M40 46 Q39 52 40 58" strokeWidth="2.5" opacity="0.5" />
    </g>
  ),

  feed: (
    <g stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* sack body */}
      <path d="M34 45 Q32 80 50 82 Q68 80 66 45 Q60 40 50 40 Q40 40 34 45 Z" />
      {/* sack tie */}
      <path d="M43 40 Q50 34 57 40" />
      <line x1="50" y1="34" x2="50" y2="28" />
      {/* grain stalks */}
      <line x1="50" y1="28" x2="50" y2="18" />
      <path d="M50 24 Q44 20 43 14" />
      <path d="M50 24 Q56 20 57 14" />
      <path d="M50 20 Q46 16 46 11" />
      <path d="M50 20 Q54 16 54 11" />
      {/* label lines on sack */}
      <line x1="41" y1="56" x2="59" y2="56" strokeWidth="2" />
      <line x1="41" y1="63" x2="59" y2="63" strokeWidth="2" />
      <line x1="43" y1="70" x2="57" y2="70" strokeWidth="2" />
    </g>
  ),

  fish: (
    <g stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* body */}
      <path d="M22 50 Q38 28 62 38 Q74 42 76 50 Q74 58 62 62 Q38 72 22 50 Z" />
      {/* tail */}
      <path d="M22 50 L10 38 L14 50 L10 62 Z" />
      {/* eye */}
      <circle cx="64" cy="47" r="3.5" />
      <circle cx="65" cy="46" r="1" fill="currentColor" stroke="none" />
      {/* mouth */}
      <path d="M76 50 Q80 48 78 52" />
      {/* scales */}
      <path d="M55 40 Q52 46 55 52" />
      <path d="M45 38 Q42 46 45 56" />
      <path d="M35 42 Q33 50 35 58" />
      {/* fin top */}
      <path d="M40 38 Q46 26 56 36" />
      {/* fin bottom */}
      <path d="M40 62 Q46 72 54 64" />
      {/* water line */}
      <path d="M18 78 Q30 74 42 78 Q54 82 66 78 Q76 74 84 78" strokeWidth="2.5" />
    </g>
  ),

  horticulture: (
    <g stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* stem */}
      <line x1="50" y1="82" x2="50" y2="40" />
      {/* left leaf */}
      <path d="M50 55 Q34 48 28 30 Q44 32 50 55" />
      {/* right leaf */}
      <path d="M50 55 Q66 48 72 30 Q56 32 50 55" />
      {/* flower petals */}
      <circle cx="50" cy="30" r="6" />
      <circle cx="50" cy="18" r="5" />
      <circle cx="61" cy="24" r="5" />
      <circle cx="61" cy="36" r="5" />
      <circle cx="39" cy="24" r="5" />
      <circle cx="39" cy="36" r="5" />
      {/* flower center */}
      <circle cx="50" cy="30" r="6" />
      {/* ground / soil */}
      <path d="M36 82 Q50 78 64 82" />
      <path d="M30 88 Q50 84 70 88" strokeWidth="2.5" />
      {/* leaf vein */}
      <path d="M50 55 Q38 50 32 34" strokeWidth="1.5" />
      <path d="M50 55 Q62 50 68 34" strokeWidth="1.5" />
    </g>
  ),

  dairy: (
    <g stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* cow head */}
      <ellipse cx="50" cy="38" rx="18" ry="14" />
      {/* ears */}
      <path d="M32 32 Q24 26 26 34" />
      <path d="M68 32 Q76 26 74 34" />
      {/* horns */}
      <path d="M36 26 Q32 16 38 18" />
      <path d="M64 26 Q68 16 62 18" />
      {/* eyes */}
      <circle cx="42" cy="35" r="2.5" />
      <circle cx="58" cy="35" r="2.5" />
      <circle cx="43" cy="34" r="1" fill="currentColor" stroke="none" />
      <circle cx="59" cy="34" r="1" fill="currentColor" stroke="none" />
      {/* nose */}
      <ellipse cx="50" cy="46" rx="8" ry="5" />
      <circle cx="47" cy="46" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="53" cy="46" r="1.5" fill="currentColor" stroke="none" />
      {/* milk bottle */}
      <path d="M38 62 Q36 88 50 90 Q64 88 62 62 Z" />
      <rect x="42" y="54" width="16" height="10" rx="2" />
      <rect x="44" y="50" width="12" height="6" rx="2" />
      {/* milk drops */}
      <path d="M44 72 Q44 76 46 76 Q48 76 48 72" strokeWidth="2" />
    </g>
  ),

  meat: (
    <g stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {/* meat cut shape */}
      <path d="M30 65 Q24 48 34 36 Q44 24 58 30 Q70 34 72 46 Q74 58 64 66 Q54 74 44 72 Z" />
      {/* bone handle */}
      <line x1="58" y1="62" x2="76" y2="80" />
      <circle cx="78" cy="82" r="5" />
      <circle cx="72" cy="76" r="4" />
      {/* marbling lines */}
      <path d="M38 48 Q44 44 50 50 Q56 44 62 50" strokeWidth="2" />
      <path d="M36 56 Q42 52 48 58 Q54 52 60 58" strokeWidth="2" />
      {/* fat edge */}
      <path d="M30 65 Q28 56 30 48 Q32 40 36 36" strokeWidth="2" opacity="0.6" />
    </g>
  ),
};

export default function UnitIcon({ id, size = 38, className = "icon" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      width={size}
      height={size}
    >
      {ICONS[id] || null}
    </svg>
  );
}
