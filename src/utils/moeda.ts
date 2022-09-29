export default class Moeda {
    static centsToReal = (valor) => {
      let v = (+valor / 100).toFixed(2)
      return `R$ ${v}`
    }
}