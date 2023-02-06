import "../css/main.css";
import RenderFooter from "../components/footer";

const img = {
  image0: "assets/icon-arrow-left.svg",
  image1: "assets/image-map.png",
};

function LocationPage() {
  return (
    <div>
      <div className="back-btn-div">
        <div className="back-btn">
          <div className="arrow-left">
            <img src={img.image0} />
          </div>
          <a className="back-a" href="/">
            BACK TO HOME
          </a>
        </div>
        <img className="locationImg" src={img.image1} />
      </div>

      <div className="section-div">
        <div className="h1-div">
          <h1>
            OUR <br />
            LOCATION
          </h1>
        </div>
        <div className="information-div">
          <h2>99 king street</h2>
          <p>
            Newport
            <br />
            RI 02840 <br />
            United States of America
          </p>
          <p>
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>
      <RenderFooter />
    </div>
  );
}

export default LocationPage;
