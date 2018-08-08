var Pessoa = function(nome, idade, raca){

	this.nome = nome;
	this.idade = idade;
	this.level = 0;
	this.raca = criaRaca(raca);
	this.addLife = function(valor){
		this.raca.addLife(valor);
	}
	this.addStr = function(valor){
		this.raca.addStr(valor);
	}
	this.addDex = function(valor){
		this.raca.addDex(valor);
	}
	this.addInt = function(valor){
		this.raca.addInt(valor);
	}
}

var criaRaca = function(raca){

	switch (raca.toLowerCase()){

		case "humano":

			return new Humano();
	
		case "dog":

			return new Dog();

		case "doce":

			return new Doce();

		case "Vampiro":

			return new Vampiro();

		default :

			return null;
	}

}

var Raca = function(){

	this.addStr = function(valor){ this.forca += valor};
	this.addDex = function(valor){ this.dextreza += valor};
	this.addInt = function(valor){ this.inteligencia += valor};
	this.addLife = function(valor){ this.hp += valor};
}

var Humano = function(){

	Raca.call(this);

	this.forca = 8;
	this.dextreza = 11;
	this.inteligencia = 7;
	this.hp = 110;
}
Humano.prototype = new Raca();
Humano.prototype.constructor = Humano; 

var Dog = function(){

	Raca.call(this);

	this.forca = 12;
	this.dextreza = 15;
	this.inteligencia = 6;
	this.hp = 90;
}
Dog.prototype = new Raca();
Dog.prototype.constructor = Dog; 

var Doce = function(){

	Raca.call(this);

	this.forca = 6;
	this.dextreza = 8;
	this.inteligencia = 15;
	this.hp = 125;
}
Doce.prototype = new Raca()
Doce.prototype.constructor = Doce;

var Vampiro - function(){

	Raca.call(this);

	this.forca = 12;
	this.dextreza = 12;
	this.inteligencia = 11;
	this.hp = 145;
}
Vampiro.prototype = new Raca()
Vampiro.prototype.constructor = Vampiro;

var finn = new Pessoa("Finn", 16, "humano");
var jake = new Pessoa("jake", 39, "dog" );
var bonibbel = new Pessoa("Bonibbel", 1000, "doce");
var marcy = new Pessoa("Marceline", 1000, "vampiro");

console.log(finn.raca instanceof Raca); // true 
console.log(finn.raca instanceof Humano); // true