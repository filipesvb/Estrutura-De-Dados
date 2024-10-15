export default class Pilha { 
	tamanho; 
	topo = -1; 
	vetor; 
	constructor(tamanho) { 
		this.tamanho = tamanho; 
		this.vetor = new Array(this.tamanho); 
	} 
	mostrarPilha() {
		for(let i = this.topo; i >= 0; i--) {
			console.log(this.vetor[i])
		}
	}
	mostrarTopo() {
		return this.estaVazia() ? "Esta vazia!" : "Topo: " + this.vetor[this.topo];
	}
	empilhar(valor) { 
		if(!this.estaCheia()) { 
			this.topo++; 
			this.vetor[this.topo] = valor; 
		} else { 
			console.log("Esta cheia!"); 
		} 
	} 
	desempilhar() { 
		let desempilhado = 0; 
		if(!this.estaVazia()) { 
			desempilhado = this.vetor[this.topo]; 
			this.topo--; 
		} else { 
			console.log("Esta vazia!"); 
		} return desempilhado; 
	} 
	estaCheia() { 
		if(this.topo >= this.tamanho) { 
			true; 
		} else { 
			false; 
		} 
	} 
	estaVazia() { 
		if(this.topo === -1) { 
			return true; 
		} else { 
			return false; 
		} 
	} 
}
