class Tower {

	constructor(){
		this.disks = [];
		this.x = 0;
		this.y = 0;
	}

	pop(){
		return this.disks.pop();
	}

	push(disk){
		this.disks.push(disk);
	}

	getDisk(index){
		if(index < this.disks.length){
			return this.disks[index];
		}
	}

	size(){
		return this.disks.length;
	}

	copy(){
		var cop = new Tower();
		for(let i = 0; i < this.disks.length; i++){
			cop.push(this.disks[i].copy());
		}
		return cop;
	}

	display(x,y){
		for(let i = this.size() - 1; i >= 0; i--){
			let h = y - (/*i - */(this.size() - 1)) * 15;
			this.getDisk(i).coord(x,h);
			this.getDisk(i).display();
		}
	}

	toString() {
		var ret = "\nTower with: \n";
		for(let i = this.size() - 1; i >= 0; i--){
			let numStar = this.getDisk(i).getRadius();
			let d = "";
			for(let j = 0; j < numStar; j++){
				d += "*";
			}
			ret += d;
			ret += "\n";
		}
		return ret;
	}

}
