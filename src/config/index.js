module.exports = {
  siteTitle: 'Akhil Bharti | Frontend Developer',
  siteDescription:
    'Akhil Bharti is a frontend developer from Bengaluru, India who enjoys buiding interactive websites and applications.',
  siteKeywords:
    'Akhil Bharti, Akhil, Bharti, akhbharti, software engineer, front-end engineer, web developer, javascript, Bengaluru, React developer',
  siteUrl: 'https://akhilbharti.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-164398686-1',
  googleVerification: 'dv4K5twlHGDFqIkbK4as0RLD2-m5GfyjGI9NIWCVih4',
  name: 'Akhil Bharti',
  location: 'Bengaluru, India',
  email: 'akhbharti@gmail.com',
  github: 'https://github.com/bchiang7',
  twitterHandle: '@akhilbhartidev',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/akhilbharti',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/akhil-bharti-b71516100',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/akhilbharti',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/akhil_bharti',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/akhilbhartidev',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#ff5d49',
  navyColor: '#1B283B',
  darkNavyColor: '#182334',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
