import { useState, useEffect, useRef } from "react";
import profileImg from "./assets/profile.png";
import contactpic from "./assets/contactpic.png";
import aboutpic from "./assets/aboutpic.jpeg";
import proj1 from "./assets/1.jpg";
import proj2 from "./assets/2.jpg";
import proj3 from "./assets/3.jpg";
import proj4 from "./assets/4.jpg";
import cert1 from "./assets/cert1.jpg";
import cert2 from "./assets/cert2.jpg";
import cert3 from "./assets/cert3.jpg";
import cert4 from "./assets/cert4.jpg";

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Portfolio() {
  const [scrolled, setScrolled]         = useState(false);
  const [typed, setTyped]               = useState("");
  const [showCursor, setShowCursor]     = useState(true);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [toolsVisible, setToolsVisible] = useState(false);
  const [projVisible, setProjVisible]   = useState(false);
  const aboutRef = useRef(null);
  const toolsRef = useRef(null);
  const projRef  = useRef(null);
  const fullText  = "Full Stack Developer";

  useEffect(() => {
    document.documentElement.style.cssText = "margin:0;padding:0;width:100%;height:100%;background:#000;";
    document.body.style.cssText = "margin:0;padding:0;width:100%;min-height:100vh;background:#000;overflow-x:hidden;";
    const root = document.getElementById("root");
    if (root) root.style.cssText = "margin:0;padding:0;width:100%;min-height:100vh;background:#000;";
  }, []);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= fullText.length) { setTyped(fullText.slice(0, i)); i++; }
      else clearInterval(t);
    }, 70);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAboutVisible(true); },
      { threshold: 0.2 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setToolsVisible(true); },
      { threshold: 0.1 }
    );
    if (toolsRef.current) observer.observe(toolsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setProjVisible(true); },
      { threshold: 0.05 }
    );
    if (projRef.current) observer.observe(projRef.current);
    return () => observer.disconnect();
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [certVisible, setCertVisible] = useState(false);
  const [previewCert, setPreviewCert] = useState(null);
  const certRef = useRef(null);

  // Scroll-spy: update active nav link as user scrolls
  useEffect(() => {
    const sections = [
      { id: "home",         label: "Home" },
      { id: "about",        label: "About" },
      { id: "tools",        label: "Tools" },
      { id: "projects",     label: "Projects" },
      { id: "certificates", label: "Certificates" },
      { id: "contact",      label: "Contact Me" },
    ];
    const onScroll = () => {
      const y = window.scrollY + 100;
      let current = "Home";
      for (const { id, label } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = label;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCertVisible(true); },
      { threshold: 0.05 }
    );
    if (certRef.current) observer.observe(certRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const navLinks = ["Home", "About", "Tools", "Projects", "Certificates", "Contact Me"];

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html, body, #root { width:100vw; min-height:100vh; overflow-x:hidden; background:#000 !important; }
        a { text-decoration:none; color:inherit; }
        .nav-link { transition:opacity 0.2s; cursor:pointer; }
        .nav-link:hover { opacity:0.45 !important; }
        .cv-btn:hover { background:rgba(255,255,255,0.15) !important; }
        .social-btn { opacity:0.6; transition:all 0.25s ease; }
        .social-btn:hover { opacity:1 !important; transform:translateY(-3px); }

        /* ── Hamburger button (mobile only) ── */
        .ham-btn {
          display:none;
          flex-direction:column; gap:5px;
          background:none; border:none; cursor:pointer;
          padding:6px; z-index:300;
        }
        .ham-btn span {
          display:block; width:22px; height:2px;
          background:#fff; border-radius:2px;
          transition:transform 0.3s, opacity 0.3s;
        }
        .ham-btn.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
        .ham-btn.open span:nth-child(2) { opacity:0; }
        .ham-btn.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .mobile-drawer {
          display:none;
          position:fixed; top:0; left:0; right:0; bottom:0;
          background:rgba(0,0,0,0.97);
          z-index:250;
          flex-direction:column;
          align-items:center; justify-content:center;
          gap:32px;
          backdrop-filter:blur(16px);
          animation:fadeIn 0.2s ease;
        }
        .mobile-drawer.open { display:flex; }
        .mobile-drawer a, .mobile-drawer span {
          font-size:26px; font-weight:700; color:#fff;
          cursor:pointer; opacity:0.85;
          transition:opacity 0.2s;
        }
        .mobile-drawer a:hover, .mobile-drawer span:hover { opacity:0.4; }

        /* Desktop nav ul */
        .nav-ul { display:flex; gap:28px; list-style:none; }

        @media (max-width:768px) {
          .nav-ul { display:none !important; }
          .ham-btn { display:flex !important; }
        }

        @keyframes fadeUp    { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn    { from{opacity:0} to{opacity:1} }
        @keyframes slideLeft { from{opacity:0;transform:translateX(-40px)} to{opacity:1;transform:translateX(0)} }
        @keyframes slideRight{ from{opacity:0;transform:translateX(40px)}  to{opacity:1;transform:translateX(0)} }

        /* ══ DESKTOP ══ */
        .hero { height:100vh; }

        .photo-wrap {
          position:absolute; right:0; top:0; bottom:0; width:52%;
          overflow:hidden; background:#000;
          display:flex; align-items:flex-end; justify-content:center;
        }
        .photo-wrap .hero-img {
          height:96%; width:auto;
          display:block; position:relative; z-index:1;
          mix-blend-mode:lighten;
        }

        .text-col {
          position:relative; z-index:10;
          width:50%; padding-left:96px;
          display:flex; flex-direction:column; align-items:flex-start;
          animation:fadeUp 0.85s ease both;
        }
        .name-size { font-size:clamp(48px,6.5vw,82px); white-space:nowrap; }
        .role-size { font-size:22px; }

        /* about */
        .about-grid    { flex-direction:row; gap:70px; }
        .about-img-col { width:38%; }
        .about-txt-col { width:62%; }
        .about-section { padding:100px 80px 90px; }
        .section-title { font-size:42px; }
        .info-grid     { grid-template-columns:1fr 1fr; }

        /* ══ MOBILE ══ */
        @media (max-width:768px) {

          .hero { height:100vh; position:relative; overflow:hidden; }

          /* Photo: cover the full screen, keep the FACE/BODY centered-right */
          .photo-wrap {
            position:absolute !important;
            inset:0 !important;
            width:100% !important;
            height:100% !important;
            display:block !important;        /* simple block so img fills it */
            overflow:hidden !important;
          }
          .photo-wrap .hero-img {
            /* fill entire hero, crop to show face centered */
            width:100% !important;
            height:100% !important;
            object-fit:cover !important;
            object-position:35% top !important;   /* 65% shows face, not arms */
            mix-blend-mode:lighten !important;
            opacity:0.9 !important;
          }

          /* Text: absolute over photo, bottom-left */
          .text-col {
            position:absolute !important;
            bottom:82px !important;
            left:0 !important;
            right:0 !important;
            width:100% !important;
            padding-left:24px !important;
            padding-right:24px !important;
            z-index:10 !important;
          }

          .name-size { font-size:clamp(34px,9vw,52px) !important; white-space:normal !important; }
          .role-size { font-size:17px !important; }
          .social-icons { left:24px !important; bottom:26px !important; }
          .contact-item { display:none !important; }

          /* about */
          .about-grid    { flex-direction:column !important; gap:36px !important; }
          .about-img-col { width:100% !important; max-width:300px !important; }
          .about-txt-col { width:100% !important; }
          .about-section { padding:80px 24px 60px !important; }
          .section-title { font-size:32px !important; }
          .info-grid     { grid-template-columns:1fr !important; }
        }

        @media (max-width:480px) {
          .name-size { font-size:clamp(30px,8.5vw,44px) !important; }
        }

        /* ══ TOOLS SECTION ══ */
        @keyframes toolFadeUp   { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }
        @keyframes scanline     { from{transform:translateY(-100%)} to{transform:translateY(100%)} }
        @keyframes glowPulse    { 0%,100%{opacity:0.15} 50%{opacity:0.35} }
        @keyframes tagFloat     { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-5px)} }
        @keyframes borderTrace  { 0%{stroke-dashoffset:600} 100%{stroke-dashoffset:0} }

        .tool-card {
          position:relative; cursor:default;
          border:1px solid rgba(255,255,255,0.08);
          border-radius:16px; padding:36px 32px 32px;
          background:rgba(255,255,255,0.02);
          transition:border-color 0.35s, background 0.35s, transform 0.35s;
          overflow:hidden;
        }
        .tool-card:hover {
          border-color:rgba(255,255,255,0.22);
          background:rgba(255,255,255,0.05);
          transform:translateY(-4px);
        }
        .tool-card::before {
          content:'';
          position:absolute; top:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent);
          opacity:0; transition:opacity 0.35s;
        }
        .tool-card:hover::before { opacity:1; }

        .tool-card .scan-line {
          position:absolute; left:0; right:0; height:60px; pointer-events:none;
          background:linear-gradient(to bottom,transparent,rgba(255,255,255,0.03),transparent);
          animation:scanline 3.5s linear infinite; opacity:0;
          transition:opacity 0.35s;
        }
        .tool-card:hover .scan-line { opacity:1; }

        .pill-tag {
          display:inline-flex; align-items:center; gap:6px;
          padding:5px 13px; border-radius:999px;
          border:1px solid rgba(255,255,255,0.13);
          background:rgba(255,255,255,0.04);
          font-size:12px; font-weight:500; color:rgba(255,255,255,0.7);
          transition:border-color 0.2s, background 0.2s, transform 0.25s;
          white-space:nowrap;
        }
        .pill-tag:hover {
          border-color:rgba(255,255,255,0.38);
          background:rgba(255,255,255,0.09);
          transform:translateY(-2px);
          animation:tagFloat 1.8s ease-in-out infinite;
        }

        .tools-section { padding:100px 80px 90px; }

        .tools-grid {
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:24px;
        }

        @media (max-width:900px) {
          .tools-grid { grid-template-columns:1fr 1fr !important; }
          .tools-section { padding:80px 32px 60px !important; }
        }
        @media (max-width:600px) {
          .tools-grid { grid-template-columns:1fr !important; }
          .tools-section { padding:72px 20px 52px !important; }
        }

        /* ══ PROJECTS SECTION ══ */
        @keyframes projFadeUp  { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer     { 0%{transform:translateX(-100%)} 100%{transform:translateX(100%)} }

        .projects-section { padding:100px 80px 90px; }

        /* ── FEATURED (big) card ── */
        .proj-featured {
          position:relative; overflow:hidden; border-radius:24px;
          border:1px solid rgba(255,255,255,0.08);
          display:grid; grid-template-columns:1fr 1fr;
          min-height:420px; margin-bottom:28px;
          background:#080808;
          transition:border-color 0.4s, transform 0.4s, box-shadow 0.4s;
          cursor:default;
        }
        .proj-featured::after {
          content:'';
          position:absolute; inset:0; pointer-events:none;
          background:linear-gradient(120deg, rgba(245,200,0,0.06), transparent 60%);
          opacity:0; transition:opacity 0.4s;
          z-index:1;
        }
        .proj-featured:hover {
          border-color:rgba(245,200,0,0.35);
          transform:translateY(-4px);
          box-shadow:0 8px 40px rgba(245,200,0,0.1), inset 0 0 0 1px rgba(245,200,0,0.08);
        }
        .proj-featured:hover::after { opacity:1; }

        .proj-featured-img {
          position:relative; overflow:hidden;
        }
        .proj-featured-img img {
          width:100%; height:100%; object-fit:cover;
          transition:transform 0.7s ease, filter 0.5s ease;
          filter:brightness(0.75) saturate(0.85);
        }
        .proj-featured:hover .proj-featured-img img {
          transform:scale(1.06);
          filter:brightness(0.95) saturate(1.1);
        }
        .proj-featured-img::after {
          content:'';
          position:absolute; inset:0;
          background:linear-gradient(to right, transparent 60%, #080808 100%);
          pointer-events:none;
        }

        .proj-featured-body {
          display:flex; flex-direction:column; justify-content:center;
          padding:48px 44px;
          position:relative;
        }

        /* shimmer line on hover */
        .proj-featured::before {
          content:'';
          position:absolute; top:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(245,200,0,0.7),transparent);
          opacity:0; transition:opacity 0.4s; z-index:2;
        }
        .proj-featured:hover::before { opacity:1; }

        /* ── SMALL cards row ── */
        .proj-small-grid {
          display:grid; grid-template-columns:repeat(3,1fr); gap:20px;
        }
        .proj-small {
          position:relative; overflow:hidden; border-radius:18px;
          border:1px solid rgba(255,255,255,0.07);
          background:#080808;
          transition:border-color 0.35s, transform 0.35s, box-shadow 0.35s;
          cursor:default;
        }
        .proj-small::after {
          content:'';
          position:absolute; inset:0; pointer-events:none;
          background:linear-gradient(160deg, rgba(245,200,0,0.07), transparent 55%);
          opacity:0; transition:opacity 0.35s;
          z-index:1;
        }
        .proj-small:hover {
          border-color:rgba(245,200,0,0.3);
          transform:translateY(-5px);
          box-shadow:0 8px 32px rgba(245,200,0,0.1), inset 0 0 0 1px rgba(245,200,0,0.06);
        }
        .proj-small:hover::after { opacity:1; }
        .proj-small-img {
          position:relative; overflow:hidden;
          aspect-ratio:16/9;
        }
        .proj-small-img img {
          width:100%; height:100%; object-fit:cover;
          transition:transform 0.6s ease, filter 0.4s;
          filter:brightness(0.7) saturate(0.8);
        }
        .proj-small:hover .proj-small-img img {
          transform:scale(1.08);
          filter:brightness(0.95) saturate(1.05);
        }
        .proj-small-img::after {
          content:'';
          position:absolute; inset:0;
          background:linear-gradient(to bottom, transparent 40%, #080808 100%);
          pointer-events:none;
        }

        /* hover reveal overlay on small cards */
        .proj-hover-reveal {
          position:absolute; inset:0;
          background:rgba(0,0,0,0.72);
          display:flex; align-items:center; justify-content:center; gap:12px;
          opacity:0; transition:opacity 0.3s;
          backdrop-filter:blur(4px);
        }
        .proj-small:hover .proj-hover-reveal { opacity:1; }

        .proj-reveal-btn {
          padding:9px 20px; border-radius:8px; font-size:12px; font-weight:700;
          letter-spacing:0.5px; text-decoration:none; display:inline-flex;
          align-items:center; gap:6px; transition:transform 0.2s;
        }
        .proj-reveal-btn:hover { transform:scale(1.05); }
        .proj-reveal-btn.w { background:#fff; color:#000; }
        .proj-reveal-btn.g { background:transparent; color:#fff;
          border:1px solid rgba(255,255,255,0.4); }

        /* index badge */
        .proj-index {
          font-size:10px; font-weight:700; letter-spacing:3px;
          text-transform:uppercase; color:rgba(255,255,255,0.3);
        }

        /* proj link btns (featured) */
        .plink {
          display:inline-flex; align-items:center; gap:7px;
          padding:10px 22px; border-radius:9px; font-size:13px;
          font-weight:600; letter-spacing:0.3px; text-decoration:none;
          transition:all 0.25s;
        }
        .plink.solid { background:#fff; color:#000; }
        .plink.solid:hover { background:rgba(255,255,255,0.85); }
        .plink.outline { background:transparent; color:rgba(255,255,255,0.75);
          border:1px solid rgba(255,255,255,0.2); }
        .plink.outline:hover { border-color:rgba(255,255,255,0.6); color:#fff; }

        @media(max-width:900px) {
          .proj-featured { grid-template-columns:1fr !important; min-height:auto !important; }
          .proj-featured-img { aspect-ratio:16/9; }
          .proj-featured-img::after { background:linear-gradient(to bottom, transparent 60%, #080808 100%) !important; }
          .proj-featured-body { padding:32px 28px !important; }
          .proj-small-grid { grid-template-columns:1fr 1fr !important; }
          .projects-section { padding:80px 32px 60px !important; }
        }
        @media(max-width:600px) {
          .proj-small-grid {
            display:flex !important;
            flex-direction:row !important;
            overflow-x:auto !important;
            scroll-snap-type:x mandatory !important;
            gap:16px !important;
            margin-left:-14px !important;
            margin-right:-14px !important;
            padding-left:14px !important;
            padding-right:14px !important;
            -webkit-overflow-scrolling:touch;
            scrollbar-width:none;
          }
          .proj-small-grid::-webkit-scrollbar { display:none; }
          .proj-small {
            flex:0 0 80vw !important;
            max-width:300px !important;
            scroll-snap-align:start !important;
          }
          .projects-section { padding:72px 14px 52px !important; }
        }

        /* ══ CERTIFICATES SECTION ══ */
        @keyframes certFadeUp { from{opacity:0;transform:translateY(36px)} to{opacity:1;transform:translateY(0)} }

        .certs-section { padding:100px 80px 90px; }
        @media(max-width:900px) { .certs-section { padding:80px 32px 60px !important; } }
        @media(max-width:600px) { .certs-section { padding:72px 20px 52px !important; } }

        .certs-grid {
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:24px;
          margin-top:48px;
        }
        @media(max-width:1100px) { .certs-grid { grid-template-columns:1fr 1fr !important; } }
        @media(max-width:600px)  {
          .certs-grid {
            display:flex !important;
            flex-direction:row !important;
            overflow-x:auto !important;
            scroll-snap-type:x mandatory !important;
            gap:16px !important;
            margin-left:-20px !important;
            margin-right:-20px !important;
            padding-left:20px !important;
            padding-right:20px !important;
            -webkit-overflow-scrolling:touch;
            scrollbar-width:none;
          }
          .certs-grid::-webkit-scrollbar { display:none; }
          .cert-card {
            flex:0 0 80vw !important;
            max-width:320px !important;
            scroll-snap-align:start !important;
          }
        }

        .cert-card {
          position:relative; overflow:hidden; border-radius:18px;
          border:1px solid rgba(255,255,255,0.08);
          background:#080808;
          transition:border-color 0.35s, transform 0.35s, box-shadow 0.35s;
        }
        .cert-card::before {
          content:'';
          position:absolute; top:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(245,200,0,0.6),transparent);
          opacity:0; transition:opacity 0.35s; z-index:2;
        }
        .cert-card::after {
          content:'';
          position:absolute; inset:0; pointer-events:none;
          background:linear-gradient(160deg, rgba(245,200,0,0.07), transparent 55%);
          opacity:0; transition:opacity 0.35s; z-index:1;
        }
        .cert-card:hover {
          border-color:rgba(245,200,0,0.3);
          transform:translateY(-6px);
          box-shadow:0 8px 36px rgba(245,200,0,0.12), inset 0 0 0 1px rgba(245,200,0,0.06);
        }
        .cert-card:hover::before { opacity:1; }
        .cert-card:hover::after { opacity:1; }

        .cert-img-wrap {
          position:relative; overflow:hidden;
          aspect-ratio:16/10; cursor:pointer;
          border-radius:18px 18px 0 0;
        }
        .cert-img-wrap img {
          width:100%; height:100%; object-fit:cover;
          transition:transform 0.6s ease, filter 0.4s;
          filter:brightness(0.8) saturate(0.85);
        }
        .cert-card:hover .cert-img-wrap img {
          transform:scale(1.05);
          filter:brightness(1) saturate(1);
        }
        .cert-img-wrap::after {
          content:'';
          position:absolute; inset:0;
          background:linear-gradient(to bottom, transparent 40%, #080808 100%);
          pointer-events:none;
        }

        .cert-zoom-hint {
          position:absolute; inset:0;
          background:rgba(0,0,0,0.55);
          display:flex; align-items:center; justify-content:center;
          opacity:0; transition:opacity 0.3s;
          backdrop-filter:blur(3px);
          z-index:2; cursor:pointer;
        }
        .cert-img-wrap:hover .cert-zoom-hint { opacity:1; }

        .cert-zoom-btn {
          display:flex; align-items:center; gap:8px;
          padding:10px 22px; border-radius:999px;
          background:rgba(255,255,255,0.12);
          border:1px solid rgba(255,255,255,0.35);
          color:#fff; font-size:12px; font-weight:700;
          letter-spacing:1.5px; text-transform:uppercase;
          backdrop-filter:blur(8px);
          transition:background 0.2s, transform 0.2s;
        }
        .cert-zoom-btn:hover { background:rgba(255,255,255,0.22); transform:scale(1.04); }

        .cert-body { padding:20px 22px 24px; background:#080808; }

        .cert-org {
          font-size:10px; font-weight:700; letter-spacing:3px;
          text-transform:uppercase; color:rgba(255,255,255,0.35);
          margin-bottom:8px;
        }

        .cert-title {
          font-size:16px; font-weight:800; letter-spacing:-0.3px;
          line-height:1.3; margin-bottom:10px; color:#fff;
        }

        .cert-meta {
          font-size:11px; color:rgba(255,255,255,0.38);
          font-family:monospace; letter-spacing:0.3px; margin-bottom:14px;
          line-height:1.6;
        }

        .cert-tags {
          display:flex; flex-wrap:wrap; gap:6px; margin-bottom:16px;
        }
        .cert-tag {
          font-size:10px; font-weight:600; padding:4px 11px; border-radius:999px;
          background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12);
          color:rgba(255,255,255,0.5); letter-spacing:0.3px;
          transition:border-color 0.2s, background 0.2s;
        }
        .cert-tag:hover { border-color:rgba(255,255,255,0.3); background:rgba(255,255,255,0.09); }

        .cert-view-btn {
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          width:100%; padding:11px; border-radius:10px; cursor:pointer;
          background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.12);
          color:rgba(255,255,255,0.7); font-size:11px; font-weight:700;
          letter-spacing:2px; text-transform:uppercase;
          transition:background 0.25s, border-color 0.25s, color 0.25s;
          font-family:monospace;
        }
        .cert-view-btn:hover {
          background:rgba(255,255,255,0.12); border-color:rgba(255,255,255,0.35);
          color:#fff;
        }

        /* ══ CONTACT SECTION ══ */
        @keyframes contactFadeUp { from{opacity:0;transform:translateY(32px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmerLine { 0%{left:-100%} 100%{left:200%} }
        @keyframes pulseGlow { 0%,100%{opacity:0.5} 50%{opacity:1} }

        .contact-section {
          position:relative; overflow:hidden;
          padding:100px 80px 0;
          background:#000;
        }
        @media(max-width:900px) { .contact-section { padding:80px 32px 0 !important; } }
        @media(max-width:600px) { .contact-section { padding:72px 20px 0 !important; } }

        .contact-inner {
          position:relative; border-radius:32px; overflow:hidden;
          background:linear-gradient(135deg, #161616 0%, #111 50%, #141414 100%);
          border:1px solid rgba(255,255,255,0.1);
          box-shadow: 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08);
          display:grid; grid-template-columns:1fr 1fr 400px;
          min-height:560px;
        }
        .contact-inner::after {
          content:\'\';
          position:absolute; top:0; left:-100%; width:60%; height:1px;
          background:linear-gradient(90deg, transparent, rgba(245,200,0,0.6), transparent);
          animation: shimmerLine 4s ease-in-out infinite;
          z-index:5;
        }
        .contact-inner::before {
          content:\'\';
          position:absolute; right:380px; top:-60px;
          width:400px; height:400px; border-radius:50%;
          background:radial-gradient(circle, rgba(245,200,0,0.1) 0%, transparent 65%);
          pointer-events:none; z-index:0;
        }
        @media(max-width:1100px) {
          .contact-inner { grid-template-columns:1fr 1fr !important; }
          .contact-photo-col { display:none !important; }
        }
        @media(max-width:700px) {
          .contact-inner {
            grid-template-columns:1fr !important;
            position:relative !important;
          }
          /* Photo becomes a full background behind content on mobile */
          .contact-photo-col {
            display:block !important;
            position:absolute !important;
            inset:0 !important;
            width:100% !important;
            height:100% !important;
            z-index:0 !important;
            overflow:hidden !important;
            border-left:none !important;
          }
          .contact-photo-col::before {
            display:none !important;
          }
          .contact-photo-col img {
            position:absolute !important;
            top:0 !important;
            bottom:auto !important;
            right:-10% !important;
            left:auto !important;
            transform:none !important;
            height:100% !important;
            width:auto !important;
            object-fit:cover !important;
            object-position:top right !important;
            opacity:0.18 !important;
            mix-blend-mode:lighten !important;
            filter:grayscale(20%) !important;
          }
          .contact-info-box { position:relative !important; z-index:2 !important; }
          .contact-left { position:relative !important; z-index:2 !important; }
        }

        .contact-info-box {
          position:relative; z-index:1;
          padding:52px 44px;
          display:flex; flex-direction:column; justify-content:center;
        }
        @media(max-width:600px) { .contact-info-box { padding:36px 24px !important; } }

        .contact-badge {
          display:inline-flex; align-items:center; gap:7px;
          padding:6px 14px; border-radius:999px;
          background:rgba(245,200,0,0.1);
          border:1px solid rgba(245,200,0,0.25);
          font-size:10px; font-weight:700; letter-spacing:2.5px;
          text-transform:uppercase; color:#f5c800;
          margin-bottom:20px; width:fit-content;
        }
        .contact-badge-dot {
          width:6px; height:6px; border-radius:50%;
          background:#f5c800;
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .contact-info-heading {
          font-size:26px; font-weight:900; color:#fff;
          letter-spacing:-0.8px; line-height:1.2; margin-bottom:10px;
        }
        .contact-info-heading span { color:#f5c800; }
        .contact-info-sub {
          font-size:13px; color:rgba(255,255,255,0.38);
          line-height:1.8; margin-bottom:36px; max-width:280px;
        }
        .contact-info-items {
          display:flex; flex-direction:column; gap:12px; position:relative; z-index:1;
        }
        .contact-info-item {
          display:flex; align-items:center; gap:14px;
          text-decoration:none; color:inherit;
          padding:13px 16px; border-radius:16px;
          background:rgba(255,255,255,0.03);
          border:1px solid rgba(255,255,255,0.06);
          transition:all 0.3s ease;
          cursor:pointer; position:relative; overflow:hidden;
        }
        .contact-info-item::before {
          content:\'\'; position:absolute; inset:0;
          background:linear-gradient(90deg, rgba(245,200,0,0.06), transparent);
          opacity:0; transition:opacity 0.3s;
        }
        .contact-info-item:hover::before { opacity:1; }
        .contact-info-item:hover {
          border-color:rgba(245,200,0,0.25);
          transform:translateX(5px);
          box-shadow: 0 4px 20px rgba(245,200,0,0.08);
        }
        .contact-info-icon {
          width:40px; height:40px; border-radius:12px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
          background:rgba(245,200,0,0.1);
          border:1px solid rgba(245,200,0,0.18);
          color:#f5c800; transition:all 0.3s;
        }
        .contact-info-item:hover .contact-info-icon {
          background:rgba(245,200,0,0.18);
          box-shadow:0 0 16px rgba(245,200,0,0.2);
        }
        .contact-info-text { display:flex; flex-direction:column; gap:2px; overflow:hidden; }
        .contact-info-type {
          font-size:9px; font-weight:700; letter-spacing:2.5px;
          text-transform:uppercase; color:rgba(255,255,255,0.28);
        }
        .contact-info-value {
          font-size:13px; font-weight:500; color:rgba(255,255,255,0.85);
          white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
        }
        .contact-info-arrow {
          margin-left:auto; color:rgba(255,255,255,0.2);
          transition:all 0.3s; flex-shrink:0;
        }
        .contact-info-item:hover .contact-info-arrow { color:#f5c800; transform:translateX(3px); }

        .contact-left {
          position:relative; z-index:1;
          padding:52px 44px;
          display:flex; flex-direction:column; justify-content:center;
          border-left:1px solid rgba(255,255,255,0.05);
        }
        @media(max-width:600px) { .contact-left { padding:36px 24px !important; border-left:none !important; border-top:1px solid rgba(255,255,255,0.05) !important; } }

        .contact-form-title {
          font-size:20px; font-weight:800; color:#fff;
          letter-spacing:-0.5px; margin-bottom:6px;
        }
        .contact-form-sub {
          font-size:13px; color:rgba(255,255,255,0.35);
          margin-bottom:28px; line-height:1.7;
        }
        .contact-input {
          width:100%;
          background:rgba(255,255,255,0.04);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:12px; padding:14px 18px;
          color:#fff; font-size:14px;
          font-family:inherit; outline:none;
          transition:border-color 0.25s, background 0.25s, box-shadow 0.25s;
          resize:none;
        }
        .contact-input::placeholder { color:rgba(255,255,255,0.22); }
        .contact-input:focus {
          border-color:rgba(245,200,0,0.5);
          background:rgba(245,200,0,0.03);
          box-shadow: 0 0 0 3px rgba(245,200,0,0.07);
        }
        .contact-submit-btn {
          display:inline-flex; align-items:center; justify-content:center; gap:10px;
          width:100%; padding:15px 36px; border-radius:12px; cursor:pointer;
          background:linear-gradient(135deg, #f5c800, #e6b800);
          color:#000; font-size:13px; font-weight:800;
          letter-spacing:1.5px; text-transform:uppercase; border:none;
          transition:all 0.3s ease; font-family:inherit; margin-top:4px;
          position:relative; overflow:hidden;
        }
        .contact-submit-btn::before {
          content:\'\'; position:absolute; inset:0;
          background:linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity:0; transition:opacity 0.3s;
        }
        .contact-submit-btn:hover::before { opacity:1; }
        .contact-submit-btn:hover {
          transform:translateY(-2px);
          box-shadow:0 10px 32px rgba(245,200,0,0.4);
        }

        .contact-photo-col {
          position:relative; overflow:hidden;
          border-left:1px solid rgba(255,255,255,0.05);
        }
        .contact-photo-col::before {
          content:\'\';
          position:absolute;
          bottom:-20px; left:50%; transform:translateX(-50%);
          width:280px; height:420px;
          background:#f5c800;
          z-index:0;
          clip-path: path(\'M140,10 C190,0 250,30 265,90 C280,150 260,200 250,240 C240,280 255,330 240,370 C225,410 180,430 140,428 C100,426 55,408 35,370 C15,332 25,285 18,245 C10,200 0,155 10,100 C22,40 90,20 140,10 Z\');
        }
        .contact-photo-col img {
          position:absolute; bottom:0; left:50%; transform:translateX(-50%);
          height:100%; width:auto; object-fit:contain; z-index:1;
        }
        .contact-social-sidebar { display:none !important; }

        /* ══ FOOTER ══ */
        .footer {
          background:#000;
          padding:28px 80px;
          border-top:1px solid rgba(255,255,255,0.07);
          margin-top:80px;
          display:grid; grid-template-columns:1fr auto 1fr;
          align-items:center; gap:16px;
        }
        @media(max-width:900px) { .footer { padding:24px 32px !important; } }
        @media(max-width:600px) {
          .footer {
            padding:28px 20px !important;
            grid-template-columns:1fr !important;
            gap:12px !important;
            justify-items:center !important;
          }
          .footer-copy { text-align:center !important; }
          .footer-designed { text-align:center !important; }
          .footer-brand { align-items:center !important; }
        }

        .footer-brand { display:flex; flex-direction:column; gap:3px; align-items:center; text-align:center; }
        .footer-brand-name {
          font-size:18px; font-weight:800; color:#fff; letter-spacing:-0.5px;
        }
        .footer-brand-sub {
          font-size:12px; color:rgba(255,255,255,0.35); letter-spacing:0.3px;
        }
        .footer-copy {
          font-size:12px; color:rgba(255,255,255,0.3);
          letter-spacing:0.2px; line-height:1.6;
        }
        .footer-copy strong { color:rgba(255,255,255,0.55); font-weight:600; }
        .footer-designed {
          font-size:12px; color:rgba(255,255,255,0.3);
          letter-spacing:0.2px; text-align:right;
        }
        .footer-socials {
          display:flex; gap:16px; align-items:center;
        }
        .footer-social-icon {
          color:rgba(255,255,255,0.35);
          display:flex; align-items:center;
          transition:color 0.2s;
        }
        .footer-social-icon:hover { color:#f5c800; }

        /* ── Modal Overlay ── */
        .cert-modal-overlay {
          position:fixed; inset:0; z-index:9999;
          background:rgba(0,0,0,0.92);
          display:flex; align-items:center; justify-content:center;
          backdrop-filter:blur(12px);
          animation:fadeIn 0.25s ease;
          padding:24px;
        }
        .cert-modal-inner {
          position:relative; max-width:860px; width:100%;
          border-radius:20px; overflow:hidden;
          border:1px solid rgba(255,255,255,0.15);
          box-shadow:0 40px 80px rgba(0,0,0,0.7);
          animation:certFadeUp 0.3s ease;
        }
        .cert-modal-inner img {
          width:100%; display:block;
        }
        .cert-modal-close {
          position:absolute; top:14px; right:14px;
          width:38px; height:38px; border-radius:50%;
          background:rgba(0,0,0,0.7); border:1px solid rgba(255,255,255,0.2);
          color:#fff; font-size:18px; cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition:background 0.2s, transform 0.2s; z-index:2;
          backdrop-filter:blur(6px);
        }
        .cert-modal-close:hover { background:rgba(255,255,255,0.15); transform:scale(1.1); }
      `}</style>

      <div style={{ width:"100vw", minHeight:"100vh", background:"#000", color:"#fff",
        fontFamily:"'Segoe UI',system-ui,sans-serif", position:"relative", overflowX:"hidden" }}>

        {/* ── NAVBAR ── */}
        <nav style={{
          position:"fixed", top:0, left:0, right:0, zIndex:200,
          display:"flex", alignItems:"center", justifyContent:"space-between",
          padding:"18px 28px",
          background: scrolled ? "rgba(0,0,0,0.92)" : "rgba(0,0,0,0.3)",
          backdropFilter:"blur(12px)", transition:"background 0.4s",
        }}>
          <span style={{ fontSize:18, fontWeight:700, letterSpacing:0.3, whiteSpace:"nowrap" }}>Harsh Sharma</span>

          {/* Desktop nav */}
          <ul className="nav-ul">
            {navLinks.map((link, i) => (
              <li key={link}
                className={link==="Contact Me" ? "contact-item" : ""}
                style={{ position:"relative" }}
                onClick={() => {
                  if (link === "About") scrollTo("about");
                  else if (link === "Tools") scrollTo("tools");
                  else if (link === "Projects") scrollTo("projects");
                  else if (link === "Certificates") scrollTo("certificates");
                  else if (link === "Contact Me") scrollTo("contact");
                  else if (link === "Home") scrollTo("home");
                }}>
                <span className="nav-link" style={{
                  fontSize:14, fontWeight:link===activeSection?700:400,
                  cursor:"pointer", opacity:link===activeSection?1:0.82, whiteSpace:"nowrap",
                }}>
                  {link}
                </span>
                {link===activeSection && (
                  <span style={{ position:"absolute", bottom:-4, left:0, right:0,
                    height:2, background:"#fff", borderRadius:2 }} />
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger (mobile) */}
          <button className={`ham-btn${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu">
            <span /><span /><span />
          </button>
        </nav>

        {/* Mobile drawer */}
        <div className={`mobile-drawer${menuOpen ? " open" : ""}`}>
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position:"absolute", top:22, right:22,
              width:42, height:42, borderRadius:"50%",
              background:"rgba(255,255,255,0.08)",
              border:"1px solid rgba(255,255,255,0.2)",
              color:"#fff", fontSize:20, lineHeight:1,
              cursor:"pointer", display:"flex",
              alignItems:"center", justifyContent:"center",
              transition:"background 0.2s",
            }}
            aria-label="Close menu"
          >✕</button>
          {navLinks.map((link) => (
            <span key={link} onClick={() => {
              setMenuOpen(false);
              if (link === "About") scrollTo("about");
              else if (link === "Tools") scrollTo("tools");
              else if (link === "Projects") scrollTo("projects");
              else if (link === "Certificates") scrollTo("certificates");
              else if (link === "Contact Me") scrollTo("contact");
              else if (link === "Home") scrollTo("home");
            }}>{link}</span>
          ))}
        </div>

        {/* ══════════ HERO ══════════ */}
        <section id="home" className="hero" style={{
          width:"100vw", position:"relative",
          display:"flex", alignItems:"center", background:"#000",
        }}>

          {/* Photo */}
          <div className="photo-wrap">
            <img src={profileImg} alt="Harsh Sharma" className="hero-img" />

            {/* Desktop gradients */}
            <div style={{ position:"absolute",inset:0,zIndex:2,pointerEvents:"none",
              background:"linear-gradient(to right,#000 0%,rgba(0,0,0,0.75) 18%,rgba(0,0,0,0.05) 45%,transparent 65%)" }} />
            <div style={{ position:"absolute",inset:0,zIndex:2,pointerEvents:"none",
              background:"linear-gradient(to top,#000 0%,rgba(0,0,0,0.55) 14%,transparent 32%)" }} />
            <div style={{ position:"absolute",inset:0,zIndex:2,pointerEvents:"none",
              background:"linear-gradient(to bottom,#000 0%,rgba(0,0,0,0.4) 8%,transparent 22%)" }} />
            <div style={{ position:"absolute",inset:0,zIndex:2,pointerEvents:"none",
              background:"linear-gradient(to left,#000 0%,rgba(0,0,0,0.45) 8%,transparent 25%)" }} />

            {/* Mobile: bottom gradient makes text readable, top darkens navbar area */}
            <div style={{ position:"absolute",inset:0,zIndex:3,pointerEvents:"none",
              background:"linear-gradient(to top,rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.55) 28%,rgba(0,0,0,0.1) 55%,transparent 72%)" }} />
            <div style={{ position:"absolute",inset:0,zIndex:3,pointerEvents:"none",
              background:"linear-gradient(to bottom,rgba(0,0,0,0.5) 0%,transparent 20%)" }} />
          </div>

          {/* Text */}
          <div className="text-col">
            <div style={{ display:"flex", alignItems:"stretch" }}>
              <span style={{ width:4, background:"#fff", borderRadius:2,
                flexShrink:0, marginRight:18, alignSelf:"stretch" }} />
              <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-start" }}>
                <p style={{ fontSize:15, fontWeight:400, color:"rgba(255,255,255,0.7)",
                  marginBottom:8, textAlign:"left" }}>
                  Hello, My name is
                </p>
                <h1 className="name-size" style={{ fontWeight:800, lineHeight:1.05,
                  letterSpacing:-2, marginBottom:10, textAlign:"left" }}>
                  Harsh Sharma
                </h1>
                <p className="role-size" style={{ fontWeight:600, color:"rgba(255,255,255,0.9)",
                  marginBottom:26, minHeight:28, textAlign:"left" }}>
                  {typed}
                  <span style={{ display:"inline-block", width:2, height:"1em",
                    background:"#fff", marginLeft:3, verticalAlign:"middle",
                    opacity:showCursor?1:0, transition:"opacity 0.1s" }} />
                </p>
                <button className="cv-btn" onClick={() => alert("CV Download coming soon!")} style={{
                  padding:"11px 30px", border:"1.5px solid rgba(255,255,255,0.5)",
                  background:"rgba(0,0,0,0.35)", color:"#fff", fontSize:14,
                  fontWeight:500, cursor:"pointer", borderRadius:3, letterSpacing:0.5,
                  backdropFilter:"blur(8px)", transition:"background 0.3s",
                  alignSelf:"flex-start",
                }}>
                  Download Cv
                </button>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="social-icons" style={{
            position:"absolute", bottom:40, left:60,
            display:"flex", gap:18, zIndex:10,
            animation:"fadeIn 1s ease 0.6s both",
          }}>
            {[
              { icon:<LinkedInIcon />, href:"https://linkedin.com" },
              { icon:<GitHubIcon />,   href:"https://github.com" },
              { icon:<TwitterIcon />,  href:"https://twitter.com" },
            ].map(({ icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer"
                className="social-btn" style={{ color:"#fff", display:"flex", alignItems:"center" }}>
                {icon}
              </a>
            ))}
          </div>

          {/* Scroll hint */}
          <div onClick={() => scrollTo("about")} style={{
            position:"absolute", bottom:36, left:"50%", transform:"translateX(-50%)",
            zIndex:10, cursor:"pointer", display:"flex", flexDirection:"column",
            alignItems:"center", gap:6, opacity:0.4,
            animation:"fadeIn 1.5s ease 1s both",
          }}>
            <span style={{ fontSize:10, letterSpacing:3, textTransform:"uppercase" }}>Scroll</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </section>

        {/* ══════════ ABOUT ══════════ */}
        <section id="about" ref={aboutRef} className="about-section" style={{
          width:"100vw", background:"#000",
          borderTop:"1px solid rgba(255,255,255,0.06)",
        }}>
          <div style={{ marginBottom:52, animation: aboutVisible ? "fadeUp 0.7s ease both" : "none" }}>
            <p style={{ fontSize:12, letterSpacing:4, textTransform:"uppercase",
              color:"rgba(255,255,255,0.35)", marginBottom:10, textAlign:"left" }}>
              GET TO KNOW ME
            </p>
            <div style={{ display:"flex", alignItems:"center", gap:16 }}>
              <h2 className="section-title" style={{ fontWeight:800, letterSpacing:-1, textAlign:"left" }}>
                About <span style={{ color:"rgba(255,255,255,0.3)" }}>Me</span>
              </h2>
              <div style={{ flex:1, height:1, background:"rgba(255,255,255,0.08)", maxWidth:100 }} />
            </div>
          </div>

          <div className="about-grid" style={{ display:"flex", alignItems:"flex-start" }}>
            <div className="about-img-col" style={{
              flexShrink:0,
              animation: aboutVisible ? "slideLeft 0.8s ease both" : "none",
            }}>
              <div style={{ position:"relative", display:"inline-block", width:"100%" }}>
                <img src={aboutpic} alt="About Harsh" style={{
                  width:"100%", aspectRatio:"3/4", objectFit:"cover",
                  objectPosition:"top center", borderRadius:14, display:"block",
                  filter:"brightness(0.9) contrast(1.05)", mixBlendMode:"lighten",
                }} />
                <div style={{
                  position:"absolute", bottom:-10, right:-10, width:"100%", height:"100%",
                  border:"2px solid rgba(255,255,255,0.08)", borderRadius:14, zIndex:-1,
                }} />
                <div style={{
                  position:"absolute", bottom:18, left:-18,
                  background:"#fff", color:"#000", padding:"10px 16px",
                  borderRadius:10, boxShadow:"0 8px 32px rgba(0,0,0,0.5)",
                  animation: aboutVisible ? "fadeUp 0.8s ease 0.4s both" : "none",
                  opacity: aboutVisible ? undefined : 0,
                }}>
                  <div style={{ fontSize:26, fontWeight:800, lineHeight:1 }}>2+</div>
                  <div style={{ fontSize:11, fontWeight:600, opacity:0.55, marginTop:2, letterSpacing:0.5 }}>Years Exp.</div>
                </div>
              </div>
            </div>

            <div className="about-txt-col" style={{
              display:"flex", flexDirection:"column", alignItems:"flex-start",
              animation: aboutVisible ? "slideRight 0.8s ease both" : "none",
              animationDelay:"0.15s",
            }}>
              <h3 style={{ fontSize:22, fontWeight:700, marginBottom:14,
                letterSpacing:-0.5, textAlign:"left" }}>
                Full Stack Developer based in India 🇮🇳
              </h3>
              <p style={{ fontSize:15, lineHeight:1.85, color:"rgba(255,255,255,0.62)",
                marginBottom:12, textAlign:"left", width:"100%" }}>
                I’m Harsh Sharma, a B.Tech student exploring web development and Java. I learn by building, breaking, and improving real projects rather than just studying theory.
              </p>
              <p style={{ fontSize:15, lineHeight:1.85, color:"rgba(255,255,255,0.62)",
                marginBottom:36, textAlign:"left", width:"100%" }}>
                I’m currently focused on strengthening my problem-solving skills and becoming a developer who can build practical, real-world solutions. My journey is simple—consistent growth, one step at a time.
              </p>

              <div className="info-grid" style={{
                display:"grid", gap:"12px 32px", marginBottom:38, width:"100%",
              }}>
                {[
                  ["Name",     "Harsh Sharma"],
                  ["Role",     "Full Stack Developer"],
                  ["Location", "India"],
                  ["Email",    "harsh@email.com"],
                  ["Degree",   "B.Tech / BCA"],
                  ["Status",   "Available for work"],
                ].map(([label, value]) => (
                  <div key={label} style={{ display:"flex", gap:8, alignItems:"baseline" }}>
                    <span style={{ fontSize:13, color:"rgba(255,255,255,0.32)", whiteSpace:"nowrap" }}>{label}:</span>
                    <span style={{ fontSize:14, fontWeight:500, color:"rgba(255,255,255,0.82)" }}>{value}</span>
                  </div>
                ))}
              </div>

              <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
                <button onClick={() => alert("CV Download coming soon!")}
                  style={{ padding:"12px 30px", background:"#fff", color:"#000",
                    border:"none", borderRadius:4, fontSize:14, fontWeight:700,
                    cursor:"pointer", letterSpacing:0.3, transition:"opacity 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity="0.82"}
                  onMouseLeave={e => e.currentTarget.style.opacity="1"}>
                  Download CV
                </button>
                <button
                  style={{ padding:"12px 30px", background:"transparent", color:"#fff",
                    border:"1.5px solid rgba(255,255,255,0.38)", borderRadius:4,
                    fontSize:14, fontWeight:500, cursor:"pointer", letterSpacing:0.3,
                    transition:"border-color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor="rgba(255,255,255,0.9)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor="rgba(255,255,255,0.38)"}>
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ TOOLS ══════════ */}
        <section id="tools" ref={toolsRef} className="tools-section" style={{
          width:"100vw", background:"#000",
          borderTop:"1px solid rgba(255,255,255,0.06)",
        }}>

          {/* Header */}
          <div style={{
            marginBottom:60,
            animation: toolsVisible ? "toolFadeUp 0.7s ease both" : "none",
            opacity: toolsVisible ? undefined : 0,
          }}>
            <p style={{ fontSize:12, letterSpacing:4, textTransform:"uppercase",
              color:"rgba(255,255,255,0.35)", marginBottom:10 }}>
              WHAT I WORK WITH
            </p>
            <div style={{ display:"flex", alignItems:"center", gap:16 }}>
              <h2 className="section-title" style={{ fontWeight:800, letterSpacing:-1 }}>
                Tech <span style={{ color:"rgba(255,255,255,0.3)" }}>Stack</span>
              </h2>
              <div style={{ flex:1, height:1, background:"rgba(255,255,255,0.08)", maxWidth:100 }} />
            </div>
            <p style={{ marginTop:16, fontSize:14, color:"rgba(255,255,255,0.4)",
              maxWidth:480, lineHeight:1.7 }}>
              A curated set of tools I use to craft end-to-end digital experiences — from pixel-perfect UIs to rock-solid servers.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="tools-grid">

            {/* ── FRONTEND ── */}
            {[
              {
                index: 0,
                category: "01 / Frontend",
                title: "User Interface",
                description: "Building responsive, accessible, and visually engaging interfaces with modern component-driven architecture.",
                accent: "rgba(255,255,255,0.9)",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <path d="M3 9h18M9 21V9"/>
                  </svg>
                ),
                tags: ["React", "Next.js", "HTML5", "CSS3", "Tailwind", "TypeScript", "Framer Motion", "Redux"],
              },
              {
                index: 1,
                category: "02 / Backend",
                title: "Server & APIs",
                description: "Designing scalable server architectures, RESTful APIs, and efficient database models that power the core logic.",
                accent: "rgba(255,255,255,0.9)",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <ellipse cx="12" cy="5" rx="9" ry="3"/>
                    <path d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/>
                    <path d="M3 12c0 1.657 4.03 3 9 3s9-1.343 9-3"/>
                  </svg>
                ),
                tags: ["Node.js", "Express", "Java", "Spring Boot", "REST APIs", "MongoDB", "MySQL", "PostgreSQL"],
              },
              {
                index: 2,
                category: "03 / DevOps",
                title: "Deploy & Scale",
                description: "Streamlining CI/CD pipelines, containerising services, and shipping code to production with confidence.",
                accent: "rgba(255,255,255,0.9)",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                ),
                tags: ["Git", "GitHub Actions", "Docker", "Linux", "Nginx", "Vercel", "CI/CD", "AWS"],
              },
            ].map(({ index, category, title, description, icon, tags }) => (
              <div key={index} className="tool-card" style={{
                animation: toolsVisible ? `toolFadeUp 0.7s ease ${0.15 + index * 0.15}s both` : "none",
                opacity: toolsVisible ? undefined : 0,
              }}>
                {/* Scan line effect */}
                <div className="scan-line" />

                {/* Corner accent */}
                <div style={{
                  position:"absolute", top:0, right:0, width:60, height:60, overflow:"hidden",
                  opacity:0.12, pointerEvents:"none",
                }}>
                  <div style={{
                    position:"absolute", top:-1, right:-1,
                    width:60, height:60,
                    borderTop:"1px solid #fff", borderRight:"1px solid #fff",
                    borderTopRightRadius:16,
                  }} />
                </div>

                {/* Category label */}
                <p style={{ fontSize:10, letterSpacing:3, textTransform:"uppercase",
                  color:"rgba(255,255,255,0.3)", marginBottom:20, fontWeight:600 }}>
                  {category}
                </p>

                {/* Icon + Title */}
                <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:16 }}>
                  <div style={{
                    width:52, height:52, borderRadius:12, flexShrink:0,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    background:"rgba(255,255,255,0.05)",
                    border:"1px solid rgba(255,255,255,0.1)",
                    color:"rgba(255,255,255,0.85)",
                  }}>
                    {icon}
                  </div>
                  <h3 style={{ fontSize:22, fontWeight:800, letterSpacing:-0.5, lineHeight:1.1 }}>
                    {title}
                  </h3>
                </div>

                {/* Description */}
                <p style={{ fontSize:14, lineHeight:1.8, color:"rgba(255,255,255,0.48)",
                  marginBottom:28 }}>
                  {description}
                </p>

                {/* Divider */}
                <div style={{ height:1, background:"rgba(255,255,255,0.07)", marginBottom:22 }} />

                {/* Tags */}
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {tags.map(tag => (
                    <span key={tag} className="pill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom ambient glow strip */}
          <div style={{
            marginTop:72, height:1,
            background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)",
          }} />
        </section>

        {/* ══════════ PROJECTS ══════════ */}
        <section id="projects" ref={projRef} className="projects-section" style={{
          width:"100vw", background:"#000",
          borderTop:"1px solid rgba(255,255,255,0.06)",
        }}>

          {/* Header */}
          <div style={{
            marginBottom:60,
            animation: projVisible ? "projFadeUp 0.7s ease both" : "none",
            opacity: projVisible ? undefined : 0,
          }}>
            <p style={{ fontSize:12, letterSpacing:4, textTransform:"uppercase",
              color:"rgba(255,255,255,0.35)", marginBottom:10 }}>
              WHAT I'VE BUILT
            </p>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
              <div style={{ display:"flex", alignItems:"center", gap:16 }}>
                <h2 className="section-title" style={{ fontWeight:800, letterSpacing:-1 }}>
                  Featured <span style={{ color:"rgba(255,255,255,0.3)" }}>Projects</span>
                </h2>
                <div style={{ height:1, background:"rgba(255,255,255,0.08)", width:80 }} />
              </div>
              <span style={{ fontSize:13, color:"rgba(255,255,255,0.28)", letterSpacing:1 }}>
                4 projects
              </span>
            </div>
          </div>

          {/* ── FEATURED card (Project 01) ── */}
          <div className="proj-featured" style={{
            animation: projVisible ? "projFadeUp 0.7s ease 0.1s both" : "none",
            opacity: projVisible ? undefined : 0,
          }}>
            {/* Left: image */}
            <div className="proj-featured-img">
              <img src={proj1} alt="AES Encryption For Passwords" />
            </div>

            {/* Right: content */}
            <div className="proj-featured-body">
              {/* top meta */}
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:24 }}>
                <span className="proj-index">01</span>
                <div style={{ height:1, width:32, background:"rgba(255,255,255,0.15)" }} />
                <span style={{ fontSize:11, color:"rgba(255,255,255,0.35)", letterSpacing:2,
                  textTransform:"uppercase" }}>Featured</span>
              </div>

              <h3 style={{ fontSize:28, fontWeight:900, letterSpacing:-0.8, lineHeight:1.15,
                marginBottom:16 }}>
                AES Encryption<br/>For Passwords
              </h3>

              <p style={{ fontSize:14, lineHeight:1.85, color:"rgba(255,255,255,0.48)",
                marginBottom:28, maxWidth:360 }}>
                Tired of remembering multiple passwords? Convert plain passwords to AES-encrypted text and store them anywhere — notes app, website, anywhere. Decrypt only via the site. No leak tension.
              </p>

              {/* Tags */}
              <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:36 }}>
                {["HTML","CSS","JavaScript","Web Crypto API"].map(t => (
                  <span key={t} style={{
                    fontSize:11, fontWeight:600, padding:"5px 13px", borderRadius:999,
                    background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)",
                    color:"rgba(255,255,255,0.6)", letterSpacing:0.3,
                  }}>{t}</span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display:"flex", gap:12 }}>
                <a href="https://harshsharmasing.github.io/Secure/" target="_blank"
                  rel="noreferrer" className="plink solid">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live Demo
                </a>
                <a href="https://github.com/harshsharmasing/Secure.git" target="_blank"
                  rel="noreferrer" className="plink outline">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* ── SMALL cards row (02 03 04) ── */}
          <div className="proj-small-grid">
            {[
              { num:"02", img:proj2, title:"Project Two",   tags:["React","Node.js","MongoDB"],      live:"#", github:"#" },
              { num:"03", img:proj3, title:"Project Three", tags:["Java","Spring Boot","MySQL"],      live:"#", github:"#" },
              { num:"04", img:proj4, title:"Project Four",  tags:["Next.js","Tailwind","PostgreSQL"], live:"#", github:"#" },
            ].map(({ num, img, title, tags, live, github }, i) => (
              <div key={num} className="proj-small" style={{
                animation: projVisible ? `projFadeUp 0.65s ease ${0.25 + i * 0.12}s both` : "none",
                opacity: projVisible ? undefined : 0,
              }}>
                {/* Image + hover reveal */}
                <div className="proj-small-img">
                  <img src={img} alt={title} />

                  {/* hover overlay with buttons */}
                  <div className="proj-hover-reveal">
                    <a href={live} target="_blank" rel="noreferrer" className="proj-reveal-btn w">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Demo
                    </a>
                    <a href={github} target="_blank" rel="noreferrer" className="proj-reveal-btn g">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                      Code
                    </a>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding:"20px 22px 24px" }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
                    marginBottom:10 }}>
                    <span className="proj-index">{num}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="rgba(255,255,255,0.2)" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize:16, fontWeight:800, letterSpacing:-0.3,
                    marginBottom:12, lineHeight:1.2 }}>{title}</h3>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                    {tags.map(t => (
                      <span key={t} style={{
                        fontSize:10, fontWeight:600, padding:"3px 10px", borderRadius:999,
                        background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)",
                        color:"rgba(255,255,255,0.45)", letterSpacing:0.3,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom strip */}
          <div style={{
            marginTop:72, height:1,
            background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)",
          }} />
        </section>

        {/* ══════════ CERTIFICATES ══════════ */}
        <section id="certificates" className="certs-section" ref={certRef} style={{ background:"#000" }}>

          {/* Section header */}
          <div style={{
            marginBottom:0,
            animation: certVisible ? "certFadeUp 0.7s ease both" : "none",
            opacity: certVisible ? undefined : 0,
          }}>
            <p style={{ fontSize:12, letterSpacing:4, textTransform:"uppercase",
              color:"rgba(255,255,255,0.35)", marginBottom:10 }}>
              MY CREDENTIALS
            </p>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
              <div style={{ display:"flex", alignItems:"center", gap:16 }}>
                <h2 className="section-title" style={{ fontWeight:800, letterSpacing:-1 }}>
                  Certificates &amp; <span style={{ color:"rgba(255,255,255,0.3)" }}>Achievements</span>
                </h2>
                <div style={{ height:1, background:"rgba(255,255,255,0.08)", width:80 }} />
              </div>
              <span style={{ fontSize:13, color:"rgba(255,255,255,0.28)", letterSpacing:1 }}>4 certificates</span>
            </div>
          </div>

          {/* Cards grid */}
          <div className="certs-grid">
            {[
              {
                img: cert1,
                org: "ISRO / IIRS, Dehradun",
                title: "Geo-data Sharing and Cyber Security",
                meta: "Issued: Dec 2023  |  Duration: 28 Nov – 11 Dec 2023  |  15 Hours",
                tags: ["Cyber Security", "Geo-data", "ISRO"],
                delay: 0.1,
              },
              {
                img: cert2,
                org: "CSE Pathshala",
                title: "C Programming Language",
                meta: "Issued: 11 Aug 2025  |  Cert No: CP-20250607-RCPL-008",
                tags: ["C Programming", "Live Training", "35+ Hours"],
                delay: 0.22,
              },
              {
                img: cert3,
                org: "LPU / IAMNEO",
                title: "Data Structures and Algorithm",
                meta: "Issued: 05 Dec 2024  |  Duration: Aug – Dec 2024  |  72 Hours",
                tags: ["DSA", "Algorithms", "72 Hours"],
                delay: 0.34,
              },
              {
                img: cert4,
                org: "Udemy",
                title: "Build Generative AI Apps and Solutions with No-Code Tools",
                meta: "Issued: 12 Dec 2025  |  Length: 5.5 Hours  |  Cert No: UC-edc48522",
                tags: ["Generative AI", "No-Code", "AI Tools"],
                delay: 0.46,
              },
            ].map(({ img, org, title, meta, tags, delay }, i) => (
              <div key={i} className="cert-card" style={{
                animation: certVisible ? `certFadeUp 0.65s ease ${delay}s both` : "none",
                opacity: certVisible ? undefined : 0,
              }}>
                {/* Image with zoom hint */}
                <div className="cert-img-wrap" onClick={() => setPreviewCert(img)}>
                  <img src={img} alt={title} />
                  <div className="cert-zoom-hint">
                    <div className="cert-zoom-btn">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/>
                        <line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                      Preview
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="cert-body">
                  <p className="cert-org">{org}</p>
                  <h3 className="cert-title">
                    <span style={{ color:"rgba(255,255,255,0.4)", marginRight:6 }}>✦</span>
                    {title}
                  </h3>
                  <p className="cert-meta">{meta}</p>
                  <div className="cert-tags">
                    {tags.map(t => <span key={t} className="cert-tag">{t}</span>)}
                  </div>
                  <button className="cert-view-btn" onClick={() => setPreviewCert(img)}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    ✦ View Certificate →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop:72, height:1,
            background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)",
          }} />
        </section>

        {/* ══════════ CONTACT ME ══════════ */}
        <section id="contact" className="contact-section">

          <div style={{ marginBottom:52 }}>
            <p style={{ fontSize:12, letterSpacing:4, textTransform:"uppercase",
              color:"rgba(255,255,255,0.35)", marginBottom:10 }}>GET IN TOUCH</p>
            <h2 className="section-title" style={{ fontWeight:800, letterSpacing:-1 }}>
              Let's <span style={{ color:"rgba(255,255,255,0.3)" }}>talk</span>
            </h2>
          </div>

          <div className="contact-inner">

            {/* ── Column 1: Contact Info ── */}
            <div className="contact-info-box">
              <div className="contact-badge">
                <span className="contact-badge-dot" />
                Available for work
              </div>
              <h3 className="contact-info-heading">Get in <span>Touch</span></h3>
              <p className="contact-info-sub">Have a project in mind or just want to say hello? Reach out via any platform below.</p>

              <div className="contact-info-items">

                <a href="https://github.com/harshsharmasing" target="_blank" rel="noreferrer" className="contact-info-item">
                  <div className="contact-info-icon"><GitHubIcon /></div>
                  <div className="contact-info-text">
                    <span className="contact-info-type">GitHub</span>
                    <span className="contact-info-value">harshsharmasing</span>
                  </div>
                  <svg className="contact-info-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>

                <a href="https://www.linkedin.com/in/harshrsh" target="_blank" rel="noreferrer" className="contact-info-item">
                  <div className="contact-info-icon"><LinkedInIcon /></div>
                  <div className="contact-info-text">
                    <span className="contact-info-type">LinkedIn</span>
                    <span className="contact-info-value">in/harshrsh</span>
                  </div>
                  <svg className="contact-info-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>

                <a href="mailto:harshdrive8@gmail.com" className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-type">Gmail</span>
                    <span className="contact-info-value">harshdrive8@gmail.com</span>
                  </div>
                  <svg className="contact-info-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>

                <a href="tel:+919798531147" className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="contact-info-text">
                    <span className="contact-info-type">Phone</span>
                    <span className="contact-info-value">+91 97985 31147</span>
                  </div>
                  <svg className="contact-info-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>

              </div>
            </div>

            {/* ── Column 2: Send Message ── */}
            <div className="contact-left">
              <div className="contact-badge" style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.5)" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                Send a message
              </div>
              <h3 className="contact-form-title">Drop me a line</h3>
              <p className="contact-form-sub">Fill out the form and I'll get back to you as soon as possible.</p>

              <div style={{ display:"flex", flexDirection:"column", gap:12, position:"relative", zIndex:1 }}>
                <input className="contact-input" type="text" placeholder="Your Name" />
                <input className="contact-input" type="email" placeholder="Your Email" />
                <textarea className="contact-input" rows={5} placeholder="Your Message" />
                <button className="contact-submit-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Message
                </button>
              </div>
            </div>

            {/* ── Column 3: Photo ── */}
            <div className="contact-photo-col">
              <svg
                style={{ position:"absolute", bottom:"-28px", left:"50%", transform:"translateX(-50%)",
                  width:"296px", height:"440px", zIndex:0, overflow:"visible", pointerEvents:"none" }}
                viewBox="0 0 280 420" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M140,8 C195,-4 258,28 272,94 C286,160 265,212 254,255 C243,297 260,348 243,390 C226,430 178,448 140,446 C102,444 54,424 32,388 C10,350 22,300 14,258 C5,210 -6,158 7,98 C22,32 85,20 140,8 Z"
                  stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" fill="none"
                />
              </svg>
              <img src={contactpic} alt="Harsh Sharma" />
            </div>

          </div>
        </section>


        {/* ══════════ FOOTER ══════════ */}
        <footer className="footer">

          {/* Left: copyright */}
          <p className="footer-copy">
            © {new Date().getFullYear()} <strong>Harsh Sharma</strong>. All rights reserved.
          </p>

          {/* Center: name + role */}
          <div className="footer-brand">
            <span className="footer-brand-name">Harsh Sharma</span>
            <span className="footer-brand-sub">Full Stack Developer · Building digital experiences</span>
          </div>

          {/* Right: designed by */}
          <p className="footer-designed">Designed &amp; developed by Harsh Sharma.</p>

        </footer>

      </div>

      {/* ── Certificate Preview Modal ── */}
      {previewCert && (
        <div className="cert-modal-overlay" onClick={() => setPreviewCert(null)}>
          <div className="cert-modal-inner" onClick={e => e.stopPropagation()}>
            <img src={previewCert} alt="Certificate Preview" />
            <button className="cert-modal-close" onClick={() => setPreviewCert(null)}>✕</button>
          </div>
        </div>
      )}
    </>
  );
}