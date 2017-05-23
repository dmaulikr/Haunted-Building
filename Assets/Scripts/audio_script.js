#pragma strict

function OnLevelWasLoaded()
{
	var audio :  AudioSource = GetComponent.<AudioSource>();
	audio.Play();
	audio.Play(44100);
};
