export const formatNumber = (number: number | string) => {
    return Number(number);
}

export const formatNumberPositive = (number: number | string) => {
    const formattedNumber = formatNumber(number);

    if(formattedNumber < 0) {
        return 0;
    }
    return formattedNumber;
}