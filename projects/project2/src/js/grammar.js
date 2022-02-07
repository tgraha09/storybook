import * as utility from './utils.js'
const utils = utility.utility

export const custom = {
    findAssociations: (word, callback)=>{
        const data = word;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                callback(JSON.parse(this.responseText))
            }
        });

        xhr.open("GET", "https://similar-words1.p.rapidapi.com/most_similar/"+data+"?count=20");
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "similar-words1.p.rapidapi.com");

        xhr.send(data);
    },
    paraphrase: (_data, callback)=>{
        const data = JSON.stringify({
            "language": "en",
            "strength": 3,
            "text": _data
        });
        
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                callback(JSON.parse(this.responseText))
            }
        });
        
        xhr.open("POST", "https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com");
        
        xhr.send(data);
    },
    grammarSpellCheck:(_data, callback)=>{
        const data = JSON.stringify({
            "language": "enUS",
            "fieldvalues": _data,
            "config": {
                "forceUpperCase": false,
                "ignoreIrregularCaps": false,
                "ignoreFirstCaps": true,
                "ignoreNumbers": true,
                "ignoreUpper": false,
                "ignoreDouble": false,
                "ignoreWordsWithNumbers": true
            }
        });
        
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                callback(JSON.parse(this.responseText))
            }
        });
        
        xhr.open("POST", "https://jspell-checker.p.rapidapi.com/check");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "jspell-checker.p.rapidapi.com");
        
        xhr.send(data);
    },
    autoComplete:(data, callback)=>{
        //const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                callback(JSON.parse(this.responseText))
            }
        });
        
        xhr.open("GET", "https://omrivolk-autocomplete-v1.p.rapidapi.com/complete?s=un"+data+"&misspell_sensitivity=0.005&max_words=7&misspell=true&size=20");
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "omrivolk-autocomplete-v1.p.rapidapi.com");
        
        xhr.send(data);
    },
    getQuote: (data, callback)=>{
        //const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                callback(JSON.parse(this.responseText))
            }
        });

        xhr.open("GET", "https://quotes25.p.rapidapi.com/keyword/" + data);
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "quotes25.p.rapidapi.com");

        xhr.send(data);
    },
    greater:(data, callback)=>{
        //const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                callback(JSON.parse(this.responseText))
            }
        });

        xhr.open("GET", "https://simsimi.p.rapidapi.com/request.p?lc=en&text="+data+"&ft=0.0");
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "simsimi.p.rapidapi.com");

        xhr.send(data);
    }, 
    bingSpellCheck:(_data, callback)=>{
        const data = "Text="+_data;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                callback(JSON.parse(this.responseText))
            }
        });

        xhr.open("POST", "https://bing-spell-check2.p.rapidapi.com/spellcheck?mode=proof");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "bing-spell-check2.p.rapidapi.com");

        xhr.send(data);
    },
    spellCheck:(_data,callback)=>{
        const data = JSON.stringify({
            "language": "enUS",
            "fieldvalues": _data,
            "config": {
                "forceUpperCase": false,
                "ignoreIrregularCaps": false,
                "ignoreFirstCaps": true,
                "ignoreNumbers": true,
                "ignoreUpper": false,
                "ignoreDouble": false,
                "ignoreWordsWithNumbers": true
            }
        });
        
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
            }
        });
        
        xhr.open("POST", "https://jspell-checker.p.rapidapi.com/check");
        xhr.setRequestHeader( 'Access-Control-Allow-Origin', '*');
        
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "jspell-checker.p.rapidapi.com");
        xhr.withCredentials = false;
        xhr.send(data);
    },
    wordSuggest:(_data, callback)=>{
        const data = JSON.stringify({
            "language": "enUS",
            "fieldvalues": _data,
            "config": {
                "forceUpperCase": false,
                "ignoreIrregularCaps": false,
                "ignoreFirstCaps": true,
                "ignoreNumbers": true,
                "ignoreUpper": false,
                "ignoreDouble": false,
                "ignoreWordsWithNumbers": true
            }
        });
        
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                callback(JSON.parse(this.responseText))
            }
        });
        
        xhr.open("POST", "https://jspell-checker.p.rapidapi.com/check");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "jspell-checker.p.rapidapi.com");
        
        xhr.send(data);
    },
    grammarCheck:(_data, callback)=>{
        const data = _data;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                callback(JSON.parse(this.responseText))
            }
        });

        xhr.open("GET", "https://webspellchecker-webspellcheckernet.p.rapidapi.com/ssrv.cgi?slang=en_US&text="+data+"&cmd=grammar_check&format=json");
        xhr.withCredentials = false;
        xhr.setRequestHeader("access-control-allow-credentials", "true");
        xhr.setRequestHeader("access-control-allow-origin", "*");
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "webspellchecker-webspellcheckernet.p.rapidapi.com");

        xhr.send(data);
    },
    keyPhrases:(data, callback)=>{
    

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                callback(JSON.parse(this.responseText))
            }
        });

        xhr.open("POST", "https://webit-text-analytics.p.rapidapi.com/key-phrases?text="+data+"%3CREQUIRED%3E&language=en");
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "webit-text-analytics.p.rapidapi.com");

        xhr.send(data);
    },
    summarizeText:(data, title, percentage,callback)=>{
        //const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                //console.log(JSON.parse(this.responseText));
                callback(JSON.parse(this.responseText))
            }
        });

        xhr.open("GET", "https://aylien-text.p.rapidapi.com/summarize?text="+data+"&title="+title+"&sentences_percentage="+percentage);
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "aylien-text.p.rapidapi.com");

        xhr.send(data);
    },
    getSentiments: (data, callback)=>{
        //const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                callback(JSON.parse(this.responseText))
            }
        });

        xhr.open("GET", "https://twinword-sentiment-analysis.p.rapidapi.com/analyze/?text=" + data);
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "twinword-sentiment-analysis.p.rapidapi.com");

        xhr.send(data);
    },
    analyzeGrammar:(data, callback)=>{
        //const data = JSON.stringify({});

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                callback(JSON.parse(this.responseText))
            }
        });

        xhr.open("POST", "https://webit-language.p.rapidapi.com/analyze?language=en&q="+data);
        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-rapidapi-key", "170e038a70mshc48a677384b7b29p120f51jsn123cfd31d18c");
        xhr.setRequestHeader("x-rapidapi-host", "webit-language.p.rapidapi.com");

        xhr.send(data);
    }
    

}
//https://rapidapi.com/textanalysis/api/textanalysis
//https://rapidapi.com/sam.koucha/api/pdf-to-text
//https://rapidapi.com/webit/api/webit-language