//criar arquivos no nosso projeto

const fs=require("fs");

//criar um arquivode log na versão sincrono

let log = "mensagem de log\n";

//fs.writeFileSync("./logs.log",log);

fs.writeFileSync("./logs.log",log,{flag:"a+"});

//criar arquivo de forma assincrona

fs.writeFile("./logs2.log",log,{flag:"a+"},(erro)=>{
    if(erro){
        console.log(erro)
    }
})

console.log(" fim");

//para excluir arquivos

("./logs2.log");

console.log("Removido arquivo com rmSync");

//para excluir arquio em unlinkSync

fs.unlinkSync("./logs.log");

fs.unlinkSync("./logs2.log");
console.log("Removido arquivo com unlinkSync");