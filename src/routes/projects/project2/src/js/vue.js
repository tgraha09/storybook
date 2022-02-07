Vue.component('load',{
	template: `<div>
    <script type="script" src="src/js/syn.js"></script>
	<script type="module" src="dist/bundle.js"></script>
    <script type="module"src="src/js/loader.js"></script>
            </div>`
});

Vue.component('app',{
	props: ['name','index'],
	template: `<div id="app">
    <div id="wrap">
				<label for="summarize" >(0% = No Summary, 100% = Full Summary)</label>
				<label for="summarize" id="sum">Summarize Text: 50%</label>
				<input @change="summarizeText" type="range" id="summarize" name="summarize" min="0" max="100" value="50">
			</div>
			<div id="control-panel">
				<button id="grammarCheck" @click="grammarCheck">Grammar Check</button>
				<button id="spellCheck" @click="spellCheck">Spell Check</button>
				<button id="paraphrase" @click="paraphrase">Paraphrase</button>
				<button id="undo" @click="undo">Undo</button>
				<button id="redo" @click="redo">Redo</button>
				
				
				
			</div>
			
			<div id="main">
				<div id="user-input" v-model="input" value="" v-html="input" >{{input}}</div>
			</div>
            </div>`
});