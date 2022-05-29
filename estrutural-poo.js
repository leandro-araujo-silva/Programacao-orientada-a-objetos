// Estruturado
let valorHora = 50
let tempoEstimado = 20
let desconto = valorHora * tempoEstimado * (10/100)
let custoEstimado = valorHora * tempoEstimado - desconto
console.log(custoEstimado)

// POO
const job = new Job()
job.valorHora = 50
job.tempoEstimado = 20
job.desconto = 10

const custoEstimado1 = job.calcularEstimativa()
console.log(custoEstimado1)