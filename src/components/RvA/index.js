import React from 'react'

import Person from 'components/Person'

import zAlArs from 'assets/speakers/z_al_ars.jpg'
import mKeijzer from 'assets/speakers/m_keijzer.jpg'
import gJongbloed from 'assets/speakers/g_jongbloed.jpg'

const rva = [
  {
    img: gJongbloed,
    name: 'Prof.dr.ir. G. Jongbloed',
    title: 'Professor of Statistics',
    faculty: 'Faculty of EEMCS TU Delft'
  },
  {
    img: zAlArs,
    name: 'Dr.ir. Z. Al-Ars',
    title: 'Associate professor in Bioinformatics',
    faculty: 'Faculty of EEMCS TU Delft'
  },
  {
    img: mKeijzer,
    name: 'Dr.ir. M. Keijzer',
    title: 'Assistant Professor in Applied Mathematics',
    faculty: 'Faculty of EEMCS TU Delft'
  },
]

const RvA = () => (
  <div className="RvA">
    {rva.map(({ title, faculty, ...rest }, i) =>
      <Person key={i} revealed={true} title={`${title} | ${faculty}`} small horizontal {...rest} />
    )}
  </div>
)

export default RvA
