function checkProbabilityTheory(count) {
    var even = 0
    var odd = 0
        for (var i = 0; i < count; i++) {
        var rnd = Math.floor(Math.random() * 901) + 100 
         if (rnd % 2 === 0) {
            even++
        } else {
            odd++
        }
    }

    console.log("Кількість згенерованих чисел:", count)
    console.log("Парних чисел:", even)
    console.log("Не парних чисел:", odd)
    console.log("Відсоток парних:", (even / count) * 100)
    console.log("Відсоток не парних:", (odd / count) * 100)
}



var randomCount = Math.floor(Math.random() * 901) + 100
checkProbabilityTheory(randomCount)
