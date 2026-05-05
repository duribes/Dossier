// ============================================================
// app.js — Lógica principal del dossier
// ============================================================

/* ─── Navigation ─────────────────────────────────────────── */
function initNav() {
  var links   = document.querySelectorAll('.nav-links a');
  var toggle  = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-links');

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = link.dataset.section;
      showSection(target);
      links.forEach(function(l) { l.classList.remove('active'); });
      link.classList.add('active');
      navList.classList.remove('open');
      if (toggle) toggle.classList.remove('open');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  if (toggle) {
    toggle.addEventListener('click', function() {
      navList.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  }
}

function showSection(id) {
  document.querySelectorAll('.page-section').forEach(function(s) {
    s.classList.remove('active');
  });
  var sec = document.getElementById('section-' + id);
  if (sec) sec.classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.classList.toggle('active', a.dataset.section === id);
  });
}

/* ─── Home ───────────────────────────────────────────────── */
function renderHome() {
  var p = PROFILE;

  var photoEl = document.getElementById('home-photo');
  if (p.photo) {
    var img = document.createElement('img');
    img.src = p.photo;
    img.alt = p.name;
    img.className = 'home-photo';
    img.onerror = function() { img.replaceWith(makePhotoPlaceholder()); };
    photoEl.replaceWith(img);
  } else {
    photoEl.replaceWith(makePhotoPlaceholder());
  }

  document.getElementById('home-name').textContent        = p.name;
  document.getElementById('home-title').textContent       = p.title;
  document.getElementById('home-institution').textContent = p.institution + ' · ' + p.department;

  // Bio — supports string or array of paragraphs
  var bioEl = document.getElementById('home-bio');
  if (Array.isArray(p.bio)) {
    bioEl.innerHTML = p.bio.map(function(par) {
      return '<p style="margin-bottom:1rem">' + par + '</p>';
    }).join('');
  } else {
    bioEl.textContent = p.bio;
  }

  var contactEl = document.getElementById('home-contact-list');
  contactEl.innerHTML = '<li>' + emailIcon() + ' <a href="mailto:' + p.email + '">' + p.email + '</a></li>'
    + (p.phone  ? '<li>' + phoneIcon()  + ' <span>' + p.phone  + '</span></li>' : '')
    + (p.office ? '<li>' + officeIcon() + ' <span>' + p.office + '</span></li>' : '');

  var socialEl = document.getElementById('home-social');
  var socialLinks = [
    { label: 'Scholar',      url: p.social.googleScholar },
    { label: 'ORCID',        url: p.social.orcid },
    { label: 'ResearchGate', url: p.social.researchgate },
    { label: 'CvLAC',        url: p.social.cvlac },
    { label: 'GitHub',       url: p.social.github },
    { label: 'LinkedIn',     url: p.social.linkedin },
    { label: 'Academia',     url: p.social.academia },
  ];
  socialEl.innerHTML = socialLinks
    .filter(function(l) { return l.url; })
    .map(function(l) {
      return '<a href="' + l.url + '" class="social-btn" target="_blank" rel="noopener">' + l.label + '</a>';
    })
    .join('');
}

function makePhotoPlaceholder() {
  var d = document.createElement('div');
  d.className = 'home-photo-placeholder';
  d.textContent = 'Photo';
  return d;
}

/* ─── Research ───────────────────────────────────────────── */
function renderResearch() {
  var pubs    = parseBibTeX(PUBLICATIONS_BIBTEX);
  var talks   = parseBibTeX(TALKS_BIBTEX);
  var posters = (typeof POSTERS_BIBTEX !== 'undefined') ? parseBibTeX(POSTERS_BIBTEX) : [];

  // Research header image
  var headerImg = document.getElementById('research-header-img');
  if (headerImg && typeof RESEARCH_IMAGE !== 'undefined' && RESEARCH_IMAGE) {
    headerImg.src = RESEARCH_IMAGE;
    headerImg.style.display = 'block';
  }

  // Journal publications
  var journalEl = document.getElementById('journal-container');
  if (journalEl) {
    journalEl.innerHTML = pubs
      .sort(function(a,b) { return (b.year||0) - (a.year||0); })
      .map(renderPubItem).join('');
  }

  // Conferences
  var confEl = document.getElementById('conf-container');
  if (confEl) {
    confEl.innerHTML = talks
      .sort(function(a,b) { return (b.year||0) - (a.year||0); })
      .map(renderTalkItem).join('');
  }

  // Posters
  var posterEl = document.getElementById('poster-container');
  if (posterEl) {
    posterEl.innerHTML = posters
      .sort(function(a,b) { return (b.year||0) - (a.year||0); })
      .map(renderTalkItem).join('');
  }

  // Reviewer journals
  var reviewerEl = document.getElementById('reviewer-container');
  if (reviewerEl && typeof REVIEWER_JOURNALS !== 'undefined') {
    reviewerEl.innerHTML = REVIEWER_JOURNALS.map(function(j) {
      return '<div class="pub-item"><div></div><div>' + j + '</div></div>';
    }).join('');
  }
}

function renderPubItem(e) {
  var type   = e.type === 'book' ? 'Book' : e.type === 'article' ? 'Article' : e.type === 'inproceedings' ? 'Conference' : e.type;
  var venue  = e.journal || e.booktitle || e.publisher || '';
  var doiUrl = e.doi ? 'https://doi.org/' + e.doi : (e.url || '');
  var vol    = e.volume ? ', ' + e.volume : '';
  var pages  = e.pages  ? ', pp. ' + e.pages : '';

  return '<div class="pub-item">'
    + '<span class="pub-year">' + (e.year || '—') + '</span>'
    + '<div>'
    + '<div class="pub-authors">' + formatAuthors(e.author) + '</div>'
    + '<div class="pub-title">' + (e.title || '') + ' <span class="pub-type-badge">' + type + '</span></div>'
    + '<div class="pub-venue">' + venue + vol + pages + '</div>'
    + '<div class="pub-links">'
    + (doiUrl ? '<a href="' + doiUrl + '" class="pub-link" target="_blank" rel="noopener">DOI</a>' : '')
    + (e.url && !e.doi ? '<a href="' + e.url + '" class="pub-link" target="_blank" rel="noopener">Link</a>' : '')
    + '</div>'
    + '</div>'
    + '</div>';
}

// ── Must be outside renderTalkItem ──
function formatDate(day, month, year) {
  if (!year) return '';
  if (!day && !month) return year;
  if (!day) return month + ' ' + year;
  return month + ' ' + day + ', ' + year;
}

function renderTalkItem(e) {
  var authors = e.author || '';
  var title   = e.title || '';
  var book    = e.booktitle || '';
  var org     = e.organization || '';
  var address = e.address || '';
  var date    = formatDate(e.day, e.month, e.year);
  var note    = e.note ? ' (' + e.note + ')' : '';

  return '<div class="pub-item">'
    + '<div></div>'
    + '<div>'
    + authors + '. '
    + title + '. '
    + 'In ' + book
    + (address ? ', ' + address : '')
    + (date ? ', ' + date : '')
    + note + '. '
    + org
    + '</div>'
    + '</div>';
}

/* ─── Research Group ─────────────────────────────────────── */
function renderGroup() {
  document.getElementById('group-name').textContent           = GROUP_INFO.name;
  document.getElementById('group-description').textContent    = GROUP_INFO.description;
  document.getElementById('group-classification').textContent = GROUP_INFO.classification;
  document.getElementById('group-founded').textContent        = GROUP_INFO.founded;

  var grid = document.getElementById('members-grid');
  grid.innerHTML = GROUP_MEMBERS.map(renderMemberCard).join('');
}

function renderMemberCard(m) {
  var initials = m.name.split(' ').slice(0,2).map(function(w) { return w[0]; }).join('');
  var photoHtml = m.photo
    ? '<img src="' + m.photo + '" alt="' + m.name + '" class="member-photo" onerror="this.style.display=\'none\'">'
    : '<div class="member-photo-placeholder">' + initials + '</div>';

  var links = [
    { label: 'Scholar',      url: m.googleScholar  || '' },
    { label: 'ORCID',        url: m.orcid          || '' },
    { label: 'ResearchGate', url: m.researchgate   || '' },
    { label: 'CvLAC',        url: m.cvlac          || '' },
    { label: 'LinkedIn',     url: m.linkedin       || '' },
    { label: 'Academia',     url: m.academia       || '' },
  ].filter(function(l) { return l.url; });

  return '<div class="member-card">'
    + '<div class="member-header">'
    + photoHtml
    + '<div>'
    + '<div class="member-name">' + m.name + '</div>'
    + '<div class="member-position">' + m.position + '</div>'
    + '<div class="member-formation">' + m.formation + '</div>'
    + '</div>'
    + '</div>'
    + (m.description ? '<div class="member-desc">' + m.description + '</div>' : '')
    + '<div class="member-email"><a href="mailto:' + m.email + '">' + m.email + '</a></div>'
    + (links.length
        ? '<div class="member-links">'
          + links.map(function(l) {
              return '<a href="' + l.url + '" class="member-link" target="_blank" rel="noopener">' + l.label + '</a>';
            }).join('')
          + '</div>'
        : '')
    + '</div>';
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
  var p = PROFILE;
  document.getElementById('footer-name').textContent = p.name;
  document.getElementById('footer-role').textContent = p.title + ' · ' + p.institution;

  var col1 = document.getElementById('footer-links-1');
  var col2 = document.getElementById('footer-links-2');

  var links1 = [
    { label: 'GitHub',  url: p.social.github },
    { label: 'ORCID',   url: p.social.orcid  },
    { label: 'Scholar', url: p.social.googleScholar },
  ].filter(function(l) { return l.url; });

  var links2 = [
    { label: 'LinkedIn',     url: p.social.linkedin },
    { label: 'ResearchGate', url: p.social.researchgate },
    { label: 'CvLAC',        url: p.social.cvlac },
  ].filter(function(l) { return l.url; });

  col1.innerHTML = links1.map(function(l) {
    return '<li><a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + '</a></li>';
  }).join('');
  col2.innerHTML = links2.map(function(l) {
    return '<li><a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + '</a></li>';
  }).join('');

  document.getElementById('footer-year').textContent = new Date().getFullYear();
}

/* ─── SVG Icons ──────────────────────────────────────────── */
function emailIcon()  { return '<svg class="contact-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="16" height="12" rx="2"/><path d="M2 7l8 5 8-5"/></svg>'; }
function phoneIcon()  { return '<svg class="contact-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 4a1 1 0 011-1h2.5l1 3.5-1.5 1a11 11 0 005.5 5.5l1-1.5L16 12.5V15a1 1 0 01-1 1A13 13 0 013 4z"/></svg>'; }
function officeIcon() { return '<svg class="contact-icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 18V7l6-4 6 4v11M9 18v-5h2v5"/></svg>'; }

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
  run(function() { showSection('home'); }, 'showSection');
});
