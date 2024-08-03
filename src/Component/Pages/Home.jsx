import heroImg from "../../assets/develope.jpg"
import { ReactTyped } from "react-typed";
export default function Home({ full, barClicked }) {
    let homeStyle = full ? "section section-full home" : "section home";
    let barStyle = full ? "add-side" : "add-side  d-none";

    return (
        <>
        <section className={homeStyle}>
            <div className="main-box">
                <div className={barStyle} onClick={barClicked}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="main-content">
                    <h1 className="main-head">Hello, my name is <span className="clicker">Anonymouse Person</span></h1>
                    <h1 className="main-head">I'm a <ReactTyped strings={["Web Designer","web Developer","Graphic Designer","YouTuber"]} typeSpeed={80} backSpeed={40} loop/></h1>
                    <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quia aperiam nisi cumque incidunt consequuntur sapiente asperiores. Voluptatum, molestias exercitationem?</p>
                    <button className="btn1">More About Me</button>
                </div>
                <div className="hero-img">
                    <img src={heroImg} alt="img" />
                </div>
            </div>
        </section>
        </>
    )
}