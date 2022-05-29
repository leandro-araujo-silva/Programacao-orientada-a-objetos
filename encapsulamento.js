class Poligono {
  constructor(altura, largura) {
    this.altura = altura
    this.largura = largura
  }

  get area() {
    return this.#calculateArea()
  }

  #calculateArea() {
    return ` A área do polígono corresponde a ` + this.altura * this.largura
  }
}

// Criando um objeto
let poligono = new Poligono(50, 60)
console.log(poligono)
console.log(poligono.area)
