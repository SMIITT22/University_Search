import { Component } from "react";
import './card-list.style.css'
import Card from "../card/card.component";

class CardList extends Component {
    render() {
        return (
            <div className="card-list">
                {this.props.newThing.map((uni) => {
                    return <Card uni = {uni}/>
                })}
            </div>
        )
    }
}

export default CardList;