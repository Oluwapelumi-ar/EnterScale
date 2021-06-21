import Header from "../../Components/Header";
import SubHeading from "../../Components/Subheading";
import './About.css'

const About = () => {
    return ( 
        <div className="about">
            <div className="about-banner">
                <Header></Header>
                <div className="banner-text container">
                    <SubHeading 
                    title='EnterScale'></SubHeading>
                    
                </div>
            </div>
            
            
        </div>
    );
}

export default About;