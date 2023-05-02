import './fruit.css'

const Fruit = (props) => {
    return (
        <div className='fruit'>
            <div className="fruit-image">
                <img src={props.data.img} alt="" />
            </div>
            <div className="details">
                <div className="details-top">
                    <h1>{props.data.title}</h1>
                    <button className='button'>Add</button>
                </div>
                <div className="details-bottom">
                    <div className="details-info">
                        <p>UOM</p>
                        <p>{props.data.uom}</p>
                    </div>
                    <div className="details-info">
                        <p>Pack Size</p>
                        <p>{props.data.size}</p>
                    </div>
                    <div className="details-info">
                        <p>Per Unit</p>
                        <p>{props.data.unit}</p>
                    </div>
                    <div className="details-info">
                        <p>Total</p>
                        <p>{props.data.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fruit