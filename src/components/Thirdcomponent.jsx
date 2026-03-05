const Thirdcomponent = () => {
    // This is where variables are declared
    // Variables enable us to create dynamic websites.(Contents of the website will be changing overtime)
    // Below we declare some variables.Note: variables are usually declared just before the return statement in Reactjs.
    
    let name = "Collins Paul";
    let age = 19;
    let message = "I love Programming"

    return(
        <div className="Thirdcomponent">
            <h1>Welcome to my third component</h1>
            {/* Below we bind our variables using the variable names that we had declared before */}
            <h5>My name is: {name}</h5>
            <h5>My age is: {age}</h5>
            <h5>And {message}</h5>
        </div>
    )
}

export default Thirdcomponent;