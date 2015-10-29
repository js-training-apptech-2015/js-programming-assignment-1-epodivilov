function maxXOR (startInterval, endInterval) {
    var maxXOR = 0;
    for (var i = startInterval; i <= endInterval; i++) {
        for (var j = i; j <= endInterval; j++) {
            if (i != j) {
                var currentXOR;
                if (i === 0) {
                    currentXOR = j;
                } else if (j === 0) {
                    currentXOR = i;
                } else {
                    currentXOR = i ^ j;
                }

                if (maxXOR < currentXOR) {
                    maxXOR = currentXOR;
                }
            }
        }
    }
    return maxXOR;
}

