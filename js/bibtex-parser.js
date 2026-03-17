// ============================================================
// bibtex-parser.js — Parser BibTeX ligero para el dossier
// ============================================================

function parseBibTeX(bibtexStr) {
  const entries = [];
  // Match each @type{key, ... }
  const entryRegex = /@(\w+)\s*\{([^,]+),([^@]*)\}/gs;
  let match;

  while ((match = entryRegex.exec(bibtexStr)) !== null) {
    const type = match[1].toLowerCase();
    const key  = match[2].trim();
    const body = match[3];

    const entry = { type, key };

    // Extract field = {value} or field = "value"
    const fieldRegex = /(\w+)\s*=\s*[\{"]([\s\S]*?)[\}"](?:\s*,|\s*$)/g;
    let fm;
    while ((fm = fieldRegex.exec(body)) !== null) {
      const fname = fm[1].toLowerCase();
      let   fval  = fm[2].replace(/\s+/g, ' ').trim();
      // Remove wrapping braces
      if (fval.startsWith('{') && fval.endsWith('}')) fval = fval.slice(1, -1);
      entry[fname] = fval;
    }

    entries.push(entry);
  }

  return entries;
}

function formatAuthors(authorsStr) {
  if (!authorsStr) return '';
  return authorsStr
    .split(' and ')
    .map(a => {
      const parts = a.split(',');
      if (parts.length === 2) return `${parts[1].trim()} ${parts[0].trim()}`;
      return a.trim();
    })
    .join(', ');
}

function groupByTopic(entries, topics) {
  const grouped = {};
  topics.forEach(t => { grouped[t.id] = []; });
  grouped['__other__'] = [];

  entries.forEach(e => {
    const t = e.topic || '__other__';
    if (grouped[t]) grouped[t].push(e);
    else grouped['__other__'].push(e);
  });

  return grouped;
}
