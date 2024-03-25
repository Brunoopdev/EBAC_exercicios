AOS.init();

const dataAniversario = new Date("nov 19, 2024 12:00:00");
const timeStampAniversario = dataAniversario.getTime();


const contaAsHoras = setInterval( () =>{
    const agora = new Date();
    const timeStamp = agora.getTime();

    const distanciaAteAniversario = timeStampAniversario - timeStamp;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

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