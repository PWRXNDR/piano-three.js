import * as THREE from 'three';

import App from '../App';
import { inputStore } from '../Utils/Store';

export default class AnimationController {
    constructor() {
        this.app = new App();
        this.scene = this.app.scene;
        this.avatar = this.app.world.character.avatar;

        this.instantiatedAnimations()
    }

    instantiatedAnimations() {
        const idle = this.avatar.animations[0]
        this.mixer = new THREE.AnimationMixer(this.avatar.scene)


        this.animations = new Map()
        this.avatar.animations.forEach((clip) => {
            this.animations.set(clip.name, this.mixer.clipAction(clip))
        })

        this.currentAction = this.animations.get('play')
        this.currentAction.play()
    }

    playAnimation(name) {
        if (this.currentAction === this.animations.get(name)) return
        const action = this.animations.get(name)
        action.reset()
        action.play()

        this.currentAction = action
    }

    loop(deltaTime) {
        this.mixer.update(deltaTime)
    } 
    }