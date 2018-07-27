'use strict'

import Info from '../../../info'
import style from './style'

let vuelluminati = "%cVuelluminati%c" + Info.version

const Warner = () => {
  console.log(vuelluminati, style[0], style[1])
}

Warner()

export default Warner
