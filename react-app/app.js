
function NavBar() {
  return (
    <nav className="level">
      <div className="level-left">
        <div className="level-item">
          <h4 className="title is-4">React App</h4>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <a href="../" className="button is-info">Back</a>
        </div>
      </div>
    </nav>
  );
}

function Message({ message }) {
  return (
    <div>
      { message &&
        <div className="notification is-primary">{message}</div> }
    </div>
  );
}

function MessageInput({ onChange, value }) {
  return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">Message: </label>
      </div>
      <div className="field-body">
        <input className="input" name="message" onChange={onChange} value={value} />
      </div>
    </div>
  );
}

class App extends React.Component {

  state = {
    message: ''
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <NavBar />
          <div class="columns">
            <div class="column is-4">
              <MessageInput onChange={this.handleChange} value={this.state.message} />
              <Message message={this.state.message} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  componentDidMount() {
    console.log('App mount');
  }

}

ReactDOM.render(<App />, document.getElementById('root'));
