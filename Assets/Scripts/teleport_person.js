#pragma strict

var teleportTo : Transform;

function OnCollisionEnter2D(other: Collision2D)
{
	other.transform.position = teleportTo.position;
};

