import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <label className="slider" htmlFor={this.props.name}>
        {this.props.name}:
        <input
          defaultValue={this.props.default}
          onMouseDown={this.props.handlers[0]}
          onMouseMove={this.props.handlers[1]}
          onMouseUp={this.props.handlers[2]}
          id={this.props.id}
          name={this.props.name}
          type="range"
          min="0"
          max={this.props.max || 100}
          step="1"
        />
      </label>
    );
  }
}

class SliderGroup extends Component {
  render() {
    return (
      <div id="sliders">
        <Slider
          default={this.props.hue}
          handlers={this.props.handlers}
          name="Hue"
          id="hue"
          max="360"
        />
        <Slider
          default={this.props.sat}
          handlers={this.props.handlers}
          name="Saturation"
          id="sat"
        />
        <Slider
          default={this.props.light}
          handlers={this.props.handlers}
          name="Lightness"
          id="light"
        />
      </div>
    );
  }
}

export default SliderGroup;