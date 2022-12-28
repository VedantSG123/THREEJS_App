import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter
{
    constructor()
    {
        super()
        this.current = Date.now()
        this.start = this.current
        this.elapsed = 0
        this.deltaTime = 16

        this.tick()
    }


    tick()
    {
        const currentTime = Date.now()
        this.deltaTime = currentTime - this.current
        this.elapsed = currentTime - this.start
        this.current = currentTime
        this.trigger('tick')
        
        window.requestAnimationFrame(() => 
        {
           this.tick()
        })
    }
}