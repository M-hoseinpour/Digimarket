import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import './imageMagnify.css'


export default class BasicExample extends Component {
    constructor(props){
        super(props)
        this.state = ({
            src: this.props.image1
        })
    }
    
    
    render() {
        return (
            <div className="fluid">
                <div className="fluid__image-container">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: this.state.src,
                        },
                        largeImage: {
                            src: this.state.src,
                            width: 1200,
                            height: 1000,
                        }
                    }} />
                </div>
                <div className='image-box'>
                    <img src={this.props.image1} onClick={() => (this.setState({src : this.props.image1}))}></img>
                    <img src={this.props.image2} onClick={() => (this.setState({src : this.props.image2}))}></img>
                    <img src={this.props.image3} onClick={() => (this.setState({src : this.props.image3}))}></img>
                    <img src={this.props.image4} onClick={() => (this.setState({src : this.props.image4}))}></img>
                    <img src={this.props.image5} onClick={() => (this.setState({src : this.props.image5}))}></img>
                </div>
            </div>
        );
    }
}

