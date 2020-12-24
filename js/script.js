let canvas = document.getElementById('snake');
let context = canvas.getContext('2d');
let box = 32;
let snake = [];
//Abaixo esta sendo criado a cobrinha e definindo o tamanho dela
snake[0] = {
	x: 8 * box,
	y: 8 * box

}
let direction = "right";

//Abaixo esta Definindo o tamanho do "campo" que a cobrinha vai percorrer
function criarBG() {
	context.fillStyle = "lightgreen";
	context.fillRect(0 ,0, 16 * box, 16 * box); 
}


//Abaixo criando a função que da cor e que incrementa a cobrinha quando come os blocos
function criarCobrinha() {
	for(i=0; i < snake.length; i++){
		context.fillStyle = "green";
		context.fillRect(snake[i].x, snake[i].y, box, box);
	}
}

//Abaixo esta a função para atualizar e encerrar o game
function iniciarJogo(){
	criarBG(); //exibe o campo
	criarCobrinha(); //exibe a cobrinha

	//criando coordenadas iniciais da cobrinha
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	//criando coordenadas de movimentação
	if(direction == "right") snakeX += box; //adiciona um bloco quando movimenta para direita
	if(direction == "left") snakeX -= box; //remove um bloco quando movimenta para esquerda
	if(direction == "up") snakeY += box; //adiciona um bloco quando movimenta para cima
	if(direction == "down") snakeY -= box; //adiciona um bloco quando movimenta para baixo

	snake.pop(); //remove o ultimo elemento adicionado

	let newHead = {
		x: snakeX,
		y: snakeY
	}

	snake.unshift(newHead); //criando uma nova cabeça para a cobrinha
 }

let jogo = setInterval(iniciarJogo, 100); //Tempo para iniciar o jogo e atulizar

