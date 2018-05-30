import { WishListItem } from './WishList'
import { iteratorToArray } from 'mobx/lib/utils/utils';

it("can create an instance of a model", () => {
    const item = WishListItem.create({
        "name":"Gift 1",
        "price":100,
        "image":"Image Not Available"
    })

    expect(item.price).toBe(100)
})