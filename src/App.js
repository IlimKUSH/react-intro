import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";

const App = () => {
  const logo = "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG21.png";
  let init_cars = [
    {
      model: "Model S",
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/026/152/gigachad.jpg",
      id: 1,
    },
    {
      model: "Model Y",
      image: "https://i.imgflip.com/6704ga.jpg",
      id: 2,
    },
    {
      model: "Model X",
      image: "https://electrodrivemoscow.ru/img/b3s1.jpg",
      id: 3,
    },
    {
      model: "Model 3",
      image:
        "https://enormgallery.b-cdn.net/tsportline/65513/matte-military-green-tesla-model-3-performance-20-inch-forged-wheels-m3115-black-wm-1-1611274233-600a17f946521.jpg?width=1024",
      id: 4,
    },
  ];

  const [cars, setCars] = useState(init_cars);

  // ? variables
  // let counter = 0;
  // function increment() {
  //   counter++;
  //   console.log(counter);
  // }
  // function decrement() {
  //   counter--;
  //   console.log(counter);
  // }
  // ! useState
  // const myHook = useState("hello useState!");
  // console.log(myHook);

  // const [state, setState] = useState(0);
  // console.log(state);
  // ! state = "chto-to"  Так нельзя!!
  return (
    <div>
      {/* <button onClick={() => decrement()}>-</button>
      <span>{counter}</span>
      <button onClick={() => increment()}>+</button> */}

      {/* <button onClick={() => setState(state - 1)}>-</button>
      <span>{state}</span>
      <button onClick={() => setState(state + 1)}>+</button> */}

      <Header cars={cars} logo={logo} />
      <List cars={cars} />
      <Footer />
    </div>
  );
};

export default App;
