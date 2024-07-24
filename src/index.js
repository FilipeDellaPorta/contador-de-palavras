export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return []
        return verificaPalavrasDuplicadas(paragrafo)
    })
    return contagem
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n')
}


function removeCaracteresEspeciais(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') //expressão regular (RegEx) /[.,\/#!$%\^&\*;:{}=\-_`~()]/g
}

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ')
    const resultado = {}
    listaPalavras.forEach((palavra) => {
        if (palavra.length >= 3) {
            const palavraSemCaracteresEspeciais = removeCaracteresEspeciais(palavra)
            resultado[palavraSemCaracteresEspeciais] = (resultado[palavraSemCaracteresEspeciais] || 0) + 1
        }
    })
    return resultado
}

