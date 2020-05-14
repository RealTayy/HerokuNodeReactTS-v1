const baseSpacers = {
  base: 1,
  suffix: 'rem'
}

const spacers = {
  0: 0,
  1: baseSpacers.base * 0.25 + baseSpacers.suffix,
  2: baseSpacers.base * 0.5 + baseSpacers.suffix,
  3: baseSpacers.base * 0.75 + baseSpacers.suffix,
  4: baseSpacers.base * 1 + baseSpacers.suffix,
  5: baseSpacers.base * 1.5 + baseSpacers.suffix,
  6: baseSpacers.base * 2 + baseSpacers.suffix,
  7: baseSpacers.base * 2.5 + baseSpacers.suffix,
  8: baseSpacers.base * 3 + baseSpacers.suffix,
  9: baseSpacers.base * 3.5 + baseSpacers.suffix,
  10: baseSpacers.base * 4 + baseSpacers.suffix,
  11: baseSpacers.base * 4.5 + baseSpacers.suffix,
  12: baseSpacers.base * 5 + baseSpacers.suffix,
  13: baseSpacers.base * 5.5 + baseSpacers.suffix,
  14: baseSpacers.base * 6 + baseSpacers.suffix,
  15: baseSpacers.base * 6.5 + baseSpacers.suffix,
  16: baseSpacers.base * 7 + baseSpacers.suffix,
  17: baseSpacers.base * 7.5 + baseSpacers.suffix,
  18: baseSpacers.base * 8 + baseSpacers.suffix,
  19: baseSpacers.base * 8.5 + baseSpacers.suffix,
  20: baseSpacers.base * 9 + baseSpacers.suffix,
}

export { spacers };