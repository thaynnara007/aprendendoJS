var Pessoa = function(nome, idade, raca){

	this.nome = nome;
	this.idade = idade;
	this.level = 1;
	this.raca = criaRaca(raca);
	this.xp = 0;
	this.inventario = new Inventario(100);
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
	this.computaXp = function(xpGanho){

		this.xp += xpGanho;

		if (this.xp >= this.raca.mediador){

			this.level += 1
			this.xp -= this.raca.mediador
			this.raca.addMediador();

			this.computaXp(0);
		}
	}
	this.addItem = function(item){

		if (this.inventario.pesoMaximo >= item.peso){

			this.inventario[item.nome] = item;
			this.inventario.peso -= item.peso;
		}
		else{

			console.log("espaco insuficiente");
		}

	}
	this.getItem = function(nome){

		return this.inventario[nome];
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

		case "vampiro":

			return new Vampiro();

		default :

			return null;
	}

}
var Item = function(nome){

	this.nome = nome;

}

var Inventario = function(peso){

	this.pesoMaximo = peso;
}
var ArmaBranca = function(nome){

	Item.call(this, nome);

	this.calculaDano = function(distancia){

		return (this.dano * this.alcance)/distancia
	}
}

var Espada = function(nome){

	ArmaBranca.call(this,nome);
	this.peso = 7;
	this.dano = 30;
	this.alcance = 12;

}

var Machado = function(nome){

	ArmaBranca.call(this, nome);

	this.peso = 13;
	this.dano = 40
	this.alcance = 8;
}


var Raca = function(){

	this.addStr = function(valor){ this.forca += valor};
	this.addDex = function(valor){ this.dextreza += valor};
	this.addInt = function(valor){ this.inteligencia += valor};
	this.addLife = function(valor){ this.hp += valor};
	this.addMediador = function(){this.mediador += (this.mediador * 1/3)}

}
var Humano = function(){

	Raca.call(this);

	this.forca = 8;
	this.dextreza = 11;
	this.inteligencia = 7;
	this.hp = 110;
	this.mediador = 6;
}
Humano.prototype = new Raca();
Humano.prototype.constructor = Humano; 

var Dog = function(){

	Raca.call(this);

	this.forca = 12;
	this.dextreza = 15;
	this.inteligencia = 6;
	this.hp = 90;
	this.mediador = 9;
}
Dog.prototype = new Raca();
Dog.prototype.constructor = Dog; 

var Doce = function(){

	Raca.call(this);

	this.forca = 6;
	this.dextreza = 8;
	this.inteligencia = 15;
	this.hp = 125;
	this.mediador = 9;
}
Doce.prototype = new Raca()
Doce.prototype.constructor = Doce;

var Vampiro = function(){

	Raca.call(this);

	this.forca = 12;
	this.dextreza = 12;
	this.inteligencia = 11;
	this.hp = 145;
	this.mediador = 12;
}
Vampiro.prototype = new Raca()
Vampiro.prototype.constructor = Vampiro;

var finn = new Pessoa("Finn", 16, "humano");
var jake = new Pessoa("jake", 39, "dog" );
var boni = new Pessoa("Bonibbel", 1000, "doce");
var marcy = new Pessoa("Marceline", 1000, "vampiro");

finn.addItem(new Espada("espada grande"));
marcy.addItem(new Machado("baixo da familia"));
var espada = finn.getItem("espada grande");
console.log(finn);
console.log(espada);
console.log(espada.calculaDano(20));

console.log(marcy.getItem("baixo da familia").calculaDano(20));

/*finn.computaXp(20);
jake.computaXp(20);
boni.computaXp(20);
marcy.computaXp(20);

console.log(finn);
console.log(finn.inventario.espada)

console.log(jake);
console.log(boni);
console.log(marcy);  */