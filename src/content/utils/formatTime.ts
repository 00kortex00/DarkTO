function addZeroPlaceholder(number: number) {
    return (String(number).padStart(2, '0'));
}

export const formatTime = (timeSeconds: number) => {
    const minutes = Math.floor(timeSeconds / 60);
    const seconds = Math.floor(timeSeconds % 60);
    return (`${addZeroPlaceholder(minutes)}:${addZeroPlaceholder(seconds)}`);
}