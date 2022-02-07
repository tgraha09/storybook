
const utility = {
    findInText:(corrections, string)=>{
        let cor = corrections.results
        //console.log(cor);
        let sentences = string.split(". ")
          //.sentence.split(" ")
        //console.log(sentences);
       // let context = _words.context
        let c1 = 0
        let pos = []
        let lastword = undefined
        let lastN = 0
        let send = undefined
        let disp = []
       // console.log(_words.context.offset);
        utility.each(sentences, (sentence, i)=>{
            let s = sentence
            //console.log(s);
            utility.each(cor, (c, k)=>{
                let length = c.context.length
                let offset = c.context.offset
                let text = c.context.text   
                let s = c.sentence
                //"".substring
                let dotstart = text.substring(0,3)
                let dotend = text.substring(text.length - 3, text.length)
                if(dotstart == "..."){
                    text = text.substring(3,text.length)
                    //console.log(text);
                    //console.log(dotend);
                }
                
                if(dotend == "..."){
                    text = text.substring(0,text.length - 3)
                    //console.log(text);
                }

                if(text.substring(1,2).includes(" ") == true){
                    text = text.substring(2,text.length)
                    //console.log("REMOVE");
                    //console.log(dotend);
                }
                if(text.substring(text.length - 3,text.length).includes(" ") == true){
                    text = text.substring(0,text.length - 3)
                    //console.log("REMOVE");
                    //console.log(dotend);
                }
                console.log("Check");
                console.log(sentence);
                console.log(text);
               
            })
        })
        //console.log(disp);

        return send
        //console.log(c1);
        //console.log(word.length);
    },
    includes:(string1, string2)=>{
        let count = 1;
        let found = false
        
        
        let b = string2.split(" ")
        let a = string1.split(" ")
        //a = a.slice(0, b.length) 
        //console.log(a);
        //console.log(b);
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                //console.log(a[i]);
                if(a[i] === b[i]){
                    count++
                    
                }
                if(count == a.length){
                    return true
                }
                
            }
            //console.log(a[i]);
            if(a[i] === b[i]){
                count++
                
            }
            if(count == a.length){
                return true
            }
            
        }
        return false
    },
    findElement:(id, eventName, callback)=>{
        let element = document.querySelector(id)
        element.addEventListener(eventName, (event)=>{
            callback(event, element)
        })
        
        return element
    },
    getRandomInt:(max)=>{
        return Math.floor(Math.random() * max);
    },
    getRequest:(_url, callback)=>{
        let done = false;
        
        console.log("GetRequest From: " + _url);
        const xhr = new XMLHttpRequest();
        const url = _url;
                
            // 3. set `onerror` handler
            xhr.onerror = (e) => console.log("error");
            
            // 4. set `onload` handler
            xhr.onload = (e) => {
                if(typeof callback == "function"){
                    const jsonString = e.target.response;
                    const json = JSON.parse(jsonString);
                    callback(e, json)
                    
                }
                else{
                    console.log("callback is not a function");
                }
            }; // end xhr.onload
            xhr.withCredentials = true;
            //xhr.setRequestHeader( 'Access-Control-Allow-Origin', '*');
            // 5. open the connection using the HTTP GET method
            xhr.open("GET",url);
            xhr.onreadystatechange = ()=>{
                
            }
            // 6. we could send request headers here if we wanted to
            // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader
            
            // 7. finally, send the request
            xhr.send();
           
    },
    removeHTML:(str)=>{
        return str.replace(/<[^>]*>?/gm, '')
    },
    getSessionStorage:(key, callback)=>{
        let data = undefined
        let time = setInterval(function (){
            data = sessionStorage.getItem(key) 
            
            if(data != "" && data != null){
                
                callback(data)
                clearInterval(time)
                
            }
        }, 200);
      
        
    },
    getStorage:(key, callback)=>{
        let data = undefined
        let time = setInterval(function (){
            data = localStorage.getItem(key) 
            
            if(data != "" && data != null){
                
                callback(data)
                clearInterval(time)
                
            }
        }, 200);
      
        
    },
    each:(arr, callback)=>{
        
        if (typeof callback == "function"){
            for(let i = 0; i < arr.length; i++){
               let next = callback(arr[i], i)
               if(next){
                   //console.log("NEXT");
                   continue
               }
            }
        }
    },
    sentenceFormat:(_phrase, offset)=>{
        let phrase = _phrase
        let dotstart = phrase.substring(0,3)
        let dotend = phrase.substring(phrase.length - 3, phrase.length)
        //console.log(offset);
        if(dotstart == "..."){
            //console.log("START: " + phrase);
            phrase = phrase.substring(3,phrase.length)
            offset-=3
            
            //console.log(dotend);
        }
        
        if(dotend == "..."){
            phrase = phrase.substring(0,phrase.length - 3)
            //console.log(text);
        }
        return {phrase, offset}
    }
    
}

//get the IP addresses associated with an account


//Test: Print the IP addresses into the console
//getIPs(function(ip){console.log(ip);});

export {utility}