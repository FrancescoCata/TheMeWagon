// --STYLE
import "./menuInfoCard.css";

export default function (props) {
  return (
    <div className="foodMenuCard">
      <div>
        <img src={props.img} />
      </div>
      <div className="foodMenuCardInfo">
        <div className="flex justify-between">
          <p>{props.dishName}</p>
          <div>
            <p>{props.price}</p>
          </div>
        </div>
        <div className="separator">
          <p>{props.dishDescription}</p>
        </div>
      </div>
    </div>
  );
}
