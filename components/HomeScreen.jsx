// S-07 Home Screen for WiseWorkout
// Design system tokens
const WW = {
  bg: '#F7F8FF',
  card: '#FFFFFF',
  elevated: '#EEF0FB',
  primary: '#6C7EE8',
  primaryDark: '#2D3A8C',
  lavender: '#9B84E8',
  lavenderBg: '#F0EEFE',
  lavenderDark: '#7B5CB8',
  teal: '#4BB8CC',
  tealBg: '#E0F4F8',
  text: '#3D3D5C',
  textSec: '#8A8A9E',
  border: '#C8C8D8',
  shadow: '0 2px 8px rgba(45,58,140,0.06)',
};

// ──── Icons (stroke style, minimal) ────
const Icon = {
  bell: (c = WW.text) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M6 8a6 6 0 0112 0c0 7 3 8 3 8H3s3-1 3-8z" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.3 20a1.9 1.9 0 003.4 0" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  chevron: (c = WW.textSec) => (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
      <path d="M1 1l6 6-6 6" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  sparkle: (c = '#fff') => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" fill={c}/>
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" fill={c}/>
    </svg>
  ),
  flame: (c = WW.teal) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 3s5 4 5 9a5 5 0 01-10 0c0-2 1-3 2-4-.5 1.5.5 3 2 3-.5-3 1-5 1-8z"
        fill={c} stroke={c} strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  ),
  home: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9z" fill={c}/>
    </svg>
  ),
  dumbbell: (c, filled = false) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  star: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l2.3 5.6 6 .5-4.6 4 1.4 5.9L12 16l-5.1 3 1.4-5.9-4.6-4 6-.5L12 3z" fill={c}/>
    </svg>
  ),
  chart: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  person: (c) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={c} strokeWidth="2"/>
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

// ──── Greeting Bar ────
function GreetingBar({ name = 'Marcus', initials = 'MP' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '8px 20px 4px',
    }}>
      <div>
        <div style={{ fontSize: 13, color: WW.textSec, fontWeight: 400, letterSpacing: 0.1 }}>Good morning</div>
        <div style={{ fontSize: 22, color: WW.text, fontWeight: 600, letterSpacing: -0.3, marginTop: 2 }}>{name}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 20, background: WW.card,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: WW.shadow, border: `0.5px solid ${WW.border}`, position: 'relative',
        }}>
          {Icon.bell()}
          <div style={{
            position: 'absolute', top: 9, right: 10, width: 8, height: 8,
            borderRadius: 4, background: WW.primary, border: '1.5px solid #fff',
          }} />
        </div>
        <div style={{
          width: 40, height: 40, borderRadius: 20,
          background: `linear-gradient(135deg, ${WW.primary} 0%, ${WW.lavender} 100%)`,
          color: '#fff', fontSize: 14, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          letterSpacing: 0.2,
        }}>{initials}</div>
      </div>
    </div>
  );
}

// ──── WiseCoach Banner ────
function WiseCoachBanner() {
  return (
    <div style={{
      margin: '16px 20px 0', borderRadius: 16, background: WW.lavenderBg,
      padding: '14px 16px 14px 14px', display: 'flex', gap: 12,
      position: 'relative', overflow: 'hidden', cursor: 'pointer',
    }}>
      <div style={{
        position: 'absolute', left: 0, top: 14, bottom: 14,
        width: 3, borderRadius: 2, background: WW.lavender,
      }} />
      <div style={{
        width: 32, height: 32, borderRadius: 16, background: WW.lavender,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2,
      }}>{Icon.sparkle('#fff')}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: WW.lavenderDark, letterSpacing: 0.2 }}>WiseCoach</div>
          <div style={{ fontSize: 11, color: WW.textSec }}>· 2 hours ago</div>
        </div>
        <div style={{ fontSize: 13.5, color: '#5B3F9E', lineHeight: 1.5, textWrap: 'pretty' }}>
          Strong session yesterday. Your bench press volume is up <b style={{ fontWeight: 600 }}>12%</b> this week. Consider a slightly lighter session today to let your chest recover.
        </div>
      </div>
      <div style={{ alignSelf: 'center', marginLeft: 4 }}>{Icon.chevron(WW.lavenderDark)}</div>
    </div>
  );
}

// ──── Calorie Ring Card ────
function CalorieRing({ burned = 420, goal = 600 }) {
  const r = 62, c = 2 * Math.PI * r;
  const pct = Math.min(burned / goal, 1);
  const dash = c * pct;
  return (
    <div style={{
      margin: '14px 20px 0', background: WW.card, borderRadius: 16,
      border: `0.5px solid ${WW.border}`, boxShadow: WW.shadow,
      padding: '18px 18px 16px', cursor: 'pointer',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: WW.text }}>Today's energy</div>
        <div style={{ fontSize: 12, color: WW.textSec }}>Goal {goal} kcal</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <div style={{ position: 'relative', width: 140, height: 140, flexShrink: 0 }}>
          <svg width="140" height="140" viewBox="0 0 140 140">
            <circle cx="70" cy="70" r={r} stroke="#E6EAFE" strokeWidth="12" fill="none"/>
            <circle cx="70" cy="70" r={r} stroke={WW.primary} strokeWidth="12" fill="none"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${c}`}
              transform="rotate(-90 70 70)"/>
          </svg>
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ fontSize: 30, fontWeight: 700, color: WW.text, letterSpacing: -0.8, lineHeight: 1 }}>{burned}</div>
            <div style={{ fontSize: 11, color: WW.textSec, marginTop: 4, letterSpacing: 0.2 }}>kcal burned</div>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <StatPill dot={WW.primary} label="Gym" value="280 kcal" />
          <StatPill dot={WW.teal} label="Cardio" value="140 kcal" />
          <StatPill dot={WW.border} label="Left" value="180 kcal" />
        </div>
      </div>
    </div>
  );
}

function StatPill({ dot, label, value }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      background: '#F7F8FF', borderRadius: 999, padding: '7px 12px',
    }}>
      <div style={{ width: 8, height: 8, borderRadius: 4, background: dot }} />
      <div style={{ fontSize: 12, color: WW.textSec, flex: 1 }}>{label}</div>
      <div style={{ fontSize: 12, color: WW.text, fontWeight: 600 }}>{value}</div>
    </div>
  );
}

// ──── Today's Plan Card ────
function TodayPlanCard() {
  const exercises = [
    { n: 'Bench Press', s: '4 × 8', tint: '#E6EAFE' },
    { n: 'Overhead Press', s: '3 × 10', tint: '#F0EEFE' },
    { n: 'Tricep Pushdown', s: '3 × 12', tint: '#E0F4F8' },
  ];
  return (
    <div style={{
      margin: '14px 20px 0', background: WW.card, borderRadius: 16,
      border: `0.5px solid ${WW.border}`, boxShadow: WW.shadow,
      padding: '16px 18px 18px', cursor: 'pointer',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 11, color: WW.textSec, fontWeight: 500, letterSpacing: 0.6, textTransform: 'uppercase' }}>Today · Push A</div>
          <div style={{ fontSize: 17, color: WW.text, fontWeight: 600, marginTop: 3, letterSpacing: -0.2 }}>Upper Body — Push</div>
        </div>
        {Icon.chevron()}
      </div>
      <div style={{ display: 'flex', gap: 14, marginTop: 10, marginBottom: 14, fontSize: 11.5, color: WW.textSec }}>
        <span>45 min</span>
        <span style={{ color: WW.border }}>·</span>
        <span>5 exercises</span>
        <span style={{ color: WW.border }}>·</span>
        <span>Chest · Shoulders · Tri</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {exercises.map((ex, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10, background: ex.tint,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: WW.primaryDark, opacity: 0.6 }}>{i + 1}</div>
            </div>
            <div style={{ flex: 1, fontSize: 14, color: WW.text, fontWeight: 500 }}>{ex.n}</div>
            <div style={{ fontSize: 12, color: WW.textSec, fontVariantNumeric: 'tabular-nums' }}>{ex.s}</div>
          </div>
        ))}
        <div style={{ fontSize: 11, color: WW.textSec, padding: '2px 0 0', textAlign: 'center' }}>+ 2 more</div>
      </div>
      <button style={{
        marginTop: 14, width: '100%', height: 48, borderRadius: 14,
        background: WW.primary, color: '#fff', border: 'none',
        fontSize: 15, fontWeight: 600, letterSpacing: 0.1, cursor: 'pointer',
        boxShadow: '0 4px 14px rgba(108,126,232,0.28)',
      }}>Start workout</button>
    </div>
  );
}

// ──── Streak Card ────
function StreakCard() {
  const days = [1, 1, 1, 1, 1, 1, 0]; // 6 filled + today empty
  const labels = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  return (
    <div style={{
      margin: '14px 20px 24px', background: WW.card, borderRadius: 16,
      border: `0.5px solid ${WW.border}`, boxShadow: WW.shadow,
      padding: '16px 18px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, background: WW.tealBg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>{Icon.flame()}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: WW.text }}>7 day streak</div>
          <div style={{ fontSize: 12, color: WW.textSec, marginTop: 1 }}>Keep it up — train today to protect it.</div>
        </div>
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', marginTop: 14,
      }}>
        {days.map((d, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 14,
              background: d ? WW.teal : 'transparent',
              border: d ? 'none' : `1.5px dashed ${WW.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {d ? (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6.2l2.4 2.4L9.5 3.8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : null}
            </div>
            <div style={{ fontSize: 10, color: WW.textSec, fontWeight: 500 }}>{labels[i]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ──── Bottom Navigation ────
function BottomNav({ active = 'home' }) {
  const tabs = [
    { k: 'home', l: 'Home', i: Icon.home },
    { k: 'plans', l: 'Plans', i: Icon.dumbbell },
    { k: 'coach', l: 'Coach', i: Icon.star },
    { k: 'progress', l: 'Progress', i: Icon.chart },
    { k: 'profile', l: 'Profile', i: Icon.person },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(16px) saturate(180%)',
      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
      borderTop: `0.5px solid #E8EAF8`,
      paddingBottom: 28, paddingTop: 10,
      display: 'flex', justifyContent: 'space-around',
      zIndex: 40,
    }}>
      {tabs.map(t => {
        const isActive = t.k === active;
        const c = isActive ? WW.primary : WW.textSec;
        return (
          <div key={t.k} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
            padding: '4px 10px', minWidth: 56,
          }}>
            <div style={{ position: 'relative' }}>
              {t.i(c)}
              {isActive && (
                <div style={{
                  position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)',
                  width: 4, height: 4, borderRadius: 2, background: WW.primary,
                }} />
              )}
            </div>
            <div style={{
              fontSize: 10, fontWeight: isActive ? 600 : 500, color: c, letterSpacing: 0.1,
            }}>{t.l}</div>
          </div>
        );
      })}
    </div>
  );
}

// ──── Full Home Screen ────
function HomeScreen() {
  return (
    <div style={{
      width: 390, height: 844, background: WW.bg,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", system-ui, sans-serif',
      color: WW.text, position: 'relative', overflow: 'hidden',
      WebkitFontSmoothing: 'antialiased',
    }}>
      {/* iOS status bar (simple, matches 390px) */}
      <div style={{
        height: 47, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 28px', fontSize: 15, fontWeight: 600, color: WW.text,
        position: 'relative', zIndex: 5,
      }}>
        <div style={{ paddingTop: 10 }}>9:41</div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', paddingTop: 10 }}>
          <svg width="17" height="11" viewBox="0 0 17 11">
            <rect x="0" y="7" width="3" height="4" rx="0.6" fill={WW.text}/>
            <rect x="4.5" y="5" width="3" height="6" rx="0.6" fill={WW.text}/>
            <rect x="9" y="2.5" width="3" height="8.5" rx="0.6" fill={WW.text}/>
            <rect x="13.5" y="0" width="3" height="11" rx="0.6" fill={WW.text}/>
          </svg>
          <svg width="24" height="11" viewBox="0 0 24 11">
            <rect x="0.5" y="0.5" width="20" height="10" rx="3" stroke={WW.text} strokeOpacity="0.4" fill="none"/>
            <rect x="2" y="2" width="17" height="7" rx="1.5" fill={WW.text}/>
            <rect x="21" y="3.5" width="1.5" height="4" rx="0.5" fill={WW.text} opacity="0.4"/>
          </svg>
        </div>
      </div>

      {/* Scrollable content area */}
      <div style={{
        position: 'absolute', top: 47, left: 0, right: 0, bottom: 0,
        overflowY: 'auto', paddingBottom: 96,
      }}>
        <GreetingBar />
        <WiseCoachBanner />
        <CalorieRing />
        <TodayPlanCard />
        <StreakCard />
      </div>

      <BottomNav active="home" />
    </div>
  );
}

Object.assign(window, { HomeScreen, WW });

// Auto-render once this file is transformed by Babel
(function mount() {
  const el = document.getElementById('app');
  if (el && window.ReactDOM) {
    ReactDOM.createRoot(el).render(<HomeScreen />);
  }
})();
