import React, {Component} from "react";
import "./CartContainer.css"
import Caption from "./Caption";

class CartContainer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Caption/>
                <div className="cartContainerBody">
                    <ul>
                        <li>Text1</li>
                        <li>Text2</li>
                        <li>Text3</li>
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default CartContainer;