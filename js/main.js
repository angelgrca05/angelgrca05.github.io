/* ===== EDIT YOUR CONTENT HERE ===== */

// Graphic design projects: put your pictures in assets/projects/ and add a line per picture.
const projects = [
  { title: "BettaCart", category: "Web System", image: "assets/projects/bettacart/home.jpg", bg: "#0e3b4a",
    detail: {
      tagline: "An online betta fish shop with a customer storefront and an admin panel.",
      overview: "BettaCart is a web system for browsing and buying betta fish. Its goal is to make finding and purchasing healthy, beautiful bettas easier. Customers can browse the collection, order and track their purchases, while the admin manages stock, orders, payments and refunds.",
      year: "2026", role: "Student Developer", status: "Completed",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "PayMongo"],
      features: [
        "Browse bettas with search, sorting and filters by type (Halfmoon, Plakat, Crowntail, Double Tail, Dumbo Ear)",
        "Product cards with price, stock, availability and arrival date",
        "Shopping cart, order summary, checkout and order history",
        "Customer profile, notifications and help chat",
        "FAQ, contact and support form with order number and proof",
        "Refund requests reviewed by the admin",
        "Admin dashboard with sales overview, pending approvals and inventory status",
        "Admin inventory, orders, transactions, customers, notifications and refund management"
      ],
      shots: [
      ["assets/projects/bettacart/home.jpg", "Home page", "Customer"],
      ["assets/projects/bettacart/shop.jpg", "Shop page with search and sort", "Customer"],
      ["assets/projects/bettacart/shop-listing.jpg", "Fish listings with price, stock and arrival date", "Customer"],
      ["assets/projects/bettacart/cart.jpg", "My Cart and order summary", "Customer"],
      ["assets/projects/bettacart/about.jpg", "About page", "Customer"],
      ["assets/projects/bettacart/faq.jpg", "FAQ / Help Center", "Customer"],
      ["assets/projects/bettacart/contact.jpg", "Contact & Support form", "Customer"],
      ["assets/projects/bettacart/admin-dashboard.jpg", "Admin dashboard", "Admin"],
      ["assets/projects/bettacart/admin-inventory.jpg", "Admin inventory management", "Admin"],
      ["assets/projects/bettacart/admin-orders.jpg", "Admin orders", "Admin"],
      ["assets/projects/bettacart/admin-transactions.jpg", "Admin transactions", "Admin"],
      ["assets/projects/bettacart/admin-refunds.jpg", "Admin refund requests", "Admin"]
      ]
    } },
  { title: "Angelux Logo (Vertical)", category: "Logo", image: "assets/projects/angelux-logo-vertical.jpg", bg: "#bd3660" },
  { title: "Angelux Badge Logo", category: "Logo", image: "assets/projects/angelux-badge.jpg", bg: "#bd3660" },
  { title: "Angelux Logo (Horizontal)", category: "Logo", image: "assets/projects/angelux-horizontal.jpg", bg: "#bd3660" },
  { title: "Angelux Icon", category: "Logo", image: "assets/projects/angelux-icon.jpg", bg: "#bd3660" },
  { title: "Brew Haven Coffee & More", category: "Logo", image: "assets/projects/brew-haven-logo.jpg", bg: "#c9662a" },
  { title: "Brew Haven Icon", category: "Logo", image: "assets/projects/brew-haven-icon.jpg", bg: "#c9662a" },
  { title: "Typography: Hermès Poster", category: "Typography", image: "assets/projects/typography-poster.jpg", bg: "#f1670f" },
  { title: "Sketch: Fruitful Design", category: "Sketches", image: "assets/projects/sketch-fruitful-design.jpg", bg: "#f4eee8" },
  { title: "Sketch: 3 Logo Ideas", category: "Sketches", image: "assets/projects/sketch-3-logos.jpg", bg: "#f4eee8" },
  { title: "Sketch: Brew Haven", category: "Sketches", image: "assets/projects/sketch-brew-haven.jpg", bg: "#f4eee8" },
  { title: "Sketch: Typography Poster", category: "Sketches", image: "assets/projects/sketch-typography-poster.jpg", bg: "#f4eee8" },
  { title: "Sketch: Portfolio Layout", category: "Sketches", image: "assets/projects/sketch-portfolio-layout.jpg", bg: "#f4eee8" },
];

// Tools: [name, icon, background, logo color (hex), text logo]
const toolGroups = {
  "Design & Creative": [
    ["Canva", "canva", "linear-gradient(135deg,#00c4cc,#7d2ae8)", "ffffff", null],
    ["Photoshop", null, "#001e36", "31a8ff", "Ps"],
    ["Illustrator", null, "#330000", "ff9a00", "Ai"],
    ["Lightroom", null, "#001e36", "31a8ff", "Lr"],
    ["Premiere Pro", null, "#00005b", "9999ff", "Pr"],
    ["After Effects", null, "#00005b", "9999ff", "Ae"],
    ["Figma", "figma", "#ffffff", "f24e1e", null],
    ["CapCut", "capcut", "#000000", "ffffff", null],
    ["Procreate", "procreate", "#000000", "ffffff", null],
    ["Pinterest", "pinterest", "#e60023", "ffffff", null]
  ],
  "Web & Development": [
    ["VS Code", "visualstudiocode", "#007acc", "ffffff", null],
    ["HTML5", "html5", "#e34f26", "ffffff", null],
    ["CSS3", "css3", "#1572b6", "ffffff", null],
    ["JavaScript", "javascript", "#f7df1e", "000000", null],
    ["PHP", "php", "#777bb4", "ffffff", null],
    ["MySQL", "mysql", "#4479a1", "ffffff", null],
    ["Git", "git", "#f05032", "ffffff", null],
    ["GitHub", "github", "#181717", "ffffff", null],
    ["XAMPP", "xampp", "#fb7a24", "ffffff", null],
    ["phpMyAdmin", "phpmyadmin", "#6c78af", "ffffff", null]
  ],
  "Everyday Tools": [
    ["Google Drive", "googledrive", "#ffffff", "1fa463", null],
    ["Google Docs", "googledocs", "#4285f4", "ffffff", null],
    ["Google Chrome", "googlechrome", "#ffffff", "4285f4", null],
    ["Notion", "notion", "#ffffff", "000000", null],
    ["Messenger", "messenger", "linear-gradient(135deg,#00b2ff,#006aff)", "ffffff", null],
    ["Gmail", "gmail", "#ffffff", "ea4335", null],
    ["Word", null, "#185abd", "ffffff", "W"],
    ["Excel", null, "#107c41", "ffffff", "X"],
    ["PowerPoint", null, "#c43e1c", "ffffff", "P"],
    ["Zoom", "zoom", "#0b5cff", "ffffff", null]
  ]
};

const certificates = [
  { title: "National Certificate II: Computer Systems Servicing", issuer: "TESDA", year: "2026", image: "assets/certificates/nc2-computer-systems-servicing.jpg" },
  { title: "Interpersonal Skills (US English)", issuer: "Wadhwani Foundation", year: "2024", image: "assets/certificates/interpersonal-skills.jpg" },
  { title: "Self-Management (US English)", issuer: "Wadhwani Foundation", year: "2024", image: "assets/certificates/self-management.jpg" },
  { title: "Self-Presentation (US English)", issuer: "Wadhwani Foundation", year: "2024", image: "assets/certificates/self-presentation-2024.jpg" },
];

// Replace each "#" with your real profile link.
const socials = [
  { name: "Facebook", url: "https://www.facebook.com/hyunhoo.0", path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" },
  { name: "Instagram", url: "https://www.instagram.com/hyunho.0/", path: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm5.2-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/angelica-garcia-a314b7448", path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm7 0h3.8v1.6c.6-1 1.9-1.9 3.9-1.9 4 0 4.3 2.6 4.3 5.9V21h-4v-5.2c0-1.4 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9.5z" },
  { name: "GitHub", url: "https://github.com/angelgrca05", path: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" },
  { name: "Email", url: "mailto:angelgrca05@gmail.com", path: "M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4.5 7v1.9l7.500 5.200L19.500 8.900V7L12 12.200z" },
];

/* ===== SITE LOGIC (no need to edit) ===== */
const $ = s => document.querySelector(s);
const box = $("#lightbox");
const show = (src, alt) => { box.querySelector("img").src = src; box.querySelector("img").alt = alt || ""; box.classList.add("open"); };
box.onclick = () => box.classList.remove("open");
document.onkeydown = e => e.key === "Escape" && box.classList.remove("open");

// Theme (saved in localStorage)
const root = document.documentElement, tbtn = $("#theme");
const setTheme = t => { root.dataset.theme = t; tbtn.textContent = t === "dark" ? "☀️" : "🌙"; try { localStorage.setItem("theme", t); } catch (e) {} };
let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
tbtn.onclick = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");

// Mobile menu
const burger = $("#burger"), menu = $("#menu");
burger.onclick = () => burger.setAttribute("aria-expanded", menu.classList.toggle("open"));
menu.onclick = () => { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); };

// Typing effect
const words = ["Logo Design", "Posters", "Social Media Layouts", "Brand Visuals"];
let w = 0, c = 0, del = false;
(function type() {
  const word = words[w], el = $("#typed");
  el.textContent = word.slice(0, c);
  if (!del && c === word.length) { del = true; return setTimeout(type, 1400); }
  if (del && c === 0) { del = false; w = (w + 1) % words.length; }
  c += del ? -1 : 1;
  setTimeout(type, del ? 40 : 90);
})();

// Gallery with filters
const cats = ["All", ...new Set(projects.map(p => p.category))];
let current = "All";
function drawGallery() {
  $("#filters").innerHTML = projects.length ? cats.map(c => `<button class="chip ${c === current ? "on" : ""}" data-c="${c}">${c}</button>`).join("") : "";
  const list = projects.filter(p => current === "All" || p.category === current);
  $("#gallery").innerHTML = list.length
    ? list.map(p => `<button class="piece" data-i="${projects.indexOf(p)}" data-src="${p.image}" data-t="${p.title}"><div class="thumb" style="background:${p.bg || '#f4eee8'}"><img src="${p.image}" alt="${p.title}" loading="lazy"><em>${p.category}</em></div><div class="cap"><b>${p.title}</b></div></button>`).join("")
    : `<p class="empty">My graphic design outputs are coming soon.</p>`;
}
$("#filters").onclick = e => { if (e.target.dataset.c) { current = e.target.dataset.c; drawGallery(); } };
$("#gallery").onclick = e => { const b = e.target.closest(".piece"); if (!b) return; const p = projects[b.dataset.i]; p.detail ? openProject(p) : show(b.dataset.src, b.dataset.t); };

// Project detail window (used when a project has a "detail" block)
const modal = document.createElement("div");
modal.className = "modal"; modal.id = "projModal"; document.body.appendChild(modal);
function openProject(p) {
  const d = p.detail, groups = [...new Set(d.shots.map(s => s[2]))];
  modal.innerHTML = `<div class="modal-card" role="dialog" aria-modal="true" aria-label="${p.title}"><button class="modal-x" aria-label="Close">×</button>
    <p class="eyebrow-d">${p.category}</p><h3>${p.title}</h3><p class="tagline-d">${d.tagline}</p>
    <div class="meta"><span><b>Year</b>${d.year}</span><span><b>Role</b>${d.role}</span><span><b>Status</b>${d.status}</span></div>
    <h4>Overview</h4><p>${d.overview}</p>
    <h4>Features</h4><ul class="feat">${d.features.map(f => `<li>${f}</li>`).join("")}</ul>
    <h4>Technologies used</h4><div class="chips left">${d.tech.map(t => `<span>${t}</span>`).join("")}</div>
    ${groups.map(g => `<h4>${g} screenshots</h4><div class="shots">${d.shots.filter(s => s[2] === g).map(s => `<figure><img src="${s[0]}" alt="${s[1]}" loading="lazy" data-src="${s[0]}"><figcaption>${s[1]}</figcaption></figure>`).join("")}</div>`).join("")}</div>`;
  modal.classList.add("open"); document.body.style.overflow = "hidden";
}
const closeModal = () => { modal.classList.remove("open"); document.body.style.overflow = ""; };
modal.onclick = e => { if (e.target === modal || e.target.className === "modal-x") closeModal(); else if (e.target.dataset.src) show(e.target.dataset.src, e.target.alt); };
document.addEventListener("keydown", e => { if (e.key === "Escape" && !box.classList.contains("open")) closeModal(); });
drawGallery();

// Tools
// Official full-color logos: [icons8 name, devicon name]. If one fails to load, the next is tried, then a brand-color tile.
const logos = {
  "Canva": ["canva", "canva"], "Photoshop": ["adobe-photoshop", "photoshop"], "Illustrator": ["adobe-illustrator", "illustrator"],
  "Lightroom": ["adobe-lightroom", "lightroom"], "Premiere Pro": ["adobe-premiere-pro", "premierepro"], "After Effects": ["adobe-after-effects", "aftereffects"],
  "Figma": ["figma", "figma"], "CapCut": ["capcut"], "Pinterest": ["pinterest"],
  "VS Code": ["visual-studio-code-2019", "vscode"], "HTML5": ["html-5", "html5"], "CSS3": ["css3", "css3"], "JavaScript": ["javascript", "javascript"],
  "PHP": ["php", "php"], "MySQL": ["mysql-logo", "mysql"], "Git": ["git", "git"], "GitHub": ["github", "github"], "XAMPP": ["xampp"],
  "Google Drive": ["google-drive"], "Google Docs": ["google-docs"], "Google Chrome": ["chrome", "chrome"], "Notion": ["notion", "notion"],
  "Messenger": ["facebook-messenger"], "Gmail": ["gmail-new"], "Word": ["microsoft-word-2019"], "Excel": ["microsoft-excel-2019"],
  "PowerPoint": ["microsoft-powerpoint-2019"], "Zoom": ["zoom"],
};
const logoUrls = n => { const [i8, dv] = logos[n] || []; return [i8 && `https://img.icons8.com/color/128/${i8}.png`, dv && `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${dv}/${dv}-original.svg`].filter(Boolean); };
const fallbackTile = ([n, i, bg, fg, t]) => `<div class="logo-tile" style="background:${bg};color:#${fg}${t ? ";border:2px solid #" + fg : ""}">${t ? `<b>${t}</b>` : `<img src="https://cdn.simpleicons.org/${i}/${fg}" alt="" onerror="this.replaceWith(Object.assign(document.createElement('b'),{textContent:'${n[0]}'}))">`}</div>`;
window.logoFail = img => {
  const u = JSON.parse(img.dataset.u), k = +img.dataset.k + 1;
  if (k < u.length) { img.dataset.k = k; img.src = u[k]; } else img.parentElement.outerHTML = decodeURIComponent(img.dataset.f);
};
const tile = t => { const urls = logoUrls(t[0]); return `<div class="tool">${urls.length ? `<div class="logo-img"><img src="${urls[0]}" alt="" loading="lazy" data-k="0" data-u='${JSON.stringify(urls)}' data-f="${encodeURIComponent(fallbackTile(t))}" onerror="logoFail(this)"></div>` : fallbackTile(t)}<p>${t[0]}</p></div>`; };
$("#toolGrid").innerHTML = Object.entries(toolGroups).map(([g, list]) => `<div class="tool-group"><h3>${g}</h3><div class="tools">${list.map(tile).join("")}</div></div>`).join("");

// Certificates
$("#certGrid").innerHTML = certificates.length
  ? certificates.map(c => `<div class="cert"><img src="${c.image}" alt="${c.title}" loading="lazy" data-src="${c.image}"><div><b>${c.title}</b><br><small>${c.issuer} · ${c.year}</small></div></div>`).join("")
  : `<p class="empty">Certificates will be added here.</p>`;
$("#certGrid").onclick = e => { if (e.target.dataset.src) show(e.target.dataset.src, e.target.alt); };

// Social links
$("#socials").innerHTML = socials.map(s => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}" title="${s.name}"><svg viewBox="0 0 24 24"><path d="${s.path}"/></svg><span>${s.name}</span></a>`).join("");

// Reveal on scroll + active nav link
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
const links = [...document.querySelectorAll("nav a")];
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => spy.observe(s));

$("#yr").textContent = new Date().getFullYear();
