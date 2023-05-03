const {calcularValorTotalProjeto} = require("../../dominio/calculadora/Projeto/valorProjeto")
const moduloPacote = require("../../dominio/calculadora/Projeto/pacote")

jest.mock("./pacote.js") // simulção

describe("valorProjeto", () =>{
    beforeAll(()=>{
        moduloPacote.calcularPacote.mockReturnValue("pacote_basico")
    })

    test("Deve retornar valor total do projeto", () =>{
        
        const funcionalidades =[
            setup,
            formulario,
            responsividade,
            
        ]

        const valorHora = 50;

        const resultado = calcularValorTotalProjeto(funcionalidades,valorHora)

        expect(resultado.toEqual(40))
    })
})
