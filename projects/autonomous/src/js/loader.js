import * as main from './main.js'
import * as classes from './classes.js'
import * as til from './utils.js'
import * as opt from './classes-opt.js'
let utils = new til.Utils()

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let v2 = utils.v2

let sprites = []
const APP = main.APP



//starts app
window.onload = APP.init() //APP.init(sprites)//APP.debug