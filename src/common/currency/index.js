export const currencyFormat = (num, state) => {
    const cur = num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    const currency = cur.slice(0, -3);
    if (state === 1) {
        return currency;
    }
    return currency + "đ";
};
export const totalFormat = (quantity, total) => {
    const tot = total.slice(0, -1);
    const tota = parseInt(tot);
    return tota * quantity;
}
export const changslug = (name) => {
    const sl = name.split(' ');
    const slug = sl.join("-");
    return slug
}