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
//criando variavel da comida em locais aleatórios
let food = {
	x: Math.floor(Math.random() * 15 + 1) * box,
	y: Math.floor(Math.random() * 15 + 1) * box
}

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

function drawFood(){
	context.fillStyle = "red";
	context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update); //coletando a informação das setas de movimentação do teclado

//abaixo temos as coordenadas de cada seta e sua respectiva direção, também está definido que se foi clicado uma direção ela não pode voltar ao sentido oposto pois só existe uma cabeça
function update (event) {
	if(event.keyCode == 37 && direction != "left") direction = "left";
	if(event.keyCode == 38 && direction != "down") direction = "down";
	if(event.keyCode == 39 && direction != "right") direction = "right";
	if(event.keyCode == 40 && direction != "up") direction = "up";
}
//Abaixo esta a função para atualizar e encerrar o game
function iniciarJogo(){
	//abaixo estamos permitindo que a cobrinha ultrapasse as paredes do campo e apareça do lado oposto
	if(snake[0].x > 15 * box && direction =="right") snake[0].x = 0;
	if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
	if(snake[0].y > 15 * box && direction == "up") snake[0].y = 0;
	if(snake[0].y < 0 && direction =="down") snake[0].y = 16 * box;

	//criando laço que termina o jogo se a cabeça da cobra se chocar com o corpo
	for(i = 1; i < snake.length; i++){
		if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
			clearInterval(jogo);
			alert('Game Over')
		}
	}
	criarBG(); //exibe o campo
	criarCobrinha(); //exibe a cobrinha
	drawFood(); //exibe a comida

	//criando coordenadas iniciais da cobrinha
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	//criando coordenadas de movimentação
	if(direction == "right") snakeX += box; //adiciona um bloco quando movimenta para direita
	if(direction == "left") snakeX -= box; //remove um bloco quando movimenta para esquerda
	if(direction == "up") snakeY += box; //adiciona um bloco quando movimenta para cima
	if(direction == "down") snakeY -= box; //adiciona um bloco quando movimenta para baixo

	//Aumentando o tamanho da cobrinha
	if(snakeX != food.x || snakeY != food.y){
		snake.pop(); //remove o ultimo elemento adicionado
	}else {
		food.x = Math.floor(Math.random() * 15 + 1) * box;
		food.y = Math.floor(Math.random() * 15 + 1) * box;
	}


	let newHead = {
		x: snakeX,
		y: snakeY
	}

	snake.unshift(newHead); //criando uma nova cabeça para a cobrinha
 }

let jogo = setInterval(iniciarJogo, 120); //Tempo para iniciar o jogo e atulizar

