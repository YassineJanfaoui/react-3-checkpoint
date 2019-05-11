import React, { Component } from "react";
import { brotliDecompress } from "zlib";



class Box2 extends Component {
    render() {
        return (
            <div className="box2">
                <p style={this.props.style1}>{this.props.name}</p>
                <p style={this.props.style2}>{this.props.desc}</p>
            </div>);
    }
}

export default Box2;