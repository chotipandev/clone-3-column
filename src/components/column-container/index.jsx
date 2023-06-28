import Logo1 from "../../assets/icon-sedans.svg";
import Logo2 from "../../assets/icon-suvs.svg";
import Logo3 from "../../assets/icon-luxury.svg";

function Cards() {
  return (
    <div className="container">
      <div className="wrap">
        <div className="items">
          <div className="first-box box">
            <div className="image">
              <img src={Logo1} />
            </div>
            <h2>SEDANS</h2>
            <p>
              Choose a sedan forits affordability and excellent Fuel economy.
              Ideal for cruising in the city or on your next road trop.
            </p>
            <button>Learn More</button>
          </div>
          <div className="second-box box">
            <div className="image">
              <img src={Logo2} />
            </div>
            <h2>SUVS</h2>
            <p>
              Take an SUV for its spacious interor, power, and versatility. Perfect
              for your next family vacation and off-rad adventures.
            </p>
            <button>Learn More</button>
          </div>
          <div className="third-box box">
            <div className="image">
              <img src={Logo3} />
            </div>
            <h2>LUXURY</h2>
            <p>
              Cruise in the best car brands without the bloated prices.
              Enjoy the enhanced comfort of a luxury rental and arrive in style.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
