import React, {Component} from "react";

export default class AfricaPage extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <body>
                <div class="main-block">
                    <div class="main-item">
                        <a class="main-link" href="/services">
                            <img class="earth" src="static/images/africa_map.png" alt="icon"/>
                        </a>
                    </div>
                    
                </div>
            </body>
        );
    }
}