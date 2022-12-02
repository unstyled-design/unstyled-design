export const switchShortcuts: Record<string, string> = {
  'u-switch-input': 'hidden',
  'u-switch-action': 'relative inline-block w-3.5em h-2em bg-#ccc u-transition ease-in-out rounded-full after:u-switch-action-after',
  'u-switch-action-active': 'after:w-3em',
  'u-switch-action-active-checked': 'after:translate-x-0.25em',
  'u-switch-action-after': 'content-[\'\'] absolute top-0.25em translate-x-0.25em inline-block w-1.5em h-1.5em bg-white rounded-full u-transition ease-in-out',
  'u-switch-action-after-checked': 'translate-x-1.75em',
  'u-switch-action-checked': 'bg-primary after:u-switch-action-after-checked'
}
