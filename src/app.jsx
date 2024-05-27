import { BrowserRouter } from "react-router-dom";
import s from "./app.module.scss";
import Cars from "./components/cars/cars";
import Header from "./components/header/header";
import Modal from "./components/modal/modal";
import { useSelector } from "react-redux";

const App = () => {
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <BrowserRouter>
      {isOpen && <Modal />}
      <main className={s.container}>
        <Header />
        <Cars />
      </main>
    </BrowserRouter>
  );
};

export default App;
