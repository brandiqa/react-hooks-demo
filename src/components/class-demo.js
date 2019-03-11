import React from "react";

export default class ClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Agata",
      location: "Nairobi",
      resolution: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = this.state.name + " from " + this.state.location;
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = this.state.name + " from " + this.state.location;
    window.addEventListener("resize", this.handleResize);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleLocationChange(e) {
    this.setState({
      location: e.target.value
    });
  }

  handleResize() {
    this.setState({
      resolution: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  }

  render() {
    return (
      <section>
        <form autocomplete="off">
          <section>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </section>
          <section>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              value={this.state.location}
              onChange={this.handleLocationChange}
            />
          </section>
        </form>
        <p>
          Hello {this.state.name} from {this.state.location}
        </p>
        <h3>
          {this.state.resolution.width} x {this.state.resolution.height}
        </h3>
      </section>
    );
  }
}
