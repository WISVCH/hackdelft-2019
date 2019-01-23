/* Handy dandy constants */
const second = 1;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const colors = {
  pink: [14, 0, 10],
  lightBlue: [188, 226, 248],
  green: [99, 218, 56],
  orange: [255, 149, 0],
  yellow: [249, 229, 0],
  purple: [104, 79, 163],
  red: [255, 0, 0],
  black: [0, 0, 0]
};

const planning = [
  {
    datetime: '2019-05-11T12:00:00+02:00',
    title: 'Registration',
    duration: 1.5 * hour,
    color: colors.yellow
  },
  {
    datetime: '2019-05-11T13:30:00+02:00',
    title: 'Opening ceremony',
    duration: 30 * minute,
    color: colors.lightBlue
  },
  {
    datetime: '2019-05-11T14:00:00+02:00',
    title: 'Workshops and group forming',
    duration: 2 * hour,
    color: colors.purple
  },
  {
    datetime: '2019-05-11T16:00:00+02:00',
    title: 'Hackathon',
    duration: day,
    color: colors.green
  },
  // {
  //   datetime: '2018-04-28T17:00:00+02:00',
  //   title: 'Capture the Flag',
  //   duration: hour,
  //   color: colors.red,
  //   mini: true
  // },
  {
    datetime: '2019-05-11T18:00:00+02:00',
    title: 'Dinner served',
    duration: 2 * hour,
    color: colors.orange,
    mini: true
  },
  // {
  //   datetime: '2018-04-28T20:30:00+02:00',
  //   title: 'Cup-Stacking',
  //   duration: hour,
  //   color: colors.red,
  //   mini: true
  // },
  {
    datetime: '2019-05-12T07:30:00+02:00',
    title: 'Breakfast served',
    duration: 2 * hour,
    color: colors.orange,
    mini: true
  },
  {
    datetime: '2019-05-12T12:00:00+02:00',
    title: 'Lunch served',
    duration: 1.5 * hour,
    color: colors.orange,
    mini: true
  },
  // {
  //   datetime: '2018-04-29T16:00:00+02:00',
  //   title: 'Pitches for the judges',
  //   duration: hour,
  //   color: colors.yellow
  // },
  {
    datetime: '2019-05-12T16:00:00+02:00',
    title: 'Finalists, winner announcement and prizes!',
    duration: 3 * hour,
    color: colors.lightBlue
  }
];
export default planning;
