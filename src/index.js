import _ from 'lodash';
import './style.css';
import Icon from './logo.png';
//import Print from './print';

function component() {
  const Container = document.createElement('div');
  Container.classList.add('container');

  const Bar = document.createElement('div');
  Bar.classList.add('Bar');

  Container.appendChild(Bar)

  const NavBar = document.createElement('div');
  // Lodash, now imported by this script
  //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  NavBar.classList.add('TopBar');
   // Add the image to our existing div.;
  //element.onclick = Print.bind(null, 'Hello webpack!');

  const Logo = document.createElement('l');
  Logo.setAttribute('id','Logo');
  NavBar.appendChild(Logo)
  const myIcon = new Image();
  myIcon.src = Icon;
  Logo.appendChild(myIcon);

  const Buttons = document.createElement('div');
  Buttons.classList.add('Buttons');

  const Home = document.createElement('a');
  Home.innerHTML = 'Home'
  Home.classList.add('active');
  Home.setAttribute('id','Home');
  Buttons.appendChild(Home);

  const About = document.createElement('a');
  About.innerHTML = 'About'
  About.setAttribute('id','About');
  Buttons.appendChild(About);

  const SS = document.createElement('a');
  SS.innerHTML = 'Success Stories'
  SS.setAttribute('id','SS');
  Buttons.appendChild(SS);

  const Services = document.createElement('a');
  Services.innerHTML = 'Services'
  Services.setAttribute('id','Services');
  Buttons.appendChild(Services);

  const book = document.createElement('a');
  book.innerHTML = 'Book Now'
  book.setAttribute('id','Book');
  Buttons.appendChild(book);

  NavBar.appendChild(Buttons)
  Bar.appendChild(NavBar)
  Container.appendChild(Bar)

  return Container;
}

document.body.appendChild(component());