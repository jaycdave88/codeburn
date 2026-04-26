import { describe, expect, it } from 'vitest'

import { AUGGIE_TOKENS, TUI_THEME, gradientColor } from '../src/theme.js'

describe('Auggie TUI theme', () => {
  it('contains only valid hex color tokens', () => {
    for (const value of Object.values(AUGGIE_TOKENS).flat()) {
      expect(value).toMatch(/^#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/)
    }
  })

  it('maps primary values and usage bars to approved Auggie semantics', () => {
    expect(TUI_THEME.value.primary).toBe(AUGGIE_TOKENS.yellowBright)
    expect(TUI_THEME.accent.primary).toBe(AUGGIE_TOKENS.brand)
    expect(TUI_THEME.bars.usageGradient).toBe(AUGGIE_TOKENS.brandGradient)
  })

  it('interpolates across the brand gradient', () => {
    expect(gradientColor(TUI_THEME.bars.usageGradient, 0)).toBe(AUGGIE_TOKENS.brandGradient[0])
    expect(gradientColor(TUI_THEME.bars.usageGradient, 1)).toBe(AUGGIE_TOKENS.brandGradient[2])
  })
})