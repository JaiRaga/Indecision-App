class IndecisionApp extends React.Component {
    constructor(props) {
        super(props) 
        
        this.state = {
            options: props.options
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch(e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption(optionToRemove) {
        console.log(optionToRemove)
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => optionToRemove !== option) 
        }))
    }

    handlePick() {
        let randomNum = Math.floor(Math.random() * this.state.options.length)
        let option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption(option) {
        if (!option) {
            return 'Entre valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option)}))
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer'
            
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} 
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} 
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: ['Raga']
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
               onClick={props.handlePick}
               disabled={!props.hasOptions}
            >What should i do?</button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {props.options.map((option) => {
                return (
                    <Option 
                        key={option} 
                        text={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                )
            })}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    )
}


const Option = (props) => {
    return (
        <div>
            <p>{props.text}</p>
            <button onClick={(e) => props.handleDeleteOption(props.text)}>Remove</button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()
        // console.log(e.target.elements.option.value)
        
        let option = e.target.elements.option.value.trim()

        const error = this.props.handleAddOption(option)

        this.setState(() => ({ error }))

        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));