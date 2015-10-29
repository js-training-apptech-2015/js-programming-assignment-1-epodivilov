function solution1(travelledKM, totalKM, speed) {
    var result = (totalKM-travelledKM)/speed;
    return Math.ceil(result);
}