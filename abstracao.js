class Parafuso {
  constructor() {
    if (this.constructor === Parafuso) {
      throw new Error('Classe abstrata não pode ser instânciada')
    }
  }
  get tipo() {
    throw new Error('Método "get tipo()" precisa ser implementado')
  } 
}

class Fenda extends Parafuso {
  constructor() {
    super()
  }

  get tipo() {
    return 'fenda'
  }
}

class Philips extends Parafuso {
  constructor() { super() }

  get tipo(){
    return 'philips'
  }
}

class Allen extends Parafuso {}

let fenda = new Fenda()
let philips = new Philips() 
let allen = new Allen()

// Obs: Só existe parafuso se ele for do tipo que está sendo criado.