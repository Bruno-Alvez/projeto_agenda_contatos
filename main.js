const form = document.getElementById('form-agenda');
const inputNome = document.getElementById('nome-contato');
const inputTel = document.getElementById('número-contato');
const tabelaContatos = document.getElementById('tabela-contatos').querySelector('tbody');
const totalDeContatos = document.querySelector('.numero-de-contatos');
let contarContato = 0

form.addEventListener('submit', function(e) {
e.preventDefault();

const nomeContato = inputNome.value;
const telContato = inputTel.value;

if (nomeContato === '' || telContato === '') {
    alert('[ERRO] Preencha todos os campos!');
    return;
}

addContactToTable(nomeContato, telContato);

form.reset();
});

function addContactToTable(nomeContato, telContato) {
const novaLinha = document.createElement('tr');

const nomeCell = document.createElement('td');
nomeCell.textContent = nomeContato;

const telCell = document.createElement('td');
telCell.textContent = telContato;

novaLinha.appendChild(nomeCell);
novaLinha.appendChild(telCell);

tabelaContatos.appendChild(novaLinha);

contarContato++;
totalDeContatos.textContent = contarContato;  
};
