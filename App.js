
import './App.css';
import myImage from './piture/access_control biometric.jpg';
import pic from './piture/cables.jpg';
import friday from './piture/cctv installation.jpg';
import sat from './piture/air condition.jpg';
import whatsapp_icon from '../src/piture/whatsapp.gif'
import facebook from '../src/piture/facebook.png'
import twitter from './piture/twitter.png';
import instergram from '../src/piture/intsagram.gif'
function App() {
  return (
  <div>

      <header >
        <h1 >Welcome to CEOS online shopping</h1>
    </header>

    <nav>
        <ul>
            <li><a href="https://google.com">Home</a></li>
            <li><a href="https://facebook.com">Product offering</a></li>
            <li><a href="https://gmail.com">CEOS Profile</a></li>
            <li><a href="https://wa.me/+27763823711">Empowerment</a></li>
            <li><a href="https://x.com">Events</a></li>
            </ul>
    </nav>
    <img  src={pic} alt="not found" /><img src={myImage} alt=" not found" /><img src={friday} alt=" not found" /><img src={sat} alt="not found" />
    <p><b class="highlight">internet cables installation</b>   <b class="highlight">access control</b>    <b class="highlight">cctv installation</b><b class="highlight">air condition installation</b></p>
<main>
        <section>
            <h2><b>About us</b></h2>
   
   <p>CEOS TECHNOLOGIES was established in 1998 by <i>Ann kleynhans</i>  to provide IT solutions to 
   the cooperate Market.The company grew from strength to strength by expanding their
       product range to incorperate leading brand names.In 2000 the company joint venture
            with a black empowered partner</p>
        </section>
        
        <section>
            <h2>Contact Us</h2>
            <p><b>Email: huliragimana@gmail.com</b></p>
             <p><b>call  Us : 0734684898</b></p>

        </section>
    </main>
    <footer>
        <nav> <ul>
            
       </ul></nav><div className="icon-container">
            
            <a href="https://cheery-bavarois-e8e241.netlify.app"><img src={whatsapp_icon} alt="WhatsApp" /></a>
            <a href="https://facebook.com"><img src={facebook} alt="Facebook" /></a>
            <a href="https://gmail.com"><img src={twitter} alt="twitter" /></a>
            <a href="https://wa.me/+27763823711"><img src={instergram} alt="instergram" /></a>
            
            </div>

        <p>&copy; 2024 Sample Website. All rights reserved.</p>
    </footer>
  </div>
  );
}

export default App;
