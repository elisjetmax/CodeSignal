function solution(statues) {
    var sorted = statues.sort((a, b) => a-b);
    var min = Math.min.apply(Math, statues);
    var max = Math.max.apply(Math, statues);
    return max - min - statues.length + 1;
}
