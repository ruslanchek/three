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
		-width / 2 + i,
		_.random(-height / 2, height / 2)
	]);

	points[1].push([
		-width / 2 + i,
		_.random(-height / 2, height / 2)
	]);

	points[2].push([
		-width / 2 + i,
		_.random(-height / 2, height / 2)
	]);
});

var renderIteration = 0;
var geometry: any = new THREE.Geometry();
var line: any = new THREE.Line(geometry, material);

var shape = new THREE.Shape();
var shapeSize = 128;

shape.moveTo(-shapeSize, -shapeSize);
shape.lineTo(shapeSize, -shapeSize);
shape.lineTo(shapeSize, shapeSize);
shape.lineTo(-shapeSize, shapeSize);
shape.lineTo(-shapeSize, -shapeSize);

scene.add(line);

function render() {
	requestAnimationFrame(render);

	// line.rotation.x += 0.01;
	// line.rotation.y += 0.01;
	// shapeMesh.rotation.y += 0.01;

	geometry.vertices = [];

	points[renderIteration].forEach((point) => {
		geometry.vertices.push(new THREE.Vector3(point[0], point[1]));
	});

	geometry.verticesNeedUpdate = true;

	renderer.render(scene, camera);

	renderIteration++;

	if (renderIteration > 2) {
		renderIteration = 0;
	}
}

render();