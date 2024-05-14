import s from "./locationInput.module.scss";

const LocationInput = () => {
  return (
    <label className={s.form}>
      <p className={s.form_label}>Location</p>
      <div className={s.form_container}>
        <input className={s.form_input} placeholder="city" />
      </div>
    </label>
  );
};

export default LocationInput;
