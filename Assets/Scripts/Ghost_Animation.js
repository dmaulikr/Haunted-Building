#pragma strict

var anim : Animator;
var dir = 0.0;

function Start () {
    anim = GetComponent("Animator");   	
}

function Update() {

	if (Input.GetKey("d") || Input.GetKey(KeyCode.RightArrow)){
		dir = 1;		 
	}
	else if (Input.GetKey("a") || Input.GetKey(KeyCode.LeftArrow)){
		dir = -1;
		//print("left");
	}
	anim.SetFloat("dir", dir);
}