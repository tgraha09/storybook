let self 
let previousframe
const frames = [];
export class Utils{
    constructor(timeOut=undefined, exit=undefined, frameID=0){
        this.timeOut = timeOut
        this.exit = exit
        this.frameID = frameID
        this.currentLoop = undefined
        //console.log(this); 
        self = this
        
    }

    vecArith(v1, v2, highorlow=-1, abs=true){
        let res
        if(v1.x!=undefined){
            if(abs){//add
                if(highorlow>=0){
                    res = {
                        x:Math.abs(v1.x + v2.x),
                        y:Math.abs(v1.y + v2.y)
                    } 
                }
                else{
                    res = {
                        x:Math.abs(v1.x - v2.x),
                        y:Math.abs(v1.y - v2.y)
                    } 
                }
               
            }
            else{
                if(highorlow>=0){
                    res = {
                        x:v1.x + v2.x,
                        y:v1.y + v2.y
                    } 
                }
                else{
                    res = {
                        x:v1.x - v2.x,
                        y:v1.y - v2.y
                    } 
                }
            }
        }
        
        
        return res
    }

    each(arr, callback){
        if (typeof callback == "function"){
            for(let i = 0; i < arr.length; i++){
                callback(arr[i])
            }
        }
    }

    average(array){
        array.reduce((a, b) => a + b) / array.length;
        return array;
    }

    is(obj, name, callback){
        if(obj.constructor.name == name){
            callback(obj)
        }
    }

    elementEvent(name, event, callback){
        let element = document.querySelector(name)
        //console.log(element);
        if (typeof callback == "function"){
            if(element != undefined){
                element.addEventListener(event, (e)=>{
                    callback(element, e)
                })
            }
        }
    }
    
    getFPS() { 
        let fps;
        let currentframe = performance.now();
        while (frames.length > 0 && frames[0] <= currentframe - 1000) {
        frames.shift();
        }
        frames.push(currentframe);
        fps = frames.length;
        
        return fps
    }
    
    v2(x, y){
        return {x: x,y: y}
    }

    stopLoop(){
        //console.log(self.currentLoop);
        cancelAnimationFrame(self.currentLoop)
    }

    loop(callback){
        //console.log("LOOP");
        if (typeof callback == "function"){
            self.currentLoop = window.requestAnimationFrame(()=>{
                self.exit = callback(self.exit)
                self.loop(callback)
            });
            
        }

    }

    timeOutLoop(time, callback){
        //console.log("FPS LOOP");
        let tick
        if (typeof callback == "function"){
            tick = setTimeout(()=>{
                //console.log("FPS LOOP");
                self.exit = callback(self.exit, tick) 
                self.timeOutLoop(time, callback)
            },time);
            
        }
        self.timeOut = tick
        
    }

    clearTimeOutLoop(){
        //console.log(self);
        clearTimeout(self.timeOut)
    }


    getRandomColor(){
        function getByte(){
            return 55 + Math.round(Math.random() * 200);
        }
        return "rgba(" + getByte() + "," + getByte() + "," + getByte() + ",.8)";
    }

    getRandomVertex(minX = 0, maxX, minY = 0, maxY){
        let that = self
        //console.log(that);
        return {x:that.getRandomInt(minX, maxX), y:that.getRandomInt(minY, maxY)}
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

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    vecDist (src, tar){
        //console.log(tar.speed);
        let distX = src.x - tar.x
        let distY = src.y - tar.y
        let distXa = Math.abs(src.x - tar.x)
        let distYa = Math.abs(src.y - tar.y)
        let ang = Math.atan2(distX, distY)
        let abAngle = Math.atan2(distXa, distYa)
        return {
            x:distX + src.width/2,
            y:distY + src.height/2,
            abs:{
                x:distXa+ src.width/2,
                y:distYa+ src.height/2, 
            },
            ang: ang,
            abAngle: abAngle,
            vx: Math.cos(ang)*tar.speed*10,
            vy: Math.sin(ang)*tar.speed*10,
            vxa: Math.cos(abAngle)*tar.speed*10,
            vya: Math.sin(abAngle)*tar.speed*10
        }
    }
}