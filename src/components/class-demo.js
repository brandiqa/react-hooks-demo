import React from 'react';

export default class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Agata',
      location: 'Nairobi',
      resolution: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name + ' from ' + this.state.location;
    window.addEventListener('resize', this.handleResize);
  }

  componentDidUpdate() {
    document.title = this.state.name + ' from ' + this.state.location;
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    document.title = 'React Hooks Demo';
    window.removeEventListener('resize', this.handleResize);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  handleResize() {
    this.setState({
      resolution: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  }

  render() {
    return (
      <div className="component">
        <h1>Class Demo</h1>
        <form autoComplete="off">
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="field">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              value={this.state.location}
              onChange={this.handleLocationChange}
            />
          </div>
        </form>
        <p className="text-output">
          Hello {this.state.name} from {this.state.location}
        </p>
        <p className="resolution-output">
          {this.state.resolution.width} x {this.state.resolution.height}
        </p>
      </div>
    );
  }
}
