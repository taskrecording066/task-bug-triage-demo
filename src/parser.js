export function parseScore(value) {
  if (value === null || value === undefined) return 0;
  const normalized = String(value).trim();
  const parsed = Number(normalized);
  if (Number.isNaN(parsed)) return 0;
  return Math.max(0, Math.min(100, parsed));
}

export function parseScores(entries) {
  return entries.map((entry) => ({
    label: entry.label,
    score: parseScore(entry.value)
  }));
}
