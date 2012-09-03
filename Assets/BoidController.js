#pragma strict

var prefab : GameObject;
var number = 40;

function Start() {
	for (var i = 0; i < 40; i++) {
		Instantiate(prefab);
		yield WaitForSeconds(0.05);
	}
}
