// describe nome da funçao ou classe que estamos testando
//test --> funcao que realiza nosso teste

const modulo = require( '../../dominio/calculadora/Hora/valorHora')
// 1 paremetro O que?
describe ('calcularValorPorHora', () =>{
    //run code
    test( 'Deve retornar dado o salario 1412 retorna 6.42 por hora',  () => {
        const rendaMensal = 1412

    //pula
    const resultado = modulo.calcularValorPorHora( rendaMensal)
    //pula
    expect (resultado).toEqual(9)
    })
})
describe('calcularValorPorHora', () =>{
    test('o que o teste esta testand', () =>{})
})