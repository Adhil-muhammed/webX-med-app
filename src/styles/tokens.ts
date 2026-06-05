/** Clinical Precision — from Stitch project Ente Doctor Login UI */
import { colors as exportedColors, spacing as exportedSpacing } from './tokensExport.cjs';

export const colors = {
  background: exportedColors.background,
  foreground: exportedColors.foreground,
  muted: exportedColors.muted,
  mutedVariant: exportedColors['muted-variant'],
  primary: exportedColors.primary,
  primaryDark: exportedColors['primary-dark'],
  primaryForeground: exportedColors['primary-foreground'],
  border: exportedColors.border,
  borderVariant: exportedColors['border-variant'],
  surface: exportedColors.surface,
  surfaceAlt: exportedColors['surface-alt'],
  destructive: exportedColors.destructive,
  onSurfaceVariant: exportedColors['on-surface-variant'],
} as const;

export const spacing = {
  xs: exportedSpacing.xs,
  sm: exportedSpacing.sm,
  md: exportedSpacing.md,
  lg: exportedSpacing.lg,
  xl: exportedSpacing.xl,
  marginMobile: exportedSpacing.marginMobile,
  touchTarget: exportedSpacing.touchTarget,
} as const;

export const typography = {
  display: { fontSize: 32, fontWeight: '700' as const, lineHeight: 40 },
  headline: { fontSize: 24, fontWeight: '600' as const, lineHeight: 32 },
  title: { fontSize: 20, fontWeight: '600' as const, lineHeight: 28 },
  body: { fontSize: 16, fontWeight: '400' as const, lineHeight: 24 },
  bodySm: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
  label: { fontSize: 12, fontWeight: '600' as const, lineHeight: 16 },
} as const;
