import Card from "../Card";
import cardData from "../CardData"
export default function Contact({ full, barClicked }) {
    console.log(cardData)
    let contactStyle = full ? "section section-full contact" : "section contact";
    let barStyle = full ? "add-side" : "add-side d-none";
    return (
        <>
            <section className={contactStyle}>
                <div className="section-mainbox pb-5">
                    <div className={barStyle} onClick={barClicked}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <h1 className="section-head">Contact</h1>
                    <div className="text-center">
                        <h2 className="main-head"><span>Have You Any Query</span></h2>
                        <h4 className="detail-head mb-4">I'M AT YOUR SERVICE</h4>
                        <div className="container-fluid my-5">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="card-icon contact-icon mb-3">
                                        <i className="fa-solid fa-phone-flip"></i>
                                    </div>
                                    <h4 className="detail-head mb-1">Call Us On</h4>
                                    <p className="para">+91 8474950220</p>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card-icon contact-icon mb-3">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <h4 className="detail-head mb-1">Call Us On</h4>
                                    <p className="para">+91 6397975052</p>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card-icon contact-icon mb-3">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <h4 className="detail-head mb-1">Call Us On</h4>
                                    <p className="para">+91 8474950220</p>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card-icon contact-icon mb-3">
                                        <i className="fa-solid fa-earth-americas"></i>
                                    </div>
                                    <h4 className="detail-head mb-1">Call Us On</h4>
                                    <p className="para">+91 8474950220</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container fluid">
                            <form className="row g-3 py-4 contact-form">
                                <div className="col-md-6">
                                    <input type="email" className="form-control rounded-4" id="name" placeholder="Name"/>
                                </div>
                                <div className="col-md-6">
                                    <input type="email" className="form-control rounded-4" id="email" placeholder="Email"/>
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control rounded-4" id="inputAddress" placeholder="Subject"/>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control" rows="6" name="message" id="message" placeholder="Message"></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn1">Send Message</button>
                                </div>
                            </form>
                        </div>
                </div>
            </section>
        </>
    )
}