var produto1 = {
    nome: "Coca-Cola",
    categoria: "Bebidas",
    quantidade: 30,
    tamanho: ["200ml", "Lata", "600ml", "3l", "ks"],
    descricao: function (){
        // this - referencia o próprio
        console.log(`A ${this.nome} é da categoria ${this.categoria}`);        
    }
}
produto1.descricao()

var produto2 = {
    nome: "Coxinha",
    categoria: "Salgados",
    quantidade: 3,
    tamanho: ["P", "M", "G"],
    descricao: function (){
        console.log(`A ${this.nome} é da categoria ${this.bebidas}`);        
    }
}
produto1.descricao()

// METENDO O LOKO (POR CAUSA DO LUCAS)
var aluno = {
    nome: "Cristiano Ronaldo",
    anoEscolar: "7°",
    turma: "C",
    notas: [6,7,8],
    media: function(){

        let n1 = this.notas[0]
        let n2 = this.notas[1]
        let n3 = this.notas[2]

        return ((n1+n2+n3) / 3)
    }
}