import './cards.css'
function Cards(props) {
    return (
        <div className='wrap'>
            <div className="cardsl">
                <div className="img">
                    <img src={props.image} alt="" />
                </div>
                <div className="name">
                    <h3>{props.name}</h3>
                </div>
            </div>
        </div>
    )
}
export default Cards