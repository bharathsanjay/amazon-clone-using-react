export const initialState = {
    basket : [{
        id:"235478",
        title : "cracking the coding interview",
        price : 11.96,
        rating : 5,
        img : "https://images-na.ssl-images-amazon.com/images/I/51l5XzLln+L._SX348_BO1,204,203,200_.jpg"
            
    },
],
    user:null,
};

export const getBasketTotal =(basket)=>
basket?.reduce((amount,item)=>item.price + amount,0);
function reducer (state,action){
    switch (action.type) {
        case 'add_to_basket':
            return {
                ...state,
                basket:[...state.basket,action.item]

            }
            
        case 'remove_from_basket':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)=>basketItem.id === action.id)
            if(index>=0)
            {
                newBasket.splice(index,1);
            }
            return {...state,basket:newBasket}  
        default:
            return state;
    }
}
export default reducer; 