import ValidarCPF from "./modules/validar-cpf.js";

const cpf = document.querySelector("#cpf");
const validarCpf = new ValidarCPF(cpf);

validarCpf.iniciar();
