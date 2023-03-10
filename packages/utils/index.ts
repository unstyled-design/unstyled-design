import { isNumber, isStringNumber } from '@hongbusi/utils'

export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value)
    return ''
  if (isNumber(value) || isStringNumber(value))
    return `${value}${defaultUnit}`
}
