import Button from '../../header/button/Button';
const Download = () => {
    return ( 
        <section className="download-container">
            <div className='section-head'>
                <h2 className='section-title'>Clipboard for iOS and Mac OS</h2>
                <p>
                    Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
                    and you’re ready to start adding to your clipboard.
                </p>
                <div className='btn-container'>
                    <Button text='Download for iOS' color='hsl(171, 66%, 44%)'/>
                    <Button text='Download for Mac' color='hsl(233, 100%, 69%)'/>
                </div>
            </div>
        </section>
     );
}
 
export default Download;