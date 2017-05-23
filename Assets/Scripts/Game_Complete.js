#pragma strict

var minVolume : float = 0.0;
var maxVolume : float = 0.1;

function Start ()
{
	var music :  AudioSource = GetComponent.<AudioSource>();
	music.Play();
}

function OnMouseUp () 
{
	Application.LoadLevel("MainMenu");
}