/// <reference path="../../typings/main.d.ts" />

import * as THREE from 'three';

var renderer:THREE.Renderer = new THREE.WebGLRenderer();
 
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var camera:THREE.Camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);

camera.position.set(0, 0, 100);
camera.lookAt(new THREE.Vector3(0, 0, 0));

var scene:THREE.Scene = new THREE.Scene();

var material:THREE.LineBasicMaterial = new THREE.LineBasicMaterial({
	color: 0x0000ff,
	linewidth: 123
});

var rectLength = 120, rectWidth = 40;
var rectShape = new THREE.Shape();

rectShape.moveTo( 0,0 );
rectShape.lineTo( 0, rectWidth );
rectShape.lineTo( rectLength, rectWidth );
rectShape.lineTo( rectLength, 0 );
rectShape.lineTo( 0, 0 );

var rectGeom = new THREE.ShapeGeometry( rectShape );
var rectMesh = new THREE.Mesh( rectGeom, new THREE.MeshBasicMaterial( { color: 0xff0000 } ) ) ;

scene.add(rectMesh);
renderer.render(scene, camera);