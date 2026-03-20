import './FrontPage.css';
import frontPagePicture from "../../assets/FrontPagePicture.jpg"

export default function FrontPage() {
    return (
      <div className="frontpage-content">
        <h2>Willkommen auf deiner Front Page!</h2>
        <p>
          Hier kann alles Mögliche stehen, es ist die erste Seite
          die ein Besucher deiner Website zu sehen bekommt.
        </p>
        <img src={frontPagePicture}></img>
      </div>
    );
  }
  
