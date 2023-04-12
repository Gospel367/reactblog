import React, { useState } from "react";
import Header from "./Header.js";
import Section from "./Section.js";
import { Footer } from "./Section.js";
import { Slider } from "./Slider.js";

const user = {
  name: "Ferdinand",
  location: "Abuja Metro",
  phone: "Iphone"
};

const data = [
  {
    author: "Bable Jude",
    title: "The Dying Kicking Horse",
    key: 1,
    id: 1,
    category: "news",
    image: "https://i.imgur.com/Mx7dA2Y.jpg",
    content:
      "Mr Prigozhin also gave his group credit for the offensive on Bakhmut, downplaying the Russian armys role: Within a radius of 50 km, plus or minus, there are only Wagner PMC fighters, he wrote",
    status: "draft"
  },
  {
    author: "Uche  Chanel",
    title: "The Randy Hardcore",
    key: 2,
    id: 2,
    category: "sports",
    image: "https://i.imgur.com/Mx7dA2Y.jpg",
    content:
      "Mr Prigozhin also gave his group credit for the offensive on Bakhmut, downplaying the Russian armys role: Within a radius of 50 km, plus or minus, there are only Wagner PMC fighters, he wrote",
    status: "published"
  },
  {
    author: "Manuel Lado",
    title: "The Judicial Janjaweed",
    key: 3,
    id: 3,
    category: "news",
    image: "https://i.imgur.com/Mx7dA2Y.jpg",
    content:
      "Mr Prigozhin also gave his group credit for the offensive on Bakhmut, downplaying the Russian armys role: Within a radius of 50 km, plus or minus, there are only Wagner PMC fighters, he wrote",
    status: "published"
  },
  {
    author: "Bellinghan Jude",
    title: "The Comatose Hullabee",
    key: 4,
    id: 4,
    category: "finance",
    image: "https://i.imgur.com/Mx7dA2Y.jpg",
    content:
      "Mr Prigozhin also gave his group credit for the offensive on Bakhmut, downplaying the Russian armys role: Within a radius of 50 km, plus or minus, there are only Wagner PMC fighters, he wrote",
    status: "published"
  },
  {
    author: "Canel Uche",
    title: "The Principled man of Valour",
    key: 5,
    id: 5,
    category: "finance",
    image: "https://i.imgur.com/Mx7dA2Y.jpg",
    content:
      "Mr Prigozhin also gave his group credit for the offensive on Bakhmut, downplaying the Russian armys role: Within a radius of 50 km, plus or minus, there are only Wagner PMC fighters, he wrote",
    status: "published"
  },
  {
    author: "Bellinghan Jude",
    title: "The Badgram Hullabee",
    key: 6,
    id: 6,
    category: "sports",
    image: "https://i.imgur.com/Mx7dA2Y.jpg",
    content:
      "Mr Prigozhin also gave his group credit for the offensive on Bakhmut, downplaying the Russian armys role: Within a radius of 50 km, plus or minus, there are only Wagner PMC fighters, he wrote",
    status: "published"
  },
  {
    author: "Canel Uche",
    title: "The Rubbished  Woman of Valour",
    key: 7,
    id: 7,
    category: "news",
    image: "https://i.imgur.com/Mx7dA2Y.jpg",
    content:
      "Mr Prigozhin also gave his group credit for the offensive on Bakhmut, downplaying the Russian armys role: Within a radius of 50 km, plus or minus, there are only Wagner PMC fighters, he wrote",
    status: "draft"
  }
];

function App({ sculptures }) {
  const [sculpturelist, setSculptures] = useState(sculptures);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <div
      className="App"
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh"
      }}
    >
      <body>
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: -10,
            top: -10,
            width: 20,
            height: 20
          }}
        />

        <Header username={user.name} location={user.location} />
        <Section news={data} />

        <Slider data={sculpturelist} />
        <Footer
          color="white"
          background="black"
          textAlign="center"
          padding="2em"
        />
      </body>
    </div>
  );
}

export default App;
