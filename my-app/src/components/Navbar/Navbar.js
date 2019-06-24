import React, {Component} from "react";
import "./";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="itemLeft">Click an Image to Begin</li>
                    <li className="itemCenter"></li>
                    <li className="itemRight">Score: {this.props.score}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar; 