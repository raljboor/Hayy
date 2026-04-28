
import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, Bell, Bookmark, BriefcaseBusiness, CalendarDays, Check, ChevronRight,
  CircleDot, Clock3, Compass, Crown, Eye, Filter, Globe2, Handshake, HeartHandshake,
  Home, Layers3, Lock, LogIn, Mail, Menu, MessageCircle, Mic, MonitorUp, Play,
  Plus, Radio, Search, Send, Settings, ShieldCheck, Sparkles, Star, User,
  UserRoundCheck, Users, Video, WandSparkles, X, XCircle
} from "lucide-react";
import "./styles.css";

const rooms = [
  {
    id: "r1",
    tag: "FOUNDING ROOM",
    category: "Career Access",
    title: "How to Get Referred Into Corporate Roles in Canada",
    host: "Hayy Community",
    hostRole: "Founding career room",
    date: "Thursday · 7:00 PM EST",
    attendees: 82,
    speakers: 8,
    status: "Open",
    type: "Live Q&A",
    description: "Meet professionals inside target companies, ask questions, and learn how to turn a conversation into a warm intro."
  },
  {
    id: "r2",
    tag: "OPERATIONS",
    category: "Operations",
    title: "Breaking Into Amazon, Logistics & Program Management",
    host: "Ops Professionals",
    hostRole: "Managers and operators",
    date: "Next week",
    attendees: 41,
    speakers: 5,
    status: "Waitlist",
    type: "Coffee Chat",
    description: "A focused room for people targeting operations, supply chain, logistics, launch, and program roles."
  },
  {
    id: "r3",
    tag: "NEWCOMERS",
    category: "Newcomers",
    title: "Career Access for International Professionals",
    host: "Referral Hosts",
    hostRole: "International professionals",
    date: "Coming soon",
    attendees: 29,
    speakers: 4,
    status: "Notify me",
    type: "Panel",
    description: "A practical room for newcomers building their first warm network in Canada."
  },
  {
    id: "r4",
    tag: "PRODUCT",
    category: "Tech",
    title: "Product, Data & Software Career Room",
    host: "Tech Hosts",
    hostRole: "Product and engineering mentors",
    date: "May 9 · 6:30 PM EST",
    attendees: 56,
    speakers: 6,
    status: "Open",
    type: "Live Room",
    description: "Meet product, data, design, and software professionals through live discussion."
  },
  {
    id: "r5",
    tag: "FINANCE",
    category: "Finance",
    title: "Finance & Banking Referral Night",
    host: "Finance Hosts",
    hostRole: "Banking and analyst mentors",
    date: "May 12 · 7:30 PM EST",
    attendees: 38,
    speakers: 4,
    status: "Open",
    type: "Referral Night",
    description: "Understand how to build trust before requesting a referral in finance and banking."
  },
  {
    id: "r6",
    tag: "CONSULTING",
    category: "Consulting",
    title: "Consulting Coffee Chat Room",
    host: "Strategy Circle",
    hostRole: "Consultants and analysts",
    date: "May 15 · 8:00 PM EST",
    attendees: 25,
    speakers: 3,
    status: "Waitlist",
    type: "Coffee Chat",
    description: "Practice story-led introductions and get honest advice from consulting professionals."
  }
];

const referrals = [
  {
    id: "ref1",
    name: "Nadia K.",
    avatar: "NK",
    target: "Program Manager · Amazon",
    company: "Amazon",
    status: "Pending",
    type: "Coffee chat",
    lastUpdated: "2h ago",
    note: "Looking for insight into PM and operations roles before applying."
  },
  {
    id: "ref2",
    name: "Yousef A.",
    avatar: "YA",
    target: "Supply Chain Analyst · RBC",
    company: "RBC",
    status: "Accepted",
    type: "Referral review",
    lastUpdated: "Yesterday",
    note: "Strong analytics background and Canadian internship experience."
  },
  {
    id: "ref3",
    name: "Maya H.",
    avatar: "MH",
    target: "Operations Analyst · Shopify",
    company: "Shopify",
    status: "Declined",
    type: "Referral",
    lastUpdated: "3d ago",
    note: "Needs more role alignment before referral."
  },
  {
    id: "ref4",
    name: "Omar J.",
    avatar: "OJ",
    target: "Business Analyst · Deloitte",
    company: "Deloitte",
    status: "Completed",
    type: "Coffee chat",
    lastUpdated: "1w ago",
    note: "Completed intro call and received next-step advice."
  }
];

const hosts = [
  { name: "Aisha K.", avatar: "AK", role: "Director of Product", company: "Stripe", capacity: "2 chats open", tags: ["Product", "Strategy"] },
  { name: "Omar H.", avatar: "OH", role: "Engineering Manager", company: "Meta", capacity: "1 referral open", tags: ["Engineering", "Management"] },
  { name: "Leila M.", avatar: "LM", role: "Head of Design", company: "Airbnb", capacity: "3 chats open", tags: ["Design", "Portfolio"] },
  { name: "Khalid A.", avatar: "KA", role: "Senior Product Manager", company: "Google", capacity: "2 referrals open", tags: ["PM", "Growth"] }
];

const candidates = [
  { name: "Sara M.", avatar: "SM", role: "Operations Analyst", source: "Khalid A.", tags: ["Excel", "Power BI", "Logistics"], fit: "High", status: "Referred" },
  { name: "Omar A.", avatar: "OA", role: "Product Analyst", source: "Aisha K.", tags: ["SQL", "Research", "UX"], fit: "Medium", status: "Shortlisted" },
  { name: "Lina F.", avatar: "LF", role: "Industrial Engineer", source: "Leila M.", tags: ["Lean", "Data", "Simulation"], fit: "High", status: "Applied" },
  { name: "Maha S.", avatar: "MS", role: "Product Designer", source: "Khalid A.", tags: ["Design", "Systems", "Research"], fit: "High", status: "Interviewed" }
];

const pages = {
  landing: "Landing",
  login: "Login",
  signup: "Signup",
  onboarding: "Onboarding",
  dashboard: "Dashboard",
  rooms: "Rooms",
  roomDetail: "Room Detail",
  liveRoom: "Live Room",
  referrals: "Referrals",
  profile: "Profile",
  host: "Host Dashboard",
  recruiter: "Recruiter Dashboard",
  settings: "Settings"
};

function HayyMark({ size = 44 }) {
  return (
    <svg className="hayy-mark" width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id="bronze" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c49755" />
          <stop offset="58%" stopColor="#8b5b2e" />
          <stop offset="100%" stopColor="#5d3a20" />
        </linearGradient>
      </defs>
      <path d="M50 7 L58 15 L50 23 L42 15 Z" fill="url(#bronze)" opacity="0.92"/>
      <path d="M50 39 L58 47 L50 55 L42 47 Z" fill="url(#bronze)" opacity="0.88"/>
      <path d="M15 46 L23 38 L31 46 L23 54 Z" fill="url(#bronze)" opacity="0.8"/>
      <path d="M85 46 L77 38 L69 46 L77 54 Z" fill="url(#bronze)" opacity="0.8"/>
      <path d="M50 18 C34 30 24 38 24 55 L24 70 L38 78 L38 60 C38 52 43 45 50 40 C57 45 62 52 62 60 L62 78 L76 70 L76 55 C76 38 66 30 50 18Z" fill="none" stroke="url(#bronze)" strokeWidth="7" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M50 30 C39 38 34 45 34 58 L34 85 L50 94 L66 85 L66 58 C66 45 61 38 50 30Z" fill="none" stroke="url(#bronze)" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M24 57 C34 58 43 62 50 70 C57 62 66 58 76 57" fill="none" stroke="url(#bronze)" strokeWidth="6" strokeLinecap="round"/>
      <path d="M50 68 L50 94" stroke="url(#bronze)" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

function Logo({ compact = false }) {
  return (
    <div className={"logo " + (compact ? "compact" : "")}>
      <HayyMark size={compact ? 34 : 46} />
      <span>HAYY</span>
    </div>
  );
}

function Button({ children, variant = "primary", className = "", onClick, type = "button" }) {
  return <button type={type} onClick={onClick} className={`btn ${variant} ${className}`}>{children}</button>;
}

function Badge({ children, variant = "gold" }) {
  return <span className={`badge ${variant}`}>{children}</span>;
}

function Avatar({ initials, className = "" }) {
  return <div className={`avatar ${className}`}>{initials}</div>;
}

function PublicHeader({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const nav = [
    ["rooms", "Rooms"],
    ["landing", "How it Works"],
    ["host", "For Hosts"],
    ["recruiter", "Recruiters"]
  ];

  return (
    <header className="public-header">
      <button className="logo-button" onClick={() => setPage("landing")}><Logo compact /></button>
      <nav className="public-nav">
        {nav.map(([key, label]) => <button key={label} onClick={() => setPage(key)} className={page === key ? "active" : ""}>{label}</button>)}
      </nav>
      <div className="header-actions">
        <button className="link-button" onClick={() => setPage("login")}>Log in</button>
        <Button onClick={() => setPage("signup")} className="header-cta">Join the first Hayy room</Button>
      </div>
      <button className="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      {open && (
        <div className="mobile-panel">
          {nav.map(([key, label]) => <button key={label} onClick={() => { setPage(key); setOpen(false); }}>{label}</button>)}
          <button onClick={() => { setPage("login"); setOpen(false); }}>Log in</button>
          <button onClick={() => { setPage("signup"); setOpen(false); }}>Join the first Hayy room</button>
        </div>
      )}
    </header>
  );
}

function Landing({ setPage }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-ornament left"></div>
        <div className="hero-copy">
          <div className="hero-logo-lockup">
            <HayyMark size={112} />
            <div className="hero-wordmark">HAYY</div>
          </div>
          <h1>Where careers come alive.</h1>
          <p className="hero-subtitle">Hayy is a live career community where professionals build warm connections and earn referrals before applying.</p>
          <div className="hero-buttons">
            <Button onClick={() => setPage("signup")}>Join the first Hayy room <ArrowRight size={18} /></Button>
            <Button variant="secondary" onClick={() => setPage("host")}>Become a referral host</Button>
          </div>
          <div className="hero-features">
            <div><Radio /> Live conversations</div>
            <div><Handshake /> Real connections</div>
            <div><Crown /> Meaningful referrals</div>
          </div>
        </div>
        <LiveRoomPreview setPage={setPage} />
      </section>

      <section className="problem-section">
        <InfoCard icon={<Layers3 />} title="Cold applications are broken.">
          Most applications go unseen. Resumes get filtered out. Opportunities stay hidden behind closed doors.
        </InfoCard>
        <InfoCard icon={<HeartHandshake />} title="Hayy makes access human again." emphasized>
          Join live rooms. Build real relationships. Earn referrals from people who know and trust you.
        </InfoCard>
      </section>

      <HowItWorks />

      <section className="section">
        <div className="section-top">
          <div>
            <p className="eyebrow">Upcoming rooms</p>
            <h2>Rooms built around real access.</h2>
          </div>
          <button className="view-link" onClick={() => setPage("rooms")}>View all rooms <ArrowRight size={16} /></button>
        </div>
        <div className="room-grid three">
          {rooms.slice(0, 3).map(room => <RoomCard key={room.id} room={room} setPage={setPage} />)}
        </div>
      </section>

      <section className="hosts-preview section">
        <div>
          <p className="eyebrow">For referral hosts</p>
          <h2>Share your journey. Open doors. Make an impact.</h2>
          <p>Hayy hosts are professionals, recruiters, founders, and employees who join rooms to share honest advice, answer questions, and connect promising candidates to opportunities.</p>
          <Button onClick={() => setPage("host")}>Become a referral host <ArrowRight size={18} /></Button>
        </div>
        <HostProfileCard />
        <ReferralRequestPreview />
      </section>

      <section className="final-cta">
        <div>
          <h2>Be part of the future of career growth.</h2>
          <p>Join the founding community and build your network the human way.</p>
        </div>
        <div className="cta-right">
          <Button onClick={() => setPage("signup")}>Join the first Hayy room <ArrowRight size={18} /></Button>
          <div className="mini-avatar-row">
            {["AK","OH","LM","MS"].map(a => <Avatar key={a} initials={a} className="tiny" />)}
            <span>+1,248 early members already joined</span>
          </div>
        </div>
      </section>
    </>
  );
}

function LiveRoomPreview({ setPage }) {
  const people = [
    ["Aisha K.", "Host", "AK"],
    ["Omar H.", "Speaker", "OH"],
    ["Leila M.", "Speaker", "LM"],
    ["You", "Listening", "YU"],
    ["Maha S.", "Speaker", "MS"],
    ["Zayd R.", "Listening", "ZR"]
  ];

  return (
    <div className="live-preview">
      <div className="live-preview-top">
        <span><CircleDot size={14} /> LIVE ROOM PREVIEW</span>
        <span>28:34</span>
      </div>
      <div className="live-preview-hero">
        <Badge>LIVE</Badge>
        <div className="preview-avatars">
          {["AK","OH","LM"].map(a => <Avatar key={a} initials={a} className="tiny" />)}
          <span>+24</span>
        </div>
        <h3>Product Leaders in Tech</h3>
        <p>Building products people love.</p>
      </div>
      <div className="participant-grid">
        {people.map(([name, role, initials], index) => (
          <div key={name} className={`participant ${index < 3 ? "speaking" : ""}`}>
            <Avatar initials={initials} />
            <div>
              <strong>{name}</strong>
              <span>{role}</span>
            </div>
            {index < 4 && <Mic size={15} />}
          </div>
        ))}
      </div>
      <div className="question-strip">
        <HayyMark size={34} />
        <strong>What’s a career move that shaped your path the most?</strong>
        <Button onClick={() => setPage("liveRoom")} className="dark-button">Enter room preview</Button>
      </div>
    </div>
  );
}

function InfoCard({ icon, title, children, emphasized }) {
  return (
    <article className={`info-card ${emphasized ? "emphasized" : ""}`}>
      <div className="hex-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}

function HowItWorks() {
  const steps = [
    ["Join a live room", "Discover rooms hosted by professionals in companies and industries you admire.", <Mic />],
    ["Share your story", "Introduce yourself, ask questions, and have authentic conversations.", <MessageCircle />],
    ["Request a referral", "Build rapport and request a referral when it’s the right time.", <Handshake />],
    ["Track follow-ups", "Stay on top of your referrals and follow-ups in one simple dashboard.", <ShieldCheck />]
  ];
  return (
    <section className="section how-section">
      <div className="ornament-line"><span></span><h2>How Hayy works</h2><span></span></div>
      <div className="steps-grid">
        {steps.map(([title, desc, icon], i) => (
          <article className="step-card" key={title}>
            <span className="step-number">{i + 1}</span>
            <div className="step-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RoomCard({ room, setPage }) {
  return (
    <article className="room-card">
      <div className="card-pattern"></div>
      <Badge>{room.tag}</Badge>
      <h3>{room.title}</h3>
      <p className="room-host">Hosted by {room.host}</p>
      <p className="room-role">{room.hostRole}</p>
      <div className="room-meta">
        <span><CalendarDays size={15} /> {room.date}</span>
        <span><Users size={15} /> {room.attendees} attending</span>
      </div>
      <div className="room-footer">
        <span>{room.type}</span>
        <Button variant={room.status === "Open" ? "primary" : "secondary"} onClick={() => setPage("roomDetail")}>{room.status}</Button>
      </div>
    </article>
  );
}

function HostProfileCard() {
  return (
    <article className="host-profile-card">
      <div className="host-dark">
        <Avatar initials="KA" className="large" />
        <div>
          <h3>Khalid Al Saeed</h3>
          <p>Senior Product Manager @ Google</p>
          <span>Referral host since 2023</span>
        </div>
      </div>
      <div className="host-stats">
        <div><strong>24</strong><span>Hosted rooms</span></div>
        <div><strong>87</strong><span>Referrals made</span></div>
        <div><strong>213</strong><span>People helped</span></div>
      </div>
    </article>
  );
}

function ReferralRequestPreview() {
  return (
    <article className="request-preview">
      <div className="card-header">
        <strong>Referral request preview</strong>
        <span>2h ago</span>
      </div>
      <div className="request-content">
        <div>
          <div className="request-user"><Avatar initials="MS" className="small" /><div><strong>Maha Salman</strong><span>Product Designer</span></div></div>
          <p>Hi Khalid! I really enjoyed our conversation about scaling design teams. I’d love to request a referral for a Product Designer role on your team.</p>
        </div>
        <div className="request-detail">
          <span>Role</span><strong>Product Designer</strong>
          <span>Company</span><strong>Google</strong>
        </div>
      </div>
      <div className="request-actions">
        <Button variant="secondary">Decline</Button>
        <Button>Support with referral</Button>
      </div>
    </article>
  );
}

function AuthPage({ type, setPage }) {
  const signup = type === "signup";
  return (
    <main className="auth-page">
      <section className="auth-card">
        <Logo />
        <h1>{signup ? "Join Hayy" : "Welcome back."}</h1>
        <p>{signup ? "Request access to the founding career rooms and start building warm professional connections." : "Log in to manage rooms, referrals, and follow-ups."}</p>
        {signup && <label>Full name<input placeholder="Your name" /></label>}
        <label>Email<input type="email" placeholder="you@email.com" /></label>
        <label>Password<input type="password" placeholder="••••••••" /></label>
        {signup && (
          <>
            <label>I am a<select><option>Job seeker</option><option>Referral host</option><option>Recruiter / employer</option><option>Community partner</option></select></label>
            <label>Target role or industry<input placeholder="Operations, product, finance..." /></label>
          </>
        )}
        <Button onClick={() => setPage(signup ? "onboarding" : "dashboard")}>{signup ? "Create account" : "Log in"} <ArrowRight size={18} /></Button>
        <button className="text-button" onClick={() => setPage(signup ? "login" : "signup")}>
          {signup ? "Already have an account? Log in" : "Need an account? Join Hayy"}
        </button>
      </section>
      <section className="auth-aside">
        <HayyMark size={110} />
        <h2>More than a resume. More than a job.</h2>
        <p>Meet real people, show your story, and build the kind of trust that creates opportunity.</p>
        <div className="auth-points">
          <span><Radio /> Live career rooms</span>
          <span><Handshake /> Referral tracking</span>
          <span><UserRoundCheck /> Warm introductions</span>
        </div>
      </section>
    </main>
  );
}

function Onboarding({ setPage }) {
  return (
    <main className="onboarding-page">
      <div className="onboarding-head">
        <Badge>Onboarding</Badge>
        <h1>Tell Hayy what kind of access you need.</h1>
        <p>Use this to personalize rooms, referrals, and suggested hosts.</p>
      </div>
      <div className="progress"><span style={{ width: "66%" }}></span></div>
      <div className="onboarding-grid">
        <FormPanel title="1. Your career target" icon={<Compass />}>
          <label>Target role<input placeholder="Operations Analyst, PM, SWE..." /></label>
          <label>Target companies<input placeholder="Amazon, Shopify, RBC..." /></label>
          <label>Location<input placeholder="Toronto, Canada" /></label>
          <label>Experience level<select><option>Early career</option><option>Student</option><option>New grad</option><option>Mid career</option><option>Career switcher</option></select></label>
        </FormPanel>
        <FormPanel title="2. Your story" icon={<Sparkles />}>
          <label>Short bio<textarea placeholder="Tell hosts who you are and what you are building toward." /></label>
          <label>Key skills<input placeholder="Power BI, operations, SQL..." /></label>
          <label>LinkedIn URL<input placeholder="linkedin.com/in/..." /></label>
        </FormPanel>
        <FormPanel title="3. Help you want" icon={<Handshake />}>
          <div className="chip-grid">
            {["Coffee chats", "Referrals", "Resume feedback", "Interview prep", "Company insight", "Networking practice"].map(item => <button key={item}>{item}</button>)}
          </div>
          <div className="upload-card"><MonitorUp /><strong>Video intro placeholder</strong><span>Add later</span></div>
        </FormPanel>
      </div>
      <Button onClick={() => setPage("dashboard")} className="finish-button">Finish onboarding <ArrowRight size={18} /></Button>
    </main>
  );
}

function FormPanel({ title, icon, children }) {
  return (
    <article className="form-panel">
      <div className="form-panel-title"><div className="hex-icon">{icon}</div><h3>{title}</h3></div>
      {children}
    </article>
  );
}

function AppShell({ page, setPage, children }) {
  const nav = [
    ["dashboard", "Home", <Home />],
    ["rooms", "Rooms", <Mic />],
    ["referrals", "Referrals", <Handshake />],
    ["profile", "Profile", <User />],
    ["host", "Host Dashboard", <HeartHandshake />],
    ["recruiter", "Recruiter", <BriefcaseBusiness />],
    ["settings", "Settings", <Settings />]
  ];
  return (
    <main className="app-shell">
      <aside className="sidebar">
        <button className="logo-button side-logo" onClick={() => setPage("landing")}><Logo compact /></button>
        <nav>
          {nav.map(([key, label, icon]) => (
            <button key={key} className={page === key ? "active" : ""} onClick={() => setPage(key)}>
              {React.cloneElement(icon, { size: 18 })} {label}
            </button>
          ))}
        </nav>
        <div className="sidebar-card">
          <HayyMark size={42} />
          <strong>Founding access</strong>
          <p>Invite 3 friends and unlock priority rooms.</p>
        </div>
      </aside>
      <section className="app-content">{children}</section>
    </main>
  );
}

function Dashboard({ page, setPage }) {
  return (
    <AppShell page={page} setPage={setPage}>
      <AppTop eyebrow="Dashboard" title="Welcome back, Rakan" action={<Button onClick={() => setPage("rooms")}>Find a room <ArrowRight size={18}/></Button>} />
      <Stats stats={[
        ["6", "Referral requests"],
        ["3", "Accepted chats"],
        ["2", "Rooms joined"],
        ["1", "Host intro"]
      ]} />
      <div className="app-grid two">
        <Panel title="Suggested rooms" action={<button onClick={() => setPage("rooms")}>View all</button>}>
          {rooms.slice(0,3).map(room => <MiniRoom key={room.id} room={room} setPage={setPage} />)}
        </Panel>
        <Panel title="Pending follow-ups" action={<Bell size={18} />}>
          {referrals.slice(0,3).map(ref => <ReferralMini key={ref.id} ref={ref} />)}
        </Panel>
      </div>
      <div className="app-grid two">
        <Panel title="Recommended hosts">
          <div className="host-mini-grid">
            {hosts.map(host => <HostMini key={host.name} host={host} />)}
          </div>
        </Panel>
        <Panel title="Profile completion">
          <Checklist items={["Add bio", "Add skills", "Add resume", "Add LinkedIn", "Add video intro"]} />
        </Panel>
      </div>
    </AppShell>
  );
}

function RoomsPage({ page, setPage }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => rooms.filter(room => room.title.toLowerCase().includes(query.toLowerCase()) || room.category.toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <AppShell page={page} setPage={setPage}>
      <AppTop eyebrow="Rooms" title="Live career rooms" action={<Button><Plus size={18}/> Suggest a room</Button>} />
      <div className="search-row">
        <div className="search-box"><Search size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search rooms, hosts, topics..." /></div>
        <Button variant="secondary"><Filter size={18}/> Filters</Button>
      </div>
      <div className="filter-chips">
        {["All", "Operations", "Tech", "Finance", "Newcomers", "Product", "Consulting", "Canada", "MENA community"].map(item => <button key={item}>{item}</button>)}
      </div>
      <div className="room-grid two">
        {filtered.map(room => <RoomCard key={room.id} room={room} setPage={setPage} />)}
      </div>
    </AppShell>
  );
}

function RoomDetail({ page, setPage }) {
  return (
    <AppShell page={page} setPage={setPage}>
      <button className="back-link" onClick={() => setPage("rooms")}>← Back to rooms</button>
      <section className="room-detail-hero">
        <Badge>FOUNDING ROOM</Badge>
        <h1>How to Get Referred Into Corporate Roles in Canada</h1>
        <p>Meet professionals inside target companies, ask questions, and learn how to turn a conversation into a warm intro.</p>
        <div className="detail-meta">
          <span><CalendarDays /> Thursday · 7:00 PM EST</span>
          <span><Users /> 82 signed up</span>
          <span><Mic /> 8 speakers</span>
          <span><Globe2 /> Online</span>
        </div>
        <div className="hero-buttons">
          <Button onClick={() => setPage("liveRoom")}>Join room <ArrowRight size={18}/></Button>
          <Button variant="secondary"><Bookmark size={18}/> Save room</Button>
        </div>
      </section>
      <div className="app-grid two">
        <Panel title="Agenda">
          <Timeline items={["Welcome + room rules", "Host introductions", "Live Q&A", "Breakout networking", "Referral request instructions"]} />
        </Panel>
        <Panel title="Hosts">
          {hosts.map(host => <HostLine key={host.name} host={host} />)}
        </Panel>
      </div>
      <div className="app-grid two">
        <Panel title="Who should join">
          <div className="chip-grid compact">{["Early-career professionals", "International students", "Newcomers", "Corporate role seekers", "Referral learners"].map(item => <span key={item}>{item}</span>)}</div>
        </Panel>
        <Panel title="Room rules">
          <Checklist items={["Be respectful", "Do not spam referral requests", "Ask specific questions", "Follow up professionally"]} />
        </Panel>
      </div>
    </AppShell>
  );
}

function LiveRoom({ page, setPage }) {
  const [modal, setModal] = useState(false);
  const people = [
    ["Aisha K.", "Host", "AK"], ["Omar H.", "Speaker", "OH"], ["Leila M.", "Speaker", "LM"], ["Khalid A.", "Speaker", "KA"],
    ["You", "Listening", "YU"], ["Maha S.", "Listening", "MS"], ["Zayd R.", "Listening", "ZR"], ["Nadia K.", "Listening", "NK"]
  ];
  return (
    <AppShell page={page} setPage={setPage}>
      <div className="live-room-layout">
        <section className="live-stage">
          <div className="live-stage-top">
            <div>
              <Badge variant="live">LIVE NOW</Badge>
              <h1>Breaking Into Corporate Roles in Canada</h1>
            </div>
            <span className="live-timer">28:34</span>
          </div>
          <div className="live-tiles">
            {people.map(([name, role, initials], i) => (
              <div className={`live-tile ${i < 4 ? "speaker" : ""}`} key={name}>
                <Avatar initials={initials} />
                <strong>{name}</strong>
                <span>{role}</span>
                {i < 4 && <div className="voice-bars"><i></i><i></i><i></i></div>}
              </div>
            ))}
          </div>
          <div className="room-controls">
            <button><Mic /> Mute</button>
            <button><Video /> Video</button>
            <button><Radio /> Raise hand</button>
            <button><MessageCircle /> Ask</button>
            <button className="gold" onClick={() => setModal(true)}><Handshake /> Request referral</button>
            <button className="danger" onClick={() => setPage("rooms")}><X /> Leave</button>
          </div>
        </section>
        <aside className="live-panel">
          <Panel title="Questions" compact>
            {["How do referrals actually work?", "What makes someone referral-ready?", "Should I message before or after applying?", "How do I follow up without being annoying?"].map(q => <div className="chat-question" key={q}>{q}</div>)}
            <div className="chat-input"><input placeholder="Ask a question..." /><Send size={18}/></div>
          </Panel>
          <Panel title="Raised hands" compact>
            {["Maha S.", "Zayd R.", "Nadia K."].map(name => <div className="queue-row" key={name}><span>{name}</span><Button variant="secondary">Invite</Button></div>)}
          </Panel>
        </aside>
      </div>
      {modal && <ReferralModal onClose={() => setModal(false)} />}
    </AppShell>
  );
}

function ReferralModal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <section className="modal">
        <button className="modal-close" onClick={onClose}><X /></button>
        <Badge>Referral request</Badge>
        <h2>Request a warm intro</h2>
        <p>Keep it specific, respectful, and easy to say yes to.</p>
        <label>Select host<select><option>Aisha K. · Director of Product</option><option>Omar H. · Engineering Manager</option><option>Khalid A. · Senior Product Manager</option></select></label>
        <label>Request type<select><option>Coffee chat</option><option>Referral</option><option>Resume feedback</option><option>Company insight</option></select></label>
        <label>Message<textarea placeholder="Write a short, thoughtful request..." /></label>
        <Button onClick={onClose}>Submit request <Send size={18}/></Button>
      </section>
    </div>
  );
}

function Referrals({ page, setPage }) {
  return (
    <AppShell page={page} setPage={setPage}>
      <AppTop eyebrow="Referrals" title="Referral requests" action={<Button><Plus size={18}/> New request</Button>} />
      <div className="filter-chips">
        {["All", "Incoming", "Outgoing", "Pending", "Accepted", "Declined"].map(item => <button key={item}>{item}</button>)}
      </div>
      <div className="app-grid two">
        <Panel title="Send a referral request">
          <label>Target company<input placeholder="Amazon" /></label>
          <label>Target role<input placeholder="Operations Manager" /></label>
          <label>Select host<select><option>Khalid A. · Google</option><option>Aisha K. · Stripe</option><option>Omar H. · Meta</option></select></label>
          <label>Request type<select><option>Coffee chat</option><option>Referral</option><option>Resume feedback</option><option>Interview prep</option></select></label>
          <label>Message<textarea placeholder="Write a short, respectful ask." /></label>
          <Button>Submit request</Button>
        </Panel>
        <Panel title="Your requests">
          {referrals.map(ref => <ReferralCard key={ref.id} ref={ref} />)}
        </Panel>
      </div>
    </AppShell>
  );
}

function Profile({ page, setPage }) {
  return (
    <AppShell page={page} setPage={setPage}>
      <section className="profile-hero">
        <Avatar initials="RA" className="profile" />
        <div>
          <Badge>Founding member</Badge>
          <h1>Rakan AlJboor</h1>
          <p>Operations and engineering professional building toward program management, logistics, and technology roles.</p>
          <div className="profile-actions">
            <Button>Edit profile</Button>
            <Button variant="secondary">Share profile</Button>
          </div>
        </div>
      </section>
      <div className="app-grid two">
        <Panel title="Career story">
          <p>I help teams solve operational problems, improve systems, and launch scalable processes. I’m looking to connect with professionals in operations, engineering, and product-led organizations.</p>
        </Panel>
        <Panel title="Video intro">
          <div className="video-placeholder"><Play /><strong>Add a 60-second intro</strong><span>Show people who you are before the resume.</span></div>
        </Panel>
      </div>
      <div className="app-grid two">
        <Panel title="Target roles">
          <div className="chip-grid compact">{["Operations Analyst", "Program Manager", "Product Analyst", "Industrial Engineer"].map(item => <span key={item}>{item}</span>)}</div>
        </Panel>
        <Panel title="Skills">
          <div className="chip-grid compact">{["Operations", "Power BI", "Excel", "Lean", "Logistics", "Data analysis", "Project management"].map(item => <span key={item}>{item}</span>)}</div>
        </Panel>
      </div>
      <Panel title="Referrals received">
        {referrals.slice(0, 2).map(ref => <ReferralMini key={ref.id} ref={ref} />)}
      </Panel>
    </AppShell>
  );
}

function HostDashboard({ page, setPage }) {
  return (
    <AppShell page={page} setPage={setPage}>
      <AppTop eyebrow="Referral host" title="Help someone get seen." action={<Button>Set availability</Button>} />
      <Stats stats={[["3", "Monthly capacity"], ["7", "Requests received"], ["4", "Accepted"], ["2", "Referrals made"]]} />
      <div className="app-grid two">
        <Panel title="Availability settings">
          <Checklist items={["Open to coffee chats", "Open to referrals", "Open to resume feedback"]} interactive />
          <label>Monthly capacity<select><option>3 people/month</option><option>5 people/month</option><option>10 people/month</option></select></label>
          <label>Roles I can support<input placeholder="Product, operations, engineering..." /></label>
        </Panel>
        <Panel title="Host profile preview">
          <HostProfileCard />
        </Panel>
      </div>
      <Panel title="Incoming requests">
        {referrals.map(ref => <RequestRow key={ref.id} ref={ref} />)}
      </Panel>
    </AppShell>
  );
}

function RecruiterDashboard({ page, setPage }) {
  return (
    <AppShell page={page} setPage={setPage}>
      <AppTop eyebrow="Recruiter dashboard" title="Create rooms and review referred talent." action={<Button><Plus size={18}/> Create Q&A room</Button>} />
      <Stats stats={[["4", "Active rooms"], ["38", "Referred candidates"], ["12", "Shortlisted"], ["5", "Interviews scheduled"]]} />
      <div className="app-grid two">
        <Panel title="Create hiring room">
          <label>Room title<input placeholder="Operations Hiring Q&A" /></label>
          <label>Attached job<input placeholder="Operations Analyst" /></label>
          <label>Department<input placeholder="Operations" /></label>
          <label>Room format<select><option>Q&A</option><option>Coffee chat</option><option>Open house</option><option>Referral night</option></select></label>
          <Button>Create room</Button>
        </Panel>
        <Panel title="Candidate pipeline">
          {candidates.map(c => <CandidateRow key={c.name} c={c} />)}
        </Panel>
      </div>
      <Panel title="Room performance">
        <div className="performance-grid">
          {["Signups 128", "Attendance 64%", "Questions 42", "Referral requests 18", "Shortlisted 7"].map(item => <div key={item}>{item}</div>)}
        </div>
      </Panel>
    </AppShell>
  );
}

function SettingsPage({ page, setPage }) {
  return (
    <AppShell page={page} setPage={setPage}>
      <AppTop eyebrow="Settings" title="Account settings" />
      <div className="app-grid two">
        <Panel title="Profile settings">
          <label>Name<input defaultValue="Rakan AlJboor" /></label>
          <label>Email<input defaultValue="rakan@example.com" /></label>
          <Button>Save changes</Button>
        </Panel>
        <Panel title="Notifications">
          <Checklist items={["Referral request updates", "Room reminders", "Host availability alerts", "Weekly opportunity digest"]} interactive />
        </Panel>
      </div>
    </AppShell>
  );
}

function AppTop({ eyebrow, title, action }) {
  return (
    <div className="app-top">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      {action}
    </div>
  );
}

function Panel({ title, action, children, compact = false }) {
  return (
    <section className={`panel ${compact ? "compact" : ""}`}>
      <div className="panel-header">
        <h3>{title}</h3>
        {action}
      </div>
      {children}
    </section>
  );
}

function Stats({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map(([num, label]) => <div className="stat-card" key={label}><strong>{num}</strong><span>{label}</span></div>)}
    </div>
  );
}

function MiniRoom({ room, setPage }) {
  return <div className="mini-row"><div><strong>{room.title}</strong><span>{room.category} · {room.attendees} attending</span></div><button onClick={() => setPage("roomDetail")}><ChevronRight /></button></div>;
}

function ReferralMini({ ref }) {
  return <div className="mini-row"><div><strong>{ref.name}</strong><span>{ref.type} · {ref.target}</span></div><Status status={ref.status} /></div>;
}

function ReferralCard({ ref }) {
  return (
    <article className="referral-card">
      <div className="request-user"><Avatar initials={ref.avatar} className="small" /><div><strong>{ref.name}</strong><span>{ref.target}</span></div></div>
      <p>{ref.note}</p>
      <div className="referral-card-bottom"><Status status={ref.status} /><span>{ref.lastUpdated}</span><button>View</button></div>
    </article>
  );
}

function HostMini({ host }) {
  return (
    <article className="host-mini">
      <Avatar initials={host.avatar} />
      <strong>{host.name}</strong>
      <span>{host.role} @ {host.company}</span>
      <small>{host.capacity}</small>
      <Button variant="secondary">Request chat</Button>
    </article>
  );
}

function Checklist({ items, interactive = false }) {
  return <div className="checklist">{items.map((item, i) => <div key={item}><span className={interactive || i < 3 ? "checked" : ""}>{interactive || i < 3 ? <Check size={14}/> : ""}</span>{item}</div>)}</div>;
}

function Timeline({ items }) {
  return <div className="timeline">{items.map((item, i) => <div key={item}><span>{i + 1}</span><p>{item}</p></div>)}</div>;
}

function HostLine({ host }) {
  return <div className="host-line"><Avatar initials={host.avatar} className="small" /><div><strong>{host.name}</strong><span>{host.role} @ {host.company}</span></div><Badge>{host.capacity}</Badge></div>;
}

function Status({ status }) {
  return <span className={`status ${status.toLowerCase()}`}>{status}</span>;
}

function RequestRow({ ref }) {
  return (
    <div className="request-row">
      <div className="request-user"><Avatar initials={ref.avatar} className="small" /><div><strong>{ref.name}</strong><span>{ref.target}</span><p>{ref.note}</p></div></div>
      <div className="row-actions"><Button variant="secondary"><XCircle size={16}/> Decline</Button><Button><Check size={16}/> Accept</Button></div>
    </div>
  );
}

function CandidateRow({ c }) {
  return (
    <div className="candidate-row">
      <div className="request-user"><Avatar initials={c.avatar} className="small" /><div><strong>{c.name}</strong><span>{c.role}</span><small>Referral source: {c.source}</small></div></div>
      <div className="candidate-tags">{c.tags.map(t => <span key={t}>{t}</span>)}</div>
      <div><Badge>{c.fit} fit</Badge><Status status={c.status} /></div>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("landing");
  const publicPages = {
    landing: <Landing setPage={setPage} />,
    login: <AuthPage type="login" setPage={setPage} />,
    signup: <AuthPage type="signup" setPage={setPage} />,
    onboarding: <Onboarding setPage={setPage} />
  };

  const appPages = {
    dashboard: <Dashboard page={page} setPage={setPage} />,
    rooms: <RoomsPage page={page} setPage={setPage} />,
    roomDetail: <RoomDetail page={page} setPage={setPage} />,
    liveRoom: <LiveRoom page={page} setPage={setPage} />,
    referrals: <Referrals page={page} setPage={setPage} />,
    profile: <Profile page={page} setPage={setPage} />,
    host: <HostDashboard page={page} setPage={setPage} />,
    recruiter: <RecruiterDashboard page={page} setPage={setPage} />,
    settings: <SettingsPage page={page} setPage={setPage} />
  };

  const isPublic = ["landing", "login", "signup", "onboarding"].includes(page);
  return (
    <div>
      {isPublic && <PublicHeader page={page} setPage={setPage} />}
      {publicPages[page] || appPages[page]}
      {isPublic && (
        <footer className="footer">
          <Logo compact />
          <p>Real people. Real referrals. Real growth.</p>
          <div><button>Privacy</button><button>Terms</button><button>LinkedIn</button></div>
        </footer>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
