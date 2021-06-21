import { Link } from 'react-router-dom'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-content container">
                <div className="footer-logo">
                    <img src='https://res.cloudinary.com/shuks/image/upload/v1621609491/Logo_1_uvmdo5.png' alt='logo'></img><br></br><br></br>
                    <p><span className='enterscale'>EnterScale 2021</span></p><br></br>
                    <p>Terms and Condition | Contact Us</p>
                </div>
                <div className="footer-nav">
                    <div className="services">
                        <ul>
                            <li><b>Services</b></li>
                            <li><Link>Growth Strategy</Link></li>
                            <li><Link>Data and Customer Analysis</Link></li>
                            <li><Link>Creative Marketinhg</Link></li>
                            <li><Link>Web and Mobile Development</Link></li>
                        </ul>
                    </div>
                    <div className="services">
                        <ul>
                            <li><b>Company</b></li>
                            <li><Link>About Us</Link></li>
                            <li><Link>Our Team</Link></li>
                            <li><Link>Our Core Values</Link></li>
                        </ul>
                    </div>
                    <div className="services">
                        <ul>
                            <li><b>Contact</b></li>
                            <li><Link>info@enhterscale.com</Link></li>
                            <li>Data and Customer Analysis</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='container'></hr>
            <div className="social container">
                <a href='https://www.linkedin.com/company/enterscale/'><img src='https://res.cloudinary.com/shuks/image/upload/v1623750364/linkedin_1_ihgyam.png' alt='LinkedIn'></img></a>
                <a href='#'><img src='https://res.cloudinary.com/shuks/image/upload/v1623750342/instagram_copy_2_1_dgoh2m.png' alt='Instagram'></img></a>
                <a href='#'><img src='https://res.cloudinary.com/shuks/image/upload/v1623750357/twitter_copy_2_1_ae8fma.png' alt='Twitter'></img></a>
                <a href='https://www.facebook.com/enterscale'><img src='https://res.cloudinary.com/shuks/image/upload/v1623750335/facebook_copy_1_cnd2kw.png' alt='Facebook'></img></a>
            </div>
        </div>
    );
}

export default Footer