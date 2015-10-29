function maxXOR (startInterval, endInterval) {
    var maxXOR = 0;
    for (var i = startInterval; i < endInterval; i++) {
        for (var j = i; j <= endInterval; j++) {
            var currentXOR = i ^ j;
            if (maxXOR < currentXOR) {
                maxXOR = currentXOR;
            }
        }
    }
    return maxXOR;
}