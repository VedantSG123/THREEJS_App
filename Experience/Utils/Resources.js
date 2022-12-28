import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import EventEmitter from "./EventEmitter";


export default class Resources extends EventEmitter
{
    constructor(resources)
    {
        super()
        this.sources = resources
        this.toLoad = resources.length
        this.loaded = 0
        this.items = {}

        this.setLoaders()
        this.startLoading()
    }

    setLoaders()
    {
        this.loaders = {}
        this.loaders.textureLoader = new THREE.TextureLoader()
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()

        this.loaders.gltfLoader = new GLTFLoader()
        this.loaders.dracoLoader = new DRACOLoader()
        this.loaders.dracoLoader.setDecoderPath('/draco/')
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)
    }

    startLoading()
    {
        for(const source of this.sources)
        {
            if(source.type === 'gltfModel'){
                this.loaders.gltfLoader.load(
                    source.path,
                    (file)=> {
                        this.sourcesLoaded(source, file)
                    }
                )
            }

            else if(source.type === 'texture'){
                this.loaders.textureLoader.load(
                    source.path,
                    (file)=> {
                        this.sourcesLoaded(source, file)
                    }
                )
            }

            else if(source.type === 'cubeTexture'){
                this.loaders.cubeTextureLoader.load(
                    source.path,
                    (file)=> {
                        this.sourcesLoaded(source, file)
                    }
                )
            }
        }
    }

    sourcesLoaded(source, file)
    {
        this.items[source.name] = file
        this.loaded++

        //emit an event when every thing is loaded
        if(this.loaded = this.toLoad){
            this.trigger('ready')
        }
    }
}