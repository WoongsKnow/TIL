function solution(n) {

    var answer = 0, i, str = n.toString();
    console.log(str.length);
    for(i = 0; i < str.length; i++) {
        answer+= parseInt(str.charAt(i), 10);
    }
    return answer;
}

console.log(solution(1233));