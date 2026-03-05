import { useState } from "react"

const Sixthcomponent = () => {
    const [weight, setWeight] = useState(50)

    return(
        <div className="Sixthcomponent">
            <h1>This is the sixth component</h1>
            <h2>The initial weight is; {weight}Kgs</h2>

            <button onClick={()=>setWeight(55)}>Click to update the weight</button>
        </div>
    )
}

export default Sixthcomponent;
