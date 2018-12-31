import React from 'react'
import classNames from 'classnames'
import './styles.css'

// import knvi from 'assets/partners/knvi.png'
// import timmanfonds from 'assets/partners/timmanfonds.png'
// import stud from 'assets/partners/stud.png'
import ch from 'assets/partners/ch.png'
import tudelft from 'assets/partners/tudelft.png'

const partners = [
  // {
  //   name: 'KNVI',
  //   img: knvi,
  //   url: 'https://www.knvi.nl/',
  // },
  // {
  //   name: 'R. Timman Stichting',
  //   img: timmanfonds,
  //   url: 'https://ch.tudelft.nl/association/honorary-members/prof-dr-r-timman/',
  // },
  // {
  //   name: 'StuD Fonds',
  //   img: stud,
  //   url: 'https://www.stud.nl/',
  // },
  {
    name: 'W.I.S.V. \'Christiaan Huygens\'',
    img: ch,
    url: 'https://ch.tudelft.nl/',
  },
  {
    name: 'TU Delft',
    img: tudelft,
    url: 'https://tudelft.nl/',
  },
]

const Partner = ({ name, img, url }) => (
  <a className="Partner" href={url} target="_blank">
    <img src={img} alt={name} />
  </a>
)

const Partners = () => (
  <div className={classNames('Partners', `n${partners.length}`)}>
    {partners.map((partner, i) => <Partner key={i} {...partner} />)}
  </div>
)

export default Partners
