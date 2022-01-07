// import '../../style.css'
// import '../../app.css'

import HeaderItem from "./HeaderItem"

function HeaderItems(props) {

    const {filteredItems} = props

    return (

        <ul className="item-list store--item-list">
            
            {filteredItems.map(item => 

                <HeaderItem 
                    key = {`item-${item.id}`} //important for having each li an ID as KEY PROP
                    item = {item}
                />

            )}
            
        </ul>

    )

}

export default HeaderItems