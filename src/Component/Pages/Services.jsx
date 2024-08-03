import Card from "../Card";
import cardData from "../CardData"
export default function Services({ full, barClicked }) {
    console.log(cardData)
    let servicesStyle = full ? "section section-full services" : "section services";
    let barStyle = full ? "add-side" : "add-side d-none";
    return (
        <>
            <section className={servicesStyle}>
                <div className="section-mainbox pb-5">
                    <div className={barStyle} onClick={barClicked}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <h1 className="section-head">Services</h1>
                    <div className="container-fluid py-4">
                        <div className="row g-4 gx-4">
                            {cardData.map((card)=><Card cardData={card}/>)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}