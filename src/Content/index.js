import faq from './faq';
import partners from './partners';
import planning from './planning';
import supporting from './supporting';

const content = [
  {
    type: 'Article',
    title: 'What is HackDelft?',
    body:
      'HackDelft is the third hackathon organized by TU Delft’s W.I.S.V ‘Christiaan Huygens’. Join 100 other students interested in math, computer science or design for 24 hours of learning, building, and having fun. We’re excited to work with our premium partners to provide HackDelft-exclusive tools and data for you to hack with this year!'
  },
  {
    type: 'Article',
    title: 'When is HackDelft?',
    body:
      'HackDelft will be taking place in the weekend of May 11th and 12th 2019.'
  },
  {
    type: 'Calendar',
    title: 'Schedule',
    items: planning
  },
  {
    type: 'Promo',
    title: 'Our partners',
    items: partners
  },
  // {
  //   type: 'Promo',
  //   title: 'Our supporting partners',
  //   items: supporting
  // },

  { type: 'Collection', title: 'Frequently Asked Questions', items: faq }
];

export default content;
