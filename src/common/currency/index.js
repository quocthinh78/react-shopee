export const currencyFormat = (num, state) => {
    const cur = num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    const currency = cur.slice(0, -3);
    if (state === 1) {
        return currency;
    }
    return currency + "đ";
};