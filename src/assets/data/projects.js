import { v4 as uuidv4 } from 'uuid';

import UTrackerImg from '../images/utracker.jpg';
// import GreenCtgImg from '../images/greenctg.jpg';
import amazonHomepageImg from '../images/amazonHomepage.jpg';
import AirbnbImg from '../images/Airbnb.jpg';
import blogPostImg from '../images/blogPost.jpeg';
import ecommerceImg from '../images/ecommerce.jpg';

const projects = [
  // {
  //   id: uuidv4(),
  //   name: 'Expense Tracker',
  //   desc:
  //     'An application to track all your expenses and help you keeping a check on your monthly expenses . I developed the website and the mobile app',
  //   img: UTrackerImg,
  //   url: 'https://money-manager-frontend2.netlify.app/',
  //   page: 'ExpenseTracker',
  // },
  {
    id: uuidv4(),
    name: 'AirBnb clone',
    desc:
      'Airbnb, is an American company that operates an online marketplace for lodging,  primarily homestays for vacation rentals, and tourism activities.',
    img: AirbnbImg,
    url: 'https://airbnb-frontend-ashy.vercel.app/',
    page: 'Airbnb',
  },
  // {
  //   id: uuidv4(),
  //   name: 'Social networking app',
  //   desc:
  //     'A social networking app to connect with friends, family and other people you know. Share Real time photos and videos',
  //   img: blogPostImg,
  //   url: 'https://airbnb-frontend-ashy.vercel.app/',
  //   page: 'Airbnb',
  // },
  {
    id: uuidv4(),
    name: 'eCommerce platform',
    desc:
      'A online marketplace for Top brand for Phones and Electronics & fashion.',
    img: ecommerceImg,
    url: 'https://airbnb-frontend-ashy.vercel.app/',
    page: 'ECommerce',
  },
  {
    id: uuidv4(),
    name: 'Amazon clone frontend.',
    desc: 'Amazon clone frontend built with Next.js and tailwindCss.',
    img: amazonHomepageImg,
    url: 'https://amazon1-vignesh-2406.vercel.app/',
    page: 'AmazonClone',
  },
];

export default projects;
