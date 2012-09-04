#pragma strict

var prefab : GameObject;
var number = 40;

var boidSpeed = 0.1;
var boidOmega = 90.0;

@HideInInspector
var trailMesh : Mesh;

function Awake() {
    BoidElement.target = gameObject;
    BoidElement.speed = boidSpeed;
    BoidElement.omega = boidOmega;

    trailMesh = Mesh();
    trailMesh.vertices = [
        Vector3(0, 0, 1),
        Vector3(0.5, 0, -1),
        Vector3(-0.5, 0, -1)
    ];
    trailMesh.SetIndices([0, 1, 2, 0], MeshTopology.LineStrip, 0);
    trailMesh.RecalculateBounds();
}

function Start() {
    for (var i = 0; i < number; i++) {
        Instantiate(prefab);
        yield WaitForSeconds(0.05);
    }
}

function Update() {
    BoidElement.speed = boidSpeed;
    BoidElement.omega = boidOmega;
}
