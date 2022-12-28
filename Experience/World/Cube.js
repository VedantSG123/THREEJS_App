import * as THREE from 'three'
import Experience from "../Experience";

export default class Cube
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time

        this.createModel()
    }

    createModel()
    {
        this.cube = new THREE.Mesh(
            new THREE.BoxGeometry(),
            new THREE.MeshBasicMaterial({color:0xff0000})
        )
        this.scene.add(this.cube)
    }

    update()
    {
        //one rotation in 5 sec
        this.cube.rotation.x += ((2*Math.PI) / 5000 ) * this.time.deltaTime
        this.cube.rotation.y += ((2*Math.PI) / 5000 ) * this.time.deltaTime  
    }
}