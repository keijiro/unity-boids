#pragma strict

var speed = 0.1;
var omega = 90.0;

static private var target : GameObject;

function Start() {
    transform.rotation = Random.rotation;
    if (!target) target = GameObject.Find("Boid Target");
    speed *= Random.Range(0.8, 1.2);
    omega *= Random.Range(0.8, 1.2);
}

function Update() {
    transform.position += transform.forward * (speed * Time.deltaTime);

    var relvec = target.transform.position - transform.position;
//    var rotation = Quaternion.FromToRotation(transform.forward, relvec);
var rotation = Quaternion.LookRotation(relvec, transform.up);
    transform.rotation = Quaternion.RotateTowards(transform.rotation, rotation, omega * Time.deltaTime);
}
