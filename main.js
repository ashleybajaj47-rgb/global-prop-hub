/* =========================================================
   GLOBAL PROP HUB — Design Tokens
   ========================================================= */
:root{
  --maroon:        #872325;
  --maroon-deep:   #5A1418;
  --maroon-ink:    #3D0F12;
  --ivory:         #FBF6EE;
  --ivory-dim:     #F3EADA;
  --gold:          #C99A4B;
  --gold-soft:     #E3C788;
  --ink:           #241313;
  --white:         #FFFFFF;
  --line:          rgba(36,19,19,0.12);
  --line-on-maroon:rgba(255,255,255,0.22);

  --font-display:  'Fraunces', 'Times New Roman', serif;
  --font-label:    'Jost', 'Helvetica Neue', sans-serif;
  --font-body:     'Inter', 'Helvetica Neue', sans-serif;

  --container: 1240px;
  --pad: clamp(20px, 5vw, 64px);
}

*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  margin:0;
  background:var(--ivory);
  color:var(--ink);
  font-family:var(--font-body);
  font-size:16px;
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
}
img{max-width:100%;display:block;}
a{color:inherit;text-decoration:none;}
ul{margin:0;padding:0;list-style:none;}
button{font-family:inherit;cursor:pointer;}

h1,h2,h3,h4{
  font-family:var(--font-display);
  font-weight:600;
  letter-spacing:-0.01em;
  margin:0;
  color:var(--maroon-ink);
}

.eyebrow{
  font-family:var(--font-label);
  text-transform:uppercase;
  letter-spacing:0.18em;
  font-size:12.5px;
  font-weight:500;
  color:var(--maroon);
  display:flex;
  align-items:center;
  gap:10px;
}
.eyebrow .rule{
  width:28px;height:1px;background:var(--gold);display:inline-block;
}

.wrap{
  max-width:var(--container);
  margin:0 auto;
  padding-left:var(--pad);
  padding-right:var(--pad);
}

@media (prefers-reduced-motion:no-preference){
  .reveal{
    opacity:0;
    transform:translateY(18px);
    transition:opacity .7s ease, transform .7s ease;
  }
  .reveal.is-visible{opacity:1;transform:none;}
}
@media (prefers-reduced-motion:reduce){
  .reveal{opacity:1;transform:none;}
}

/* ---------- Focus visibility ---------- */
a:focus-visible,button:focus-visible,input:focus-visible,textarea:focus-visible,select:focus-visible,summary:focus-visible{
  outline:2px solid var(--gold);
  outline-offset:3px;
}

/* =========================================================
   HEADER
   ========================================================= */
.site-header{
  position:fixed;
  top:0;left:0;right:0;
  z-index:100;
  background:rgba(251,246,238,0.92);
  backdrop-filter:blur(10px);
  border-bottom:1px solid var(--line);
}
.site-header .wrap{
  display:flex;
  align-items:center;
  justify-content:space-between;
  height:78px;
}
.brand{
  display:flex;
  align-items:center;
  gap:10px;
  font-family:var(--font-label);
  font-weight:600;
  font-size:15px;
  letter-spacing:0.05em;
  color:var(--maroon-ink);
}
.brand .mark{width:30px;height:30px;flex:none;}
.brand b{font-weight:700;}

.nav-links{
  display:flex;
  gap:34px;
  align-items:center;
  list-style:none;
  font-family:var(--font-label);
  font-size:13.5px;
  letter-spacing:0.04em;
  text-transform:uppercase;
}
@supports not (gap: 1px){
  .nav-links li + li{margin-left:34px;}
}
.nav-links a{
  position:relative;
  color:var(--ink);
  padding:6px 0;
}
.nav-links a.active, .nav-links a:hover{color:var(--maroon);}
.nav-links a::after{
  content:"";
  position:absolute;left:0;right:0;bottom:0;
  height:1px;background:var(--gold);
  transform:scaleX(0);
  transform-origin:left;
  transition:transform .25s ease;
}
.nav-links a:hover::after, .nav-links a.active::after{transform:scaleX(1);}

.nav-cta{
  display:flex;align-items:center;gap:14px;
}
.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  font-family:var(--font-label);
  font-size:13px;
  letter-spacing:0.06em;
  text-transform:uppercase;
  padding:13px 26px;
  border-radius:2px;
  border:1px solid transparent;
  transition:background .2s ease, color .2s ease, border-color .2s ease, transform .2s ease;
}
.btn-primary{background:var(--maroon);color:var(--white);}
.btn-primary:hover{background:var(--maroon-deep);}
.btn-outline{border-color:var(--maroon);color:var(--maroon-ink);background:transparent;}
.btn-outline:hover{background:var(--maroon);color:var(--white);}
.btn-ghost-ivory{border-color:var(--line-on-maroon);color:var(--ivory);background:transparent;}
.btn-ghost-ivory:hover{background:var(--ivory);color:var(--maroon-ink);}
.btn-sm{padding:10px 20px;font-size:12px;}

.menu-toggle{
  display:none;
  width:40px;height:40px;
  align-items:center;justify-content:center;
  border:1px solid var(--line);
  background:none;
  border-radius:2px;
}
.menu-toggle span,.menu-toggle span::before,.menu-toggle span::after{
  content:"";display:block;width:18px;height:1.5px;background:var(--ink);position:relative;
  transition:transform .2s ease, opacity .2s ease;
}
.menu-toggle span::before{position:absolute;top:-6px;}
.menu-toggle span::after{position:absolute;top:6px;}

.mobile-panel{
  display:none;
  position:fixed;
  inset:78px 0 0 0;
  background:var(--ivory);
  z-index:99;
  padding:30px var(--pad);
  overflow-y:auto;
}
.mobile-panel.open{display:block;}
.mobile-panel ul{list-style:none;display:flex;flex-direction:column;gap:0;}
.mobile-panel a{
  display:block;
  font-family:var(--font-label);
  text-transform:uppercase;
  letter-spacing:0.05em;
  font-size:17px;
  padding:18px 0;
  border-bottom:1px solid var(--line);
  color:var(--maroon-ink);
}
.mobile-panel .mp-actions{margin-top:26px;display:flex;flex-direction:column;gap:12px;}

@media (max-width:900px){
  .nav-links{display:none;}
  .nav-cta .btn-outline{display:none;}
  .menu-toggle{display:flex;}
}

/* =========================================================
   ORNAMENT — signature arch/diamond motif
   ========================================================= */
.ornament-divider{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:16px;
  margin:0 auto;
  width:fit-content;
  color:var(--gold);
}
.ornament-divider .seg{width:64px;height:1px;background:currentColor;opacity:0.55;}
.ornament-divider svg{width:18px;height:18px;flex:none;}

.arch-frame{
  position:relative;
  padding:34px 28px 28px;
  border:1px solid var(--line-on-maroon);
}
.arch-frame::before{
  content:"";
  position:absolute;
  top:-15px;left:50%;
  transform:translateX(-50%);
  width:30px;height:18px;
  background:inherit;
}

/* =========================================================
   HERO
   ========================================================= */
.hero{
  position:relative;
  padding:172px var(--pad) 0;
  background:var(--ivory);
  overflow:hidden;
}
.hero-tag{
  font-family:var(--font-label);
  font-size:12.5px;
  letter-spacing:0.18em;
  text-transform:uppercase;
  color:var(--maroon);
  display:flex;align-items:center;gap:10px;
  margin-bottom:26px;
}
.hero-tag .rule{width:28px;height:1px;background:var(--gold);}
.hero-grid{
  max-width:var(--container);
  margin:0 auto;
  display:grid;
  grid-template-columns:1.05fr 0.95fr;
  gap:56px;
  align-items:center;
}
.hero h1{
  font-size:clamp(40px,5.4vw,68px);
  line-height:1.04;
  font-weight:600;
}
.hero h1 em{
  font-style:normal;
  color:var(--maroon);
  position:relative;
}
.hero p.lede{
  margin-top:24px;
  font-size:18px;
  line-height:1.7;
  color:#4a3535;
  max-width:46ch;
}
.hero-cta-row{
  margin-top:36px;
  display:flex;
  gap:16px;
  flex-wrap:wrap;
}
.hero-stats{
  display:flex;
  gap:38px;
  margin-top:56px;
  padding-top:28px;
  border-top:1px solid var(--line);
}
.hero-stats .stat b{
  display:block;
  font-family:var(--font-display);
  font-size:30px;
  color:var(--maroon);
  font-weight:600;
}
.hero-stats .stat span{
  font-family:var(--font-label);
  font-size:11.5px;
  letter-spacing:0.05em;
  text-transform:uppercase;
  color:#6b5757;
}

.hero-visual{
  position:relative;
  aspect-ratio:4/5;
  border-radius:2px;
  overflow:hidden;
  background:linear-gradient(160deg,var(--maroon) 0%, var(--maroon-deep) 60%, var(--maroon-ink) 100%);
}
.hero-visual svg{width:100%;height:100%;display:block;}
.hero-visual .badge{
  position:absolute;
  bottom:22px;left:22px;right:22px;
  background:rgba(36,19,19,0.55);
  backdrop-filter:blur(6px);
  border:1px solid rgba(255,255,255,0.25);
  color:var(--ivory);
  padding:16px 18px;
  font-family:var(--font-label);
  font-size:12px;
  letter-spacing:0.05em;
  text-transform:uppercase;
  display:flex;
  justify-content:space-between;
  align-items:center;
}

.marquee-strip{
  margin-top:90px;
  border-top:1px solid var(--line);
  border-bottom:1px solid var(--line);
  padding:18px 0;
  overflow:hidden;
  white-space:nowrap;
}
.marquee-track{
  display:inline-flex;
  gap:0;
  animation:scroll-left 38s linear infinite;
}
@media (prefers-reduced-motion:reduce){.marquee-track{animation:none;}}
.marquee-track span{
  font-family:var(--font-label);
  font-size:13px;
  letter-spacing:0.08em;
  text-transform:uppercase;
  color:var(--maroon);
  padding:0 22px;
  border-right:1px solid var(--line);
}
@keyframes scroll-left{
  from{transform:translateX(0);}
  to{transform:translateX(-50%);}
}

@media (max-width:980px){
  .hero{padding-top:150px;}
  .hero-grid{grid-template-columns:1fr;gap:40px;}
  .hero-visual{aspect-ratio:16/11;}
  .hero-stats{gap:26px;flex-wrap:wrap;}
}

/* =========================================================
   SECTION SHELL
   ========================================================= */
.section{padding:108px var(--pad);}
.section.tight{padding:80px var(--pad);}
.section-head{
  max-width:760px;
  margin-bottom:56px;
}
.section-head.center{margin-left:auto;margin-right:auto;text-align:center;}
.section-head h2{
  margin-top:18px;
  font-size:clamp(30px,3.6vw,44px);
  line-height:1.12;
}
.section-head p{
  margin-top:18px;
  font-size:16.5px;
  color:#4a3535;
  line-height:1.75;
}
.bg-maroon{background:var(--maroon-ink);color:var(--ivory);}
.bg-maroon h2,.bg-maroon h3,.bg-maroon h4{color:var(--ivory);}
.bg-maroon .section-head p{color:rgba(251,246,238,0.78);}
.bg-maroon .eyebrow{color:var(--gold-soft);}
.bg-dim{background:var(--ivory-dim);}

/* =========================================================
   WEDDING INTRO (home only) — image-text editorial blocks
   ========================================================= */
.wedding-intro{background:var(--maroon-ink);position:relative;overflow:hidden;}
.wedding-intro .intro-top{
  max-width:880px;margin:0 auto 72px;text-align:center;
}
.wedding-intro .intro-top h2{color:var(--ivory);}
.wedding-intro .intro-top p{color:rgba(251,246,238,0.8);}

.wblock{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:64px;
  align-items:center;
  margin-bottom:96px;
}
.wblock:last-child{margin-bottom:0;}
.wblock.reverse .wb-visual{order:2;}
.wblock.reverse .wb-copy{order:1;}
.wb-visual{
  aspect-ratio:5/6;
  border-radius:2px;
  overflow:hidden;
  position:relative;
}
.wb-visual svg{width:100%;height:100%;display:block;}
.wb-copy .eyebrow{color:var(--gold-soft);}
.wb-copy h3{
  color:var(--ivory);
  font-size:clamp(24px,2.6vw,32px);
  margin-top:14px;
  line-height:1.2;
}
.wb-copy p{
  margin-top:18px;
  color:rgba(251,246,238,0.82);
  font-size:16px;
  line-height:1.8;
  max-width:46ch;
}
.wb-copy .wb-list{
  margin-top:22px;
  display:flex;
  flex-direction:column;
  gap:10px;
}
.wb-copy .wb-list li{
  list-style:none;
  display:flex;
  gap:10px;
  font-family:var(--font-label);
  font-size:13.5px;
  letter-spacing:0.02em;
  color:var(--gold-soft);
}

@media (max-width:900px){
  .wblock,.wblock.reverse{grid-template-columns:1fr;gap:30px;}
  .wblock.reverse .wb-visual,.wblock.reverse .wb-copy{order:unset;}
  .wblock{margin-bottom:64px;}
}

/* =========================================================
   ABOUT / STUDIO STATEMENT
   ========================================================= */
.statement{
  max-width:920px;
  margin:0 auto;
  text-align:center;
}
.statement h2{
  font-size:clamp(28px,4vw,46px);
  line-height:1.22;
}
.statement .pull{
  margin-top:38px;
  font-family:var(--font-display);
  font-style:italic;
  font-size:20px;
  color:var(--maroon);
}
.statement-body{
  max-width:760px;
  margin:34px auto 0;
  color:#4a3535;
  font-size:16.5px;
  line-height:1.8;
}

/* =========================================================
   FEATURE GRID (Why GPH)
   ========================================================= */
.feature-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:1px;
  background:var(--line);
  border:1px solid var(--line);
}
.feature-card{
  background:var(--ivory);
  padding:38px 30px;
}
.feature-card .num{
  font-family:var(--font-label);
  font-size:12px;
  letter-spacing:0.08em;
  color:var(--gold);
}
.feature-card h3{
  margin-top:18px;
  font-size:19px;
  line-height:1.3;
}
.feature-card p{
  margin-top:12px;
  font-size:14.5px;
  color:#5c4848;
  line-height:1.65;
}
@media (max-width:980px){.feature-grid{grid-template-columns:repeat(2,1fr);}}
@media (max-width:560px){.feature-grid{grid-template-columns:1fr;}}

/* =========================================================
   CATALOGUE
   ========================================================= */
.cat-block{margin-bottom:84px;}
.cat-block:last-child{margin-bottom:0;}
.cat-head{
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:30px;
  flex-wrap:wrap;
  margin-bottom:30px;
  padding-bottom:22px;
  border-bottom:1px solid var(--line);
}
.cat-head .roman{
  font-family:var(--font-display);
  font-size:14px;
  color:var(--gold);
  letter-spacing:0.1em;
}
.cat-head h3{font-size:26px;margin-top:8px;max-width:520px;}
.cat-head p{margin-top:10px;font-size:14.5px;color:#5c4848;max-width:520px;}
.cat-images{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:18px;
}
.cat-images .ph{
  aspect-ratio:4/5;
  border-radius:2px;
  overflow:hidden;
}
.cat-images svg{width:100%;height:100%;}
@media (max-width:780px){.cat-images{grid-template-columns:1fr 1fr;}}
@media (max-width:520px){.cat-images{grid-template-columns:1fr;}}

/* =========================================================
   PROCESS
   ========================================================= */
.process-list{
  display:flex;
  flex-direction:column;
}
.process-row{
  display:grid;
  grid-template-columns:90px 1fr;
  gap:30px;
  padding:30px 0;
  border-top:1px solid var(--line);
}
.process-row:last-child{border-bottom:1px solid var(--line);}
.process-row .pnum{
  font-family:var(--font-display);
  font-size:34px;
  color:var(--gold);
  font-weight:500;
}
.process-row h4{font-size:18px;}
.process-row p{margin-top:8px;font-size:14.5px;color:#5c4848;max-width:62ch;}

/* =========================================================
   WHO WE BUILD FOR
   ========================================================= */
.audience-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:24px;
}
.audience-card{
  border:1px solid var(--line);
  padding:28px 24px;
  background:var(--white);
}
.audience-card h4{font-size:16.5px;}
.audience-card p{margin-top:10px;font-size:14px;color:#5c4848;line-height:1.6;}
@media (max-width:980px){.audience-grid{grid-template-columns:1fr 1fr;}}
@media (max-width:560px){.audience-grid{grid-template-columns:1fr;}}

/* =========================================================
   FAQ
   ========================================================= */
.faq-list{max-width:820px;margin:0 auto;}
.faq-item{border-bottom:1px solid var(--line);}
.faq-item summary{
  list-style:none;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px;
  padding:24px 0;
  font-family:var(--font-label);
  font-size:16px;
  letter-spacing:0.01em;
  cursor:pointer;
}
.faq-item summary::-webkit-details-marker{display:none;}
.faq-item .ic{
  flex:none;width:22px;height:22px;position:relative;color:var(--maroon);
}
.faq-item .ic::before,.faq-item .ic::after{
  content:"";position:absolute;background:currentColor;
  top:50%;left:50%;transform:translate(-50%,-50%);
}
.faq-item .ic::before{width:14px;height:1.4px;}
.faq-item .ic::after{width:1.4px;height:14px;transition:transform .2s ease;}
.faq-item[open] .ic::after{transform:translate(-50%,-50%) rotate(90deg) scaleY(0);}
.faq-item .faq-a{padding:0 0 26px;font-size:15px;color:#4a3535;line-height:1.75;max-width:70ch;}

/* =========================================================
   CONTACT
   ========================================================= */
.contact-grid{
  display:grid;
  grid-template-columns:0.85fr 1.15fr;
  gap:60px;
}
.contact-channels{display:flex;flex-direction:column;gap:14px;}
.channel-card{
  display:flex;
  align-items:center;
  gap:16px;
  padding:20px 22px;
  border:1px solid var(--line-on-maroon);
  transition:background .2s ease, border-color .2s ease;
}
.channel-card:hover{background:rgba(255,255,255,0.06);}
.channel-card .ci{
  flex:none;width:40px;height:40px;
  display:flex;align-items:center;justify-content:center;
  border:1px solid var(--gold-soft);
  border-radius:50%;
  color:var(--gold-soft);
}
.channel-card .ci svg{width:18px;height:18px;}
.channel-card .ct b{
  display:block;font-family:var(--font-label);font-size:14px;letter-spacing:0.03em;color:var(--ivory);text-transform:uppercase;
}
.channel-card .ct span{display:block;font-size:14.5px;color:rgba(251,246,238,0.72);margin-top:3px;}

.address-card{
  margin-top:8px;
  padding:20px 22px;
  border:1px solid var(--line-on-maroon);
}
.address-card b{font-family:var(--font-label);font-size:13px;letter-spacing:0.05em;color:var(--gold-soft);text-transform:uppercase;}
.address-card p{margin-top:8px;font-size:14.5px;color:rgba(251,246,238,0.82);line-height:1.6;}

.form-card{
  background:var(--ivory);
  padding:40px;
  border-radius:2px;
}
.form-card h3{color:var(--maroon-ink);font-size:22px;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:22px;}
.form-field{display:flex;flex-direction:column;gap:8px;}
.form-field.full{grid-column:1/-1;}
.form-field label{font-family:var(--font-label);font-size:12px;letter-spacing:0.05em;text-transform:uppercase;color:#6b5757;}
.form-field input,.form-field select,.form-field textarea{
  border:1px solid var(--line);
  background:var(--white);
  padding:13px 14px;
  font-family:var(--font-body);
  font-size:14.5px;
  color:var(--ink);
  border-radius:1px;
}
.form-field textarea{resize:vertical;min-height:96px;}
.form-card .btn{margin-top:24px;width:100%;}
@media (max-width:980px){
  .contact-grid{grid-template-columns:1fr;}
  .form-row{grid-template-columns:1fr;}
}

/* =========================================================
   FOOTER
   ========================================================= */
.site-footer{
  background:var(--maroon-ink);
  color:rgba(251,246,238,0.75);
  padding:70px var(--pad) 30px;
}
.footer-top{
  display:grid;
  grid-template-columns:1.4fr 1fr 1fr 1fr;
  gap:40px;
  padding-bottom:50px;
  border-bottom:1px solid var(--line-on-maroon);
}
.footer-brand .brand{color:var(--ivory);}
.footer-brand p{margin-top:16px;font-size:14px;line-height:1.7;max-width:34ch;color:rgba(251,246,238,0.62);}
.footer-social{display:flex;gap:12px;margin-top:20px;}
.footer-social a{
  width:36px;height:36px;border:1px solid var(--line-on-maroon);border-radius:50%;
  display:flex;align-items:center;justify-content:center;transition:background .2s ease;
}
.footer-social a:hover{background:rgba(255,255,255,0.08);}
.footer-social svg{width:16px;height:16px;color:var(--ivory);}
.footer-col h5{
  font-family:var(--font-label);
  font-size:12px;
  letter-spacing:0.08em;
  text-transform:uppercase;
  color:var(--gold-soft);
  margin-bottom:18px;
}
.footer-col ul{display:flex;flex-direction:column;gap:11px;}
.footer-col a{font-size:14px;color:rgba(251,246,238,0.78);}
.footer-col a:hover{color:var(--ivory);}
.footer-bottom{
  display:flex;justify-content:space-between;align-items:center;
  padding-top:26px;font-size:12.5px;color:rgba(251,246,238,0.5);
  flex-wrap:wrap;gap:10px;
}
@media (max-width:900px){
  .footer-top{grid-template-columns:1fr 1fr;}
}
@media (max-width:560px){
  .footer-top{grid-template-columns:1fr;}
}

/* =========================================================
   FLOATING WHATSAPP BUTTON
   ========================================================= */
.float-wa{
  position:fixed;
  bottom:24px;right:24px;
  z-index:90;
  width:56px;height:56px;
  border-radius:50%;
  background:#25D366;
  display:flex;align-items:center;justify-content:center;
  box-shadow:0 8px 22px rgba(0,0,0,0.22);
  transition:transform .2s ease;
}
.float-wa:hover{transform:scale(1.06);}
.float-wa svg{width:28px;height:28px;color:#fff;}

/* =========================================================
   GENERIC PAGE HERO (sub-pages)
   ========================================================= */
.page-hero{
  padding:172px var(--pad) 80px;
  background:var(--maroon-ink);
  color:var(--ivory);
  position:relative;
  overflow:hidden;
}
.page-hero .eyebrow{color:var(--gold-soft);justify-content:center;}
.page-hero h1{
  color:var(--ivory);
  text-align:center;
  margin-top:18px;
  font-size:clamp(36px,5.4vw,58px);
}
.page-hero p{
  max-width:640px;margin:18px auto 0;text-align:center;
  color:rgba(251,246,238,0.78);font-size:16.5px;line-height:1.75;
}
.page-hero-art{
  position:absolute;inset:0;pointer-events:none;opacity:0.5;
}

/* =========================================================
   FOUNDERS PAGE
   ========================================================= */
.founders-quote{
  max-width:820px;margin:0 auto;text-align:center;
}
.founders-quote blockquote{
  font-family:var(--font-display);
  font-style:italic;
  font-size:clamp(22px,2.6vw,30px);
  line-height:1.5;
  color:var(--maroon-ink);
  margin:0;
}
.founders-quote cite{
  display:block;margin-top:20px;
  font-family:var(--font-label);
  font-style:normal;
  font-size:13px;
  letter-spacing:0.06em;
  text-transform:uppercase;
  color:var(--maroon);
}

.founder-profile{
  display:grid;
  grid-template-columns:0.8fr 1.2fr;
  gap:60px;
  align-items:start;
  margin-bottom:110px;
}
.founder-profile:last-child{margin-bottom:0;}
.founder-profile.reverse .fp-visual{order:2;}
.founder-profile.reverse .fp-copy{order:1;}
.fp-visual{position:sticky; top:110px;}
.fp-portrait{
  aspect-ratio:4/5;
  overflow:hidden;
  border-radius:2px;
  background:linear-gradient(155deg,var(--maroon) 0%, var(--maroon-deep) 70%, var(--maroon-ink) 100%);
}
.fp-portrait svg{width:100%;height:100%;}
.fp-tag{
  margin-top:18px;
  display:flex;
  flex-direction:column;
  gap:6px;
}
.fp-tag b{
  font-family:var(--font-label);
  font-size:13px;letter-spacing:0.04em;color:var(--maroon-ink);
}
.fp-tag span{font-size:13px;color:#6b5757;}

.fp-copy .eyebrow{margin-bottom:10px;}
.fp-copy h2{font-size:clamp(26px,3vw,36px);}
.fp-copy .role-list{
  margin-top:10px;
  display:flex;
  flex-direction:column;
  gap:4px;
}
.fp-copy .role-list span{
  font-family:var(--font-label);
  font-size:14px;
  color:var(--maroon);
}
.fp-copy p{margin-top:18px;font-size:15.5px;line-height:1.8;color:#4a3535;}
.fp-copy .fp-highlights{
  margin-top:26px;
  display:flex;
  flex-wrap:wrap;
  gap:10px;
}
.fp-copy .fp-highlights span{
  font-family:var(--font-label);
  font-size:12px;
  letter-spacing:0.03em;
  text-transform:uppercase;
  padding:8px 14px;
  border:1px solid var(--line);
  color:var(--maroon-ink);
}
.ventures-row{
  margin-top:30px;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:14px;
}
.ventures-row .vcard{
  border:1px solid var(--line);
  padding:18px;
  background:var(--white);
}
.ventures-row .vcard b{font-family:var(--font-label);font-size:13px;color:var(--maroon-ink);display:block;}
.ventures-row .vcard span{font-size:12.5px;color:#6b5757;display:block;margin-top:6px;line-height:1.5;}

@media (max-width:900px){
  .founder-profile,.founder-profile.reverse{grid-template-columns:1fr;gap:30px;}
  .founder-profile.reverse .fp-visual,.founder-profile.reverse .fp-copy{order:unset;}
  .fp-visual{position:static;}
  .ventures-row{grid-template-columns:1fr;}
}

/* =========================================================
   UTILS
   ========================================================= */
.center-cta{text-align:center;margin-top:50px;}
.divider-gold{height:1px;background:var(--line);max-width:var(--container);margin:0 auto;}
