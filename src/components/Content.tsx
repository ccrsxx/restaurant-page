import ramen from '../assets/ramen.png';
import location from '../assets/location.png';

function Home() {
  return (
    <div className='home'>
      <div className='content-container'>
        <div className='content-card'>
          <div className='content-header'>
            <h2>Welcome to The Delicious Ramen!</h2>
          </div>
          <p>
            Ramen is a Japanese noodle soup dish. It consists of Chinese-style
            wheat noodles served in a meat- or (occasionally) fish-based broth,
            often flavored with soy sauce or miso, and uses toppings such as
            sliced pork, dried seaweed, kamaboko, and green onions.
          </p>
        </div>
        <div className='content-card'>
          <div className='content-header'>
            <h2>Operating Hours</h2>
          </div>
          <p>Sunday: 8am - 8pm</p>
          <p>Monday: 6am - 6pm</p>
          <p>Tuesday: 6am - 6pm</p>
          <p>Wednesday: 6am - 6pm</p>
          <p>Thursday: 6am - 10pm</p>
          <p>Friday: 6am - 10pm</p>
          <p>Saturday: 8am - 10pm</p>
        </div>
        <div className='content-card'>
          <div className='content-header'>
            <h2>Location</h2>
          </div>
          <p>123 Avenue, Lugunica Kingdom</p>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className='menu'>
      <div className='menu-header'>
        <h2>Menu</h2>
      </div>
      <div className='menu-container'>
        <div className='menu-card'>
          <img src={ramen} alt='ramen' className='card-img' />
          <h3 className='card-title'>Hot ramen</h3>
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem?
          </p>
        </div>
        <div className='menu-card'>
          <img src={ramen} alt='ramen' className='card-img' />
          <h3 className='card-title'>Hot ramen</h3>
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem?
          </p>
        </div>
        <div className='menu-card'>
          <img src={ramen} alt='ramen' className='card-img' />
          <h3 className='card-title'>Hot ramen</h3>
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem?
          </p>
        </div>
        <div className='menu-card'>
          <img src={ramen} alt='ramen' className='card-img' />
          <h3 className='card-title'>Hot ramen</h3>
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem?
          </p>
        </div>
        <div className='menu-card'>
          <img src={ramen} alt='ramen' className='card-img' />
          <h3 className='card-title'>Hot ramen</h3>
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem?
          </p>
        </div>
        <div className='menu-card'>
          <img src={ramen} alt='ramen' className='card-img' />
          <h3 className='card-title'>Hot ramen</h3>
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem?
          </p>
        </div>
        <div className='menu-card'>
          <img src={ramen} alt='ramen' className='card-img' />
          <h3 className='card-title'>Hot ramen</h3>
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem?
          </p>
        </div>
        <div className='menu-card'>
          <img src={ramen} alt='ramen' className='card-img' />
          <h3 className='card-title'>Hot ramen</h3>
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem?
          </p>
        </div>
        <div className='menu-card'>
          <img src={ramen} alt='ramen' className='card-img' />
          <h3 className='card-title'>Hot ramen</h3>
          <p className='card-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, rem?
          </p>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className='contact'>
      <div className='contact-header'>
        <h2>Contact Us</h2>
      </div>
      <div className='contact-container'>
        <p>📞 123 456 789</p>
        <p>🏠 Hollywood Boulevard 42, Los Angeles, USA</p>
        <img className='location-img' src={location} alt='location' />
      </div>
    </div>
  );
}

interface ContentProps {
  currentPage: string;
  contentKey: number;
}

export function Content({ currentPage, contentKey }: ContentProps) {
  return (
    <main className='main' key={contentKey}>
      <div className='content'>
        {currentPage === 'home' ? (
          <Home />
        ) : currentPage === 'menu' ? (
          <Menu />
        ) : (
          <Contact />
        )}
      </div>
    </main>
  );
}
