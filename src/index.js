import _ from 'lodash';
import './style.css';
import Icon from './logo.png';
import Tom from './tom.png';
import Athlete from './athlete.jpg';
import LowerBack from './LowBack.jpg';
import Shoulder from './shoulder.jpg';
import Neck from './neck.jpeg';
import Pain from './musclePain.jpg';
import Head from './headache.jpg';
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
//////////////////////////////////////////////////////////
  const vidbox = document.createElement('div');
  vidbox.setAttribute('id','topvid');
  Container.appendChild(vidbox);
//////////////////////////////////////////////////////////
  const helpbox = document.createElement('div');
  helpbox.innerHTML = "Can we help YOU?  Contact us today to arrange a consultation with a Chiropractor. If we can't help you, we will tell you who can."
  helpbox.setAttribute('id','helpbox');
  Container.appendChild(helpbox);
//////////////////////////////////////////////////////////
  const butbox = document.createElement('div');
  butbox.setAttribute('id','butbox');
  Container.appendChild(butbox);

  for(let i=0; i<6; i++){
    const gallary = document.createElement('div');
    gallary.setAttribute('id','gallary');
    butbox.appendChild(gallary);
    const photo = new Image();
    const text = document.createElement('h1');
    if (i==0) {
      photo.src = LowerBack;
      text.innerHTML = "LOWER BACK PAIN"
    } else if (i == 1) {
      photo.src = Athlete;
      text.innerHTML = "ATHLETES"
    } else if (i == 2) {
      photo.src = Shoulder;
      text.innerHTML = "SHOULDER PAIN"
    } else if (i == 3) {
      photo.src = Neck;
      text.innerHTML = "NECK PAIN"
    } else if (i == 4) {
      photo.src = Head;
      text.innerHTML = "HEADACHES"
    } else if (i == 5) {
      photo.src = Pain;
      text.innerHTML = "MUSCLE PAIN"
    }  
    photo.setAttribute("id", "galleryimg")
    text.setAttribute("id", "gallerytxt")
    gallary.appendChild(photo);
    gallary.appendChild(text);
  }
//////////////////////////////////////////////////////////
  const spacebox = document.createElement('div');
  spacebox.setAttribute('id','spacebox');
  Container.appendChild(spacebox);
//////////////////////////////////////////////////////////
  const bottombox = document.createElement('div');
  bottombox.setAttribute('id','bottombox');
  Container.appendChild(bottombox);

  const dtext = document.createElement('div');
  const header = document.createElement('h1');
  header.innerHTML = "WHY US?"
  dtext.append(header);
  const subheader = document.createElement('h2');
  subheader.innerHTML = "We are passionate about transforming your health. We are committed to finding the root cause of your problem, and will design a personalised care plan that is unique to you based on your problem."
  dtext.append(subheader);
  dtext.setAttribute('id','demotext');
  bottombox.appendChild(dtext);

  const demo = document.createElement('div');
  demo.setAttribute('id','demo');
  bottombox.appendChild(demo)
  const mydemo = new Image();
  mydemo.src = Tom;
  mydemo.setAttribute('id','img');
  demo.appendChild(mydemo);
//////////////////////////////////////////////////////////
  const BBar = document.createElement('div');
  BBar.setAttribute('id','BBar');
  Container.appendChild(BBar);

  return Container;
}

document.body.appendChild(component());