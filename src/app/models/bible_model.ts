export class Biblia {
    livros:Livro[]
    tamanho: number = 66
}


export interface Livro {
    abbrev: string,
    chapters: [Capitulo[]],
    name: string,    
}

export interface Capitulo {
    versiculos: Verso[]
}

export interface Verso {
    versiculo: string
}