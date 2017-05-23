#pragma strict

var waypoint : Transform[]; //# of waypoints
var speed : float = 0.2; //Speed
var current : int = 0; //Current Waypoint
var reachDist : float = 0.1f; //Distance between object and waypoint
private var ghost: CharacterController;

var anim : Animator;
var dir = 0.0;
var rb : Rigidbody2D;

function Start () {
	ghost = GetComponent(CharacterController);
	anim = GetComponent("Animator");   	
	rb = GetComponent.<Rigidbody2D>();

	//Setting the waypoints for the prefab using a for loop wasn't working 
	//for some reason... brute forcing it for now :(
	waypoint[0] = GameObject.Find("Waypoint1").transform;
	waypoint[1] = GameObject.Find("Waypoint2").transform;
	waypoint[2] = GameObject.Find("Waypoint3").transform;
	waypoint[3] = GameObject.Find("Waypoint4").transform;
	waypoint[4] = GameObject.Find("Waypoint5").transform;
	waypoint[5] = GameObject.Find("Waypoint6").transform;
	waypoint[6] = GameObject.Find("Waypoint7").transform;
	waypoint[7] = GameObject.Find("Waypoint8").transform;
	waypoint[8] = GameObject.Find("Waypoint9").transform;
	waypoint[9] = GameObject.Find("Waypoint10").transform;
	waypoint[10] = GameObject.Find("Waypoint11").transform;
	waypoint[11] = GameObject.Find("Waypoint12").transform;
	waypoint[12] = GameObject.Find("Waypoint13").transform;
}

function Update () {
	var distance : float = Vector3.Distance(waypoint[current].transform.position, transform.position);
	transform.position = Vector3.MoveTowards(transform.position, waypoint[current].transform.position, speed * Time.deltaTime);
	if (distance < reachDist) { //Waypoint reached
		current++;
	}

	if (current == 0 || current == 3 || current == 4 || current >= 7){
		dir = 1;		 
	}
	else if (current == 1 || current == 2 || current == 5 || current == 6){
		dir = -1;
		//print("left");
	}

	anim.SetFloat("dir", dir);
}
