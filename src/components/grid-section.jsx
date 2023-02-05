import { F } from "./imgs"

export default function RenderGridSection() {
    return (
        <div className="section-1">
        <div className="grid-1">
          <div>
            <p>Your Day at the Gallery</p>
            <p>
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>
          <img src={F.image1} />
        </div>
        <div className="grid-2">
          <img src={F.image2} />
        </div>
        <div className="grid-3">
          <img src={F.image3} />
        </div>
        <div className="grid-4">
          <p>COME & BE INSPIRED</p>
          <p>
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </div>
    )
}