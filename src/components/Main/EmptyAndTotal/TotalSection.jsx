import '../../../style.css'
import '../../../app.css'

import '../EmptyAndTotal/TotalSection.css'

function TotalSection(props) {

    const {calculateTotal} = props 

    return (

        <div className="total-section">

            <div>
                <h3>Total</h3>
            </div>

            <div>
                <span className="total-number">{calculateTotal()}</span>
            </div>

        </div>

    )

}

export default TotalSection