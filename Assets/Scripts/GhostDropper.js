#pragma strict

var moveSpeed = 0.04; 
var Boulder : GameObject;
var enemyPos : Transform;
var Timer = 35;
function Start () {


}
function Update(){ 
}

function FixedUpdate () {
	if (Input.GetKey("a") || Input.GetKey(KeyCode.LeftArrow)){
        transform.Translate(Vector2(-moveSpeed*1.5, 0));
    }
    if (Input.GetKey("d") || Input.GetKey(KeyCode.RightArrow)){
        transform.Translate(Vector2(moveSpeed*1.5, 0));
}
	if(Timer == 0){
	Instantiate(Boulder, enemyPos.position, enemyPos.rotation);
	Timer = 30;
	}
	else Timer--;
}
