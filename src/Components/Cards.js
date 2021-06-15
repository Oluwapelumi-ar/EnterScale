import { useRef } from 'react'

const Cards = () => {

    // const card = [
    //     {logo:'logo', title:'Growth', content: 'Growth Strategy', action:'learn More', id:1 },
    //     {logo:'logo', title:'Growth', content: 'Growth Strategy', action:'learn More', id:2 },
    //     {logo:'logo', title:'Growth', content: 'Growth Strategy', action:'learn More', id:3 },
    //     {logo:'logo', title:'Growth', content: 'Growth Strategy', action:'learn More', id:4 }
    // ]

    const cardRef = useRef(null)

    const handleRigt = () => {
        if (cardRef.current) {
            cardRef.current.scrollBy ({
                left:1500,
                behaviour: 'smooth',
                top:0
            })
        }
    }

    const handleLeft = () => {
        if (cardRef.current) {
            cardRef.current.scrollBy ({
                left:-1500,
                behaviour: 'smooth',
                top:0
            })
        }
    }
    return ( 

        <div className="sliderCards">
        <div className="slider-icons">
                        <img src='https://res.cloudinary.com/shuks/image/upload/v1621747563/Group_46_sbilsx.png' alt='hhhhh'  onClick={handleLeft}$nbsp/>
                        <img src='https://res.cloudinary.com/shuks/image/upload/v1621747628/Group_47_elaohh.png' alt='' onClick={handleRigt} />
                    </div>
            <div class="cards-container " ref={cardRef}>
                <div class="cards">

                    <div class="card">
                        <div class="card-content ">
                            <img src="https://res.cloudinary.com/shuks/image/upload/v1621751282/Group_11073_slidcn.png" alt="" />
                            <h4>Growth Strategy</h4>
                            <p>We embed into your team as an external strategy and activation partner to help you navigate uncharted territory with real market insights and real market experience.</p>
                            {/* <Link><h5>Learn more </h5> <i class="fas fa-arrow-right"></i></Link> */}
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-content ">
                            <img src="https://res.cloudinary.com/shuks/image/upload/v1621751408/Group_11069_mjfrxe.png" alt="" />
                            <h4>Data & Customer Analytics</h4>
                            <p>We have partnered with the world’s leading analytics solutions providers so that you can have access to the best tools to make quick and well-informed business and product decisions.</p>
                            {/* <Link className="learn-more data"><h5>Learn more </h5> <i class="fas fa-arrow-right"></i></Link> */}
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-content">
                            <img src="https://res.cloudinary.com/shuks/image/upload/v1621751492/Group_11072_oqticz.png" alt="creative-marketing-icon" />
                            <h4>Creative Marketing</h4>
                            <p>We offer brand design, communications and management services and tailor your brand voice and personality so it speaks the language of your most valuable audiences.</p>
                            {/* <Link class="learn-more marketing"><h5>Learn more </h5> <i class="fas fa-arrow-right"></i></Link> */}
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-content">
                            <img src="https://res.cloudinary.com/shuks/image/upload/v1621751492/Group_11072_oqticz.png" alt="creative-marketing-icon" />
                            <h4>Creative Marketing</h4>
                            <p>We offer brand design, communications and management services and tailor your brand voice and personality so it speaks the language of your most valuable audiences.</p>
                            {/* <Link class="learn-more marketing"><h5>Learn more </h5> <i class="fas fa-arrow-right"></i></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;