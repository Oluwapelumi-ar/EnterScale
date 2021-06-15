import {useState} from 'react'
import Button from "../../Components/Button";
import Cards from '../../Components/Cards';
import Header from "../../Components/Header";
import SubHeading from "../../Components/Subheading";
import { Formik, Field, Form } from "formik";
import Footer from '../../Components/Footer';
import './Home.css'


const Home = () => {

    const [slider, setslider] = useState(0)

    const handleClick = () => {
        setslider(slider)
        console.log('working')
    }
    return ( 
        <div className='home'>
            <div className="banner">
                <Header></Header>
                <div className="banner-content">
                    <div className="banner-text container">
                    <h1><bold>How do you develop the <br></br>“perfect” product and find <br></br>your “perfect” users?</bold></h1>
                    <p>We can help you plan and execute innovation from <br></br>scratch, build a brand driven by real insights, gain traction<br></br> and achieve sustainable, repeatable growth.</p>
                    <Button
                    btntext='Lets talk growth'></Button>
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="second-section">
                <article class="grow">
                <h5>We've helped grow some of the largest <br></br>startups and enterprises.</h5>
                </article>

                <section >
                    <div className="what-we-do"> 
                        <div class="what-we-do-images">
                            <img src="https://res.cloudinary.com/shuks/image/upload/v1621671229/image_22_aj15na.png" alt=''></img>
                            <img src="https://res.cloudinary.com/shuks/image/upload/v1621671854/1_9_cv1PsqkZDqLjVTf73cmQ-removebg-preview_1_bnovnp.png" alt=''></img>
                            <img src="https://res.cloudinary.com/shuks/image/upload/v1621671898/a48713_3d86fa0196b74642bb82e6418a8fde00-removebg-preview_1_srl4ad.png" alt=''></img>
                            <img src="https://res.cloudinary.com/shuks/image/upload/v1621671931/Screenshot_2021-04-16_at_5.09_2_qrjwh7.png" alt=''></img>
                        </div>
                    </div>
                    <div className="what-we-do container">
                            <SubHeading
                            title='What We Do'
                            text = 'Help you find Market-Product Fit.'></SubHeading>
                            <p>We believe that products - even whole businesses and business models can <br></br>and should be changed until they are primed to generate explosive reactions<br></br> from the first people who experience them.</p>
                    </div>

                    <Cards></Cards>
                </section>
            </div>

            {/* Third Section */}
            <div className='third'>
                <div className="third-section container">
                    <SubHeading
                    title='Are We The Right Partner'
                    text='Typically, we are most effective in any of the following growth stages. '></SubHeading><br></br><br></br><br></br>
                    <div className="stages">
                        <div className="early-stage">
                            <div className="stage-title early">
                                <h4>Early Stage</h4>
                            </div>
                            <p>Early or seed stage with a need to invest in brand development or implement many ideas to onboard new users. </p>
                        </div>
                        <div className="growth-stage">
                            <div className="stage-title growth">
                                <h4>Growth Stage</h4>
                            </div>
                            <p>Series A/B who've just raised and are looking to validate the most scalable acquisition channels and optimise your customer experience.</p>
                        </div>
                        <div className="hyper-growth ">
                            <div className="stage-title hyper">
                                <h4>Hyper-Growth Stage</h4>
                            </div>
                            <p>High-growth enterprise with a proven product looking to fix ineffective business processes or marketing leakages.</p>
                        </div>
                        
                    </div>
                    
                </div>  
            </div>

            {/* Fourth Section */}
            <div className="fourth">
                <div className="fourth-section container">
                    <SubHeading
                    title='Are You Ready For Transformation'>
                    </SubHeading><br></br><br></br>

                    <Formik
                        initialValues={{ name: "", email: "" }}
                        onSubmit={async values => {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        alert(JSON.stringify(values, null, 2));
                        }}
                        >
                        <Form>
                            <label htmlFor="name">Name/Company name</label><br></br><br></br>
                            <input label='Name'name="name" type="text" placeholder='Enter Your name or Company Name' /><br></br><br></br>
                            <label htmlFor="email">Email Address</label><br></br><br></br>
                            <Field name="email" type="email" placeholder='Enter your email address' /><br></br><br></br>
                            <div className="flex">
                                <div className="">
                                    <label >Company Address</label><br></br><br></br>
                                    <input type="text" className='short'/><br></br><br></br>
                                    <div className="form-text">
                                        <p>Seed</p>
                                        <p>Series A or Greater</p>
                                        <p>SME</p><br></br>
                                        <p>Enterprise</p>
                                    </div>
                                </div>
                                <div className="">
                                    <label >Annual Marketing Budget</label><br></br><br></br>
                                    <input type="text" className='short'/><br></br><br></br>
                                    <div className="form-text">
                                        <p>N5M</p>
                                        <p> N5-10M</p>
                                        <p>N10M - N50M</p>
                                        <p>N50M - N100M</p>
                                        <p>100M</p>
                                    </div>
                                </div>
                            </div><br></br><br></br>
                            <Button
                            btntext='I am ready- Submit'></Button>
                        </Form>
                    </Formik>
                </div>
                <div className="contact container">
                    <div className="contact-text">
                        <SubHeading
                                title='Contact Us'
                                text='Do You Want to Create Magic? We Can Help You.'>
                                </SubHeading>
                                <p>We help start-ups, scale-ups, and large corporates in Africa’s most competitive markets make insight-driven decisions and organize their marketing stack, resources, and vision.</p>
                    </div>
                    {/* <div className="contact-image">
                        <img src='https://res.cloudinary.com/shuks/image/upload/v1623625887/countries-dark_opgix9.svg' alt=''></img>
                    </div> */}
                    </div>
                </div>

                <Footer></Footer>
            
        </div>
        
    );
}

export default Home;