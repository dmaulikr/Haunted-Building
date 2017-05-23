#pragma strict

var enemy : GameObject;
var enemyPos : Transform;
var vicinity : boolean;
var created : boolean;

function Update(){ 
	if (Input.GetKey("x") && vicinity == true && created == false) {
		Instantiate(enemy, enemyPos.position, enemyPos.rotation);
		created = true;
	}
}

function OnTriggerEnter2D(other: Collider2D) {
	vicinity = true;
}

function OnTriggerExit2D(other: Collider2D) {
	vicinity = false;
}
