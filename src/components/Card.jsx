
import "./Card.css"


const Card = ( {imgSrc, title, description} 




) => 
    {
        return (
        <div className="card-container"> 
        <img  className = 'card-image' src = {imgSrc} alt ='https://picsum.photos/id/237/200/300' ></img>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <a href="www.google.com" className="card-btn"> Learn more</a>
    </div>) 

    }

export default Card; 