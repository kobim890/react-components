import React from "react";
import './RandomColorSquare.css'


class RandomColorSquare extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'black'
        };
    }
    handleClick(){
        function getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    let squareColor = getRandomColor();
        this.setState({
            color:squareColor
        })
    }


    render() {
        return (<div
            className="RandomColorSquare"
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick.bind(this)}
        >
        </div>);

    }
}
export default RandomColorSquare;