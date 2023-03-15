import type { UserShortcuts } from 'unocss'

import { commonShortcuts } from './common'
import { buttonShortcuts } from './button'
import { radioShortcuts } from './radio'
import { switchShortcuts } from './switch'
import { selectShortcuts } from './select'

import icon from './icon'
import link from './link'
import avatar from './avatar'

export default [
  // common
  commonShortcuts,

  // basic
  buttonShortcuts,

  // form
  radioShortcuts,
  switchShortcuts,
  selectShortcuts,

  // new
  icon,
  link,
  avatar,
] as UserShortcuts
