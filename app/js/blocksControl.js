"use strict";function _classCallCheck(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,o){for(var i=0;i<o.length;i++){var e=o[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,o,i){return o&&_defineProperties(t.prototype,o),i&&_defineProperties(t,i),t}var WidthControl=function(){function WidthControl(t,o){_classCallCheck(this,WidthControl),this.container=t,this.options=o,this.blocks={},this.percentHeightWindow=window.innerHeight/100,this.findsBlocks_In_Container(),this.calculatesPositionBlocks_Window(),this.complementsOptions_Blocks(),this.calculatesFinalBlockWidth(),this.calculatesFinalBlockHeight(),this.calculatesNumber_For_ScrollingWindow_Block_OutOfSight(),this.sequenceNumbersBlocks=Object.keys(this.blocks)}return _createClass(WidthControl,[{key:"complementsOptions_Blocks",value:function complementsOptions_Blocks(){var i=this;Object.keys(this.options).forEach(function(t){for(var o in i.options[t])i.blocks[t][o]=i.options[t][o]})}},{key:"addEventScrollForWindow",value:function addEventScrollForWindow(){var o=this;window.addEventListener("scroll",function(){var t={top:window.pageYOffset,bottom:window.pageYOffset+document.documentElement.clientHeight};o.checks_If_BlcokVisible(t)})}},{key:"checks_If_BlcokVisible",value:function checks_If_BlcokVisible(o){var i=this;this.sequenceNumbersBlocks.forEach(function(t){if(o.top-i.blocks[t].block.clientHeight<=i.blocks[t].position.top&&i.blocks[t].position.top<o.bottom){if(i.calculatesWindowScrolling(t),i.blocks[t].isVisible)return;i.blocks[t].isVisible=!0}else i.blocks[t].isVisible&&(i.blocks[t].isVisible=!1)})}},{key:"calculatesWindowScrolling",value:function calculatesWindowScrolling(t){var o=(window.innerHeight-this.blocks[t].block.getBoundingClientRect().top)/this.blocks[1].percentScrollWindow;this.changeBlock(t,o)}},{key:"findsBlocks_In_Container",value:function findsBlocks_In_Container(){var e=this,t=this.container.children;Array.prototype.forEach.call(t,function(t){for(var o,i=0;i<t.classList.length;i++)t.classList[i].includes("blocks-control-block")&&(o=(o=t.classList[i].split("-"))[o.length-1],e.blocks[o]={block:t},e.addProperty_IsVisible_Block(o))})}},{key:"addProperty_IsVisible_Block",value:function addProperty_IsVisible_Block(t){this.blocks[t].isVisible=!1}},{key:"calculatesPositionBlocks_Window",value:function calculatesPositionBlocks_Window(){var i=this;Object.keys(this.blocks).forEach(function(t){var o={top:Math.round(window.pageYOffset+i.blocks[t].block.getBoundingClientRect().top),bottom:Math.round(window.pageXOffset+i.blocks[t].block.getBoundingClientRect().bottom)};i.blocks[t].position=o})}},{key:"calculatesFinalBlockWidth",value:function calculatesFinalBlockWidth(){for(var t=Object.keys(this.blocks),o=0;o<t.length;o++){var i,e,c=t[o];"width"===this.blocks[c].actionProperty&&(i=0,e=this.blocks[c].block.clientWidth/100*this.blocks[c].percent,"enlarge"===this.blocks[c].action?i=this.blocks[c].block.clientWidth+e:"reduce"===this.blocks[c].action&&(i=this.blocks[c].block.clientWidth-e),this.blocks[c].finalWidth=i,this.blocks[c].initialWidth=this.blocks[c].block.clientWidth)}}},{key:"calculatesFinalBlockHeight",value:function calculatesFinalBlockHeight(){for(var t=Object.keys(this.blocks),o=0;o<t.length;o++){var i,e,c=t[o];"height"===this.blocks[c].actionProperty&&(i=0,e=this.blocks[c].block.clientHeight/100*this.blocks[c].percent,"enlarge"===this.blocks[c].action?i=this.blocks[c].block.clientHeight+e:"reduce"===this.blocks[c].action&&(i=this.blocks[c].block.clientHeight-e),this.blocks[c].finalHeight=i,this.blocks[c].initialHeight=this.blocks[c].block.clientHeight)}}},{key:"calculatesNumber_For_ScrollingWindow_Block_OutOfSight",value:function calculatesNumber_For_ScrollingWindow_Block_OutOfSight(){var e=this;Object.keys(this.blocks).forEach(function(t){var o=window.innerHeight+e.blocks[t].block.getBoundingClientRect().height,i=o/100;e.blocks[t].numberToScrollWindow=o,e.blocks[t].percentScrollWindow=i})}},{key:"changeBlock",value:function changeBlock(t,o){var i,e;"width"===this.blocks[t].actionProperty?(i=Math.abs(o*((this.blocks[t].finalWidth-this.blocks[t].initialWidth)/100)),e=this.blocks[t].initialWidth,"enlarge"===this.blocks[t].action?e+=i:"reduce"===this.blocks[t].action&&(e-=i),this.setsNewWidthForBlock(t,e)):"height"===this.blocks[t].actionProperty&&(e=Math.abs(o*((this.blocks[t].finalHeight-this.blocks[t].initialHeight)/100)),o=this.blocks[t].initialHeight,"enlarge"===this.blocks[t].action?o+=e:"reduce"===this.blocks[t].action&&(o-=e),this.setsNewHeightForBlock(t,o))}},{key:"setsNewWidthForBlock",value:function setsNewWidthForBlock(t,o){this.blocks[t].block.style.width="".concat(o,"px")}},{key:"setsNewHeightForBlock",value:function setsNewHeightForBlock(t,o){this.blocks[t].block.style.height="".concat(o,"px")}},{key:"run",value:function run(){this.addEventScrollForWindow()}}]),WidthControl}(),blockContainer_1=document.querySelector(".blocks-control-container-1"),newWidthControl_1=new WidthControl(blockContainer_1,{1:{action:"enlarge",actionProperty:"width",percent:45},2:{action:"reduce",actionProperty:"width",percent:25}});newWidthControl_1.run();var blockContainer_2=document.querySelector(".blocks-control-container-2"),newWidthControl_2=new WidthControl(blockContainer_2,{1:{action:"enlarge",actionProperty:"width",percent:45},2:{action:"reduce",actionProperty:"width",percent:70},3:{action:"enlarge",actionProperty:"width",percent:40}});newWidthControl_2.run();var blockContainer_3=document.querySelector(".blocks-control-container-3"),newWidthControl_3=new WidthControl(blockContainer_3,{1:{action:"enlarge",actionProperty:"height",percent:75},2:{action:"reduce",actionProperty:"width",percent:50},3:{action:"enlarge",actionProperty:"height",percent:50}});newWidthControl_3.run();