const {calcularPacote} = require("../../dominio/calculadora/Projeto/pacote")

describe('Calcula Pacote', () =>{

    test ("Pacote basico de ate 50h", () =>{
        const calcularValorTotalProjeto = 49;
        const resultado = calcularPacote(calcularValorTotalProjeto)
        expect(resultado).toEqual("pacote_basico")
    })

    test ("Pacote basico de  50h", () =>{
        const calcularValorTotalProjeto = 50;
        const resultado = calcularPacote(calcularValorTotalProjeto)
        expect(resultado).toEqual("pacote_basico")
    })

    test ("Pacote basico de ate 51 a 100h", () =>{
        const calcularValorTotalProjeto = 70;
        const resultado = calcularPacote(calcularValorTotalProjeto)
        expect(resultado).toEqual("pacote_intermediario")   
    })

    test ("Pacote basico de 200h", () =>{
        const calcularValorTotalProjeto = 200;
        const resultado = calcularPacote(calcularValorTotalProjeto)
        expect(resultado).toEqual("pacote_premium")
    })
})