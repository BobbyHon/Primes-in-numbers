function primeFactors(n){
    let pFactor = 2
    let counter = 0
    let answer = ''
    while (n != 1){
      while (n % pFactor == 0){
        n = n / pFactor
        counter++
      }
      if (counter > 0) answer += counter > 1 ? `(${pFactor}**${counter})` : `(${pFactor})`
      
      pFactor++
      counter = 0
    }
    return answer
  }