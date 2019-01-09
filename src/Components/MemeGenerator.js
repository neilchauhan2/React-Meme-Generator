import React, { Component } from "react";
import "./MemeGenerator.css";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    const index = parseInt(Math.random() * this.state.allMemeImgs.length);
    this.setState({
      randomImg: this.state.allMemeImgs[index].url
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form className="meme-form">
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                name="topText"
                placeholder="Top Text"
                value={this.state.topText}
                onChange={this.handleChange}
              />
              <input
                type="text"
                className="input"
                name="bottomText"
                placeholder="Bottom Text"
                value={this.state.bottomText}
                onChange={this.handleChange}
              />
              <input
                type="submit"
                value="Generate"
                className="button is-link"
                onClick={this.handleSubmit}
              />
            </div>
          </div>
        </form>
        <div className="meme">
          <figure className="image">
            <img src={this.state.randomImg} className="meme-img" alt="" />
          </figure>
          <h1 className="topText is-size-1 has-text-centered">
            {this.state.topText}
          </h1>
          <h1 className="bottomText is-size-2 has-text-centered">
            {this.state.bottomText}
          </h1>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
