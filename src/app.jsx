import { BrowserRouter } from "react-router-dom";
import s from "./app.module.scss";
import Cars from "./components/cars/cars";
import Header from "./components/header/header";

const App = () => {
  return (
    <BrowserRouter>
      <main className={s.container}>
        <Header />
        <Cars />
      </main>
    </BrowserRouter>
  );
};

export default App;
