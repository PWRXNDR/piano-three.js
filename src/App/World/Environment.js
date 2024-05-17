import * as THREE from "three";
import App from "../App.js";
import assetStore from "../Utils/AssetStore.js";

export default class Environment {
    constructor() {
        this.app = new App();
        this.scene = this.app.scene;
        this.physics = this.app.world.physics;
        this.pane = this.app.gui.pane;

        this.assetStore = assetStore.getState()
        this.environment = this.assetStore.loadedAssets.environment

        this.loadEnvironment();
        this.addLights();
        this.addSpotlight();
        this.addFog();
    }

    loadEnvironment() {
        // load environment here
        const environmentScene = this.environment.scene;
        this.scene.add(environmentScene);

        // Traverse and log names
        environmentScene.traverse((child) => {
            console.log(child.name);
        });

        const cubeTextureLoader = new THREE.CubeTextureLoader();
        cubeTextureLoader.setPath('/textures/cubeMap/');
        const backgroundCubemap = cubeTextureLoader.load([
            'px.png',
            'nx.png',
            'py.png',
            'ny.png',
            'pz.png',
            'nz.png'
        ], (cubemap) => {
            this.scene.background = cubemap;

            environmentScene.traverse((child) => {
                if (child.name === 'Plane061') { 
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x000000,
                        metalness: 0.2, // metalness to control reflectivity
                        roughness: 0.05, // lower values give sharper reflections
                        envMap: cubemap 
                    });
                }
            });

            environmentScene.traverse((child) => {
                if (child.name === 'Plane050') {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x000000,
                        metalness: 0.1,
                        roughness: 0.15,
                        envMap: cubemap
                    });
                }
            });

            environmentScene.traverse((child) => {
                if (child.name === 'Plane060') {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x000000,
                        metalness: 0.1,
                        roughness: 0.15,
                        envMap: cubemap
                    });
                }
            });

            environmentScene.traverse((child) => {
                if (child.name === 'Plane057') {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x000000,
                        metalness: 0.1,
                        roughness: 0.15,
                        envMap: cubemap
                    });
                }
            });

            environmentScene.traverse((child) => {
                if (child.name === 'Plane055') {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x000000,
                        metalness: 0.1,
                        roughness: 0.15,
                        envMap: cubemap
                    });
                }
            });

            environmentScene.traverse((child) => {
                if (child.name === 'Plane045') {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x000000,
                        metalness: 0.1,
                        roughness: 0.15,
                        envMap: cubemap
                    });
                }
            });

            environmentScene.traverse((child) => {
                if (child.name === 'Walls') {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0xbbb39b,
                        metalness: 0,
                        roughness: 0.5,
                        envMap: cubemap
                    });
                }
            });

            environmentScene.traverse((child) => {
                if (child.name === 'Plane049') {
                    child.material = new THREE.MeshStandardMaterial({
                        color: 0x000000,
                        metalness: 0.8,
                        roughness: 0.2
                    });
                }
            });

                    environmentScene.traverse((child) => {
            if (child.name === 'floor') { 
                // Access and modify the existing material
                if (child.material) {
                    child.material.metalness = 0; 
                    child.material.roughness = 0.1; 
                }
            }
        });
        });

        environmentScene.traverse((child) => {
            if (child.name === 'floor') { 
                // Access and modify the existing material
                if (child.material) {
                    child.material.metalness = 0; // Adjust as necessary
                    child.material.roughness = 0.05; // Adjust as necessary
                }
            }
        });


        environmentScene.position.set(-8, 0, 38)
        environmentScene.rotation.set(0, -.30, 0)
        environmentScene.scale.setScalar(1.3)

        const physicalObjects = ['Grand_piano',
        ]

        const shadowCasters = ['Grand_piano',
        ]

        const shadowReceivers = ['floor',
        ]

        for (const child of environmentScene.children) {
            const isPhysicalObject = physicalObjects.some((keyword) => child.name.includes(keyword))
            if (isPhysicalObject) {
                child.traverse((obj) => {
                    if (obj.isMesh) {
                        this.physics.add(obj, "fixed", "cuboid")
                    }
                })
            }

            const isShadowCaster = shadowCasters.some((keyword) => child.name.includes(keyword))
            if (isShadowCaster) {
                child.traverse((obj) => {
                    if (obj.isMesh) {
                        obj.castShadow = true
                    }
                })
            }

            const isShadowReceiver = shadowReceivers.some((keyword) => child.name.includes(keyword))
            if (isShadowReceiver) {
                child.traverse((obj) => {
                    if (obj.isMesh) {
                        obj.receiveShadow = true
                    }
                })
            }
        }

    }


    addLights() {
        // Subdued ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        this.scene.add(ambientLight);

        // Directional light for general lighting with soft intensity
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.01);
        directionalLight.position.set(1, 1, 1);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 500;
        this.scene.add(directionalLight);

        // Optional: Additional point lights or soft spotlights
        const pointLight = new THREE.PointLight(0xffffff, 0.1, 100, 2);
        pointLight.position.set(-10, 10, -10);
        this.scene.add(pointLight);
    }

    addSpotlight() {
        const spotlight = new THREE.SpotLight(0x5f99f5, 1, 0, Math.PI / 8, 0.5, 2);
        spotlight.position.set(10, 60, 10); // Adjust as necessary
        spotlight.target.position.set(10, 0, 10);
        this.scene.add(spotlight.target);
        spotlight.castShadow = true;
        spotlight.shadow.mapSize.width = 1024;
        spotlight.shadow.mapSize.height = 1024;
        spotlight.shadow.camera.near = 0.5;
        spotlight.shadow.camera.far = 150;
        this.scene.add(spotlight);
    }

    addFog() {
        const color = 0x63a9ff;  // Choose a color that blends well with your scene
        const density = 0.01;    // Control the density, smaller values for lighter fog

        this.scene.fog = new THREE.FogExp2(color, density);
    }
}
