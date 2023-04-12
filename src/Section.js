//import soldier from '../src/soldier.jpg'
import { Slider } from "./Slider.js";

import { useState } from "react";
import BasicModal from "./BasicModal.js";

export default function Section({ news, sculpturelist }) {
  const [news2, setNews] = useState(news);

  const publist = news.filter((pubnews) => pubnews.status === "published");

  const newslist = publist.map((newsitem) => {
    return (
      <div>
        <ul className="newslist">
          <li>
            <h2>{newsitem.title}</h2>
          </li>
          <li>
            <img
              src={newsitem.image}
              alt={newsitem.title}
              width="100%"
              height="50%"
            />
          </li>

          <li>
            <i>
              Category: {newsitem.category} | Author: {newsitem.author}
            </i>
          </li>

          <li>{newsitem.content}</li>
          <li>
            <BasicModal
              content={newsitem.content}
              heading={newsitem.title}
              image={newsitem.image}
            />
          </li>
        </ul>
      </div>
    );
  });

  return (
    <section className="section">
      <h2 className="Title"> Welcome to Lorem Ipsum</h2>
      <div>
        <article>{newslist}</article>
        <aside>
          <ul className="navbarside">
            <li>Home</li>
            <li>Contact us</li>
            <li>Abous us</li>
            <li>Service</li>
            <li>Docs</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export function Footer({ color, background, textAlign, padding }) {
  return (
    <footer style={{ color, background, textAlign, padding }}>
      <p>The end is nearer than we though</p>
    </footer>
  );
}
