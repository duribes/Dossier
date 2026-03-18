// ============================================================
// app.js — Lógica principal del dossier
// ============================================================

/* ─── Navigation ─────────────────────────────────────────── */
function initNav() {
  const links   = document.querySelectorAll('.nav-links a');
  const toggle  = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-links');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.dataset.section;
      showSection(target);
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      navList.classList.remove('open');
      toggle && toggle.classList.remove('open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  toggle && toggle.addEventListener('click', () => {
    navList.classList.toggle('open');
    toggle.classList.toggle('open');
  });
}

function showSection(id) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  const sec = document.getElementById(`section-${id}`);
  if (sec) sec.classList.add('active');
  // Update nav active
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.section === id);
  });
}

/* ─── Home ───────────────────────────────────────────────── */
function renderHome() {
  const p = PROFILE;

  // Photo
  const photoEl = document.getElementById('home-photo');
  if (p.photo) {
    const img = document.createElement('img');
    img.src = p.photo;
    img.alt = p.name;
    img.className = 'home-photo';
    img.onerror = () => { img.replaceWith(makePhotoPlaceholder()); };
    photoEl.replaceWith(img);
  } else {
    const placeholder = makePhotoPlaceholder();
    photoEl.replaceWith(placeholder);
  }

  document.getElementById('home-name').textContent        = p.name;
  document.getElementById('home-title').textContent       = p.title;
  document.getElementById('home-institution').textContent = `${p.institution} · ${p.department}`;
  document.getElementById('home-bio').textContent         = p.bio;

  // Contact
  const contactEl = document.getElementById('home-contact-list');
  contactEl.innerHTML = `
    <li>${emailIcon()} <a href="mailto:${p.email}">${p.email}</a></li>
    ${p.phone   ? `<li>${phoneIcon()} <span>${p.phone}</span></li>` : ''}
    ${p.office  ? `<li>${officeIcon()} <span>${p.office}</span></li>` : ''}
  `;

  // Social buttons
  const socialEl = document.getElementById('home-social');
  const links = [
    { key: 'googleScholar', label: 'Scholar',      url: p.social.googleScholar },
    { key: 'orcid',         label: 'ORCID',         url: p.social.orcid },
    { key: 'researchgate',  label: 'ResearchGate',  url: p.social.researchgate },
    { key: 'cvlac',         label: 'CvLAC',         url: p.social.cvlac },
    { key: 'github',        label: 'GitHub',         url: p.social.github },
    { key: 'linkedin',      label: 'LinkedIn',       url: p.social.linkedin },
    { key: 'academia',      label: 'Academia',       url: p.social.academia },
  ];
  socialEl.innerHTML = links
    .filter(l => l.url)
    .map(l => `<a href="${l.url}" class="social-btn" target="_blank" rel="noopener">${l.label}</a>`)
    .join('');
}

function makePhotoPlaceholder() {
  const d = document.createElement('div');
  d.className = 'home-photo-placeholder';
  d.textContent = 'Foto';
  return d;
}

/* ─── Research ───────────────────────────────────────────── */
function renderResearch() {
  const pubEntries  = parseBibTeX(PUBLICATIONS_BIBTEX);
  const talkEntries = parseBibTeX(TALKS_BIBTEX);
  const grouped     = groupByTopic(pubEntries, RESEARCH_TOPICS);

  const pubContainer = document.getElementById('publications-container');
  pubContainer.innerHTML = '';

  RESEARCH_TOPICS.forEach(topic => {
    const items = grouped[topic.id] || [];
    if (!items.length) return;

    const block = document.createElement('div');
    block.className = 'topic-block';
    block.innerHTML = `
      <div class="topic-header">
        <h3>${topic.title}</h3>
        ${topic.description ? `<p>${topic.description}</p>` : ''}
      </div>
      <div class="pub-list">
        ${items.sort((a,b) => (b.year||0) - (a.year||0)).map(renderPubItem).join('')}
      </div>
    `;
    pubContainer.appendChild(block);
  });

  // Talks
  const talksContainer = document.getElementById('talks-container');
  talksContainer.innerHTML = talkEntries
    .sort((a,b) => (b.year||0) - (a.year||0))
    .map(renderTalkItem).join('');
}

function renderPubItem(e) {
  const type   = e.type === 'book' ? 'Book' : e.type === 'article' ? 'Article' : e.type === 'inproceedings' ? 'Conference' : e.type;
  const venue  = e.journal || e.booktitle || e.publisher || '';
  const doiUrl = e.doi ? `https://doi.org/${e.doi}` : (e.url || '');
  return `
    <div class="pub-item">
      <span class="pub-year">${e.year || '—'}</span>
      <div>
        <div class="pub-authors">${formatAuthors(e.author)}</div>
        <div class="pub-title">${e.title || ''}
          <span class="pub-type-badge">${type}</span>
        </div>
        <div class="pub-venue">${venue}${e.volume ? `, ${e.volume}` : ''}${e.pages ? `, pp. ${e.pages}` : ''}</div>
        <div class="pub-links">
          ${doiUrl ? `<a href="${doiUrl}" class="pub-link" target="_blank" rel="noopener">DOI</a>` : ''}
          ${e.url && !e.doi ? `<a href="${e.url}" class="pub-link" target="_blank" rel="noopener">Link</a>` : ''}
        </div>
      </div>
    </div>
  `;
}

function renderTalkItem(e) {
  return `
    <div class="talk-item">
      <span class="pub-year">${e.year || '—'}</span>
      <div>
        <div class="talk-title">${e.title || ''}</div>
        <div class="talk-venue">${e.howpublished || ''}</div>
        <div class="talk-location">${e.address || ''}${e.month ? ` · ${e.month}` : ''}</div>
        ${e.url ? `<div class="pub-links"><a href="${e.url}" class="pub-link" target="_blank" rel="noopener">Link</a></div>` : ''}
      </div>
    </div>
  `;
}

/* ─── Research Group ─────────────────────────────────────── */
function renderGroup() {
  document.getElementById('group-name').textContent        = GROUP_INFO.name;
  document.getElementById('group-description').textContent = GROUP_INFO.description;
  document.getElementById('group-classification').textContent = GROUP_INFO.classification;
  document.getElementById('group-founded').textContent     = GROUP_INFO.founded;

  const grid = document.getElementById('members-grid');
  grid.innerHTML = GROUP_MEMBERS.map(renderMemberCard).join('');
}

function renderMemberCard(m) {
  const initials = m.name.split(' ').slice(0,2).map(w => w[0]).join('');
  const photoHtml = m.photo
    ? `<img src="${m.photo}" alt="${m.name}" class="member-photo" onerror="this.replaceWith(makeMemberInitials('${initials}'))">`
    : `<div class="member-photo-placeholder">${initials}</div>`;

  const links = [
    { label: 'Scholar',     url: m.googleScholar  || '' },
    { label: 'ORCID',       url: m.orcid          || '' },
    { label: 'ResearchGate',url: m.researchgate   || '' },
    { label: 'CvLAC',       url: m.cvlac          || '' },
    { label: 'LinkedIn',    url: m.linkedin       || '' },
    { label: 'Academia',    url: m.academia       || '' },
  ].filter(l => l.url);

  return `
    <div class="member-card">
      <div class="member-header">
        ${photoHtml}
        <div>
          <div class="member-name">${m.name}</div>
          <div class="member-position">${m.position}</div>
          <div class="member-formation">${m.formation}</div>
        </div>
      </div>
      ${m.description ? `<div class="member-desc">${m.description}</div>` : ''}
      <div class="member-email"><a href="mailto:${m.email}">${m.email}</a></div>
      ${links.length ? `
        <div class="member-links">
          ${links.map(l => `<a href="${l.url}" class="member-link" target="_blank" rel="noopener">${l.label}</a>`).join('')}
        </div>` : ''}
    </div>
  `;
}

/* ─── Teaching ───────────────────────────────────────────── */
function renderTeaching() {
  var ugGrid = document.getElementById('ug-grid');
  var pgGrid = document.getElementById('pg-grid');
  if (ugGrid) ugGrid.innerHTML = UNDERGRADUATE_COURSES.map(renderCourseCard).join('');
  if (pgGrid) pgGrid.innerHTML = POSTGRADUATE_COURSES.map(renderCourseCard).join('');
}

function renderCourseCard(c) {
  return '<div class="course-card">'
    + '<div class="course-header">'
    + '<span class="course-code">' + (c.code || '') + '</span>'
    + '<span class="course-credits">' + (c.credits ? c.credits + ' cr.' : '') + '</span>'
    + '</div>'
    + '<div class="course-name">' + c.name + '</div>'
    + '<div class="course-desc">' + c.description + '</div>'
    + '</div>';
}

/* ─── Interests ──────────────────────────────────────────── */
function renderInterests() {
  var introEl = document.getElementById('interests-intro');
  if (introEl) introEl.textContent = INTERESTS_INTRO;

  var researchContainer = document.getElementById('research-interests');
  if (researchContainer) {
    researchContainer.innerHTML = '';
    RESEARCH_INTERESTS.forEach(function(sec) {
      researchContainer.innerHTML += '<div class="interest-section">'
        + '<h3>' + sec.category + '</h3>'
        + '<div class="interests-cards">'
        + sec.items.map(function(i) {
            return '<div class="interest-card">'
              + '<div class="interest-card-title">' + i.title + '</div>'
              + '<div class="interest-card-desc">' + i.description + '</div>'
              + '</div>';
          }).join('')
        + '</div></div>';
    });
  }

  var otherContainer = document.getElementById('other-interests');
  if (otherContainer) {
    otherContainer.innerHTML = '';
    OTHER_INTERESTS.forEach(function(sec) {
      otherContainer.innerHTML += '<div class="interest-section">'
        + '<h3>' + sec.category + '</h3>'
        + '<div class="other-interests-list">'
        + sec.items.map(function(i) {
            return '<span class="other-interest-tag">' + i + '</span>';
          }).join('')
        + '</div></div>';
    });
  }
}

/* ─── Footer ─────────────────────────────────────────────── */
function renderFooter() {
  const p = PROFILE;
  document.getElementById('footer-name').textContent = p.name;
  document.getElementById('footer-role').textContent = `${p.title} · ${p.institution}`;

  const col1 = document.getElementById('footer-links-1');
  const col2 = document.getElementById('footer-links-2');

  const links1 = [
    { label: 'GitHub',  url: p.social.github },
    { label: 'ORCID',   url: p.social.orcid  },
    { label: 'Scholar', url: p.social.googleScholar },
  ].filter(l => l.url);

  const links2 = [
    { label: 'LinkedIn',     url: p.social.linkedin },
    { label: 'ResearchGate', url: p.social.researchgate },
    { label: 'CvLAC',        url: p.social.cvlac },
  ].filter(l => l.url);

  col1.innerHTML = links1.map(l => `<li><a href="${l.url}" target="_blank" rel="noopener">${l.label}</a></li>`).join('');
  col2.innerHTML = links2.map(l => `<li><a href="${l.url}" target="_blank" rel="noopener">${l.label}</a></li>`).join('');

  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

/* ─── SVG Icons ──────────────────────────────────────────── */
function emailIcon()  { return `<svg class="contact-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="16" height="12" rx="2"/><path d="M2 7l8 5 8-5"/></svg>`; }
function phoneIcon()  { return `<svg class="contact-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 4a1 1 0 011-1h2.5l1 3.5-1.5 1a11 11 0 005.5 5.5l1-1.5L16 12.5V15a1 1 0 01-1 1A13 13 0 013 4z"/></svg>`; }
function officeIcon() { return `<svg class="contact-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 18V7l6-4 6 4v11M9 18v-5h2v5"/></svg>`; }

/* ─── Init ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  function run(fn, label) {
    try { fn(); } catch(e) { console.error('[dossier] ' + label + ':', e); }
  }
  run(initNav,         'initNav');
  run(renderHome,      'renderHome');
  run(renderResearch,  'renderResearch');
  run(renderGroup,     'renderGroup');
  run(renderTeaching,  'renderTeaching');
  run(renderInterests, 'renderInterests');
  run(renderFooter,    'renderFooter');
  run(function(){ showSection('home'); }, 'showSection');
});
