import s from "./button.module.scss";

const Button = ({ text, type }) => {
  return (
    <button
      className={`${s.btn} ${type === "big" ? s.btn_big : s.btn_default}`}
    >
      {text}
    </button>
  );
};

export default Button;
