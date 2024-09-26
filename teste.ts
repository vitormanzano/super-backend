import express from 'express';
import  {Router,Request,Response} from 'express';

const app = express();
const route = Router();
const port = 3000;

app.use(express.json());

/*route.get('/',(req:Request,res:Response) => {
    res.json({ message: 'Hello world with typescript' });
});
*/

//Rotas de servicos de backend
/*
    Criação de uma conta de serviço.
    Parâmetros de entrada: Nome, Email, CPF.
    Resposta de saída:
    Código da conta cadastrada
*/

type Conta = {
    nome:string;
    cpf:string;
    email: string;
    senha:string;

}

let contas: Array<Conta> = [];

function cadastrarConta(conta:Conta): number{
    contas.push(conta);
    return contas.length;
    

}

route.put('/signUp', 
    (req:Request, res:Response) =>{
        //Quando usamos req.get queremos obter o parâmetro no header da req
        const pnome = req.get('nome');
        const pcpf = req.get('cpf');
        const pemail = req.get('email');
        const psenha = req.get('senha');

        if(pnome && pcpf && pemail && psenha){
            //proseguir com o cadastro
            const novaConta: Conta = {
                nome:pnome,
                cpf:pcpf,
                email:pemail,
                senha:psenha
            };
            const codConta = cadastrarConta(novaConta);
            res.send(`Nova conta adicionada ${codConta}`);

        }
        else{
            res.send('Faltam parâmetros na requisição')
        }


    });




app.use(route);
app.listen(port,() => console.log(`Server running on port ${port}`));

//Usar o postman para testar o backend  
