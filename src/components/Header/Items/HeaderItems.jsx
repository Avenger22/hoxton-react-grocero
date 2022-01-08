import HeaderItem from "./HeaderItem"

function HeaderItems(props) {

    //decounstructing an object
    const {
        filteredItems, setButtonStoreRemove, 
        setButtonStoreClicked, setButtonStoreAdd, buttonStoreRemove
    } = props

    return (

        <ul className="item-list store--item-list">
            
            {filteredItems.map(item => 

                <HeaderItem 
                    key = {`item-${item.id}`} //important for having each li an ID as KEY PROP
                    item = {item}

                    setButtonStoreRemove = {setButtonStoreRemove}
                    setButtonStoreAdd = {setButtonStoreAdd}
                    buttonStoreRemove = {buttonStoreRemove}
                    setButtonStoreClicked = {setButtonStoreClicked}
                />

            )}
            
        </ul>

    )

}

export default HeaderItems