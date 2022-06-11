import {ReactComponent as BlackList} from '../../../images/icon-blacklist.svg';
import {ReactComponent as Text} from '../../../images/icon-text.svg';
import {ReactComponent as Preview} from '../../../images/icon-preview.svg';

const SuperCharge = () => {
    return ( 
        <section className="supercharge-container">
            <div className='section-head'>
                <h2 className='section-title'>Supercharge your workflow</h2>
                <p>
                    We’ve got the tools to boost your productivity.
                </p>
                <div className="tools-container">
                    <div className="tool">
                        <BlackList/>
                        <h4 className='tool-title'>Create blacklists</h4>
                        <p className='tool-desc'>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                    </div>
                    <div className="tool">
                        <Text/>
                        <h4 className='tool-title' >Plain text snippets</h4>
                        <p className='tool-desc'>Remove unwanted formatting from copied text for a consistent look.</p>
                    </div>
                    <div className="tool">
                        <Preview/>
                        <h4 className='tool-title'>Sneak preview</h4>
                        <p className='tool-desc'>Quick preview of all snippets on your Clipboard for easy access.</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SuperCharge;