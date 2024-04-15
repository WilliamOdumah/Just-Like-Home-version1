import React, {Component} from "react";

export default class SelectCountryPage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <body>
                <nav class="navbar">
                    <div class="navbar__container">
                        <a href="/" id="navbar__logo"><i class="fas fa-globe"></i> JUST LIKE HOME</a>
                        <div class="navbar__toggle" id="mobile-menu">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                        <ul class="navbar__menu">
                            <li class="navbar__item">
                                <a href="/" class="navbar__links">Home</a>
                            </li>
                            <li class="navbar__item">
                                <a href="/services' %}" class="navbar__links">Services near you</a>
                            </li>
                            <li class="navbar__item">
                                <a href="/" class="navbar__links">Products near you</a>
                            </li>
                            <li class="navbar__btn"><a href="/signin" target="_blank"
                            class="button">Login</a>
                            </li>
                        </ul>
                    </div> 
                </nav>

                <div class="headers">
                    <div>
                        <p class="main-text">
                            What part of the world makes you feel... 
                        </p>
                    </div>
                        
                    <div class="title">
                        <p class="title-text">
                            JUST LIKE HOME
                        </p>
                    </div>
                </div>
                

                <div class="main-block">
                    <div class="main-item">
                        <a class="main-link" href="/africa">
                            <img class="earth" src="static/images/earth.jpg" alt="icon"/>
                        </a>
                    </div>
                    
                </div>
    
            </body>
        );
    }
}