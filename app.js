/* Criando uma função construtora com objetos carro com diferentes tempos de 0km/h a 100km/h */

function Veiculo(tipo ,modelo, fabricante, ano, modificacao, aceleracao){
    this.tipo = tipo;
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.ano = ano;
    this.modificacao = modificacao;

    let _aceleracao = aceleracao;
    
    this.getAceleracao = function(){
        return _aceleracao;
    }

    this.setAceleracao = function(valorAceleracao){
        if(typeof valorAceleracao === 'number' && this.modificacao === true){
            console.log('Este veículo possui modificações, portanto altera seu tempo de 0 km/h à 100km/h');
            console.log(`Fez modificações? ${this.modificacao}`);
            _aceleracao = valorAceleracao;
        }else{
            console.log('Este veículo não possui modificações, portanto não altera seu tempo de 0 km/h à 100km/h');
            console.log(`Fez modificações? ${this.modificacao}`);
        }
    }
}

function Carro(modelo, fabricante, ano, modificacao, aceleracao){
    Veiculo.call(this, 'Carro', modelo, fabricante, ano, modificacao, aceleracao);
}

function Moto(modelo, fabricante, ano, modificacao, aceleracao){
    Veiculo.call(this, 'Moto', modelo, fabricante, ano, modificacao, aceleracao);
}

function Aviao(modelo, fabricante, ano, modificacao, aceleracao){
    Veiculo.call(this, 'Aviao', modelo, fabricante, ano, modificacao, aceleracao);
}

const carro1 = new Carro('fiesta', 'ford', 2020, false, 30);
const moto1 = new Moto('CB300', 'Honda', 2009, false, 10);
const aviao1 = new Aviao('Boeing 747', 'Boeing', 1969, false, 2);


function fezModificacao(objeto, modificacao){
    objeto['modificacao'] = modificacao;
}

//mostra que esse não fez modificação e sua aceleração normal
carro1.setAceleracao(20);
console.log(carro1.getAceleracao());

//mostra o mesmo carro depois da modificação e a diferença do tempo da aceleração
fezModificacao(carro1, true);
carro1.setAceleracao(20);
console.log(carro1.getAceleracao());

