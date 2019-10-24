const appRoot = document.getElementById("app")

const app = {
    title: 'Indecision App',
    subTitle: 'Hello from indecision',
    options: []
}

let onFormSubmit = (e) => {
    e.preventDefault()
    // console.log("Form Submitted!")

    let option = e.target.elements.option.value
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
    }
    renderOptions()
}

let onWipeOptions = () => {
    app.options = []
    renderOptions()
}

let onMakeDecision = () => {
    let randomNum = Math.floor(Math.random() * app.options.length)
    let option = app.options[randomNum]
    alert(option)
}

let renderOptions = () => {
    const template = (
        <div>
            
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <h4>{app.options.length > 0 ? "Here are your options" : "No options"}</h4>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={onWipeOptions}>Remove All</button> 
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={Option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Options</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderOptions()






