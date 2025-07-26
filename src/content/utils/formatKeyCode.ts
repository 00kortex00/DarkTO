export const formatKeyCode = (keyCode: string) => {
    return (
        keyCode
            .replace('Key', '')
            .replace('Digit', '')
    );
}