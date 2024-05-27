import { useDispatch } from "react-redux";
import s from "./button.module.scss";
import { openModal } from "../../../redux/slices/modal";

const Button = ({ text, type, action, id }) => {
  const dispatch = useDispatch()
  const handleClick = () => { 
    if (action === "openModal"){ 
      dispatch(openModal(id))
    }
  }
  return (
    <button
      onClick={handleClick}
      className={`${s.btn} ${type === "big" ? s.btn_big : s.btn_default}`}
    >
      {text}
    </button>
  );
};

export default Button;
