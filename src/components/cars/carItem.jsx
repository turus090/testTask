import s from "./carItem.module.scss";
import { AddressIcon, HeartIcon, StarIcon } from "../assets/icons";
import Button from "../assets/button/button";

const CarItem = ({
  name,
  gallery,
  price,
  rating,
  reviews,
  location,
  description,
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
            <p className={s.car_right_middle_group_rating}>
              {rating}({reviews.length} Reviews)
            </p>
          </div>
          <div className={s.car_right_middle_group}>
            <AddressIcon />
            <p className={s.car_right_middle_group_location}>{location}</p>
          </div>
        </div>
        <p className={s.car_right_description}>{
           
             description 
            
        }</p>
        <Button text="Show more" />
      </div>
    </li>
  );
};

export default CarItem;
