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

document.addEventListener('keydown', update); //coletando a informação das setas de movimentação do teclado

//abaixo temos as coordenadas de cada seta e sua respectiva direção, também está definido que se foi clicado uma direção ela não pode voltar ao sentido oposto pois só existe uma cabeça
function update (event) {
	if(event.keyCode == 37 && direction != "right") direction = "left";
	if(event.keyCode == 38 && direction != "down") direction = "up";
	if(event.keyCode == 39 && direction != "left") direction = "right";
	if(event.keyCode == 40 && direction != "up") direction = "down";
}
//Abaixo esta a função para atualizar e encerrar o game
function iniciarJogo(){
	//abaixo estamos permitindo que a cobrinha ultrapasse as paredes do campo e apareça do lado oposto
	if(snake[0].x > 15 * box && direction =="right") snake[0].x = 0;
	if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
	if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
	if(snake[0].y < 0 && direction =="up") snake[0].y = 16 * box;
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

