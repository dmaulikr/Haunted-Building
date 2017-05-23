#pragma strict
var Timer = 5;
function Start () {
	
}

function Update () {
	if(Timer == 0){
	Destroy(this);
	}
	else Timer--;
}

function OnCollisionEnter2D(coll: Collision2D) {
	//If colliding with Boulder
	if(coll.gameObject.tag == "Player"){
	Application.LoadLevel("Boulder Level");

	}
	}

