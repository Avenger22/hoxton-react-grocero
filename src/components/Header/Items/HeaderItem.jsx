// import '../../style.css'
// import '../../app.css'

function HeaderItem(props) {

    //decounstructing an object
    const {
        item, setButtonStoreRemove, setButtonStoreClicked, setButtonStoreAdd, buttonStoreRemove
    } = props

    //fixed a BUG here used {} before items.map and that is an error cause it expected an expression of jsx not an js return
    //also bug on item => {} because in arrow funcitons we are using just 1 return no multiple expressions etc
    //need to console.log map inside to see if thing return etc for debugging

    return (

        <li>

            <button onClick={function () {
                // let updatedArrayRemove = [... buttonStoreRemove]
                // updatedArrayRemove.push(item.name)
                // setButtonStoreRemove(updatedArrayRemove)
                setButtonStoreRemove(item.name)
            }}>
                X
            </button>

            <div className="store--item-icon">
                <img src={`../../assets/icons/${item.image}`} alt={item.name} />
            </div>

            <span className="stock-span-store">{`Stock: ${item.inStock}`}</span>
            <span className="price-span-store">{`Price: ${item.price}`}</span>
            <span className="name-span-store">{`Name: ${item.name}`}</span>

            <button>Add to cart</button>

        </li>

    )

}

export default HeaderItem