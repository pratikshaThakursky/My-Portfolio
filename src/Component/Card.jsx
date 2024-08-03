export default function Card({cardData}) {
    return (
        <>
            <div className="col-md-4">
                <div class="card text-center py-3 pb-2">
                    <div className="card-icon"><i className={cardData.icon}></i></div>
                    <div class="card-body">
                        <h5 class="card-title my-3">{cardData.cardTitle}</h5>
                        <p class="card-text para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi in quibusdam quod quam omnis iste necessitatibus beatae nisi consequuntur saepe?</p>
                    </div>
                </div>
            </div>
        </>
    )
}