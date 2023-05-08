import './index.css'

import logo from "./assets/logo.png"; // Import the image file
import menu from "./assets/menu.png"; // Import the image file
import icon1 from "./assets/icon1.png"; // Import the image file
import icon2 from "./assets/icon2.png"; // Import the image file
import icon3 from "./assets/icon3.png"; // Import the image file
import icon4 from "./assets/icon4.png"; // Import the image file

function App() {
  return (
    <div className="App">
      <div id="main">
        <div id="mainInfo">
          <div id="top-img">
            <img src={logo} alt="logo" />

            <img id="menuImg" src={menu} alt="menu" />
          </div>

          <div>
            <h1>Say hello to ReactJS</h1>
            <article>
              <p>
                You will learn how to use the most popular frontend library, and
                become a super Ninja developer.
              </p>
              <button>Awesome!</button>
            </article>
          </div>
        </div>
      </div>

      <div id="bottom">
        <div className="info">
          <img src={icon1} alt="icon1" />
          <article>
            <h2> Declarative</h2>
            <p>React makes it painless to create interactive UIs</p>
          </article>
        </div>

        <div className="info">
          <img src={icon2} alt="icon2" />
          <article>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </article>
        </div>

        <div className="info">
          <img src={icon3} alt="icon3" />
          <article>
            <h2> Single-Way</h2>
            <p>A set of immutable values are passed to the component s.</p>
          </article>
        </div>

        <div className="info">
          <img src={icon4} alt="icon4" />
          <article>
            <h2>JSX</h2>
            <p> Statically-typed, designed to run on modern browsers.</p>
          </article>
        </div>
      </div>
    </div>
  );
}
export default App;
