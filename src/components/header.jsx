import { F } from "./imgs"

export default function RenderHeader() {
    
    return (   
        <div className="header">
        <div className="header-background">
          <div className="black-background">
          <div className="location-btn">
          <a href={"location"} className="location-div">
            OUR LOCATION
          </a>
          <div className="arrow-right">
            <img src={F.arrowRight} />
          </div>
          
          </div>
          <h1 className="header-title">
            MODERN <br /> ART GALLERY
          </h1>
          <p>
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
         </p>
          </div>
          <div>
          <img className="bg-img" src={F.image0} />
          
          
        </div>
        </div>
        </div>
    )
}