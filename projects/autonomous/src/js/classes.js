import * as til from './utils.js'
let utils = new til.Utils()
let fps = 12
let rotation = 0;
let v2 = utils.v2
let vecArith = utils.vecArith
let each = utils.each
let is = utils.is
let elementEvent = utils.elementEvent
let canvasWidth;
let canvasHeight;
let abs = Math.abs
let last = undefined
//https://github.com/tonethar/IGME-330-Master/blob/master/notes/canvas-6.md
// #1 CLASS CODE
// we've put these Sprite classes in a separate <script> tag from the rest of the code, but this code should really be in another file
let CONTEXT
let bboffset = {
    x:undefined,
    y:undefined
}

export class Sprite{
    
    constructor(pos,dim,fwd,speed=1,hashName){
      
        this.fillStyle = undefined
        this.originalFill = undefined
        this.lineWidth = 1
        this.strokeStyle = undefined
        this.rotation = 0
        this.rotSpeed = 0
        this.font = undefined
        this.idx = undefined
        this.name = this.constructor.name
        this.points = [3]
        this.isInPath = undefined
        this.against = undefined
        this.mousePos = {x:-1, y:-1, sect: false}
        this.seek = undefined
        this.reflectCount = 0
        this.mouseDown = undefined
        this.seeking = false
        this.last = undefined
        this.parent = undefined
        this.target = undefined
        this.caught = undefined
        this.seekPoint = []
        this.isAlive = true
        this.soundBool = true
        this.display = true;
        //this.dest
        Object.assign(this,{pos,dim,fwd,speed,hashName});
        
    }
    callback(ctx){
        //console.log(this.call);
        if(this.call != undefined){
            if(typeof this.call == "function"){
                
                this.call(ctx)
            }
        }
    }
    mouseOnSprite(ctx, sprite){
        elementEvent(".canvas", 'mousemove', (cvs, event)=>{
            //console.log(sprite);
            if (ctx.isPointInPath(sprite, event.offsetX, event.offsetY)) {
                //console.log(cvs);
            }
        })
    }

    
    drawOrigin(ctx, show){
        
        let offset = this.pos
        /*if(adj){
            if(this.constructor.name == "Rectangle"){
                offset = {x: this.pos.x + this.dim.x/2,
                    y:this.pos.y + this.dim.y/2}
            } 
        }     */   
        if(this.origin == undefined){
           
            this.origin = new Circle(offset, {x:3,y:3}, this.fwd, this.speed, this.hashName+"_origin")
            this.origin.changeStyle("yellow", this.lineWidth, undefined)
           
        }
        else{
            //console.log(this.origin);
            this.origin.pos = offset
            if(typeof this.origin.draw == "function"){
                this.origin.draw(ctx);
            }
            
            
        }
        if(this.constructor.name == "CircleAgent"){
                
            this.tri.origin = show
            //console.log(this.tri);
        }
        if(this.constructor.name == "RectangleAgent"){
                
            this.origin = offset
            //console.log(this.tri);
        }
        
        //console.log(this.constructor.name);
        if(this.constructor.name == "Line"){
            if(this.originDest == undefined){
                offset = this.dest
                //console.log(this);            
                this.originDest = new Circle(offset, {x:3,y:3}, this.fwd, this.speed, this.hashName+"_origin")
                this.originDest.changeStyle("yellow", this.lineWidth, undefined)
            }
            else{
                this.originDest.dest = offset
                this.originDest.draw(ctx);
            }
        }
        
        
        
    }
    moveAndDraw(ctx){
        canvasWidth = ctx.canvas.width
        canvasHeight = ctx.canvas.height
        ctx.save();
        this.moveX(ctx)
        this.moveY(ctx)
        this.draw(ctx);
        ctx.restore();
    }
    
   
    checkXBounds(ctx){
        let pad = {x:this.lineWidth, y: this.lineWidth}
        let bound = {x:this.dim.x, y: this.dim.x}
        
        is(this, "RectangleAgent", ()=>{
            bound.x = this.dim.x/2
            //console.log("Found");
        })
        
        if (this.pos.x <= (bound.x + pad.x) || this.pos.x >= ctx.canvas.width-(bound.x+pad.x)){ //s.pos.x <= s.dim.x/2 || 
            return true
        }
        return false
    }
    checkYBounds(ctx){
        let pad = {x:this.lineWidth, y: this.lineWidth}
        let bound = {x:this.dim.y, y: this.dim.y}
        is(this, "RectangleAgent", ()=>{
            bound.y = this.dim.y/2
            //bound.x = 
            //console.log("Found");
        })
        if (this.pos.y <= (bound.y+ pad.y) || this.pos.y >= ctx.canvas.height-(bound.y+ pad.y)){//s.pos.y <= s.dim.y/2 || 

           return true
        }
        return false
    }

    moveX(ctx){
        if(this.undefined || this.moveX == undefined||this.checkYBounds == undefined
            ||this.reflectX == undefined){
            return
        }
        let p = this.pos
        let center = this.center
        if(center != undefined){
            //console.log(center);
            if(this.speed>0){
                //let distX = abs(center.x - canvasWidth)
                let high = center.x >(canvasWidth-(this.dim.x*2))
                let low = center.x < 0+(this.dim.x*2)
                //console.log(high);
                
                if(this.checkXBounds(ctx)){
                    this.fwd.x *= -1;
                    //p.x -= this.fwd.x*this.speed;
                }
                else{
                    //this.reflectCount=0
                    //this.fwd.x *=-1
                }
                p.x += this.fwd.x*this.speed;
                this.pos = p
            }
        }
        
        
    }

    moveY(ctx){

        if(this.undefined || this.moveY == undefined ||this.checkYBounds == undefined
            ||this.reflectY == undefined){
            return
        }
        
        let p = this.pos
        let center = this.center
        if(center != undefined){
            if(this.speed>0){
                let c = center.x >(canvasWidth-(this.dim.x*2)) || center.x < (0+(this.dim.x*2))
                
                if(this.checkYBounds(ctx)){
                    this.fwd.y *= -1;
                    //p.y -= 2*this.fwd.y*this.speed;
                    //this.moveY(ctx)
                  
                    //this.reflectCount+=1
                }
                else{
                    //this.reflectCount=0
                    
                    //this.fwd.y=0
                }
                p.y += this.fwd.y*this.speed;
                this.pos = p
            }
        }
        
        
    }
       //https://stackoverflow.com/questions/39670599/canvas-triangle-pentagon-rectangle-collision-detection-with-eachother
    lineSegmentsIntercept = (function(){ // function as singleton so that closure can be used

        var v1, v2, v3, cross, u1, u2;  // working variable are closed over so they do not need creation 
                                   // each time the function is called. This gives a significant performance boost.
        v1 = {x : null, y : null}; // line p0, p1 as vector
        v2 = {x : null, y : null}; // line p2, p3 as vector
        v3 = {x : null, y : null}; // the line from p0 to p2 as vector
    
        function lineSegmentsIntercept (p0, p1, p2, p3) {
            v1.x = p1.x - p0.x; // line p0, p1 as vector
            v1.y = p1.y - p0.y; 
            v2.x = p3.x - p2.x; // line p2, p3 as vector
            v2.y = p3.y - p2.y; 
            if((cross = v1.x * v2.y - v1.y * v2.x) === 0){  // cross prod 0 if lines parallel
                return false; // no intercept
            }
            v3 = {x : p0.x - p2.x, y : p0.y - p2.y};  // the line from p0 to p2 as vector
            u2 = (v1.x * v3.y - v1.y * v3.x) / cross; // get unit distance along line p2 p3 
            // code point B
            if (u2 >= 0 && u2 <= 1){                   // is intercept on line p2, p3
                u1 = (v2.x * v3.y - v2.y * v3.x) / cross; // get unit distance on line p0, p1;
                // code point A
                return (u1 >= 0 && u1 <= 1);           // return true if on line else false.
                // code point A end
            }
            return false; // no intercept;
            // code point B end
        }
        return lineSegmentsIntercept;  // return function with closure for optimisation.
    })();
    

    
    initStyle(ctx){
        if(this.strokeStyle == undefined){
            this.strokeStyle = this.fillStyle
            this.lineWidth = 0.001
        }
        if(this.fillStyle == undefined){
            this.fillStyle = "black"
        }
        if(this.ctx == undefined){
            this.ctx = ctx
        }
        ctx.fillStyle = this.fillStyle
        ctx.lineWidth = this.lineWidth
		ctx.strokeStyle = this.strokeStyle
        if(this.hashName == undefined){
           this.hashName = this.constructor.name + "_" + this.fillStyle + "_" + this.strokeStyle + "_" + this.lineWidth
           //console.log(this.lineWidth);
        }
    }

    reflect(){
        this.reflectX()
        this.reflectY()
    }

    reflectX(){
        this.fwd.x *= -1;
        //console.log(this.fwd.x);
    }

    reflectY(){
        this.fwd.y *= -1;
    }
    changeColor(fill){
        this.fillStyle = fill
    }
    changeStyle(fill, line, stroke ){
        this.fillStyle = fill
        this.lineWidth = line
		this.strokeStyle = stroke
        this.hashName = this.constructor.name + "_" + this.fillStyle + "_" + this.strokeStyle + "_" + this.lineWidth
        
        
        
    }

    lookFind(target, sight){
        let curr = target
        if(curr.last== undefined){
            curr.last = curr
            
        }
        curr.seeking = true
        
        if(curr.idx == this.idx){
            //console.log("OK");
        }

        let tx = curr.pos.x
        let ty = curr.pos.y
        let x = this.seekPoint.x
        let y = this.seekPoint.y
        //console.log(target.last);
        //console.log(this.points);
        let l1 = {
            s:this.points[0],
            e:this.points[1]

        }
        let l2 = {
            s:this.points[1],
            e:this.points[2]

        }
        let l3 = {
            s:this.points[2],
            e:this.points[0]

        }
        


        let vecDist = (src, tar)=>{
            let distX = -(src.x - (tar.pos.x))
            let distY = (src.y - (tar.pos.y))
            let distXa = Math.abs(-(src.x - (tar.pos.x )))
            let distYa = Math.abs(-(src.y - (tar.pos.y )))
            let ang = Math.atan2(distX, distY)
            let abAngle = Math.atan2(distXa, distYa)
            return {
                x:distX + src.dx/2 + src.range,
                y:distY + src.dy/2 ,
                abs:{
                    x:distXa+ src.dx/2 + src.range,
                    y:distYa+ src.dy/2 , 
                },
                ang: ang,
                abAngle: abAngle,
                vx: Math.cos(ang)*tar.speed*10,
                vy: Math.sin(ang)*tar.speed*10,
                vxa: Math.cos(abAngle)*tar.speed*10,
                vya: Math.sin(abAngle)*tar.speed*10, 
                range: src.range
            }
        }
        let prox = vecDist(this.seekPoint, curr.last)
        let trans = vecDist(this.seekPoint, curr)
    
        
        //change target by proximity 
        if(trans.abs.x < prox.abs.x && trans.abs.y < prox.abs.y){
            
            if(this.against.idx == curr.idx && this.against.idx != curr.last.idx){
                
            }
            this.against = curr.last
            if(this.isInPath){
                
                trans = vecDist(this.seekPoint, curr.last)
            }
        }
        else{
            //console.log("no");
        }
        //console.log(this);
        
        let cross = {
            s:{
                x:this.seekPoint.x,
                y:this.seekPoint.y
            },
            e:{
                x:target.pos.x,//-(trans.abs.x/(this.dim.x + target.dim.x+(this.range/2)))/2,
                y:target.pos.y//+(trans.abs.y/this.dim.y)/2
            }
        }
        let range = this.seekPoint.range
        if(this.idx =="0"){
            //console.log(trans.abs.x);
        }
        
        let changeX = abs(this.pos.x - target.pos.x)
        let changeY = abs(this.pos.y - target.pos.y)
        if(this.lineSegmentsIntercept(l2.s, l2.e, cross.s, cross.e) && changeX <range + this.dim.x/2 &&
        this.lineSegmentsIntercept(l2.s, l2.e, cross.s, cross.e) && changeY <range + this.dim.y/2){
            //console.log(changeX)
            if(sight){
                let ang = Math.atan2(-(this.pos.x - target.pos.x), (this.pos.y - target.pos.y))- Math.PI/2
               
                if(changeX <this.dim.x){
                    this.fwd.x = Math.cos(ang)*this.speed*10
                    //this.fwd.x = trans.vx/this.speed
                }
                if(changeY<this.dim.y){
                    //this.fwd.x = trans.vx/this.speed
                    this.fwd.y = Math.sin(ang)*this.speed*10
                }
                //this.rotation = ang - (Math.PI)
                
                
            }
            //console.log(changeX)
        }
        else{

        }

    }


    soundFind(target, sound){
        if(target.last== undefined){
           // return
        }
        this.seeking = true
        
        if(target.idx == this.parent.idx){
            //console.log("OK");
        }

        let tx = target.pos.x
        let ty = target.pos.y
        let x = this.pos.x
        let y = this.pos.y
        //console.log(target.last);
        let vecDist = (src, tar)=>{
            let distX = -(src.pos.x - (tar.pos.x - bboffset.x))
            let distY = (src.pos.y - (tar.pos.y - bboffset.y))
            let distXa = Math.abs(-(src.pos.x - (tar.pos.x - bboffset.x)))
            let distYa = Math.abs((src.pos.y - (tar.pos.y - bboffset.y)))
            let ang = Math.atan2(distX, distY)- Math.PI/2
            let abAngle = Math.atan2(distXa, distYa)- Math.PI/2
            return {
                x:distX + src.dim.x/2,
                y:distY + src.dim.y/2,
                abs:{
                    x:distXa+ src.dim.x/2,
                    y:distYa+ src.dim.y/2, 
                },
                ang: ang,
                abAngle: abAngle,
                vx: Math.cos(ang)*tar.speed,
                vy: Math.sin(ang)*tar.speed,
                vxa: Math.cos(abAngle)*tar.speed,
                vya: Math.sin(abAngle)*tar.speed,
                diffx: src.pos.x - (tar.pos.x),
                diffy: src.pos.y - (tar.pos.y),
                dx:distX,
                dy:distY
            }
        }
        
        let trans = vecDist(this, target)
        if(target.last != undefined){
            let prox = vecDist(this, target.last)
            if(trans.abs.x < prox.abs.x && trans.abs.y < prox.abs.y){
                //console.log(target.idx);
                //console.log("OK");
                if(this.against.idx == target.idx && this.against.idx != target.last.idx){
                    //console.log(target.idx);
                    //console.log(target.last.idx);
                }
                this.against = target.last
                if(this.isInPath){
                    
                    trans = vecDist(this, target.last)
                }
            }
            else{
                //console.log("no");
            }
        }
        if(sound){
            if(this.parent.showVisor==false){
                this.fwd.x = trans.vx/this.speed
                
                this.fwd.y = trans.vy/this.speed
                target.fwd.x = -trans.vy/this.speed
                target.fwd.y = -trans.vx/this.speed
            }
            target.rotation = -trans.ang + (Math.PI)
            this.parent.rotation = -trans.ang*10
           
            
            
        }
        //-(trans.abAngle) //+ Math.PI/4)
      

    }

    
    manageSprites(ctx, collisions){
        if(CONTEXT==undefined){
            CONTEXT = ctx
        }
        bboffset.x = ctx.canvas.getBoundingClientRect().left
        bboffset.y = ctx.canvas.getBoundingClientRect().top
        //console.log(bboffset);
       //https://stackoverflow.com/questions/39670599/canvas-triangle-pentagon-rectangle-collision-detection-with-eachother
        
        var bb=ctx.canvas.getBoundingClientRect();
                        let offset = {
                            x:bb.left,
                            y:bb.top
                        }
        
        let sprites = ctx.sprites
        //console.log(sprites);
        is(this, "RectangleAgent", (rect)=>{
            each(sprites, (sprite)=>{
                //console.log(rect.idx);
                let rectPoints = rect.points
                is(sprite, "CircleAgent", (circ)=>{
                    if(last != undefined){
                        if(last.idx != circ.idx){
                            circ.last = last
                        }
                        
                        
                    }
                    let circPoints = rect.points
                    let dist = (r, c)=>{
                        return {
                            x:r.pos.x - c.pos.x,
                            y:r.pos.y - c.pos.y,
                        }
                    }
                    
                    let distY = rect.pos.x - circ.pos.x
                    let distX = rect.pos.y - circ.pos.y
                    let angle = Math.atan2(distX, -distY) - Math.PI/2
                    let angle2 = Math.atan2((rect.pos.x - (circ.pos.x - offset.x)), -(rect.pos.y - (circ.pos.y - offset.y))) - Math.PI/2
                    let speedX = Math.cos(angle)*rect.speed
                    let speedY = Math.cos(angle)*rect.speed
                    let speed2X = Math.cos(angle)*circ.speed
                    let speed2Y = Math.cos(angle)*circ.speed
                    
                    
                    circ.rotation = angle2
                    //rect.rotation = -angle
                    //mouse look 
                    if(circ.mouseDown){
                        
    
                        let mx = circ.pos.x - (circ.mousePos.x)
                        let my = circ.pos.y - (circ.mousePos.y)
                        let mAng =  Math.atan2(-mx, my) - Math.PI/2
                        let msx = Math.cos(mAng)*circ.speed*5
                        let msy = Math.sin(mAng)*circ.speed*5
                        circ.fwd.x = msx
                        circ.fwd.y = msy
                       // circ.rotation = mAng*.5
                        rect.seeking = false
                        //console.log(mx);
                    }
                    //if seeking enabled, using sound and sight 
                    if(rect.seek){
                        let rectSound = rect.sound;
                        rect.against = circ
                        rectSound.against = circ
                        
                        rect.target = circ
                        
                        if(ctx.isPointInPath(circ.pos.x, circ.pos.y)){ //&& rect.isInPath == false && (distX > circ.dim.x || distX > circ.dim.y)
                            rect.target = circ
                            rect.sound.checkCollision(circ, (collide)=>{
                                rect.lookFind(rect.target, rect.showVisor)
                                rect.sound.soundFind(rect.target, ctx.isPointInPath(circ.pos.x, circ.pos.y))
                                
                            })
                            
                        }
                       
                        
                    }
                    else{
                        rect.target = undefined
                    }
                    if(collisions){ //checks all collisions 
                        
                        rect.checkCollision(circ, (collide)=>{
                            
                            if(collide){
                                //console.log(circ.originalFill);
                                //rect.pos.x = rect.pos.x
                                //rect.pos.y =rect.pos.y
                               // rect.rotation = -rect.rotation
                               if(circ.tri.fillStyle == undefined){
                                circ.tri.fillStyle = utils.getRandomColor()
                               }
                                let triFill = circ.tri.fillStyle
                                //rect.seek == false
                                //console.log(circ.fillStyle);
                                //circ.tri.fillStyle = triFill
                                circ.tri.fillStyle =circ.originalFill
                                rect.fwd.x = rect.speed
                                rect.fwd.y = rect.speed
                                circ.changeStyle("red", circ.circle.lineWidth, circ.circle.strokeStyle)
                                rect.fwd.x *=-1.5
                                rect.fwd.y *=-1.5
                                //circ.fwd.x *=-2
                                //circ.fwd.y *=-2
                            }
                            else{
                                //console.log(circ.originalFill);
                                circ.fillStyle = circ.originalFill
                                //circ.tri.fillStyle = circ.originalFill
                                circ.changeStyle(circ.originalFill, circ.circle.lineWidth, circ.circle.strokeStyle)
                                
                                //circ.circle.changeStyle(circ.originalFill, circ.circle.lineWidth, circ.circle.strokeStyle)
                            }  
                        })
                    }
                    last = circ
                })
            })  
        })      
    }

    checkCollision(sprite, callback){
        //console.log(this.hashName);
        //console.log(sprite.hashName);
        let collide = false
        if(this.hashName != sprite.hashName && this.constructor.name != sprite.constructor.name){
            //console.log(this.hashName);
            //console.log(sprite.hashName);
            let paddingX = this.dim.x/2 + this.lineWidth
            let spritepadX = sprite.dim.x/2 + sprite.lineWidth
            let paddingY = this.dim.y/2 + this.lineWidth
            let spritepadY = sprite.dim.y/2 + sprite.lineWidth
            //console.log(paddingX); 
            //console.log(spritepadX);
            let x = this.pos.x + this.dim.x
            let sx = sprite.pos.x + sprite.dim.x
            let y = this.pos.y + this.dim.x
            let sy = sprite.pos.y + sprite.dim.x
            let distX = Math.abs(x-sx)//Math.abs(this.pos.x - (sprite.pos.x)); //-sprite.dim.x/2)
            let distY = Math.abs(y-sy) //Math.abs(this.pos.y - (sprite.pos.y));
            if(distX< paddingX + spritepadX-this.lineWidth && distY< paddingY + spritepadY-this.lineWidth){
                collide = true
                callback(collide)
            }
            else{
                if(this.constructor.name == "CircleAgent"){
                 
                    this.circle.fillStyle = this.circle.originalFill
                    
                }
                callback(collide)
            }           
        }
    }
    
}



export class RectangleAgent extends Sprite{
    constructor(pos,dim,fwd,speed, hashName, range){
        
        super(pos,dim,fwd,speed, hashName)
        this.circle = new Rectangle(this.pos, this.dim, this.fwd, this.speed, this.hashName +"_"+"Core")
        this.sound = new Circle(this.pos, {x:this.dim.x*2, y: this.dim.y*2}, this.fwd, this.speed, this.hashName +"_"+"Core")
       // this.visor = new RingSprite(this.pos, this.dim, this.fwd, this.speed, this.hashName +"_"+"Core")
        this.rotSpeed = 0.01
        this.range = range
        this.tri = undefined
        this.showVisor = false
        this.rotation = 0
        this.centerPoint = undefined
        this.points = []
        this.against = undefined
        this.originalFill = this.fillStyle

        this.seekPoint = []
    }


    draw(ctx){
        ctx.save();
        ctx.beginPath();
        //console.log(this.speed);
        //this.rotation+=.05
        this.circle.fwd = this.fwd
    
        this.circle.rotation = this.rotation
        let dist1 = 2;
        this.circle.initStyle(ctx)
        this.sound.initStyle(ctx)
        this.fillStyle = this.circle.fillStyle
        this.strokeStyle = this.circle.strokeStyle
        this.lineWidth = this.circle.lineWidth
        this.circle.draw(ctx)
        this.hashName = this.constructor.name + "_" + this.circle.fillStyle + "_" + this.circle.strokeStyle + "_" + this.circle.lineWidth
        let pos = this.circle.pos
        let dim = this.circle.dim
        //dim.x = dim.x/2
        //console.log(dim.x);
        let range = this.range + dim.x
        let center = {x: pos.x-dim.x, y: pos.y}
        this.center = center
        
        
        if(this.tri == undefined){
            this.tri = new Triangle(this.pos, this.dim, this.fwd, this.speed, this.hashName +"_"+"Core", this.range)
            this.tri.fillStyle = this.fillStyle
            this.tri.strokeStyle = this.strokeStyle
            this.tri.lineWidth = this.lineWidth
            this.tri.font = this.font
            this.tri.idx = this.idx
            this.tri.parent = this
            this.tri.range = this.range
            this.tri.initStyle(ctx)
            
        }
       // this.tri.pos = this.pos 
        //console.log(this.center);
        
        //this.tri.center = this.center
        //console.log(this.rotation);
        this.tri.rotation = this.rotation
        //console.log(this.origin);
        this.tri.origin = this.origin
        this.sound.parent = this
        this.centerPoint = this.tri.centerPoint
        this.points = this.tri.points
        this.tri.against = this.against
        this.isInPath = this.tri.isInPath
        this.tri.idx = this.idx
        this.circle.mousePos = this.mousePos
        this.tri.mousePos = this.mousePos
        this.seekPoint = this.tri.seekPoint
        //console.log(this.tri.mousePos);
        if(this.showVisor){
            this.tri.range = range
            
            this.tri.draw(ctx)
            
        }
        if(this.soundBool){
            this.sound.fillStyle = this.circle.fillStyle
            this.sound.draw(ctx)
        }
        
        //this.lastPos = pos
        ctx.closePath();
        ctx.restore();
    }

}

export class Triangle extends Sprite{
    constructor(pos, dim,fwd,speed, hashName, range){
        
        //console.log(pos);
        
        super(pos, dim,fwd,speed, hashName)
        this.rotSpeed = 0.01
        this.range = range
        this.showCollider = false
        this.rotation = 0
        this.font = ""
        this.origin = undefined
        this.parent = undefined
        this.left = undefined
        this.right = undefined
        
        //this.centerPoint = undefined
        let ps = this.pos
        let d = this.dim
     
        let center = {x: ps.x-d.x, y: ps.y}
        this.center = center
        
        let newCenter = {x:center.x-range, y: center.y}
        //this.parent.centerPoint = newCenter
        //this.centerPoint = newCenter
        this.points = []
        this.against = undefined
        this.seekPoint = []
    }
    draw(ctx){
       // console.log(this);
        ctx.globalAlpha = .3;
        //ctx.fillStyle = this.originalFill
        let pos = this.pos
        let dim = this.dim
        let range = this.range
        //console.log(this.range);
        let center = {x: pos.x-dim.x, y: pos.y}
        if(this.parent.constructor.name == "CircleAgent"){
            center = {x: pos.x-dim.x, y: pos.y}
            this.center = center
        }
        if(this.parent.constructor.name == "RectangleAgent"){
            center = {x: pos.x-dim.x/2, y: pos.y}
            this.center = center
        }
        let newCenter = {x:center.x-range, y: center.y}
        this.parent.centerPoint = newCenter
        this.centerPoint = newCenter
        ctx.save();
        ctx.translate(pos.x, pos.y);
        //this.rotation = 5
        ctx.rotate(this.rotation)
        ctx.translate(-pos.x, -pos.y);
        
        ctx.beginPath();
        
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(pos.x-range, pos.y-range/2);
        this.right = {x:pos.x-range, y: pos.y-range}
        
        ctx.lineTo(pos.x-range, pos.y+range/2);
        ctx.lineTo(center.x, center.y);

        
        
        this.points[0] = {
            x:center.x,
            y:center.y
        }
        this.points[1] = {
            x:pos.x-range,
            y:pos.y-range/2
        }
        this.points[2] = {
            x:pos.x-range,
            y:pos.y+range/2
        }
        //ctx.isPointInPath(_pos.x, _pos.y);
        
        
        if(this.against != undefined){
            //console.log(this.against);
            this.isInPath = ctx.isPointInPath(this.against.pos.x, this.against.pos.y)
        }
        this.mousePos.sect = ctx.isPointInPath(this.mousePos.x, this.mousePos.y)
        //console.log(this.isInPath);
        ctx.fill()

        ctx.stroke();
        ctx.closePath()
        
        ctx.restore();

        ctx.save()
        ctx.fillStyle = "black"
        ctx.font = this.font;
        //console.log(range);
       // console.log(this.dim);
        ctx.fillText(this.idx,pos.x-(this.dim.x/2)+5,pos.y+(dim.y/2)-1);
        ctx.restore()
        if(this.parent.name =="CircleAgent"){
            //ctx.arc(center.x-range + this.dim.x+ range/4,center.y,3,0,Math.PI * 2,false);
            this.seekPoint = {
                x:center.x-range + this.dim.x+ range/4,
                y:center.y,
                dx:this.dim.x, 
                dy:this.dim.y,  
                range: range
            }
        }
        else{
            //ctx.arc(center.x-range + this.dim.x + this.dim.y/4,center.y,3,0,Math.PI * 2,false);
            this.seekPoint = {
                x:center.x-range + this.dim.x/2 ,
                y:center.y,
                dx:this.dim.x, 
                dy:this.dim.y, 
                range: range
            }
        }
        
        if(this.origin){
            ctx.save();
            ctx.fillStyle = "yellow"
            //ctx.translate(pos.x - dim.x,pos.y);
            //ctx.rotate(this.rotation)
            ctx.translate(pos.x,pos.y);
            ctx.rotate(this.rotation)
            ctx.translate(-pos.x,-pos.y);
            ctx.beginPath();
            //ctx.arc(0,0,this.span/2,0,Math.PI * 2,false);
            if(this.parent.name =="CircleAgent"){
                ctx.arc(center.x-range + this.dim.x+ range/4,center.y,3,0,Math.PI * 2,false);
                
            }
            else{
                ctx.arc(center.x-range + this.dim.x/2 ,center.y,3,0,Math.PI * 2,false);
                
            }

            
            //this.centerPoint = {x:center.x-range, y:center.y}
            ctx.closePath();
            ctx.fill();
            ctx.stroke()
            ctx.restore();
            //console.log(this.parent);
        }
        
        

        //console.log(this.origin);
    }
}


export class CircleAgent extends Sprite{
    constructor(pos,dim,fwd,speed, hashName, range){
        
        super(pos,dim,fwd,speed, hashName)
        this.circle = new Circle(this.pos, this.dim, this.fwd, this.speed, this.hashName +"_"+"Core")
        this.sound = new Circle(this.pos, {x:this.dim.x*2, y: this.dim.y*2}, this.fwd, this.speed, this.hashName +"_"+"Core")
       // this.visor = new RingSprite(this.pos, this.dim, this.fwd, this.speed, this.hashName +"_"+"Core")
        this.rotSpeed = 0.01
        this.range = range
        this.showVisor = false
        this.rotation = 0
        this.centerPoint = undefined
        this.points = []
        this.against = undefined
        this.originalFill = undefined
        this.seekPoint = []
        this.tri = new Triangle(this.pos, this.dim, this.fwd, this.speed, this.hashName +"_"+"Core", this.range)
        this.tri.fillStyle = this.fillStyle
        this.tri.range = range
    }
    draw(ctx){
        this.circle.fwd = this.fwd
    
        this.circle.rotation = this.rotation
        let dist1 = 2;
        
        this.circle.fillStyle = this.fillStyle 
        this.strokeStyle = this.circle.strokeStyle
        this.lineWidth = this.circle.lineWidth
        this.circle.initStyle(ctx)
        this.circle.draw(ctx)
        this.hashName = this.constructor.name + "_" + this.circle.fillStyle + "_" + this.circle.strokeStyle + "_" + this.circle.lineWidth
        let pos = this.circle.pos
        let dim = this.circle.dim
        let range = this.range + dim.x
        let center = {x: pos.x-dim.x, y: pos.y}
        this.center = center
        
        
        if(this.tri == undefined){
            this.tri = new Triangle(this.pos, this.dim, this.fwd, this.speed, this.hashName +"_"+"Core", this.range)
            this.tri.fillStyle = this.fillStyle
            this.tri.range = range
        }
        //console.log(this.center);
        this.tri.strokeStyle = this.strokeStyle
        this.tri.lineWidth = this.lineWidth
        this.tri.font = this.font
        this.tri.idx = this.idx
        this.tri.center = this.center
        this.tri.fillStyle = this.originalFill
        this.circle.call = this.call
        this.sound.parent = this
        this.tri.origin = this.origin
        this.tri.parent = this
        this.tri.rotation = this.rotation
        this.circle.mousePos.x = this.mousePos.x
        this.circle.mousePos.y = this.mousePos.y
        //this.tri.mousePos = this.mousePos
        this.sound.mousePos.x = this.mousePos.x
        this.sound.mousePos.y = this.mousePos.y
        
        this.tri.mousePos.x = this.mousePos.x
        this.tri.mousePos.y = this.mousePos.y

        this.mousePos.sect = this.tri.mousePos.sect
        this.mousePos.sect = this.sound.mousePos.sect
        //console.log(this.mousePos);
        this.sound.idx = this.idx
        
        
        
        this.centerPoint = this.tri.centerPoint
        this.points = this.tri.points

        this.tri.initStyle(ctx)
        if(this.showVisor){
            this.tri.range = range
            this.tri.draw(ctx)
            
            //console.log(this.tri.range);
        }
        if(this.soundBool){
            this.sound.fillStyle = this.circle.fillStyle
            this.sound.draw(ctx)
        }
        
        //this.lastPos = pos
    }

}

export class Rectangle extends Sprite{
    constructor(pos,dim,fwd,speed, hashName){
        
        //console.log(pos);
        
        super(pos,dim,fwd,speed, hashName)
        this.rotation = 0
        this.points = []
    }
    
    
    draw(ctx){
        this.initStyle(ctx)
        
        let pos = this.pos
        let dim = this.dim
        //console.log();
        //ctx.clearRect(pos.x, pos.y , dim.x ,dim.y); 
        ctx.save();
        ctx.beginPath();
        ctx.translate(pos.x,pos.y);
        ctx.rotate(this.rotation)
        ctx.translate(-pos.x,-pos.y);
        ctx.rect(pos.x-dim.x/2, pos.y-dim.y/2, dim.x ,dim.y); 
        //this.mouseOnSprite(ctx, this)
        if(typeof this.call == "function"){
            this.call(ctx, this)
        }
        this.mousePos.sect = ctx.isPointInPath(this.mousePos.x, this.mousePos.y)
        
		ctx.fill()
        ctx.stroke();
        ctx.closePath()
        ctx.restore();

    }
}


export class RingSprite extends Sprite{
    constructor(pos, dest, dim,fwd,speed, hashName){
        
        console.log(pos);
        
        super(pos, dim,fwd,speed, hashName)
        //console.log(speed);
        this.dest = dest
        //this.hashName = hashName
        
    }
    draw(ctx){
        let LineTo = (src, dest)=>{
            ctx.beginPath();
            ctx.moveTo(src.x, src.y);
            ctx.lineTo(dest.x, dest.y);
            ctx.stroke();
        }
        //this.initStyle(ctx)
        this.dim.x = this.lineWidth
        this.dim.y = this.lineWidth
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(this.pos.x +1, this.pos.y+1);
        ctx.stroke();
        ctx.closePath()
        ctx.restore();
    }

}

export class Line extends Sprite{
    constructor(pos, dest, dim,fwd,speed, hashName){
        
        //console.log(pos);
        
        super(pos, dim,fwd,speed, hashName)
        //console.log(speed);
        this.dest = dest
        //this.hashName = hashName
        
    }
    draw(ctx){
        this.initStyle(ctx)
        this.dim.x = this.lineWidth
        this.dim.y = this.lineWidth
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(this.dest.x, this.dest.y);
        ctx.stroke();
        ctx.closePath()
        ctx.restore();
     
    }
}

export class Circle extends Sprite{
    constructor(pos,dim,fwd,speed, hashName){
        
        //console.log(pos);
        
        super(pos,dim,fwd,speed, hashName)
        //console.log(speed);
        this.rotation
        //this.hashName = hashName
        
    }
    draw(ctx){
        this.initStyle(ctx)
        ctx.save();
        ctx.translate(this.pos.x,this.pos.y);
        ctx.rotate(this.rotation)
        ctx.beginPath();
        //ctx.arc(0,0,this.span/2,0,Math.PI * 2,false);
        ctx.arc(0,0,this.dim.x,0,Math.PI * 2,false);
        ctx.closePath();
        if(this.against != undefined){
            this.isInPath = ctx.isPointInPath(this.against.pos.x, this.against.pos.y)
        }
        
        //if(dist<this.dim.x){}
        this.mousePos.sect = ctx.isPointInPath(this.mousePos.x, this.mousePos.y)
        
        ctx.fill();
        ctx.stroke()
        ctx.restore();
    }

}



// #3 - Inheritance example. Note that `RingSprite` is using all the methods of Sprite 
// except for `draw()`, which it is replacing (overriding) with its own implementation

export class ImageSprite extends Sprite{
    constructor(x=0,y=0,span=10,fwd={x:1,y:0},speed=0, img=spriteImage){
        
        
        
        super(x,y,span,fwd,speed)
        this.rotation = 0
        this.img = img
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
        //Object.assign(this,{img});
    //console.log(this);
    }
    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.img, -this.span/2, -this.span/2, this.span, this.span);
        
        ctx.restore();
        //this.context = ctx
        this.update()
        
    }
    update(){
        this.rotation+=1*(Math.PI/180);
        //console.log(this.rotation);
    }

}



export class InstanceManager{
    constructor(){
        console.log("New Instance Manager");
        this.sprites = []
    }
    manageSprites(ctx){

        let sprites = ctx.sprites
        for (let i = 0; i < sprites.length; i++) {
            let sprite = sprites[i];
            
            for (let k = 0; k < sprites.length; k++) {
                let sub = sprites[k];
                sprite.checkCollision(sub)
                //sub.checkCollision()
                
            }
        }
        
    }
}
