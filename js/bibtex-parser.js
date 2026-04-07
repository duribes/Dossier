// ============================================================
// bibtex-parser.js — Parser BibTeX ligero para el dossier
// ============================================================
function parseBibTeX(bibtexStr) {
  var entries = [];
  var entryRegex = /@(\w+)\s*\{([^,]+),([^@]*)\}/gs;
  var match;
  while ((match = entryRegex.exec(bibtexStr)) !== null) {
    var type = match[1].toLowerCase();
    var key  = match[2].trim();
    var body = match[3];
    var entry = { type: type, key: key };
    var fieldRegex = /(\w+)\s*=\s*[\{"]([\s\S]*?)[\}"](?:\s*,|\s*$)/g;
    var fm;
    while ((fm = fieldRegex.exec(body)) !== null) {
      var fname = fm[1].toLowerCase();
      var fval  = fm[2].replace(/\s+/g, ' ').trim();
      if (fval.startsWith('{') && fval.endsWith('}')) fval = fval.slice(1, -1);
      entry[fname] = fval;
    }
    entries.push(entry);
  }
  return entries;
}

function normalizeStr(s) {
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

function formatAuthors(authorsStr) {
  if (!authorsStr) return '';
  var highlights = [];
  if (typeof HIGHLIGHT_AUTHOR !== 'undefined' && HIGHLIGHT_AUTHOR) {
    highlights.push(normalizeStr(HIGHLIGHT_AUTHOR));
  }
  highlights.push(normalizeStr('D. Uribe-Suarez'));
  highlights.push(normalizeStr('D. Uribe Suarez'));
  highlights.push(normalizeStr('D.A. Uribe Suarez'));

  return authorsStr
    .split(' and ')
    .map(function(a) {
      var parts = a.split(',');
      var name = parts.length === 2
        ? parts[1].trim() + ' ' + parts[0].trim()
        : a.trim();
      var aNorm = normalizeStr(a);
      var isHighlight = highlights.some(function(h) { return aNorm.indexOf(h) !== -1; });
      return isHighlight ? '<strong>' + name + '</strong>' : name;
    })
    .join(', ');
}

function groupByTopic(entries, topics) {
  var grouped = {};
  topics.forEach(function(t) { grouped[t.id] = []; });
  grouped['__other__'] = [];
  entries.forEach(function(e) {
    var t = e.topic || '__other__';
    if (grouped[t]) grouped[t].push(e);
    else grouped['__other__'].push(e);
  });
  return grouped;
}
