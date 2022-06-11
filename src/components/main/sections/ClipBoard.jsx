import devices from '../../../images/image-devices.png';

const ClipBoard = () => {
    return ( 
        <section className="clipboard-container">

            <div className='section-head'>
                <h2 className='section-title'>Access Clipboard Anywhere</h2>
                <p>
                    Whether you’re on the go, or at your computer, you can access all your Clipboard 
                    snippets in a few simple clicks.
                </p>
            </div>

            <div className='img-container'>
                <img className='img' src={devices} alt="" />
            </div>

        </section>
     );
}
 
export default ClipBoard;
