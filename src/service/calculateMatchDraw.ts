export const calculateMatchDraw = (squares: []) => {
    const isMatchDraw = squares?.filter(square => square !== null);

    return isMatchDraw?.length === 9 ? true : false;
}