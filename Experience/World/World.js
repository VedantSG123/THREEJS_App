import Experience from '../Experience'
import Cube from './Cube'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('ready', () =>
        {
            this.cube = new Cube()
        })
    }

    update()
    {
        if(this.cube){
            this.cube.update()
        }
    }
}