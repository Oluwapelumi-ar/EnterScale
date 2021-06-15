const Button = ({btntext}) => {
    return ( 
        <div class="btns">
            <button class=" btn btn-outline">{btntext}</button>
            <button class=" btn btn-overlay">{btntext}<i class="fas fa-arrow-right"></i></button>
        </div>
    );
}

export default Button;