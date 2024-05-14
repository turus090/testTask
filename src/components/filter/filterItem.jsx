import s from "./filter.module.scss";
import {
  ACIcon,
  KitchenIcon,
  ShowerIcon,
  TVIcon,
  TransIcon,
} from "../assets/equipment";
import { useDispatch } from "react-redux";
import { setActiveEquipment } from "../../redux/slices/equipment";
import { Alcove, FullIcon, VanIcon } from "../assets/vehicle";
import { setActiveType } from "../../redux/slices/type";

const FilterItem = ({ param, isActive, type }) => {
  let Icon = null;
  switch (param) {
    case "AC":
      Icon = ACIcon;
      break;
    case "Automatic":
      Icon = TransIcon;
      break;

    case "Kitchen":
      Icon = KitchenIcon;
      break;
    case "TV":
      Icon = TVIcon;
      break;
    case "Shower/WC":
      Icon = ShowerIcon;
      break;
    case "Van":
      Icon = VanIcon;
      break;
    case "Fully Integrated":
      Icon = FullIcon;
      break;
    case "Alcove":
      Icon = Alcove;
      break;
    default:
      Icon = null;
  }
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch( type === "equipment" ? setActiveEquipment(param) : setActiveType(param));
  };
  return (
    <li
      onClick={handleClick}
      className={`${s.filter_list_item} ${
        isActive && s.filter_list_item_active
      }`}
    >
      <div>
        <Icon />
      </div>
      <p className={s.filter_list_item_text}>{param}</p>
    </li>
  );
};

export default FilterItem;
