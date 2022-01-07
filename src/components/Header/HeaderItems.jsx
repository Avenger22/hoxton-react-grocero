// import '../../style.css'
// import '../../app.css'

import HeaderItem from "./HeaderItem"

function HeaderItems(props) {

    const {items} = props

    return (

        <ul className="item-list store--item-list">
            
            <HeaderItem 
                items = {items}
            />
            
        </ul>

    )

}

export default HeaderItems