/// <reference path="../../typings/main.d.ts" />

import * as THREE from 'three';
import * as _ from 'lodash';

var renderer: THREE.Renderer = new THREE.WebGLRenderer({
	antialias: true,
	alpha: true,
	precision: 'lowp'
});

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera: THREE.Camera = new THREE.OrthographicCamera(
	window.innerWidth / - 2,
	window.innerWidth / 2,
	window.innerHeight / 2,
	window.innerHeight / - 2,
	-1000,
	1000
);

camera.position.set(0, 0, 0);
camera.lookAt(new THREE.Vector3(0, 0, 0));

var scene: THREE.Scene = new THREE.Scene();

var material: any = new THREE.LineBasicMaterial({
	color: 0x2586D3,
	linewidth: 2
});

var points = [
	[], [], []
];

var width = window.innerWidth;
var height = window.innerHeight;
var pointsLength = width;

_.times(pointsLength, (i) => {
	points[0].push([
		i,
		_.random(0, height)
	]);

	points[1].push([
		i,
		_.random(0, height)
	]);

	points[2].push([
		i,
		_.random(0, height)
	]);
});

function worldX(x) {
	return x - window.innerWidth / 2;
}

function worldY(y) {
	return -(y - window.innerHeight / 2);
}

var renderIteration = 0;
var geometry: any = new THREE.Geometry();
var line: any = new THREE.Line(geometry, material);
scene.add(line);

var geometry1 = new THREE.BoxGeometry(222, 222, 0);
var material1 = new THREE.MeshBasicMaterial({ color: 0xffff00 });
var mesh = new THREE.Mesh(geometry1, material1);

scene.add(mesh);

function render() {
	requestAnimationFrame(render);

	// line.rotation.x += 0.01;
	// line.rotation.y += 0.01;
	// shapeMesh.rotation.y += 0.01;

	geometry.vertices = [];

	points[renderIteration].forEach((point) => {
		geometry.vertices.push(new THREE.Vector3(worldX(point[0]), worldY(point[1])));
	});
	geometry.verticesNeedUpdate = true;

	renderer.render(scene, camera);

	renderIteration++;

	if (renderIteration > 2) {
		renderIteration = 0;
	}
}

render();


