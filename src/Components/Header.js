import {React ,useState} from 'react';
import { Link } from 'react-router-dom'


const Header = () => {

    const [drpmenu, setDrpMenu]=useState(false)
    const [icon, setIcon] = useState(false)
    const [background, setBackground]= useState(false)

    const handleClick = () => {
    setDrpMenu(!drpmenu)
    setIcon(!icon)
    console.log('working')
    }

    const changeBackground = () => {
        if (window.scrollY >= 12) {
            setBackground(true);
        }else {
            setBackground(false);
        }
    };

    window.addEventListener('scroll', changeBackground)
    
    return ( 
        <div className={background ? 'header active' : 'header'}>
            <div className='menu'>
                <img className='logo'src='https://res.cloudinary.com/shuks/image/upload/v1621609491/Logo_1_uvmdo5.png' alt='Logo'></img>
                <div className='right-menu'>
                    <ul>
                        <li><img src='https://res.cloudinary.com/shuks/image/upload/v1621609693/Group_3_fxh0m2.png' alt='Light Mode Toggle Button'></img></li>
                        <li><img src='https://res.cloudinary.com/shuks/image/upload/v1621609754/Group_4_ygagz8.png' alt='Dark Mode Toggle Button'></img></li>
                        <li><img src='https://res.cloudinary.com/shuks/image/upload/v1621609893/Menu_1_uqealx.png' alt='Menu Icon'></img></li>
                        <li><p onClick={handleClick}>Menu</p></li>
                    </ul>
                    {icon ? <i className="fas fa-times" onClick={handleClick}></i> : <i className="fas fa-bars " onClick={handleClick}></i>}     

                    { drpmenu ?
                        <nav className="dropdown-menu">
                            <li><Link to='./'>Home</Link></li>
                            <li><Link to='./About'>About</Link></li>
                            <li>Services</li>
                            <li>Freelance For Us</li>
                            <li>Terms and Conditions</li>
                            <li>Contact Us</li>
                        </nav>
                    : ''}
                    
                </div>
            </div>
        </div>
    );
}

export default Header;