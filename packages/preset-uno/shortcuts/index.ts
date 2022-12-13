import type { UserShortcuts } from 'unocss'

import { commonShortcuts } from './common'
import { buttonShortcuts } from './button'
import { linkShortcuts } from './link'
import { radioShortcuts } from './radio'
import { switchShortcuts } from './switch'
import { selectShortcuts } from './select'

export default [
  // common
  commonShortcuts,

  // basic
  buttonShortcuts,
  linkShortcuts,

  // form
  radioShortcuts,
  switchShortcuts,
  selectShortcuts
] as UserShortcuts
