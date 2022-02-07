import * as grammar from './grammar.js' //custom grammar for API's
import * as utility from './utils.js' //custom utility 

const util = utility.utility

const api = grammar.custom
//default text
let test = "I hate wet and reiny days. It rained a lot in 1816.... a lot - like everyday; the weather in Europe was abnormally wet because it rained in Switzerland on 130 out of the 183 days from April to September. If I was Mary Shelley I might decide to write a book too. Afterall, it was the onnly thing you could do without TV or anything. She said that she passed the summer of 1816 in the environs of Geneva...we occasionally amused ourselves with some German stories of ghosts... These tales excited in us a playful desire of imitation So, people were stuck inside and bored. Mary Shelley decided to write a book becuase it was so awful outside. I can totally see her point, you know? I guess I would write a novel if there was nothing else to do."+" This led me to writing my poems with keeping an underlying theme in mind. Keeping a theme throughout, allowed for me to guide the metaphors in the context of the poem. One of the most metaphor driven poem’s I had written this semester, was “Plotted Petals”. This poem was meant to surface the preservation in death through the work of a groundskeeper for a graveyard. My initial draft of the poem gave way for a good context for metaphors surrounding death. Because being a grounds keeper, inherently surrounds the individual around gardening tools and the ground itself. These aspects that pertain to the job allowed for my poem to take the context of this job and apply it to a grave extreme such as burying a body. Specifically, during a funeral which will then set the tone of the poem. As such, the perspective of the poem being from the groundskeeper required that the individual should have experience in this kind of work for a long period of time. Which called upon the perspective of having buried so many people because of being the grounds keeper for a graveyard. The setting and job experience surrounding death, created an environment for the metaphors of preservation to flourish within my writing. This being represented through the raking and retrieval of dead rose petals and leaves."

let gram = []
let edits = [] //history edits
let editIDX = 0 //edit index

export const App = {
    init: () => { //initializes app and events 
        //prepares storage 
        localStorage.setItem("grammrCheck", "")
        localStorage.setItem("spellCheck", "")
        //init vue 
        App.initVue()
        //init editable content 
        util.findElement("#user-input").contentEditable = "true"
       

        
    },
    initVue: () => {
        //vue app
        let vueApp = new Vue({
            el: '#root',
            data: {
                input: test,
                grammarReport: [],
                str:""
            },
            methods: {
                init() {
                    console.log("Vue Initializing");

                }, changeOption:(e)=>{
                    let element = e.target
                    let options = document.querySelectorAll("#op")
                    let e_idx = 0
                    //console.log(options[0].firstChild);
                    //console.log(element.value);
                    util.each(options, (p, i)=>{
                        if(p.isEqualNode(element)){
                            e_idx = i //find reference to correct index in report 
                        }
                        
                    })
                    //get highlighted text
                    let highlight = document.querySelector(".cor"+e_idx)
                    
                    //options[0].firstChild.textContent = highlight.textContent
                    if(options[e_idx].firstChild.textContent == ""){
                        //console.log(highlight.textContent);
                        options[e_idx].firstChild.textContent = highlight.textContent
                    }
                    
                },
                changeWord: (e)=>{ //changes the word that was highlighted in the text box 

                    //get text
                    let userInput = util.findElement("#user-input")
                    let text = util.removeHTML(userInput.innerHTML) 
                    //
                    
                    //loop through all options 
                    let options = document.querySelectorAll("#op")
                    //console.log(options[0].firstChild);
                    let errorsList = document.querySelectorAll("#error")
                    let e_idx
                    let element = e.target
                    util.each(options, (p, i)=>{
                        if(p.isEqualNode(element)){
                            e_idx = i //find reference to correct index in report 
                        }
                        
                    })
                    //get highlighted text
                    let highlight = document.querySelector(".cor"+e_idx)
                    //document.firstChild
                    

                    let valueNew = element.value
                    let quote = highlight.getAttribute("name")
                   
                    if(quote != undefined){
                        //
                        if(quote == "open"){
                            highlight.textContent = valueNew + highlight.innerHTML.replace(/^"|"$/g, '')
                        }
                        else{
                            highlight.textContent = highlight.innerHTML.replace(/^"|"$/g, '') + valueNew
                        }
                    }
                    else{
                        //console.log("NORMAL");
                        highlight.textContent = valueNew
                    }
                    App.vue.input = userInput.innerHTML
                    edits.push(userInput.innerHTML)
                    editIDX++;
                    
                },
                paraphrase(){ //paraphrases text into new sence
                    //clear report 
                    App.vue.grammarReport = []
                    //get text 
                    let userInput = util.findElement("#user-input")
                    let text = util.removeHTML(userInput.innerHTML) 
                    edits.push(App.vue.input)
                    editIDX++;
                    
                    let wordsList = text.split(" ")
                    let words = []
                    let displayNew = []
                   
                    let index = 0;
                    let senIDX = 0;
                    
                    //iterate through list of words 
                    util.each(wordsList, (w, i)=>{
                        let length = w.length
                        //use webhpacked function for synonyms 
                        let sug = window.getSynonyms(w)
                        let suggestions = []
                        //gather all possibly found 
                        if(sug != undefined){
                            if(sug.n != undefined){
                                util.each(sug.n, (n, h)=>{
                                    suggestions.push(n)
                                })
                            }
                            if(sug.r != undefined){
                                util.each(sug.r, (r, h)=>{
                                    suggestions.push(r)
                                })
                            }
                            if(sug.s != undefined){
                                util.each(sug.s, (s, h)=>{
                                    suggestions.push(s)
                                })
                            }
                           
                        }

                        let idx = util.getRandomInt(suggestions.length)
                        // synonym from random idx
                        let replacement = suggestions[idx]
                        //push word object holding text position and length 
                        words.push({
                            word: w,
                            length: length,
                            i: i,
                            start: index,
                            end: index + length,
                            senIDX: senIDX,
                            corrected: replacement
                        })
                        index += length + 1;
                        senIDX += length + 1;
                        
                        
                    })
                    
                    //new display of text 
                    let disp = ""
                    util.each(words, (w, i)=>{
                        if(w.corrected != undefined){ //only display words that were found 
                        
                            disp += w.corrected + " "
                        }
                        else{
                            disp += w.word + " "
                        }
                        
                    })
                    //override input variable from Vue
                    App.vue.input = disp
                    edits.push(disp)
                   // editIDX++;
                    
                },
                spellCheck(){ //checks spelling in user input 
                    //clear report 
                    App.vue.grammarReport = []
                    //gather text 
                    let userInput = util.findElement("#user-input")
                   
                    let text = util.removeHTML(userInput.innerHTML) //App.text

                    edits.push(App.vue.input)
                    editIDX++
                    let count = 0
                    //getting grammar
                    api.grammarSpellCheck(text, (json)=>{
                        //storing object
                        localStorage.setItem("grammarSpellCheck", JSON.stringify(json))
                    })
                    let display = ""
                    //getting grammar from local storage
                    util.getStorage("grammarSpellCheck", (json)=>{
                            let ele = JSON.parse(json)
                            if(ele.spellingErrorCount == 0){
                                alert("No Errors Found")
                                //console.log("NO ERRORS");
                                return
                            }
                            
                            let j = ele.elements[0].errors
                            
                            let words = []
                            let sentences = []
                            
                            let sentenceList = text.match(/\(?[^\.\?\!]+[\.!\?]\)?/g);
                            let wordsList = text.split(" ")
                            let index = 0;
                            let senIDX = 0;
                            util.each(wordsList, (w, i)=>{
                                let length = w.length
                                
                                words.push({
                                    word: w,
                                    length: length,
                                    i: i,
                                    start: index,
                                    end: index + length,
                                    senIDX: senIDX,
                                    corrected: undefined
                                })
                                index += length + 1;
                                senIDX += length + 1;
                            })
                            let sen = ""
                            
                            let fullsentence = undefined
                            //loop through results
                            util.each(j, (u, i)=>{
                                //word offset
                                let offset = u.position
                                //loop through words
                                util.each(words, (_w, k)=>{
                                    let w = _w
                                    sen += w.word + " "
                                    if(w.word.includes(".") || w.word.includes(",")){
                                    
                                        fullsentence = sen
                                        sen = ""
                                        w.word = w.word.substring(0, w.word.length - 1)
                                        
                                    }
                                    else{
                                        fullsentence = undefined
                                    }
                                    if(fullsentence != undefined){
                                        //console.log(fullsentence);
                                    }
                                    
                                    if(w.start == offset){
                                        //console.log("FOUND TEST");
                                        words[k].corrected = '<p id="hl" class="cor'+i+'">' +  words[k].word + '</p>'
                                        //indices for substring for display text
                                        let low = words[k].start - (offset*0.25)
                                        if(low < 0){
                                            low = 0
                                        }
                                        let high = words[k].length + (offset*0.25)
                                        if(high > text.length){
                                            high = text.length
                                        }
                                        let highlight = text.substring(low, words[k].start + high)
                                        //temp array for suggestions list
                                        let arr = []
                                        //populating grammar report 
                                        App.vue.grammarReport.push({
                                            message: u.word,
                                            suggestions: arr.concat("", u.suggestions),
                                            text: highlight
                                        })
                                        
                                    }
                                })
                                let disp = ""
                                util.each(words, (w, i)=>{
                                if(w.corrected == undefined){
                                    disp += w.word + " "
                                }
                                else{
                                    disp += w.corrected + " "
                                }
                            
                            })
                            //new text 
                            App.vue.input = disp
                            display = disp
                        
                        
                        })
                        edits.push(display)
                        //console.log(editIDX);
                    }) 
                    
                    //clearing old grammar 
                    localStorage.setItem("grammarSpellCheck", "")
                    
                },
                grammarCheck() { //checks the grammar for text input using another API

                    let userInput = util.findElement("#user-input")
                    let text = util.removeHTML(userInput.innerHTML) //App.text
                    let report = undefined
                    App.vue.grammarReport = []
                    //adding to edit list for do and undo 
                    edits.push(App.vue.input)
                    editIDX++

                    let count = 0

                    api.grammarCheck(text, (json) => {
                        //storing grammar check object from API 
                        localStorage.setItem("grammarCheck", JSON.stringify(json))
                    })
                    //getting local storage of json object 
                    util.getStorage("grammarCheck" ,(json)=>{
                       
                        let words = []
                        let sentences = []
                        let j = JSON.parse(json)
                        if(j == undefined){
                            return
                        }
                        let sentenceList = text.match(/\(?[^\.\?\!]+[\.!\?]\)?/g);
                        let wordsList = text.replace('\\"').split(" ")
                        //console.log(wordsList);
                        let index = 0;
                        let senIDX = -1;
                        util.each(wordsList, (w, i)=>{
                            let length = w.length
                            let isQuote = false
                            
                            let q = undefined
                            //removes quites for word length only 
                            if(w.includes('\"')){
                               
                                q = w.search('\"')
                                w = w.replace('\"', "")
                                //w = wordsList[i]
                                isQuote = true
                                
                            }
                            if(isQuote){ //check if its quoted 
                                words.push({
                                    word: w.replace('"', ''),
                                    length: w.replace('"', '').length,
                                    i: i,
                                    start: index,
                                    end: index + (w.replace('"', '').length),
                                    senIDX: (senIDX-1),
                                    corrected: undefined, 
                                    quotePos:index + q
                                })
                            }
                            else{
                                words.push({
                                    word: w,
                                    length: length,
                                    i: i,
                                    start: index,
                                    end: index + length,
                                    senIDX: senIDX,
                                    corrected: undefined, 
                                    quotePos: undefined
                                })
                            }
                            
                            
                            index += length + 1;
                            senIDX += length + 1;
                        })
                        //console.log(j[0].matches);
                        
                        let display = undefined
                        
                        util.each(j[0].matches, (u, i)=>{
                            let disp = ""
                            
                            let low = u.offset - (u.offset*0.25)
                            if(low < 0){
                                low = 0
                            }
                            let high = u.length + (u.offset*0.25)
                            if(high > text.length){
                                high = text.length
                            }
                            let pos = text.substring(low, u.offset + high)
                            if(u.message == ""){
                                u.message = "Typo found."
                            }
                            
                            let arr = []
                            App.vue.grammarReport.push({
                                message: u.message,
                                suggestions: arr.concat("", u.suggestions),
                                text: pos
                            })
                            
                            let offset = u.offset 
                            let senLength = 0;
                            //console.log(offset);
                            
                           // console.log(text.substring(504, text.length));
                           let sen = ""
                           let c = 0;
                           let wordFound = ""
                            util.each(words, (_w, k)=>{
                                let w = _w
                                sen+=w.word + "";
                                util.each(sentenceList, (s, f)=>{
                                    
                                    if(w.word.includes(sen)){
                                        c++
                                    }
                                    
                                })
                                if(w.quotePos != undefined){
                                   // console.log("QUOTE");
                                    
                                    if(u.message == "Use a smart opening quote here." && u.offset == w.quotePos ){
                                        w.corrected = '<p id="bl" class="cor'+i+'" name="open">"' + w.word + '</p>'
                                        wordFound = w.word
                                    }
                                    if(u.message == "Use a smart closing quote here." && u.offset == w.quotePos ){
                                        w.corrected = '<p id="bl" class="cor'+i+'" name="closed">' + w.word + '"</p>'
                                        wordFound = w.word
                                    }
                                }
                                else{
                                    if(w.start == offset){
                                       // console.log("FOUND");
                                       // console.log(w);
                                        let open = text.substring(0, offset)
                                        let sub = text.substring(offset, offset + w.length)
                                        let closed = text.substring(offset + w.length, text.length)
                                        //console.log(open);
                                        let n = '<p id="bl" class="cor'+i+'">' + sub + '</p>'
                                        w.corrected = n
                                        let disp = open + '<p id="bl" class="cor'+i+'">' + sub + '</p>'+ closed
                                        wordFound = w.word
                                    }
                                }
                               
                                if(words.length - k == 1 && w.word.substring(w.word.length, w.word.length-1) != "."){
                                    w.word +="."
                                }
                                if(w.corrected == undefined){
                                    disp+=w.word + " "
                                }
                                else{
                                    disp+=w.corrected + " "
                                }
                            })
                           
                            
                            
                            //console.log(disp);
                            display = disp
                            
                        })
                        //util.findElement("#user-input").innerHTML = display
                        
                        App.vue.input = display
                        edits.push(display)
                        
                        //editIDX++
                        //console.log(App.vue.input);
                      
                        
                    })
                    
                    localStorage.setItem("grammarCheck", "")
                },
                summarizeText() {
                    let userInput = util.findElement("#user-input")
                    let range = util.findElement("#summarize")
                    App.vue.grammarReport = []
                    util.findElement("#summarize", "click", (el)=>{
                        let label = util.findElement("#sum")
                        //document.body.textContent
                        label.textContent = "Summarize Text: " + range.value + "%"
                        console.log(label);
                    })
                    if(range.value <= 0){
                        console.log("OUT");
                        return;
                    }

                    let text = util.removeHTML(userInput.innerHTML) //App.text //userInput.value
                    
                    
                    //console.log(text);
                    //console.log(range.value);
                    edits.push(App.vue.input)
                    editIDX++;
                    api.summarizeText(text, "User", JSON.parse(range.value), (json) => {
                        console.log("summarizeText");
                        let str = ""
                        //localStorage.setItem("summarizeText", JSON.stringify(json.sentences))
                        util.each(json.sentences, (a, u) => {
                            str += " "+a //+ "\n"

                           // console.log(a);
                        })
                        
                        //App.text = str
                        userInput.innerHTML = str
                        //EDIT HTML + CSS FOR DISPLAY

                        App.vue.input = str
                      
                        edits.push(str)
                        //editIDX++;
                      
                    })
                    //let s = localStorage.getItem("summarizeText")
                    //console.log(s);
                },
                undo() { //undo button
                 

                    if (editIDX - 1 >= 0) {
                        console.log(editIDX);
                        
                        editIDX--
                        
                        App.vue.input = edits[editIDX]
                       
                        //App.text = edits[editIDX]
                    }
                    //console.log(edits);

                },
                redo() { //redo button 
                    
                    
                    if (editIDX + 1 < edits.length) {
                        //console.log(editIDX);
                        editIDX++
                       
                        App.vue.input = edits[editIDX]
                        
                    }

                },
                restore(){ //restores app to inital state
                    App.vue.grammarReport = []
                    App.vue.input = test
                    edits = []
                    editIDX = 0
                },
                created: function () {
                    this.init()
                }
                //App.search()
            },

        });
        App.vue = vueApp
        //console.log(vueApp);
    },
    vue: undefined,
    text: "",
    element: undefined
}

function isUpper(ch) {
    if (!isNaN(ch * 1)) {
        return 'ch is numeric';
    } else {
        if (ch == ch.toUpperCase()) {
            return true;
        }
        if (ch == ch.toLowerCase()) {
            return false;
        }
    }
}




/**/