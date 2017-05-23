#pragma strict

var anim : Animator;
var moveSpeed = 0.015;
var lastDir = 0.0;
var idle = true;
var moving = 0.0;
var key = 0;
var vicinity= false;
var exit = false;
var scene: String;


function Start() {
	anim = GetComponent("Animator");
	key = 0;
	exit = false;
	//inventory.key = 0
}

//Collision Detector
function OnCollisionEnter2D(coll: Collision2D) {
	//If colliding with key
	if(coll.gameObject.tag == "Key") vicinity = true;
	if(coll.gameObject.tag == "Boulder"){
	Application.LoadLevel("Boulder Level");
	}

	//If colliding with door
	else if(coll.gameObject.tag == "Door"){ 
		exit = true;
	}

}

//Colliders leaving vicinity
function OnCollisionExit2D(coll:Collision2D) {
	
	if(coll.gameObject.tag == "Key") vicinity= false;
	if(coll.gameObject.tag == "Door") exit = false;
	}

//Movement, player interaction based on physics
function FixedUpdate () {

	//anim.SetFloat("horiz", Input.GetAxis("Horizontal"));
	//anim.SetFloat("vert", Input.GetAxis("Vertical"));

	//Movement Variables
	if (Input.GetAxis("Vertical") != 0 || Input.GetAxis("Horizontal") != 0) {
		moving = 1.0;
	}
	else {
		moving = 0.0;
	}
	anim.SetFloat("moving", moving);
	anim.SetFloat("dir", lastDir);
	//idle = true;

	//Interaction Key
    if (Input.GetKey("x") ) {
		if(vicinity)
		{ 
		  key = 1;
		  Destroy(GameObject.FindWithTag("Key"));
		  vicinity = false;
		  Debug.Log("Picked up item");
		}
		else if(exit && key){
			Destroy(GameObject.FindWithTag("Door"));
			Debug.Log("NEXT LEVEL");
			Application.LoadLevel(scene);
		}

    }

    //Movement keys
    if (Input.GetKey("w") || Input.GetKey(KeyCode.UpArrow)) {
        transform.Translate(Vector2(0, moveSpeed));
        lastDir = 0.0;
        idle = false;
    }
    if (Input.GetKey("s") || Input.GetKey(KeyCode.DownArrow)){
        transform.Translate(Vector2(0, -moveSpeed));
        lastDir = 1.0;
        idle = false;
    }
    if (Input.GetKey("a") || Input.GetKey(KeyCode.LeftArrow)){
        transform.Translate(Vector2(-moveSpeed, 0));
        lastDir = 2.0;
        idle = false;
    }
    if (Input.GetKey("d") || Input.GetKey(KeyCode.RightArrow)){
        transform.Translate(Vector2(moveSpeed, 0));
        lastDir = 3.0;
        idle = false;
    }
   // anim.SetInteger("Direction", lastDir);
    anim.SetBool("Idle", idle);
}

function LateUpdate()
{
	



}
