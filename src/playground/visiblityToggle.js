class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visiblity: false
        }
        this.toggleVisiblity = this.toggleVisiblity.bind(this)
    }

    toggleVisiblity() {
        this.setState((prevState) => {
            return {
                visiblity: !prevState.visiblity
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.toggleVisiblity}>{this.state.visiblity ? 'Hide' : 'Show'}</button>
                {this.state.visiblity && (<div>
                    <p>Hey there</p>
                </div>)}
            </div>
        )
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'))