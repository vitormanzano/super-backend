/*
    Servidor simples
    usando o http sem express.
*/
import http from "http";
const PI:number = 3.1415;
const port: number = 3000;

function CalcCompCircunferencia(r:number ): number {

    return 2*PI*r;

}

function calcAreaCirculo(r:number):number {
    return PI*r*r;
}

const server = http.createServer((req, res)=>{

    if(req.url  ===  "/CalcAreaCirculo"){
        const area:number = calcAreaCirculo(10);
        res.writeHead(200,{'Content-type': 'text-plain'});
        res.end(area.toString());

    }
    else if (req.url === "/CalcCompCircunferencia"){
        const comp:number = CalcCompCircunferencia(10)
        res.writeHead(200,{'Content-type': 'text-plain'});
        res.end(comp.toString());

    }
    else {
        res.writeHead(404,{'Content-type': 'text-plain'});
        res.end('Servico inexistente');

    }
});

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
});






