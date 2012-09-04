#pragma strict

var orbitRadius = 1.0;

private var angles = Vector3.zero;
private var omega = Vector3.zero;

function Start() {
    omega.x = Random.Range(0.3, 0.6);
    omega.y = Random.Range(0.3, 0.6);
    omega.z = Random.Range(0.3, 0.6);
}

function Update() {
    transform.localPosition = Vector3(
        Mathf.Sin(angles.x),
        Mathf.Sin(angles.y),
        Mathf.Sin(angles.z)
    ) * orbitRadius;
    angles += omega * Time.deltaTime;
}
