export default function About({ full, barClicked }) {
    let aboutStyle = full ? "section section-full about" : "section about";
    let barStyle = full ? "add-side" : "add-side d-none";
    return (
        <>
            <section className={aboutStyle}>
                <div className="section-mainbox">
                    <div className={barStyle} onClick={barClicked}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <h1 className="section-head">About Me</h1>
                    <h2 className="main-head">I'm anonymouse A <span>Web Developer</span></h2>
                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem repellendus illum reprehenderit culpa laborum odit quo debitis sed, labore quaerat neque architecto nihil aspernatur, id facere, delectus distinctio ea. Vitae nihil exercitationem porro est voluptatem sapiente id! Autem cupiditate eius necessitatibus! Minima officia laborum saepe libero cumque facilis impedit?</p>
                    <div className="container-fluid my-5">
                        <div className="row">
                            <div className="col-md-7 personal-details">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p><b>Birthday :</b> <span className="para">15 april 2003</span></p>
                                        <p><b>Website :</b> <span className="para">www.domain.com</span></p>
                                        <p><b>Degree :</b> <span className="para">BSc in CS</span></p>
                                        <p><b>City :</b> <span className="para">Mathura</span></p>
                                    </div>
                                    <div className="col-md-6">
                                        <p><b>Age :</b> <span className="para">21</span></p>
                                        <p><b>Email :</b> <span className="para">Info@gmail.com</span></p>
                                        <p><b>Phone :</b> <span className="para">+91 8474950220</span></p>
                                        <p><b>Freelance :</b> <span className="para">Available</span></p>
                                    </div>
                                    <button className="btn1" style={{width:"fit-content"}}>Download CV</button>
                                    <button className="btn1 ms-4" style={{width:"fit-content"}}>Hire Me</button>
                                </div>
                            </div>
                            <div className="col-md-5 mt-5 mt-md-3">
                                <div className="skills" style={{height:"100%"}}>
                                    <div className="skill">
                                        <p><span><b>HTML</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>CSS</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>Bootstrap</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>JavaScript</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>JQuery</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                    <div className="skill">
                                        <p><span><b>SQL</b></span> <span>95%</span></p>
                                        <div className="skill-bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="main-head">Education</h2>
                                <div className="achieve-box">
                                    <p className="para dot">2013-2015</p>
                                    <div className="sec-head">Master in Computer Science</div>
                                    <p className="para mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illum aliquam? Tenetur perspiciatis velit similique temporibus nemo quia dignissimos magni amet, ad rerum voluptatum ipsam, eligendi saepe? Neque repudiandae veritatis culpa eius in accusantium commodi porro modi eveniet architecto, omnis quod accusamus rerum perspiciatis sint! Cumque, nemo! Nulla, inventore dolores.</p>

                                    <p className="para dot">2013-2015</p>
                                    <div className="sec-head">Master in Computer Science</div>
                                    <p className="para mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illum aliquam? Tenetur perspiciatis velit similique temporibus nemo quia dignissimos magni amet, ad rerum voluptatum ipsam, eligendi saepe? Neque repudiandae veritatis culpa eius in accusantium commodi porro modi eveniet architecto, omnis quod accusamus rerum perspiciatis sint! Cumque, nemo! Nulla, inventore dolores.</p>

                                    <p className="para dot">2013-2015</p>
                                    <div className="sec-head">Master in Computer Science</div>
                                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illum aliquam? Tenetur perspiciatis velit similique temporibus nemo quia dignissimos magni amet, ad rerum voluptatum ipsam, eligendi saepe? Neque repudiandae veritatis culpa eius in accusantium commodi porro modi eveniet architecto, omnis quod accusamus rerum perspiciatis sint! Cumque, nemo! Nulla, inventore dolores.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h2 className="main-head">Experience</h2>
                                <div className="achieve-box">
                                    <p className="para dot">2013-2015</p>
                                    <div className="sec-head">Master in Computer Science</div>
                                    <p className="para mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illum aliquam? Tenetur perspiciatis velit similique temporibus nemo quia dignissimos magni amet, ad rerum voluptatum ipsam, eligendi saepe? Neque repudiandae veritatis culpa eius in accusantium commodi porro modi eveniet architecto, omnis quod accusamus rerum perspiciatis sint! Cumque, nemo! Nulla, inventore dolores.</p>

                                    <p className="para dot">2013-2015</p>
                                    <div className="sec-head">Master in Computer Science</div>
                                    <p className="para mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illum aliquam? Tenetur perspiciatis velit similique temporibus nemo quia dignissimos magni amet, ad rerum voluptatum ipsam, eligendi saepe? Neque repudiandae veritatis culpa eius in accusantium commodi porro modi eveniet architecto, omnis quod accusamus rerum perspiciatis sint! Cumque, nemo! Nulla, inventore dolores.</p>

                                    <p className="para dot">2013-2015</p>
                                    <div className="sec-head">Master in Computer Science</div>
                                    <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, illum aliquam? Tenetur perspiciatis velit similique temporibus nemo quia dignissimos magni amet, ad rerum voluptatum ipsam, eligendi saepe? Neque repudiandae veritatis culpa eius in accusantium commodi porro modi eveniet architecto, omnis quod accusamus rerum perspiciatis sint! Cumque, nemo! Nulla, inventore dolores.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}