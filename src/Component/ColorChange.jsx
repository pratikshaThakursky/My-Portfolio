import { useState } from "react"

export default function ColorChange() {
    let [setting, setsetting] = useState(false)
    let [dark, setDark] = useState(true);
    function handleSetting() {
        setsetting(!setting)
    }
    function ColorChange(e) {
        console.log(e.target.attributes[1].value)
        let colors = e.target.attributes[1].value;
        document.documentElement.style.setProperty("--theme-color", `${colors}`)
        setsetting(false)
        // console.log(document.querySelector(".color-btn").classList.add)
    }
    function themeClick() {
        setDark(!dark)
        document.querySelector("body").classList.toggle("dark");
        console.log(document.querySelector("body"))
    }
    let newclass = setting ? 'colorChange color-show ' : 'colorChange'
    let darkClass = dark ? "fa-solid fa-sun" : "fa-solid fa-moon"
    return (
        <>
            <div className={newclass}>
                <div className="color-btn">
                    {/* <i class="fa-solid fa-moon"></i> */}
                    <i className="fa-solid fa-gear" title="Change Theme" onClick={handleSetting}></i>
                    <i className={darkClass} title="Switch Mode" onClick={themeClick}></i>
                </div>
                <div className="color-box">
                    <h4 className="detail-head m-0 p-0 mb-2 text-center">Change Theme</h4>
                    <div className="colors">
                        <div className="color crimson" onClick={(e) => ColorChange(e)} name="crimson"></div>
                        <div className="color aqua" onClick={(e) => ColorChange(e)} name="aqua"></div>
                        <div className="color greenyellow" onClick={(e) => ColorChange(e)} name="greenyellow"></div>
                        <div className="color hotpink" onClick={(e) => ColorChange(e)} name="hotpink"></div>
                        <div className="color orange" onClick={(e) => ColorChange(e)} name="orange"></div>
                        <div className="color lightseagreen" onClick={(e) => ColorChange(e)} name="lightseagreen"></div>
                        <div className="color salmon" onClick={(e) => ColorChange(e)} name="salmon"></div>
                        <div className="color yellow" onClick={(e) => ColorChange(e)} name="yellow"></div>
                    </div>
                </div>
            </div>
        </>
    )
}