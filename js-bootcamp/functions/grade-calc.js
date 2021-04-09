// student score, total possible score
// 15/20 -> You got a C (75%)!


let gradeCalc = function (score, total) {
    let percent = (score / total) * 100
    let letterGrade = undefined

    if (percent >= 90) {
        letterGrade = 'A'
    } else if (percent >= 80) {
        letterGrade = 'B'
    } else if (percent >= 70) {
        letterGrade = 'C'
    } else if (percent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${percent}%)!`
}

let scoreText = gradeCalc(17, 20)
console.log(scoreText)