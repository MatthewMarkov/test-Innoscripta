import Pepperoni from './../images/pepperoni.png'
import Margherita from './../images/pngwing.com (1).png'
import Americana from './../images/pngwing.com (2).png'
import Fattoria from './../images/pngwing.com (3).png'
import Montanara from './../images/pngwing.com (4).png'
import Pugliese from './../images/pngwing.com (5).png'
import Crudo from './../images/pngwing.com (6).png'
import Carbonara from './../images/pngwing.com (7).png'

const initialState = {
    pizzaArray: [
        {
            id: 1,
            name: "Double Pepperoni",
            price: 20,
            img: Pepperoni,
            description: "If you like pepperoni, you’ll love this upgrade of a classic pizza, Not only does the Double Pepperoni boast a generous double helping of smoky pepperoni cooked to perfection, we add extra mozzarella cheese too! One slice and you’ll be in pepperoni heaven."
        },
        {
            id: 2,
            name: "BBQ Chicken Classic",
            price: 28,
            img: Margherita,
            description: "It begins with a tongue tingling combo of our sweet Californian tomato sauce and hot Buffalo sauce. Above that you’ll find crispy Piri Piri chicken poppers along with fresh red peppers and sliced red onion. Lastly, a final flourish of Green Serenade chillies for an extra wave of aromatic heat for that added kick"
        },
        {
            id: 3,
            name: "Americana",
            price: 15,
            img: Americana,
            description: "All the BBQ taste, without the BBQ hassle. Succulent chunks of tasty chargrilled chicken, crispy bacon, slices of sweet onions are lovingly drizzled with smoky BBQ Sauce sweetened with dark molasses for an authentic Southern flavour."
        },
        {
            id: 4,
            name: "Chicken Club",
            price: 24,
            img: Fattoria,
            description: "Our take on an American diner favourite. Chargrilled chicken, stacks of bacon and sliced onions with chunks of freshly diced tomatoes"
        },
        {
            id: 5,
            name: "Spicy Chicken Burger",
            price: 18,
            img: Montanara,
            description: "This meaty feast starts with our Kansas City style BBQ sauce for that real authentic taste. Topped with a generous portion of spicy beef, sliced pepperoni, ham, pork sausage and smoked crispy bacon to create a real depth of flavour."
        },
        {
            id: 6,
            name: "Sausage & Pepperoni",
            price: 22,
            img: Pugliese,
            description: "A special blend of Real Italian cheeses, slices of pepperoni, chunks of sausage plus a sprinkle of Italian style seasoning."
        },
        {
            id: 7,
            name: "The Mexican",
            price: 21,
            img: Crudo,
            description: "Spicy beef, picante jalapenos, colourful red peppers and sliced onions with a sprinkling of hot chilli powder for an extra kick. With all this heat on our 100% fresh dough base, you don’t have to go south of the border for a fiery taste of Mexico!"
        },
        {
            id: 8,
            name: "The Greek",
            price: 16,
            img: Carbonara,
            description: "This Mediterranean inspired combination of crumbled feta cheese, slices of red onion, fresh tomatoes, black olives and melting mozzarella with an oregano sprinkle is guaranteed to bring you a taste of summer sun."
        },
    ],
    addedPizza: [],
    userInfo: {}
}

function copy(aObject) {
    if (!aObject) {
        return aObject;
    }
    let v;
    let bObject = Array.isArray(aObject) ? [] : {};
    for (const k in aObject) {
        v = aObject[k];
        bObject[k] = (typeof v === "object") ? copy(v) : v;
    }
    return bObject;
}


const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_IN_CART':
            if (!state.addedPizza.find(item => item.id === action.pizzaId)) {
                let pizzaArrayCopy = copy(state.pizzaArray)
                let addedPizzaItem = pizzaArrayCopy.find(el => el.id === action.pizzaId)
                let addedPizzaCopy = Object.assign(addedPizzaItem, {quantity: 1})
                return {...state, addedPizza: [...state.addedPizza, addedPizzaCopy]}
            } else {
                let addedPizzaItem = state.addedPizza.find(el => el.id === action.pizzaId)
                addedPizzaItem.quantity = addedPizzaItem.quantity + 1
                return {...state, addedPizza: [...state.addedPizza]}
            }
        case 'DECREASE_QUANTITY':
            let pizzaToDecrease = state.addedPizza.find(el => el.id === action.pizzaId)
            if (pizzaToDecrease.quantity === 1) {
                return {...state, addedPizza: [...state.addedPizza.filter((el) => el.id !== action.pizzaId)]}
            } else {
                let ourPizza = state.addedPizza.find(el => el.id === action.pizzaId)
                ourPizza.quantity = ourPizza.quantity - 1
                return {...state, addedPizza: [...state.addedPizza]}
            }
        case 'INCREASE_QUANTITY':
            let pizzaToIncrease = state.addedPizza.find(el => el.id === action.pizzaId)
            pizzaToIncrease.quantity = pizzaToIncrease.quantity + 1
            return {...state, addedPizza: [...state.addedPizza]}
        case 'REMOVE_PIZZA_FROM_BASKET':
            return {
                ...state,
                addedPizza: [...state.addedPizza.filter((el) => el.id !== action.pizzaId)]
            }
        case 'COLLECT_FORM_DATA':
            debugger
            return {
                ...state,
                userInfo:
                    {
                        name: action.formData.name,
                        surname: action.formData.surname,
                        email: action.formData.email,
                        address: action.formData.address,
                        phone: action.formData.phone
                    }
            }
        case 'GET_RECEIPT':
            return {
                ...state,
                addedPizza: [],
                userInfo: {}
            }
        default:
            return state;
    }
}
export const chosePizza = (pizzaId) => ({
    type: 'ADD_PIZZA_IN_CART', pizzaId
})
export const removePizza = (pizzaId) => ({
    type: 'REMOVE_PIZZA_FROM_BASKET', pizzaId
})
export const increasePizza = (pizzaId) => ({
    type: 'INCREASE_QUANTITY', pizzaId
})
export const decreasePizza = (pizzaId) => ({
    type: 'DECREASE_QUANTITY', pizzaId
})
const collectFormData = (formData) => ({
    type: 'COLLECT_FORM_DATA', formData
})
export const getReceipt = () => ({
    type: 'GET_RECEIPT'
})
export const submitFormData = (formData) => (dispatch) => {
    dispatch(collectFormData(formData))
}


export default pizzaReducer

