import HeaderItem from "./HeaderItem"

function HeaderItems(props) {

    //decounstructing an object
    const {
        filteredItems, buttonStoreRemove, setButtonStoreRemove, buttonStoreClicked, 
        setButtonStoreClicked, buttonStoreAdd, setButtonStoreAdd
    } = props

    return (

        <ul className="item-list store--item-list">
            
            {filteredItems.map(item => 

                <HeaderItem 
                    key = {`item-${item.id}`} //important for having each li an ID as KEY PROP
                    item = {item}

                    buttonStoreRemove = {buttonStoreRemove}
                    setButtonStoreRemove = {setButtonStoreRemove}

                    buttonStoreAdd = {buttonStoreAdd}
                    setButtonStoreAdd = {setButtonStoreAdd}

                    buttonStoreClicked = {buttonStoreClicked}
                    setButtonStoreClicked = {setButtonStoreClicked}
                />

            )}
            
        </ul>

    )

}

export default HeaderItems