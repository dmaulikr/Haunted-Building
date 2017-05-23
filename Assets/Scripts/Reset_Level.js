#pragma strict

function OnCollisionEnter2D(other: Collision2D)
{
	Application.LoadLevel("Invisible Floor Level");
};