import computer from '../../../images/image-computer.png';
const Track = () => {
    return ( 
        <section className="track-container">
            <div className='section-head'>
                <h2 className='section-title'>Keep track of your snippets</h2>
                <p>
                    Clipboard instantly stores any item you copy in the cloud, 
                    meaning you can access your snippets immediately on all your 
                    devices. Our Mac and iOS apps will help you organize everything.
                </p>
            </div>
            <div className='grid-track'>
                <div className='grid-item'>
                    <img className='grid-img' src={computer} alt="computer" />
                </div>
                <div className='grid-item itens'>
                    <div className='item'>
                        <h3 className='item-title'>Quick Search</h3>
                        <p className='item-desc'>Easily search your snippets by content, category, web address, application, and more.</p>
                    </div>
                    <div className='item'>
                        <h3 className='item-title'>iCloud Sync</h3>
                        <p className='item-desc'>Instantly saves and syncs snippets across all your devices.</p>
                    </div>
                    <div className='item'>
                        <h3 className='item-title'>Complete History</h3>
                        <p className='item-desc'>Retrieve any snippets from the first moment you started using the app.</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Track;