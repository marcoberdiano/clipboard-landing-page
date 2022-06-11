import google from '../../../images/logo-google.png';
import ibm from '../../../images/logo-ibm.png';
import microsoft from '../../../images/logo-microsoft.png';
import hp from '../../../images/logo-hp.png';
import vector from '../../../images/logo-vector-graphics.png';

const Company = () => {
    return ( 
        <section className="company-container">
            <div className='companies'>
                <img src={google} alt="google" />
                <img src={ibm} alt="ibm" />
                <img src={microsoft} alt="microsoft" />
                <img src={hp} alt="hp" />
                <img src={vector} alt="vector" />
            </div>
        </section>
     );
}
 
export default Company;