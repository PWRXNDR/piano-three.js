import * as THREE from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { sizesStore } from './Utils/Store.js';
import { AudioListener } from 'three';
import gsap from 'gsap';


import App from './App.js'

export default class Camera{
    constructor() {
        this.app = new App()
        this.canvas = this.app.canvas

        this.sizesStore = sizesStore

        this.sizes = this.sizesStore.getState()

        this.setInstance()
        this.listener = new AudioListener();
        this.instance.add(this.listener);

        this.setControls()
        this.setResizeLister()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            75,
            this.sizes.width / this.sizes.height,
            1,
            600
          );
          this.instance.position.z = 100
        this.instance.position.y = 20
    }

    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = false; 
        this.controls.enableRotate = false;
        this.controls.enablePan = false;

    }

    setResizeLister() {
        this.sizesStore.subscribe((sizes)=>{
            this.instance.aspect = sizes.width / sizes.height
            this.instance.updateProjectionMatrix()
        })
    }

    moveToPosition(position, onComplete) {
        gsap.to(this.instance.position, {
            duration: 3,
            x: position.x,
            y: position.y,
            z: position.z,
            onUpdate: () => this.instance.updateProjectionMatrix(),
            onComplete: onComplete   // Callback to reset the transitioning flag
        });
    }

    loop() {
        this.controls.update();
        //console.log(`Camera Position: x=${this.instance.position.x.toFixed(2)}, y=${this.instance.position.y.toFixed(2)}, z=${this.instance.position.z.toFixed(2)}`);
        requestAnimationFrame(this.loop.bind(this));
        }
    }
