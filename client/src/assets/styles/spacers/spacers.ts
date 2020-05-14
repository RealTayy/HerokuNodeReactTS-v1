import { math } from 'polished';

const baseSpacers = {
  base: '1rem',
}

const spacers = {
  ...baseSpacers,
  0: 0,
  1: math(`${baseSpacers.base} * 0.25`),
  2: math(`${baseSpacers.base} * 0.5`),
  3: math(`${baseSpacers.base} * 0.75`),
  4: math(`${baseSpacers.base} * 1`),
  5: math(`${baseSpacers.base} * 1.5`),
  6: math(`${baseSpacers.base} * 2`),
  7: math(`${baseSpacers.base} * 2.5`),
  8: math(`${baseSpacers.base} * 3`),
  9: math(`${baseSpacers.base} * 3.5`),
  10: math(`${baseSpacers.base} * 4`),
  11: math(`${baseSpacers.base} * 4.5`),
  12: math(`${baseSpacers.base} * 5`),
  13: math(`${baseSpacers.base} * 5.5`),
  14: math(`${baseSpacers.base} * 6`),
  15: math(`${baseSpacers.base} * 6.5`),
  16: math(`${baseSpacers.base} * 7`),
  17: math(`${baseSpacers.base} * 7.5`),
  18: math(`${baseSpacers.base} * 8`),
  19: math(`${baseSpacers.base} * 8.5`),
  20: math(`${baseSpacers.base} * 9`),
}

export { spacers };