export const MOCK_SUNBURST_DATA = [
  {
    type: 'sunburst',
    labels: [
      'Eve',
      'Cain',
      'Seth',
      'Enos',
      'Noam',
      'Abel',
      'Awan',
      'Enoch',
      'Azura'
    ],
    parents: ['', 'Eve', 'Eve', 'Seth', 'Seth', 'Eve', 'Eve', 'Awan', 'Eve'],
    values: [10, 14, 12, 10, 2, 6, 6, 4, 4],
    outsidetextfont: { size: 20, color: '#377eb8' },
    leaf: { opacity: 0.4 },
    marker: { line: { width: 2 } }
  }
];

export const MOCK_SUNBURST_LAYOUT = {
  margin: { l: 0, r: 0, b: 0, t: 0 },
  width: 500,
  height: 500,
};
