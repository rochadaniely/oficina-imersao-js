const modulo = require( '../../dominio/calculadora/Projeto/horasPorProjeto')

describe("Horas por projeto", () => {
    test ("Deve retornar horas totais", ()=>{
        
        const funcionalidades = [
            setup,
            formulario,
            responsividade,
        
        ]

        const resultado = modulo.calcularHorasDeProjetoa(funcionalidades)

        expect(resultado.toEqual(40))
    })
})