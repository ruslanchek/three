(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    document.addEventListener('DOMContentLoaded', function () {
        var canvas = document.getElementById('container');
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
            var ratio = 1000 / 600;
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
        window.addEventListener('resize', function () {
            engine.resize();
        });
    }, false);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvdHMvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0lDR0EsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO1FBQzdDLElBQUksTUFBTSxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXJFLElBQUksV0FBVyxHQUFHLFVBQVUsTUFBTTtZQUNqQywyQ0FBMkM7WUFDM0MsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXRDLDhDQUE4QztZQUM5QyxrREFBa0Q7WUFFbEQsMkNBQTJDO1lBQzNDLElBQUksTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFcEYsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDdEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUMxQixNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUU7WUFDeEIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxRQUFRLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUM1QixNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUM3QixNQUFNLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVyQyxvREFBb0Q7WUFHcEQsMENBQTBDO1lBQzFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRXpDLHlDQUF5QztZQUN6QyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVwQyxtREFBbUQ7WUFDbkQsMkZBQTJGO1lBRTNGLGtDQUFrQztZQUNsQyx3QkFBd0I7WUFFeEIsaUZBQWlGO1lBQ2pGLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRS9ELHdDQUF3QztZQUN4QyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFdEIsMEZBQTBGO1lBQzFGLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVsRSxzQkFBc0I7WUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FBQztRQUVGLElBQUksTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhDLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDcEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRTtZQUNqQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblx0dmFyIGNhbnZhcyA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG5cblx0dmFyIGNyZWF0ZVNjZW5lID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuXHRcdC8vIE5vdyBjcmVhdGUgYSBiYXNpYyBCYWJ5bG9uIFNjZW5lIG9iamVjdCBcblx0XHR2YXIgc2NlbmUgPSBuZXcgQkFCWUxPTi5TY2VuZShlbmdpbmUpO1xuXG5cdFx0Ly8gQ2hhbmdlIHRoZSBzY2VuZSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGdyZWVuLlxuXHRcdC8vIHNjZW5lLmNsZWFyQ29sb3IgPSBuZXcgQkFCWUxPTi5Db2xvcjMoMCwgMCwgMCk7XG5cblx0XHQvLyBUaGlzIGNyZWF0ZXMgYW5kIHBvc2l0aW9ucyBhIGZyZWUgY2FtZXJhXG5cdFx0dmFyIGNhbWVyYSA9IG5ldyBCQUJZTE9OLkZyZWVDYW1lcmEoJ2NhbWVyYTEnLCBuZXcgQkFCWUxPTi5WZWN0b3IzKDAsIDUsIDApLCBzY2VuZSk7XG5cblx0XHRjYW1lcmEub3J0aG9Ub3AgPSA2MDA7XG5cdFx0Y2FtZXJhLm9ydGhvQm90dG9tID0gLTYwMDtcblx0XHRjYW1lcmEub3J0aG9MZWZ0ID0gLTEwMDA7XG5cdFx0Y2FtZXJhLm9ydGhvUmlnaHQgPSAxMDAwO1xuXHRcdHZhciByYXRpbyA9IDEwMDAgLyA2MDAgO1xuXHRcdHZhciB6b29tID0gMTtcblx0XHR2YXIgbmV3V2lkdGggPSB6b29tICogcmF0aW87XG5cdFx0Y2FtZXJhLm9ydGhvTGVmdCA9IC1NYXRoLmFicyhuZXdXaWR0aCk7XG5cdFx0Y2FtZXJhLm9ydGhvUmlnaHQgPSBuZXdXaWR0aDtcblx0XHRjYW1lcmEub3J0aG9Cb3R0b20gPSAtTWF0aC5hYnMoem9vbSk7XG5cblx0XHQvLyBjYW1lcmEubW9kZSA9IEJBQllMT04uQ2FtZXJhLk9SVEhPR1JBUEhJQ19DQU1FUkE7XG5cblxuXHRcdC8vIFRoaXMgdGFyZ2V0cyB0aGUgY2FtZXJhIHRvIHNjZW5lIG9yaWdpblxuXHRcdGNhbWVyYS5zZXRUYXJnZXQoQkFCWUxPTi5WZWN0b3IzLlplcm8oKSk7XG5cblx0XHQvLyBUaGlzIGF0dGFjaGVzIHRoZSBjYW1lcmEgdG8gdGhlIGNhbnZhc1xuXHRcdGNhbWVyYS5hdHRhY2hDb250cm9sKGNhbnZhcywgZmFsc2UpO1xuXG5cdFx0Ly8gVGhpcyBjcmVhdGVzIGEgbGlnaHQsIGFpbWluZyAwLDEsMCAtIHRvIHRoZSBza3kuXG5cdFx0Ly8gdmFyIGxpZ2h0ID0gbmV3IEJBQllMT04uSGVtaXNwaGVyaWNMaWdodCgnbGlnaHQxJywgbmV3IEJBQllMT04uVmVjdG9yMygwLCAxLCAwKSwgc2NlbmUpO1xuXG5cdFx0Ly8gLy8gRGltIHRoZSBsaWdodCBhIHNtYWxsIGFtb3VudFxuXHRcdC8vIGxpZ2h0LmludGVuc2l0eSA9IC41O1xuXG5cdFx0Ly8gTGV0J3MgdHJ5IG91ciBidWlsdC1pbiAnc3BoZXJlJyBzaGFwZS4gUGFyYW1zOiBuYW1lLCBzdWJkaXZpc2lvbnMsIHNpemUsIHNjZW5lXG5cdFx0dmFyIHNwaGVyZSA9IEJBQllMT04uTWVzaC5DcmVhdGVTcGhlcmUoJ3NwaGVyZTEnLCAwLCAyLCBzY2VuZSk7XG5cblx0XHQvLyBNb3ZlIHRoZSBzcGhlcmUgdXB3YXJkIDEvMiBpdHMgaGVpZ2h0XG5cdFx0c3BoZXJlLnBvc2l0aW9uLnkgPSAxO1xuXG5cdFx0Ly8gTGV0J3MgdHJ5IG91ciBidWlsdC1pbiAnZ3JvdW5kJyBzaGFwZS4gIFBhcmFtczogbmFtZSwgd2lkdGgsIGRlcHRoLCBzdWJkaXZpc2lvbnMsIHNjZW5lXG5cdFx0dmFyIGdyb3VuZCA9IEJBQllMT04uTWVzaC5DcmVhdGVHcm91bmQoJ2dyb3VuZDEnLCA2LCA2LCAyLCBzY2VuZSk7XG5cblx0XHQvLyBMZWF2ZSB0aGlzIGZ1bmN0aW9uXG5cdFx0cmV0dXJuIHNjZW5lO1xuXHR9O1xuXG5cdHZhciBlbmdpbmUgPSBuZXcgQkFCWUxPTi5FbmdpbmUoY2FudmFzLCB0cnVlKTtcblx0dmFyIHNjZW5lID0gY3JlYXRlU2NlbmUoZW5naW5lKTtcblxuXHRlbmdpbmUucnVuUmVuZGVyTG9vcChmdW5jdGlvbiAoKSB7XG5cdFx0c2NlbmUucmVuZGVyKCk7XG5cdH0pO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG5cdFx0ZW5naW5lLnJlc2l6ZSgpO1xuXHR9KTtcbn0sIGZhbHNlKTsiXX0=
