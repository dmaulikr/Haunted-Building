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
	Application.LoadLevel("Scene 1");
}

/*
function fadeIn ()
{
	while (music.volume < maxVolume) {
		music.volume += 0.1 * Time.deltaTime;
	}
}
/*
function fadeOut ()
{
	while (audio.volume > minVolume) {
		audio.volume -= 0.1 * Time.deltaTime;
	}
}
*/