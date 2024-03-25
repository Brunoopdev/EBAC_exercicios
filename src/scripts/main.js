AOS.init();

// cria uma constante para uma data definida no futuro
const dataAniversario = new Date("nov 19, 2024 12:00:00");
// cria uma constante em forma de numeros para a constante dataAniversario
const timeStampAniversario = dataAniversario.getTime();

//cria um intervalo que será repetido de 1 em 1 segundo
const contaAsHoras = setInterval( () =>{
    // cria uma constante sobre o tempo atual
    const agora = new Date();
    // cria uma constante em formato de numero sobre a constante agora
    const timeStamp = agora.getTime();

    // cria uma constante que mostra a diferença sobre a data definita e a data atual
    const distanciaAteAniversario = timeStampAniversario - timeStamp;

    // cria uma constante que calcula o dia, multiplicando segundos minutos horas e dias, criando um dia em milisegundos
    const diaEmMs = 1000 * 60 * 60 * 24;
    // cria uma constatnte que calcula a hora, multiplicando segundos, minutos e horas, criando uma hora em milisegundos
    const horaEmMs = 1000 * 60 * 60;
    // cria uma constatnte que calcula os minutos, multiplicando segundos e minutos, criando um minuto em milisegundos
    const minutoEmMs = 1000 * 60;

    //cria uma constante que com o "floor" puxa para o menor numero, com a distancia dividia por dia em ms, mostra o menor numero em dia
    const diasAteAniversario = Math.floor((distanciaAteAniversario / diaEmMs));
    const horasAteAniversario = Math.floor((distanciaAteAniversario % diaEmMs)/ horaEmMs);
    const minutosAteAniversario = Math.floor((distanciaAteAniversario % horaEmMs) / minutoEmMs);
    const segundosAteAniversario = Math.floor((distanciaAteAniversario % minutoEmMs) / 1000);


    document.getElementById('contador').innerHTML = `${diasAteAniversario}d ${horasAteAniversario}h ${minutosAteAniversario}m ${segundosAteAniversario}s`

        if(distanciaAteAniversario < 0){
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = "Expirado"
        }

}, 1000)  