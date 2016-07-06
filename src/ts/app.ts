/// <reference path="../../typings/main.d.ts" />
import * as _ from 'lodash';

document.addEventListener('DOMContentLoaded', () => {
	var canvas = <HTMLCanvasElement>document.getElementById('container');

	var createScene = function (engine) {
		// Now create a basic Babylon Scene object 
		var scene = new BABYLON.Scene(engine);

		// Change the scene background color to green.
		// scene.clearColor = new BABYLON.Color3(0, 0, 0);

		// This creates and positions a free camera
		var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, 0), scene);

		camera.orthoTop = 600;
		camera.orthoBottom = -600;
		camera.orthoLeft = -1000;
		camera.orthoRight = 1000;
		var ratio = 1000 / 600 ;
		var zoom = 1;
		var newWidth = zoom * ratio;
		camera.orthoLeft = -Math.abs(newWidth);
		camera.orthoRight = newWidth;
		camera.orthoBottom = -Math.abs(zoom);

		// camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;


		// This targets the camera to scene origin
		camera.setTarget(BABYLON.Vector3.Zero());

		// This attaches the camera to the canvas
		camera.attachControl(canvas, false);

		// This creates a light, aiming 0,1,0 - to the sky.
		// var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);

		// // Dim the light a small amount
		// light.intensity = .5;

		// Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
		var sphere = BABYLON.Mesh.CreateSphere('sphere1', 0, 2, scene);

		// Move the sphere upward 1/2 its height
		sphere.position.y = 1;

		// Let's try our built-in 'ground' shape.  Params: name, width, depth, subdivisions, scene
		var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);

		// Leave this function
		return scene;
	};

	var engine = new BABYLON.Engine(canvas, true);
	var scene = createScene(engine);

	engine.runRenderLoop(function () {
		scene.render();
	});

	window.addEventListener('resize', () => {
		engine.resize();
	});
}, false);