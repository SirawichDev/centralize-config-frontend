//@ts-nocheck
import { isNumber, isString } from 'lodash';

export function numberFormat(value) {
  return (
    Intl.NumberFormat('th-TH', { minimumFractionDigits: 2 }).format(
      Number(Number.parseFloat(parseToNumber(value)).toFixed(2))
    ) ?? 0
  );
}

export function parseFloatNumber(value: number | string = 0) {
  if (!isNumber(parseToNumber(value))) {
    return 0;
  }

  return Number.parseFloat(parseToNumber(value || 0).toFixed(2));
}

export const n = parseFloatNumber;

export function toDecimal(value = 0) {
  if (!isNumber(Number(value))) {
    return 0;
  }

  return Intl.NumberFormat('th-TH', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Number(Number(value || 0).toFixed(2)));
}

export function abbr(value: number) {
  const kiloUnit = 1000;
  const millionUnit = 1000000;
  if (value === 0) {
    return '0.00';
  }
  if (value < kiloUnit) {
    return Math.floor(value * 100) / 100;
  }
  if (value < millionUnit) {
    return `${Math.floor((value / kiloUnit) * 100) / 100} K`;
  }
  return `${Math.floor((value / millionUnit) * 100) / 100} M`;
}

export function parseToNumber(str) {
  if (isNumber(str)) {
    return str;
  }

  if (!isString(str)) {
    return str;
  }

  return Number.parseFloat(str.replaceAll(',', ''));
}

export function parseToNumberWithDash(str) {
  if (str === '-') {
    return str;
  }

  return parseToNumber(str);
}

export function isFloat(number) {
  return number % 1 !== 0;
}
