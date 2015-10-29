function solution2 (startInterval, endInterval) {
    var count = 0, max = 0, neg = 1;
    if (startInterval < 0 || endInterval < 0) {
        neg = -1;
    }

    startInterval = Math.abs(startInterval);
    endInterval = Math.abs(endInterval);


    while(startInterval != 0 || endInterval != 0) {
        count++;
        if ((startInterval & 1) != (endInterval & 1)) {
            max = count;
        }
        startInterval = startInterval >> 1;
        endInterval = endInterval >> 1;
    }

    return ((1 << max) - 1)*neg;
}
