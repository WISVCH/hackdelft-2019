import student from 'assets/tickets/student.svg'
import studentBackground from 'assets/tickets/student_background.svg'
import alumnus from 'assets/tickets/alumnus.svg'
import alumnusBackground from 'assets/tickets/alumnus_background.svg'
import knvi from 'assets/tickets/knvi.svg'
import knviBackground from 'assets/tickets/knvi_background.svg'
import external from 'assets/tickets/external.svg'
import externalBackground from 'assets/tickets/external_background.svg'

export default [
  {
    available: false,
    type: 'Student',
    price: 5,
    image: student,
    background: studentBackground,
  },
  {
    available: false,
    type: 'Alumni / TU Delft employee',
    price: 25,
    image: alumnus,
    background: alumnusBackground,
  },
  {
    available: false,
    type: 'KNVI member',
    price: 25,
    image: knvi,
    background: knviBackground,
  },
  {
    available: false,
    type: 'External',
    price: 60,
    image: external,
    background: externalBackground,
  },
]
