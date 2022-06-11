import logo from '../../images/logo.svg'
import Button from './button/Button';
const Hero = () => {
    return ( 
        <div className='hero-container'>
            <img className='logo-img' src={logo} alt="logo" />
            <h1 className='hero-title'>A history of everything you copy</h1>
            <p className='hero-subtitle'>
                Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.
            </p>
            <div className='btn-container'>
                <Button text='Download for iOS' color='hsl(171, 66%, 44%)'/>
                <Button text='Download for Mac' color='hsl(233, 100%, 69%)'/>
            </div>
        </div>
     );
}
 
export default Hero;