function solution(inputString) {
    const reverse = inputString.split('').reverse().join('')
    
    if(reverse === inputString) {
        return true
    } else {
        return false
    }
}
