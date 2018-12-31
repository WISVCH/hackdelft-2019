import React from 'react'

import Person from 'components/Person'
import leenstra from 'assets/speakers/b_leenstra.jpg'

const host = [
  {
    img: leenstra,
    name: 'MD. Bernard Leenstra',
    title: 'Host',
  },
]

const Host = () => (
    <div className="Host">
      {host.map(({ title, ...rest }, i) =>
          <Person key={i} revealed={true} title={`${title}`} small horizontal {...rest} />
      )}
    </div>
)

export default Host