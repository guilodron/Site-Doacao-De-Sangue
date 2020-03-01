const depoimentos = document.querySelectorAll('.depoimentos .card')
console.log(depoimentos, depoimentos.length)
let atual = 0
depoimentos[0].style.visibility = 'visible'
function slider(num) {
    depoimentos[atual].style.opacity = 0.1
    depoimentos[atual].style.visibility = 'hidden'
    const countSize = depoimentos.length - 1
    if (atual + num > countSize) {
        atual = 0
    } else if (atual + num < 0) {
        atual = countSize
    } else {
        atual += num
    }
    console.log(atual)
    depoimentos[atual].style.visibility = 'visible'
    depoimentos[atual].style.opacity = 1
}