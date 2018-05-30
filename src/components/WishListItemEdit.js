import React, { Component } from 'react';
import { observer } from "mobx-react";

class WishListItemEdit extends Component {
    render() {
        const {item} = this.props

        return(
            <div className="item-edit">

                Thing: <input value={item.name}
                onChange={this.onNameChange} />

                Price: <input value={item.price}
                onChange={this.onPriceChange} />

            </div>
        )

    }

        onNameChange = event => {
            this.props.item.changeName(event.target.value)
        }

        onPriceChange = event => {
            const price = parseInt(event.target.value)

            if(!isNaN(price)) this.props.item.changePrice(price)
        }
        
    }

export default observer(WishListItemEdit);
