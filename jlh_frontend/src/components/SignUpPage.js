import React, { Component } from "react";

export default class SignUpPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const containerStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh' // Adjust height as needed
        };

        const formContainerStyle = {
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            textAlign: 'center'
        };

        const inputStyle = {
            width: '100%',
            padding: '15px',
            margin: '10px 0',
            display: 'inline-block',
            border: '1px solid #ddd',
            boxSizing: 'border-box'
        };

        const buttonStyle = {
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '14px 20px',
            margin: '8px 0',
            border: 'none',
            cursor: 'pointer',
            width: '100%'
        };

        return (
            <div style={containerStyle}>
                <div style={formContainerStyle}>
                    <h2>Sign Up</h2>
                    <form action="/submit-your-signup-form" method="post">
                        <input type="text" placeholder="Full Name" required style={inputStyle} />
                        <input type="email" placeholder="Email" required style={inputStyle} />
                        <input type="password" placeholder="Password" required style={inputStyle} />
                        <input type="password" placeholder="Confirm Password" required style={inputStyle} />
                        <button type="submit" style={buttonStyle}>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}
