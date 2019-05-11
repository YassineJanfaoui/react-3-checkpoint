import React, { Component } from "react";
import { brotliDecompress } from "zlib";



class Box extends Component {
    render() {
        return (
            <div className="box">
                <p style={this.props.style1}>{this.props.name}</p><br/>
                <p style={this.props.style2}>  {this.props.des}</p><br/>
                <button style={this.props.style3}>Savoir plus</button>
            </div>);
    }
}

export default Box;