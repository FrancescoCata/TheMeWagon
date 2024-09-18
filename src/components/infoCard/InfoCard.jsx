// -- STYLE
import './infoCard.css'

export default function InfoCard(props){
    return(
        <div className="infoCardContainer">
            <div className="infoCardContent">
                <i className={props.icon}></i>
                <h2>{props.infoCardTitle}</h2>
                <p>{props.infoCardText}</p>
            </div>
        </div>
    )
}