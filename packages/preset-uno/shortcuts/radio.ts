export const radioShortcuts: Record<string, string> = {
  'u-radio': 'inline-flex items-center u-primary cursor-pointer',
  'u-radio-input': 'hidden',
  'u-radio-action': 'relative mr-1 w-14px h-14px text-white border u-border-base rounded-full u-transition after:u-radio-action-after',
  'u-radio-action-after': 'content-[\'\'] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 bg-context rounded-full u-transition',
  'u-radio-action-after-checked': 'w-8px h-8px',
  'u-radio-action-checked': 'border-context after:u-radio-action-after-checked'
}
