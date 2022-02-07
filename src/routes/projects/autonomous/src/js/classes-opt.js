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
//https://github.com/tonethar/IGME-330-Master/blob/master/notes/canvas-6.md
// #1 CLASS CODE
// we've put these Sprite classes in a separate <script> tag from the rest of the code, but this code should really be in another file



export class Sprite{
    
    constructor(transform, style, position, name){
        this.name = name
        this.x = position.x
        this.y = position.y
        this.radius = transform.radius
        this.rotation = position.rotation
        this.width = transform.width
        this.height = transform.height
        this.speed = position.speed
        this.schema = undefined
        this.fillStyle = style.fill
        this.strokeStyle = style.stroke
        this.lineWidth = style.line
        this.updateStyles(style)
        this.position = position
        this.style = style
        this.transform = transform
        this.collide = undefined
        this.path = undefined
        this.canDraw = true;
        this.against = undefined
        this.id
        //new Path2D().
        //this.dest
        Object.assign(this,{transform,style});
        
    }

    updateStyles(style){
        this.fillStyle = style.fill
        this.strokeStyle = style.stroke
        this.lineWidth = style.line
    }

    vectDiff(v1, v2){
        return {
            x: Math.abs(v1.x - v2.x),
            y: Math.abs(v1.y - v2.y)
        }
    }

    checkIntersect(ctx, against){
       if(against != undefined){
           //console.log(against);
        this.against = against
        let d = this.vectDiff(this, this.against)
        //console.log(d);
        if(d.x < this.width/2 || d.y < this.height/2){
            this.collide = true;
            //console.log(this.id);
        }
        if(ctx.isPointInPath( d.x, d.y ) ||
            ctx.isPointInPath( d.x + this.width, d.y ) ||
            ctx.isPointInPath( d.x, d.y + this.height ) ||
            ctx.isPointInPath( d.x + this.width, d.y + this.height ) ){
                //this.collide = true;
                //this.against.collide = true;
                //return true
            }
            else{
                //this.collide = false
            }
       }
        //return false
    }

    drawCTX(ctx){
        //ctx.globalCompositeOperation = 'destination-out'
        this.position.x = this.x 
        this.position.y = this.y
        ctx.fillStyle = this.fillStyle
        ctx.strokeStyle = this.strokeStyle
        ctx.lineWidth = this.lineWidth
        
        
        this.create(ctx)
        
    }

    

    create(ctx){
        if(this.schema != undefined){
            ctx.save()
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation)
            ctx.translate(-this.x, -this.y);
            //ctx.moveTo(this.x, this.y);
            ctx.beginPath();
            //ctx.beginPath();
            this.schema(ctx, this)
            
            
            ctx.fill()
            //ctx.fill(this.path)
            ctx.stroke()
            //ctx.stroke(this.path)
            //ctx.closePath();
            ctx.restore()
            ctx.closePath();
        }
    }

    draw(ctx){
        canvasWidth = ctx.canvas.width
        canvasHeight = ctx.canvas.height
        //ctx.clearRect(0,0, canvasWidth, canvasHeight)
        if(this.canDraw){
            this.drawCTX(ctx)
        }
    }

    is(n, callback){
        if(this.name == n){
            callback(this)
        }
        
    }
    isorIsnt(n, callback){
        if(this.name == n){
            callback(true)
        }
        else{
            callback(false)
        }
    }
    
    moveX(ctx){

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
        let p = this.pos
        let center = this.center
        if(center != undefined){
            //console.log(center);
            if(this.speed>0){
                //let distX = abs(center.x - canvasWidth)
                let high = center.x >(canvasWidth-(this.dim.x*2))
                let low = center.x < 0+(this.dim.x*2)
                //console.log(high);
                p.x += this.fwd.x*this.speed;
                if(this.checkXBounds(ctx)){
                    this.reflectX();
                    
                }
                else{
                    //this.reflectCount=0
                    //this.fwd.x *=-1
                }
                this.pos = p
            }
        }
        
        
    }

    moveY(ctx){
        
        let p = this.pos
        let center = this.center
        if(center != undefined){
            if(this.speed>0){
                let c = center.x >(canvasWidth-(this.dim.x*2)) || center.x < (0+(this.dim.x*2))
                p.y += this.fwd.y*this.speed;
                if(this.checkYBounds(ctx)){
                    this.reflectY();
                    //this.reflectCount+=1
                }
                else{
                    //this.reflectCount=0
                    
                    //this.fwd.y=0
                }
                this.pos = p
            }
        }
        
        
    }

    
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

export class RectangleAgent extends Sprite{
    constructor(pos,dim,fwd,speed, hashName, range){
        
        super(pos,dim,fwd,speed, hashName)
        this.circle = new Rectangle(this.pos, this.dim, this.fwd, this.speed, this.hashName +"_"+"Core")
        this.sound = new Circle(this.pos, {x:this.dim.x*2, y: this.dim.y*2}, this.fwd, this.speed, this.hashName +"_"+"Core")
       // this.visor = new RingSprite(this.pos, this.dim, this.fwd, this.speed, this.hashName +"_"+"Core")
        this.rotSpeed = 0.01
        this.range = range
        
        this.showVisor = false
        this.rotation = 0
        this.centerPoint = undefined
        this.points = []
        this.against = undefined
        this.originalFill = this.fillStyle
    }

    changeRange(rn){
        //this.range = JSON.parse(rn)
        //console.log(rn);
        is(this, "RectangleAgent", (r)=>{
            //r.range = JSON.parse(rn)
            //r.tri.range = r.range
            //console.log(r);
        })
    }

    draw(ctx){
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
        
        this.tri.origin = this.origin
        
        this.centerPoint = this.tri.centerPoint
        this.points = this.tri.points
        this.tri.against = this.against
        this.isInPath = this.tri.isInPath
        
        this.circle.mousePos = this.mousePos
        this.tri.mousePos = this.mousePos
        //console.log(this.tri.mousePos);
        if(this.showVisor){
            this.tri.range = range
            
            this.tri.draw(ctx)
            this.sound.fillStyle = this.circle.fillStyle
            this.sound.draw(ctx)
            //this.sound.against = this.circle;
            //console.log(this.sound.isInPath);
            //console.log(this.tri.range);
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
        //console.log(this.tri.fillStyle);
        //this.tri.rotation = this.rotation
        
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
        
        
        
        
        this.centerPoint = this.tri.centerPoint
        this.points = this.tri.points

        this.tri.initStyle(ctx)
        if(this.showVisor){
            this.tri.range = range
            this.tri.draw(ctx)
            this.sound.fillStyle = this.circle.fillStyle
            this.sound.draw(ctx)
            //console.log(this.tri.range);
        }
        //this.lastPos = pos
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
        this.centerPoint = newCenter
        this.points = []
        this.against = undefined
    }
    draw(ctx){
       // console.log(this);
        ctx.globalAlpha = .5;
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
        ctx.lineTo(pos.x-range*2, pos.y-range);
        this.right = {x:pos.x-range*2, y: pos.y-range}
        
        ctx.lineTo(pos.x-range*2, pos.y+range);
        ctx.lineTo(center.x, center.y);
        
        //ctx.isPointInPath(_pos.x, _pos.y);
        
        this.points[0] = center
        this.points[1] = {x:pos.x-range*2, y: pos.y-range}
        this.points[2] = {x:pos.x-range*2, y: pos.y+range}
        if(this.against != undefined){
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
            ctx.arc(center.x-range,center.y,3,0,Math.PI * 2,false);
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
