import { useSelector } from "react-redux";
import s from "./filter.module.scss";
import FilterItem from "./filterItem";
import Button from "../assets/button/button";

const Filter = () => {

  const equipmentList = useSelector((state) => state.equipment.list);
  const equipmentActive = useSelector((state) => state.equipment.active);

  const typeList = useSelector(state => state.type.list)
  const typeActive = useSelector(state => state.type.active)
  
  return (
    <div className={s.filter}>
      <div>
        <h2 className={s.filter_subtitle}>Filters</h2>
        <h1 className={s.filter_title}>Vehicle equipment</h1>
        <ul className={s.filter_list}>
          {equipmentList.map((item) => (
            <FilterItem key={item} type="equipment" param={item} isActive={equipmentActive.includes(item)} />
          ))}
        </ul>
      </div>
      <div>
       
        <h1 className={s.filter_title}>Vehicle type</h1>
        <ul className={s.filter_list}>
          {typeList.map((item) => (
            <FilterItem key={item} type="type" param={item} isActive={typeActive.includes(item)} />
          ))}
        </ul>
      </div>
      <Button text="Search" type="big"/>
    </div>
  );
};

export default Filter;
