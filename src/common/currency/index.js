export const changCurrency = (n, currency) => {
    const cr = n.toString();
    const crs = cr.slice(0, -3);
    return crs;
};