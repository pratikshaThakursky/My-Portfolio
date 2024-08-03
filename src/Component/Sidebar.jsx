import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({full,setFull,barClicked}) {
    const [hidden,setHidden] = useState(false)
    let sideClass = full?"sidebar side-hidden":'sidebar';
    // sideClass = hidden?" sidebar side-hidden hidden":sideClass;
    const [active,setActive] = useState([
        {   name:"home",
            active:true},
        {   name:"about",
            active:false},
        {   name:"service",
            active:false},
        {   name:"portfolio",
            active:false},
        {   name:"contact",
            active:false}
    ])

    function linkClickHandler(e){
        console.log(e.target.name)
        // setHidden(!hidden)
        setActive(active.map((pages)=>pages.name==e.target.name?{active:true,name:pages.name}:{active:false,name:pages.name}))
        console.log(active)
    }
    return (
        <>
            <div className={sideClass}>
                <div className="logo">
                    <a href="#">Anonymouse</a>
                </div>
                <div className="menu-bars" onClick={barClicked}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <ul className="menu">
                    <li><NavLink name="home" className={active[0].active?"active":''} to="/" onClick={(e)=>linkClickHandler(e)}><i className="fa-solid fa-house"></i>Home</NavLink></li>
                    <li><NavLink name="about" className={active[1].active?"active":''} to="/about" onClick={(e)=>linkClickHandler(e)}><i className="fa-solid fa-user"></i>About</NavLink></li>
                    <li><NavLink name="service" className={active[2].active?"active":''} to="/services" onClick={(e)=>linkClickHandler(e)}><i className="fa-solid fa-list"></i>Services</NavLink></li>
                    <li><NavLink name="portfolio" className={active[3].active?"active":''} to="portfolio" onClick={(e)=>linkClickHandler(e)}><i className="fa-solid fa-briefcase"></i>Portfolio</NavLink></li>
                    <li><NavLink name="contact" className={active[4].active?"active":''} to="/contact" onClick={(e)=>linkClickHandler(e)}><i className="fa-solid fa-comments"></i>Contact Me</NavLink></li>
                </ul>
            </div>
        </>
    )
}