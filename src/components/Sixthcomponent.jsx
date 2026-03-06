import { useState } from "react"

const Sixthcomponent = () => {
    const [weight, setWeight] = useState(50)

    return(
        <div className="Sixthcomponent">
            <h1>This is the sixth component</h1>
            <h2>The initial weight is: {weight}Kgs</h2>

            <button onClick={()=>setWeight(55)}>Click to update the weight</button>
        </div>
    )
}

export default Sixthcomponent;

// ReactJS
    // Created by Meta(company owning both Facebook & Instagram)
    // Used for building user interfaces, specifically Single Page Applications (SPAs) where you want a fast, fluid user experience without constant page reloads.
    // It uses:
        // Component - (Based Architecture) Instead of writing one giant HTML file, you break your UserInterface(UI) into small, reusable pieces.
        // The Virtual DOM - Instead of updating the entire browser page every time something changes, React creates a lightweight copy, figures out exactly what changed, and only updates that specific part.
        // Declarative UI - You describe what you want the UI to look like for a given state, and React handles the "how" of updating the browser.

// Extra research
    // JSX - A syntax extension that looks like HTML but lives inside JavaScript. It makes your code much more readable.

    // Props(properties) - This is how you pass data from a parent component down to a child component.

    // State - Data that lives inside a component and can change over time (like a counter or a form input).

    // Hooks - Special functions (e.g useState and useEffect) that let you use state and other features in functional components.
