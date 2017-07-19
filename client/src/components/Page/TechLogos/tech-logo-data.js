// Basics
import iHTML from './tech-logos/html-5.01.svg'
import iCSS from './tech-logos/css-3.01.svg'
import iJS from './tech-logos/javascript.svg'
// MERN
// import iMongo from './tech-logos/mongodb.on-black.01.svg'
import iMongo from './tech-logos/mongodb.svg'
// import iExpress from './tech-logos/express.on-black.01.svg'
import iExpress from './tech-logos/express.svg'
import iReact from './tech-logos/react.svg'
// import iNode from './tech-logos/nodejs.on-black.01.svg'
// import iNode from './tech-logos/nodejs.svg'
import iNode from './tech-logos/nodejs.on-green.svg'

const basicsLogos = [
  {
    name: 'HTML 5',
    image: iHTML,
    style: "image-square",
  },
  {
    name: 'CSS 3',
    image: iCSS,
    style: "image-square",
  },
  {
    name: 'JavaScript',
    image: iJS,
    style: "image-square",
  },
]


const mernLogos = [
  {
    name: 'MongoDB',
    image: iMongo,
    style: 'image-wide',
  },
  {
    name: 'Express',
    image: iExpress,
    style: 'image-express',
  },
  {
    name: 'React',
    image: iReact,
    style: "image-square",
  },
  {
    name: 'Node',
    image: iNode,
    style: "image-square",
  },
]

export { basicsLogos, mernLogos }
