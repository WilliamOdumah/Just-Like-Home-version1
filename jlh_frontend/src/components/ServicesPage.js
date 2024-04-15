import React, { Component } from "react";

export default class ServicesPage extends Component {
    render() {
        const bodyStyle = {
            backgroundColor: 'white', // Sets the background of the component to white
        };

        const serviceStyle = {
            border: 'solid black',
            height: '200px',
            marginTop: '20px',
            marginBottom: '60px',
            backgroundColor: 'white', // Sets each service element's background to white
        };

        const logoStyle = {
            height: '80px',
            width: '80px',
            border: 'solid black',
            marginTop: '5px',
            marginLeft: '5px',
            display: 'inline-block',
        };

        const detailsStyle = {
            display: 'inline-block',
            verticalAlign: 'top',
            height: '180px',
            width: '440px',
            border: 'solid black',
            marginTop: '5px',
            marginLeft: '5px',
        };

        const nameStyle = {
            display: 'inline-block',
            verticalAlign: 'top',
            height: '40px',
            width: '200px',
            border: 'solid black',
            marginTop: '5px',
            marginLeft: '5px',
        };

        const introStyle = {
            verticalAlign: 'top',
            height: '120px',
            width: '420px',
            border: 'solid black',
            marginTop: '5px',
            marginLeft: '5px',
        };

        const buttonStyle = {
            verticalAlign: 'middle',
            width: '60px',
            height: '40px',
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: 'white',
        };

        const buttonHoverStyle = {
            borderStyle: 'solid',
            borderColor: 'black',
            transition: 'all 0.1s',
        };

        return (
            <div style={bodyStyle}>
                <h1>Nigerian Services</h1>
                {/* Service 1 */}
                <div style={serviceStyle}>
                    <div style={logoStyle}></div>
                    <div style={detailsStyle}>
                        <div style={nameStyle}></div>
                        <div style={introStyle}></div>
                    </div>
                    <button 
                        style={buttonStyle} 
                        onMouseOver={(e) => e.target.style.border = 'solid black'}
                        onMouseOut={(e) => e.target.style.border = 'none'}
                    >
                        More
                    </button>
                </div>
                {/* Service 2 */}
                <div style={serviceStyle}>
                    <div style={logoStyle}></div>
                    <div style={detailsStyle}>
                        <div style={nameStyle}></div>
                        <div style={introStyle}></div>
                    </div>
                    <button 
                        style={buttonStyle} 
                        onMouseOver={(e) => e.target.style.border = 'solid black'}
                        onMouseOut={(e) => e.target.style.border = 'none'}
                    >
                        More
                    </button>
                </div>
                {/* Service 3 */}
                <div style={serviceStyle}>
                    <div style={logoStyle}></div>
                    <div style={detailsStyle}>
                        <div style={nameStyle}></div>
                        <div style={introStyle}></div>
                    </div>
                    <button 
                        style={buttonStyle} 
                        onMouseOver={(e) => e.target.style.border = 'solid black'}
                        onMouseOut={(e) => e.target.style.border = 'none'}
                    >
                        More
                    </button>
                </div>
                {/* Service 4 */}
                <div style={serviceStyle}>
                    <div style={logoStyle}></div>
                    <div style={detailsStyle}>
                        <div style={nameStyle}></div>
                        <div style={introStyle}></div>
                    </div>
                    <button 
                        style={buttonStyle} 
                        onMouseOver={(e) => e.target.style.border = 'solid black'}
                        onMouseOut={(e) => e.target.style.border = 'none'}
                    >
                        More
                    </button>
                </div>
                {/* Service 5 */}
                <div style={serviceStyle}>
                    <div style={logoStyle}></div>
                    <div style={detailsStyle}>
                        <div style={nameStyle}></div>
                        <div style={introStyle}></div>
                    </div>
                    <button 
                        style={buttonStyle} 
                        onMouseOver={(e) => e.target.style.border = 'solid black'}
                        onMouseOut={(e) => e.target.style.border = 'none'}
                    >
                        More
                    </button>
                </div>
            </div>
        );
    }
}
