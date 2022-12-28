import * as THREE from 'three'
import Experience from './Experience'

export default class Renderer
{
    constructor()
    {
        this.experience = new Experience()
        this.camera = this.experience.camera
        this.scene = this.experience.scene
        this.sizes = this.experience.sizes
        this.canvas = this.experience.canvas

        this.createInstance()
    }

    createInstance()
    {
        this.instance = new THREE.WebGLRenderer({
            canvas:this.canvas,
            antialias:true
        })
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
        this.instance.setClearColor('#211d20')
    }

    resize()
    {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    update()
    {
        this.instance.render(this.scene, this.camera.instance)
    }
}