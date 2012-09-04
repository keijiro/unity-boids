#pragma strict

static var speed = 0.1;
static var omega = 90.0;
static var target : GameObject;

private var speedScale = 1.0;
private var omegaScale = 1.0;

function Start() {
    transform.rotation = Random.rotation;
    speedScale = Random.Range(0.8, 1.2);
    omegaScale = Random.Range(0.8, 1.2);
}

function Update() {
    transform.position += transform.forward * (speed * speedScale * Time.deltaTime);
    var relvec = target.transform.position - transform.position;
	var rotation = Quaternion.LookRotation(relvec, transform.up);
    transform.rotation = Quaternion.RotateTowards(transform.rotation, rotation, omega * omegaScale * Time.deltaTime);
}
