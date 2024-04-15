import React, {Component} from "react";
import SelectCountryPage from "./SelectCountryPage";
import AfricaPage from "./AfricaPage";
import { BrowserRouter as Router, Routes, Route, Link, Redirect} from "react-router-dom";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import ServicesPage from "./ServicesPage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default class HomePage extends Component{
    constructor(props) {
        super(props);
    }

    renderHomePage(){
        return( 
            <body>
                <nav class="navbar">
                    <div class="navbar__container">
                        <a href="/" id="navbar__logo">
                            <img src="static/images/jlh_logo.png" alt="Just Like Home Logo" id="logo__img"/>
                        </a>                       
                         <div class="navbar__toggle" id="mobile-menu">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                        <div class="navbar__search">
                            <input class="searchbar" type="search" placeholder="Search"/>
                            <button class="search-btn">
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                            </button>
                        </div>
                        <div class="links__container">
                            <ul class="navbar__menu">
                                <li class="navbar__item">
                                    <a href="/" class="navbar__links">Home</a>
                                </li>
                                <li class="navbar__item">
                                    <a href="/services" class="navbar__links">Find Services</a>
                                </li>
                                <li class="navbar__item">
                                    <a href="/" class="navbar__links">Find Products</a>
                                </li>
                                <li class="navbar__btn">
                                    <a href="/signin" target="_blank" class="button">Login</a>
                                </li>
                            </ul>
                        </div>
                        
                    </div> 
                </nav>

                <div class="main">
                    <div class="main__container">
                        <div class="main__content">
                            <h1>JUST LIKE HOME</h1>
                            <p>Find what makes you feel at home.</p>
                            <button class="look-around"><a href="/select">Look Around</a></button>
                        </div>
                        <div class="main_img--container">
                            <a href="/select">Look Around</a>
                                <img src="static/images/earth.jpg" alt="picture" id="main__img"/>
                        </div>      
                    </div>
                </div>
            </body>
        );
    }

    render() {
        return (
          <Router>
            <Routes>
                <Route path="/" element={this.renderHomePage()} />
                <Route path="/select" element={<SelectCountryPage />} />
                <Route path="/africa" element={<AfricaPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/services" element={<ServicesPage />} />
            </Routes>
          </Router>
        );
      }
}
