export const currencyFormat = (num, state, type) => {
    let cur;
    let currency
    if (type === "vnd") {
        cur = num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        currency = cur.slice(0, -3);
        if (state === 1) {
            return currency;
        }
        return currency + "đ";
    }
    if (type === "usd") {
        currency = (parseInt(num) / 23000).toFixed(2);
        return "usd " + currency

    }
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