import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import './imageMagnify.css'
import watch1 from './images/watch1i.jpg'
import watch2 from './images/watch2i.jpg'
import watch3 from './images/watch3i.jpg'
import watch4 from './images/watch4i.jpg'
import watch5 from './images/watch5i.jpg'


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
                    <img src={watch1} onClick={() => (this.setState({src : this.props.image1}))}></img>
                    <img src={watch2} onClick={() => (this.setState({src : this.props.image2}))}></img>
                    <img src={watch3} onClick={() => (this.setState({src : this.props.image3}))}></img>
                    <img src={watch4} onClick={() => (this.setState({src : this.props.image4}))}></img>
                    <img src={watch5} onClick={() => (this.setState({src : this.props.image5}))}></img>
                </div>
            </div>
        );
    }
}

