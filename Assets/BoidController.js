#pragma strict

var prefab : GameObject;
var number = 40;

var boidSpeed = 0.1;
var boidOmega = 90.0;

function Awake() {
    BoidElement.target = gameObject;
    BoidElement.speed = boidSpeed;
    BoidElement.omega = boidOmega;
}

function Start() {
    for (var i = 0; i < 40; i++) {
        Instantiate(prefab);
        yield WaitForSeconds(0.05);
    }
}

function Update() {
    BoidElement.speed = boidSpeed;
    BoidElement.omega = boidOmega;
}
