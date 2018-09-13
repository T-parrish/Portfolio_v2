const aboutData = [
  {
    id: 1,
    title: 'Bilingual',
    p1: "Spent three years living in Montpellier, France with my family and attended public school for two years.",
    p2: "Since then, I've maintained conversational fluency through coursework, Duolingo, speaking with friends, and occasional translation work.",
    // img: "url('/images/textureBg.jpg')",
    bgfill:'#209CC7'
  }, {
    id: 2,
    title: 'Musician',
    p1: 'Notable achievements: principal percussionist for the El Camino Youth Orchestra and the El Camino Wind Ensemble, 3rd place in world with Oregon Crusaders at WGI finals in Ohio.',
    p2: 'Co-founded a multimedia production / recording studio in college that became cash-positive after 6 months of operations.',
    bgfill:'#209CC7'
  }, {
    id: 3,
    title: 'Adventurous',
    p1: 'Spent 12 months volunteering, freelancing, house-sitting, and learning to code while traveling around the world.',
    p2: 'Started a photography project with my girlfriend Emily that now has over 13k followers on Instagram and has provided us with opportunities to work with companies including Sudio, and Travelibro.',
    bgfill:'#209CC7'
  }, {
    id: 4,
    title: 'Professional',
    p1: 'As an account manager at Twitter, I was responsible for over $1.2 million dollars of quarterly advertising revenue.',
    p2: 'To hit these numbers, I taught myself SQL and Python to provide my team-mates with lead lists and selling points backed by data.',
    bgfill:'#209CC7'
  }, {
    id: 5,
    title: 'Adaptive',
    p1: 'Recognizing that my passion for Data Science and Data Engineering was constrained to Jupyter Notebooks, I started learning everything I could about modern web tech, focusing primarily on Node and React.',
    p2: "Next up: I'd like to put my diverse set of skills to use on projects aimed at bettering people's lives.",
    bgfill:'#209CC7'
  }
]

const portfolioData = [
  {
    id: 1,
    name: 'Node Chat',
    synopsis: 'Multi-user Chat app built with Node.js, and webhooks, deployed on Heroku',
    background: "#119bc9",
    color: "#ffffff",
    github: 'https://github.com/T-parrish/node-chat-app',
    livelink: 'https://lit-cliffs-45276.herokuapp.com/'
  }, {
    id: 2,
    name: 'Dev Connector',
    synopsis: 'Social network for developers, built using MongoDB, Mongoose, Node, Express, React, and deployed with Heroku. Authentication handled with JWT, Passport, and Bcrypt',
    background: "#F89951",
    color: "#ffffff",
    github: 'https://github.com/T-parrish/MERN_stack',
    livelink: 'https://agile-tundra-60265.herokuapp.com/'
  }, {
    id: 3,
    name: 'Expensify',
    synopsis: 'Multi-user expense tracking app built with Node, Express, React, and Firebase. Authentication handled with Google oAuth, JWT, and Bcrypt. Test suite written with Jest and Enzyme, deployed on Heroku.',
    background: "#0d627e",
    color: "#ffffff",
    github: 'https://github.com/T-parrish/expensify_app',
    livelink: 'https://secure-cliffs-73695.herokuapp.com/',
    wide: true,
  }, {
    id: 4,
    name: 'Indecision',
    synopsis: 'Leave your decision in the hands of your new robotic overlords',
    background: "#119bc9",
    color: "#ffffff",
    github: 'https://github.com/T-parrish/indecision-app',
    livelink: ''
  }, {
    id: 5,
    name: 'Deep Learning NanoDegree',
    synopsis: 'Models built with Tensorflow and Jupyter Notebooks, trained on AWS instances. Different architectures explored: RNN, CNN, VNN, DCGAN',
    background: "#0d627e",
    color: "#ffffff",
    github: 'https://github.com/T-parrish/Deep_Learning',
    livelink: ''
  }, {
    id: 6,
    name: 'LeetCode Solutions',
    synopsis: 'Python solutions to LeetCode problems',
    background: "#F89951",
    color: "#ffffff",
    github: 'https://github.com/T-parrish/LeetCode',
    livelink: ''
  }, {
    id: 7,
    name: 'NLP Research',
    synopsis: 'Jupyter Notebooks with some of my work with Natural Language Processing',
    background: "#0d627e",
    color: "#ffffff",
    github: 'https://github.com/T-parrish/NLP_projects',
    livelink: ''
  },
]

export {portfolioData, aboutData}