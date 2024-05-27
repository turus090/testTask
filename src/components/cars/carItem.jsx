import s from "./carItem.module.scss";
import { AddressIcon, HeartIcon, StarIcon } from "../assets/icons";
import Button from "../assets/button/button";
import ParamItem from "./paramItem";

const CarItem = ({
  _id,
  name,
  gallery,
  price,
  rating,
  reviews,
  location,
  description,
  adults,
  transmission,
  engine,
  details
}) => {
  return (
    <li className={s.car}>
      <img className={s.car_img} src={gallery[0]} alt={name} />
      <div className={s.car_right}>
        <div className={s.car_right_top}>
          <h2 className={s.car_right_top_name}>{name}</h2>
          <div className={s.car_right_top_group}>
            <h2 className={s.car_right_top_group_price}>€{price}</h2>
            <HeartIcon />
          </div>
        </div>
        <div className={s.car_right_middle}>
          <div className={s.car_right_middle_group}>
            <StarIcon />
            <p className={s.car_right_middle_group_text}>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={s.car_right_middle_group}>
            <AddressIcon />
            <p className={s.car_right_middle_group_text}>{location}</p>
          </div>
        </div>
        <p className={s.car_right_description}>{
             description.length < 72 ? description : description.slice(0,72)+"..."
        }</p>
        <ul className={s.car_right_params}>
          <ParamItem type="users" text={`${adults} adults`} />
          <ParamItem type="transmission" text={transmission}/>
          <ParamItem type="petrol" text={engine}/>
          {details.kitchen !== 0 && <ParamItem type="kitchen" text="Kitchen"/>}
          <ParamItem type="bed" text={`${details.beds} beds`}/>
          {details.airConditioner !== 0 && <ParamItem type="ac" text="AC"/>}
        </ul>
        <Button text="Show more" action="openModal" id={_id} />
      </div>
    </li>
  );
};

export default CarItem;
