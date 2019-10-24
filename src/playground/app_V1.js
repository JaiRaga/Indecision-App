class IndecisionApp extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    render() {
        const title = 'Indecision',
              subtitle = 'Put your life in the hands of a computer'
            
        return (
            <div>
                <Header title={title}  subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} 
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions} 
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <button 
                   onClick={this.props.handlePick}
                   disabled={!this.props.hasOptions}
                >What should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    
    render() {
        // console.log(this.props.options.length)
        console.log(this.props)
        return (
            <div>
                {this.props.options.map((option) => {
                    return <Option key={option} text={option} />
                })}
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                <p>{this.props.text}</p>
            </div>
        )
    }
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

        this.setState(() => {
            return { error }
        })

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

const User = (props) => {
    {console.log(props)}
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>age: {props.age}</p>
        </div>
    )
}

ReactDOM.render(<User name='Raga' age={25} />, document.getElementById('app'));