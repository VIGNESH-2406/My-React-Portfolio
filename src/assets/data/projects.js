import { v4 as uuidv4 } from 'uuid';

// import GreenCtgImg from '../images/greenctg.jpg';
import amazonHomepageImg from '../images/amazonHomepage.jpg';
import AirbnbImg from '../images/Airbnb.jpg';
import wheelsImg from '../images/wheels.png';
import uTrackerImg from '../images/utracker.jpg';
import blogPostImg from '../images/blogPost.jpeg';
import ecommerceImg from '../images/ecommerce.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'E-Commerce Platform',
    desc:
      'VISTA-SHOP An online marketplace for Top brand for Phones and Electronics & fashion.',
    img: ecommerceImg,
    url: 'https://vista-shop.herokuapp.com/',
    page: 'ECommerce',
  },

  {
    id: uuidv4(),
    name: 'HOTEL BOOKING PLATFORM',
    desc:
      'Airbnb, An app that operates as an online marketplace for An for lodging, primarily homestays for vacation rentals, and lodging, and tourism activities.',
    img: AirbnbImg,
    url: 'https://airbnb-frontend-ashy.vercel.app/',
    page: 'Airbnb',
  },
  {
    id: uuidv4(),
    name: 'Car rental app',
    desc:
      'VROOM CARS, An online car rental app for renting out and selling cars on lease.',
    img: wheelsImg,
    url: 'https://vroom-cars.herokuapp.com',
    page: 'Airbnb',
  },

  {
    id: uuidv4(),
    name: 'Social Networking App',
    desc:
      'IMPRESSIONS, A Social Blog Post app to connect with friends & family, Share photos and post likes and comments',
    img: blogPostImg,
    url: 'https://impressionz.herokuapp.com/',
    page: 'SocialNetworking',
  },
  {
    id: uuidv4(),
    name: 'Amazon clone frontend.',
    desc: 'Amazon clone frontend built with Next.js and tailwindCss.',
    img: amazonHomepageImg,
    url: 'https://amazon1-vignesh-2406.vercel.app/',
    page: 'AmazonClone',
  },
  {
    id: uuidv4(),
    name: 'Voice-powered Expense Tracker',
    desc:
      'A Voice powered application to track all your expenses and help you keeping a check on your expenses . I developed the website and the mobile app',
    img: uTrackerImg,
    url: 'https://v-powered-expense-tracker2021.netlify.app/',
    page: 'ExpenseTracker',
  },
];

export default projects;
