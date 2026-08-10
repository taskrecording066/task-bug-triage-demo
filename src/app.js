export function parseScore(value) {
  if (value === null || value === undefined) return 0;
  const parsed = Number(value);
  if (Number.isNaN(parsed)) return 0;
  return Math.max(0, Math.min(100, parsed));
}
