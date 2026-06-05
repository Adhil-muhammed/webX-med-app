/** Single source for Tailwind + TypeScript design tokens (Clinical Precision) */
'use strict';

const colors = {
  background: '#F8F9FA',
  foreground: '#191C1D',
  muted: '#5F5E5E',
  'muted-variant': '#636262',
  primary: '#0D5C75',
  'primary-dark': '#004357',
  'primary-foreground': '#FFFFFF',
  border: '#E8EAED',
  'border-variant': '#BFC8CD',
  surface: '#FFFFFF',
  'surface-alt': '#F3F4F5',
  destructive: '#BA1A1A',
  'on-surface-variant': '#40484C',
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  marginMobile: 20,
  touchTarget: 48,
};

module.exports = { colors, spacing };
