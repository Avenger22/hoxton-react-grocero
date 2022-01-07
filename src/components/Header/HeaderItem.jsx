// import '../../style.css'
// import '../../app.css'

function HeaderItem(props) {

    const {items} = props

    // console.log(items)

    return (

        items.map(item => {

            <li>

                <div className="store--item-icon">
                    <img src={`../../assets/icons/${item.image}`} alt={item.name} />
                </div>
    
                <button>Add to cart</button>

            </li>

        })

    )

}

export default HeaderItem