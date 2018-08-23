import React from 'react';

import Box from './Box';

const num_boxes = 60;

class Boxy extends React.Component {
    constructor(props){
        super(props);
        const boxes = Array(num_boxes).fill().map(this.getRandomColor, this);
        this.state = {
            boxes,
            height:0,
            width:0,
            boxHeight: 0,
        };
    }

    getRandomColor() {
        let colorIndex = Math.floor(Math.random()* this.props.allColors.length);
        return this.props.allColors[colorIndex];
    }

    componentDidMount() {
        const height = this.divElement.clientHeight;
        const width = this.divElement.clientWidth;
        const boxHeight = height / 5;
        this.setState({ height, width, boxHeight });
        this.intervalID = setInterval(() => {
            const boxes = this.state.boxes.slice();
            const randIdx = Math.floor(Math.random() * boxes.length);
            boxes[randIdx] = this.getRandomColor();
            this.setState({boxes});
        }, 300);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        const boxes = this.state.boxes.map((color, idx) => (
            <Box 
                key={idx}
                color={color}
                height={this.state.boxHeight}
            />
        ));

        return(
            <div ref={(divElement) => this.divElement=divElement } className="boxy__container">
                {boxes}
            </div>
        );
    }
}

Boxy.defaultProps = {
    allColors: [
        '#119bc9', '#0ec1fd', '#1bcbeb', '#179bb3',
        '#2f89f0', '#2266b4', '#5755c2', '#5f5e9e',
        '#35348f', '#82469e', '#7921a1', '#a12d98'
    ]
}

export default Boxy