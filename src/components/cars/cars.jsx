import { useSelector } from "react-redux";
import s from "./cars.module.scss";
import CarItem from "./carItem";
const Cars = () => {
  const { list } = useSelector((state) => state.cars);
  return (
    <section className={s.cars}>
      <ul className={s.cars_list}>
        {list.map((item) => (
          <CarItem {...item} />
        ))}
      </ul>
    </section>
  );
};

export default Cars;
