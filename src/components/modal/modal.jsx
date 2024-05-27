import { useDispatch, useSelector } from "react-redux";
import { AddressIcon, CloseIcon, StarIcon } from "../assets/icons";
import s from "./modal.module.scss";
import { closeModal } from "../../redux/slices/modal";

const Modal = () => {
  const dispatch = useDispatch();
  const { idCar, status } = useSelector((state) => state.modal);
  console.log(idCar, status);
  const car = useSelector((state) =>
    state.cars.list.filter((item) => item._id === idCar)
  );
  const { name, rating, reviews, price, location, gallery, description } =
    car[0];
  const handleClose = () => {
    dispatch(closeModal());
  };
  return (
    <section className={s.container}>
      <div className={s.modal}>
        <div className={s.modal_top}>
          <div className={s.modal_top_left}>
            <h2 className={s.modal_top_left_title}>{name}</h2>
            <div className={s.modal_top_left_groups}>
              <div className={s.modal_top_left_groups_item}>
                <StarIcon />
                <p className={s.modal_top_left_groups_item_text}>
                  {rating}({reviews.length} Reviews)
                </p>
              </div>
              <div className={s.modal_top_left_groups_item}>
                <AddressIcon />
                <p className={s.modal_top_left_groups_item_text}>{location}</p>
              </div>
            </div>
            <h2
              className={`${s.modal_top_left_title} ${s.modal_top_left_title_price}`}
            >
              €{price}
            </h2>
          </div>
          <button onClick={handleClose} className={s.modal_top_right}>
            <CloseIcon />
          </button>
        </div>
        <ul className={s.modal_gallery}>
          {gallery.map((item) => (
            <li className={s.modal_gallery_item}>
              <img className={s.modal_gallery_item_img} src={item} alt={name} />
            </li>
          ))}
        </ul>
        <p className={s.modal_description}>{description}</p>
      </div>
    </section>
  );
};

export default Modal;
