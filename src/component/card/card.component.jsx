import { Component } from "react";
import "./card.styles.css";
 

class Card extends Component{
    render() {
        return(
        <h1 className="card-container">{this.props.uni.name} <h6><a href={this.props.uni.web_pages}>{this.props.uni.name}</a></h6> <hr/></h1>
        )
    }
}
export default Card;