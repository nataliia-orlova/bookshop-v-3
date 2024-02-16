export function addDecimals(num) {
    return (Math.round(num * 100) / 100).toFixed(2);
}

export const updateCart = (state) => {
    //  calculate items price
    state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
    //  calculate items shipping price (if order over 50 - free, else 7)
    state.shippingPrice = addDecimals(state.itemsPrice > 50 ? 0 : 7);
    //  calculate items tax price (15% tax)
    state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));
    //  calculate items total price
    state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);

    localStorage.setItem('cart', JSON.stringify(state));
    return state;
};
