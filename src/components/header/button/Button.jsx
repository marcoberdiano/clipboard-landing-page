const Button = ({text, color}) => {
    const style = {
        'background-color': color
    }
    return ( 
        <button className="btn" style={style}>{text}</button>
     );
}
 
export default Button;
