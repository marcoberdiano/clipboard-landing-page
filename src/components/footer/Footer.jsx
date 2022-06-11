import logo from '../../images/logo.svg';
import {ReactComponent as Facebook} from '../../images/icon-facebook.svg';
import {ReactComponent as Twitter} from '../../images/icon-twitter.svg';
import {ReactComponent as Instagram} from '../../images/icon-instagram.svg';
const Footer = () => {
    return ( 
        <section className='footer'>
            <img className='logo' src={logo} alt="logo" />
            <div className='links'>
                <div className='footer-links'>
                    <div>
                        <p className='link'>FAQs</p>
                        <p className='link'>Contact Us</p>
                    </div>
                    <div>
                        <p className='link'>Privacy Policy</p>
                        <p className='link'>Press Kit</p>
                    </div>
                    <div>
                        <p className='link'>Install Guide</p>
                    </div>
                </div>

                <div className='social-links'>
                    <Facebook className='social'/>
                    <Twitter className='social' />
                    <Instagram className='social' />
                </div>

            </div>
            <div class="attribution">
            Challenge by <a  rel="noreferrer" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a rel="noreferrer"  href="https://www.frontendmentor.io/profile/marcoberdiano">Marco</a>.
            </div>
        </section>
     );
}
 
export default Footer;