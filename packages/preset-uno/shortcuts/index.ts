import type { UserShortcuts } from 'unocss'

import { commonShortcuts } from './common'
import { buttonShortcuts } from './button'
import { linkShortcuts } from './link'
import { radioShortcuts } from './radio'

export default [
  // common
  commonShortcuts,

  // basic
  buttonShortcuts,
  linkShortcuts,

  // form
  radioShortcuts
] as UserShortcuts
