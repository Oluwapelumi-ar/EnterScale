const SubHeading = ({title,text}) => {
    return ( 
        <div className="subHeading">
            <div class="title">
                <div>
                <img src="https://res.cloudinary.com/shuks/image/upload/v1621743636/Vector_2_mpqn8e.png" alt=''></img>
                </div>
                <h4>{title}</h4>
        </div>
    <div class="text">
    <h4>{text}</h4>
    </div>
        </div>
    );
}

export default SubHeading;