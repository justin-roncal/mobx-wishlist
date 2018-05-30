import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { getSnapshot } from 'mobx-state-tree'

import {WishList} from './models/WishList'
import {Group} from './models/Groups'

let initialState = {
    users : {
        "1" : {
            id: "1",
            name:"User 1",
            gender:"m"
        },
        "2" : {
            id: "2",
            name:"User 3",
            gender:"f"
        },
        "3"  : {
            id: "3",
            name:"User 3",
            gender:"f"
        },
    }
}


let wishList = WishList.create(initialState)

function renderApp() {
    ReactDOM.render(<App />, 
        document.getElementById('root'));
}

renderApp()

if (module.hot) {
    module.hot.accept(["./components/App"], () => {
        renderApp()
    })

    module.hot.accept(["./components/App"], () => {

        const snapshot = getSnapshot(wishList)
        wishList = wishList.create(snapshot)

    })
}