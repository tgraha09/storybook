import * as classes from './classes.js'
import * as til from './utils.js'
import * as opt from './classes-opt.js'
let utils = new til.Utils()

let v2 = utils.v2
let getRandomColor = utils.getRandomColor
let getRandomInt = utils.getRandomInt
let getRandomVertex = utils.getRandomVertex
let each = utils.each
let timeOutLoop = utils.timeOutLoop
let InstanceManager = classes.InstanceManager
let moveAndDrawSprites = classes.moveAndDrawSprites
let is = utils.is
let elementEvent = utils.elementEvent
let canvas;
let ctx

let pause = false;
 
let loop = utils.loop
let loopType = 1
let sprites = []
let originBool = false
let visorBool = true
let soundBool = true
let visorRange = 30;
let fps = 60;
let speed = 0.5
let soundRange = 50;
let mousePos = {x:-1, y:-1, sect: false}
let seekEnable = true
let vecArith = utils.vecArith
let mouseDown = false
const spriteManage = new classes.Sprite()
let numRects = 2;
let numCircs = 1;


let rectAgents = []
let circleAgents = []

//MAIN APP
export const APP = {run: (exit)=>{    
    ctx.clearRect(0,0, canvas.width, canvas.height)
    let i = 0
    //for determining correct number of agents 
    if(rectAgents.length < numRects){
        i = rectAgents.length
        while(i < numRects){
            let style = genRandomStyles(false)
            let c = new classes.RectangleAgent(style.v, style.d, style.f, 0.3, undefined, 25)
            c.circle.changeStyle(getRandomColor(), getRandomInt(2, 6), getRandomColor())
            c.font = `${c.dim.x}px Arial`
            
            //console.log(numRects);
            c.idx = i+1
            rectAgents.push(c)
            i++
        }
        
        sprites = []
        sprites = sprites.concat(sprites, circleAgents)
        sprites = sprites.concat(sprites, rectAgents)
        ctx.sprites = sprites
    }
    else{
        //i = rectAgents.length-1
        rectAgents = rectAgents.slice(0, numRects)
        /*while(i > numRects){
            rectAgents[i] = undefined
            i--
        }*/
        sprites = []
        sprites = sprites.concat(sprites, circleAgents)
        sprites = sprites.concat(sprites, rectAgents)
        ctx.sprites = sprites
    }
    //for determining correct number of agents 
    if(circleAgents.length < numCircs){
        i = circleAgents.length
        while(i < numCircs){
            let style = genRandomStyles(true)
            let c = new classes.CircleAgent(style.v, style.d, style.f, style.s, undefined, 25)
            c.originalFill = getRandomColor()
            c.fillStyle = c.originalFill
            c.circle.changeStyle(c.originalFill, getRandomInt(2, 6), getRandomColor())
            c.font = `${c.dim.x}px Arial`
            c.idx = i+1
            c.caught = false
            i++
            circleAgents.push(c)
        }
        
        sprites = []
        sprites = sprites.concat(sprites, circleAgents)
        sprites = sprites.concat(sprites, rectAgents)
        ctx.sprites = sprites
    }
    else{
        //i = rectAgents.length-1
        circleAgents = circleAgents.slice(0, numCircs)
        /*while(i > numRects){
            rectAgents[i] = undefined
            i--
        }*/
        sprites = []
        sprites = sprites.concat(sprites, circleAgents)
        sprites = sprites.concat(sprites, rectAgents)
        ctx.sprites = sprites
    }
    //loop through each agent type
    each(rectAgents, (element)=>{
        if(element != undefined && i <= numRects){
            //console.log(rectAgents.length);
            element.speed = speed
            element.range =0
            element.sound.dim.x = soundRange
            element.sound.dim.y = soundRange
            element.mousePos = mousePos
            element.seek = seekEnable
            element.mouseDown = mouseDown
            element.old = "#7fffd4"
            if(element.mousePos.sect){
                //console.log(element.name);
            }
            //console.log(element.mousePos);
            if(originBool){
                element.drawOrigin(ctx, originBool)
            }
            else{
                element.origin = undefined
            }
            element.showVisor = visorBool
            let vis = document.querySelector(".rangewrap")
            if(visorBool){
                
                vis.style.display = "contents"
            }
            else{
                vis.style.display = "none"
            }
            let sound = document.querySelector(".soundwrap")
            //console.log(sound);
            if(soundBool){
                sound.style.display = "contents"
            }
            else{
                sound.style.display = "none"
                
            }
            element.range = JSON.parse(visorRange)
            element.showVisor = visorBool
            element.soundBool = soundBool
            if(element.caught == false|| element.caught ==undefined){
                element.moveAndDraw(ctx)
                element.manageSprites(ctx, true)
                element.lastPos = element.pos
            }
        }
        
        
        
    })
    //loop through each agent type
    each(circleAgents, (element)=>{
        
        //spriteManage.manageSprites(ctx, true, sprites)
        //ctx.sprites = sprites
        if(element != undefined){
            element.speed = speed
            element.range =0
            element.sound.dim.x = soundRange
            element.sound.dim.y = soundRange
            element.mousePos = mousePos
            element.seek = seekEnable
            element.mouseDown = mouseDown
            element.old = "#7fffd4"
            if(element.mousePos.sect){
                //console.log(element.name);
            }
            //console.log(element.mousePos);
            if(originBool){
                element.drawOrigin(ctx, originBool)
            }
            else{
                element.origin = undefined
            }
            element.showVisor = visorBool
            let vis = document.querySelector(".rangewrap")
            if(visorBool){
                
                vis.style.display = "contents"
            }
            else{
                vis.style.display = "none"
            }
            let sound = document.querySelector(".soundwrap")
            //console.log(sound);
            if(soundBool){
                sound.style.display = "contents"
            }
            else{
                sound.style.display = "none"
                
            }
            element.range = JSON.parse(visorRange)
            element.showVisor = visorBool
            element.soundBool = soundBool
            if(element.caught == false|| element.caught ==undefined){
                element.moveAndDraw(ctx)
                element.manageSprites(ctx, true)
                element.lastPos = element.pos
            }
        }
        
        
    })

    document.querySelector("#fps").textContent = `FPS: ${utils.getFPS()}`
    document.querySelector("#fpsVal").textContent = fps
    document.querySelector("#speedVal").textContent = speed
    document.querySelector("#visorVal").textContent = visorRange
    document.querySelector("#soundVal").textContent = soundRange
    return exit
    
}, reset: ()=>{ //APP reset 
    //console.log("HI");
    utils.clearTimeOutLoop()
    utils.stopLoop()
    if(loopType==2){
        loop(()=>{
            APP.run(pause)
        })         
    }
    else{
        timeOutLoop(1000/fps, ()=>{
            APP.run(pause)
        })
    }
}, loopType:(_loopSelect)=>{ //Loop selection 
    loopType = _loopSelect.value
    if(pause==true){
        pause = false
    }
    APP.reset()
}, init: ()=>{ //initialization 
    
    //sprites = _sprites
    if(canvas == undefined){
        canvas = document.querySelector('canvas');
        
    }
    if(ctx == undefined){
        ctx = canvas.getContext('2d');
    }
    for(let i = 0; i<numRects; i++){
        let style = genRandomStyles(false)
        let c = new classes.RectangleAgent(style.v, style.d, style.f, 0.3, undefined, 25)
        c.circle.changeStyle(getRandomColor(), getRandomInt(2, 6), getRandomColor())
        c.font = `${c.dim.x}px Arial`
        c.caught = false
        //console.log(c.font);
        c.idx = i+1
        rectAgents.push(c)
    }
    for(let i = 0; i<numCircs; i++){
        let style = genRandomStyles(true)
        let c = new classes.CircleAgent(style.v, style.d, style.f, style.s, undefined, 25)
        c.originalFill = getRandomColor()
        c.fillStyle = c.originalFill
        c.circle.changeStyle(c.originalFill, getRandomInt(2, 6), getRandomColor())
        c.font = `${c.dim.x}px Arial`
        c.caught = false
        //console.log(c.font);
        c.idx = i+1
        circleAgents.push(c)
    }
    sprites = sprites.concat(sprites, circleAgents)
    sprites = sprites.concat(sprites, rectAgents)
    //sprites = _sprites
    if(ctx.sprites == undefined){
        ctx.sprites = []
    }
    ctx.sprites = sprites
    
    APP.initControls()
    
    timeOutLoop(1000/fps, ()=>{
        APP.run(pause) //first run 
    })
 
}, initControls: ()=>{ //connection between js and html controls 
    elementEvent("#circsub", 'click', (s, event)=>{          
        
        numCircs = document.querySelector("#circ").value
        //APP.reset()
        //console.log(numCircs);
        
    })
    elementEvent("#rectsub", 'click', (s, event)=>{          
       // console.log(s);
        numRects = document.querySelector("#rect").value
        //APP.reset()
    })
    elementEvent("#checkseek", 'click', (check)=>{          
        
        if(seekEnable){
            check.value = 'on'
            seekEnable = false
        }
        else{
            check.value = 'off'
            seekEnable = true
        }
    })
    elementEvent(".canvas", 'mousemove', (cvs, event)=>{          
        mousePos.x = event.offsetX
        mousePos.y = event.offsetY 
        
        
    })
    elementEvent(".canvas", 'mousedown', (cvs, event)=>{          
        
        mouseDown = true;
        
    })
    elementEvent(".canvas", 'mouseup', (cvs, event)=>{          
        
        mouseDown = false;
        
    })
    elementEvent("#sound", "click", ()=>{
        soundBool = !soundBool
    })
    elementEvent("#collider", "click", ()=>{
        visorBool = !visorBool
    })
    elementEvent("#origin", "click", ()=>{
        originBool = !originBool
    })
    elementEvent("#type", "change", (loopSelect)=>{
        APP.loopType(loopSelect)
        let wrap = document.querySelector(".fpswrap")
        if(loopSelect.value==2){
            wrap.style.display = "none"
        }
        else{
            wrap.style.display = "contents" 
        }
    })
    elementEvent("#speedSlide", "change", (element)=>{
        document.querySelector("#speedVal").textContent = `${element.value}`
        speed = element.value/10
    })
    elementEvent("#fpsSlide", "change", (slide)=>{
        document.querySelector("#fpsVal").textContent = slide.value
        fps = slide.value
        APP.reset()
    })
    elementEvent("#visorSlide", "change", (slide)=>{
        visorRange = slide.value
    })
    elementEvent("#soundSlide", "change", (slide)=>{
        soundRange = slide.value
    })

    elementEvent("#loop", "click", (toggle)=>{
        
        pause = !pause
        if(pause== false){
            APP.reset()
        }
        else{
            if(loopType==2){
                utils.stopLoop()
            }
            else{
                utils.clearTimeOutLoop()
            }
        }
    })
},debug: ()=>{ //Optimized version of class. Still work in progress
    if(canvas == undefined){
        canvas = document.querySelector('canvas');
    }
    if(ctx == undefined){
        ctx = canvas.getContext('2d');
    }

    let genRandSprite = ()=>{
        let position = {
            x:getRandomInt(100, canvas.width-100),
            y:getRandomInt(100, canvas.height-100),
            rotation: undefined/*getRandomInt(0, Math.PI*2)*/,
            scale: undefined,
            speed: getRandomInt(-100, 100)/10,
            direction: {
                x:undefined,
                y:undefined,
            },
        }
        let transform = {
            width:getRandomInt(25, 50),
            height:getRandomInt(25, 50),
            translate:{
                x:undefined,
                y:undefined,
            },
            radius:getRandomInt(25, 60)/2,
            range: undefined,
            scale: undefined,
            parent: undefined,
            children: undefined,
        }
        let style = {
            fill:getRandomColor(),
            stroke: getRandomColor(),
            line: getRandomInt(2, 6), 
            alpha:getRandomInt(1, 10)/10,
            id: undefined
        }

        return {transform, style, position}
    }

   
    
    //console.log(r1);
    let spr= []
    let tangs = []

    for(let i = 0; i <5; i++){
        let prim = genRandSprite()
        tangs.push(new opt.Sprite(prim.transform, prim.style, prim.position, "Rectangle"))
        prim.style.id = i
        tangs[i].id = i
        tangs[i].schema = function rectangle(cx, r){
            r.path = new Path2D()
            let path = r.path
            if(r.against != undefined){
                //console.log(r.against);
            }
            //ctx.isPointInPath()
            
            r.is("Rectangle", ()=>{
                
                //console.log();
                //console.log(r.collide);
                //console.log(this);
                cx.rect(r.x-r.width/2, r.y-r.height/2, r.width, r.height)
                if(r.against != undefined){
                    //r.collide = cx.isPointInPath(path, r.against.x, r.against.y)
                }
                else{
                    //r.collide = false
                }
            })
            //Sconsole.log(this.collide);
        }
    }
    //console.log(spr);

    
    let circs = []
    for(let i = 0; i <5; i++){
        let prim = genRandSprite()
        circs.push(new opt.Sprite(prim.transform, prim.style, prim.position, "Circle"))
        prim.style.id = i
        circs[i].id = "Circle" + "_" + i
        circs[i].schema = function circle(cx, c){
            
            this.path = new Path2D()
            let path = this.path
            
            this.is("Circle", ()=>{
                this.width = this.radius
                this.height = this.radius
                //cx.beginPath()
                //console.log(this);
                cx.arc(this.x-this.radius/2, this.y-this.radius/2, this.radius, 0, 2 * Math.PI);
                //cx.closePath()
                //path.rect(this.x-this.radius/2, this.y-this.height/2, this.width, this.height)
            })
    
        }
    }
    //console.log(ctx);
    //console.log(circs);
    let vecDist = utils.vecDist
    spr = tangs.concat(circs)
    timeOutLoop(1000/fps, (g, u)=>{
        ctx.clearRect(0,0, canvas.width, canvas.height)
        each(spr, (s, i)=>{
            //s.x += getRandomInt(-20, 20)
            s.draw(ctx)
            s.is("Rectangle", (r)=>{
                //s.position.x+=1
                //console.log(r);
                each(spr, (s2)=>{
                    s2.is("Circle", (c)=>{
                        //s2.position.x= getRandomInt(25, 60)
                        //s2.fillstyle = getRandomColor()
                        c.against = r
                        let check = c.collide
                        //console.log(check);
                        //console.log(u)
                        //console.log(c);
                        //utils.vecDist()
                        let trans = vecDist(r, c)
                        if(ctx.isPointInPath(c.x , c.y)){
                            c.fillStyle = getRandomColor()
                            //console.log(c);
                        }
                       
                        //let trans = vecDist(r, c)
                        if(trans.x < r.width && trans.y < r.height){
                            //c.fillStyle = getRandomColor()
                        }
                        if(u%150 == 0){
                            //console.log(ctx.isPointInPath(c.x, c.y));
                            //console.log(trans);
                            
                        }
                        else{
                            //console.log(check)
                            //c.canDraw = true
                        }
                        
                        
                       // console.log(u);
                    })
                    
                    
                })
            })
            
            
            //s.fillStyle = getRandomColor()
            
        })
    
        
    })
   // console.log(spr);
    //let sprite = new opt.Sprite(r1.transform, r1.style, r1.position, r1.name)
    //sprite
    //sprite.draw(ctx)
}
}




function genRandomStyles (isCircle){
    let d
    if(isCircle){
        let r = getRandomInt(15,25)
        d = {x: r, y: r}  
    }
    else{
        d = v2(getRandomInt(25, 50), getRandomInt(25, 50))
    }  
    let v = getRandomVertex((d.x*2)/2, canvas.width-(d.x*2)/2, (d.y*2)/2, canvas.height-(d.y*2)/2)
    let f = {x:1, y:1}
    let s = 1;
    return {v:v,d:d,f:f,s:s}
}



