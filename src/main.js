import Vue from 'vue'
import App from './App'


/* 懶加載 */
$(function(){
	mui(document).imageLazyload({
		placeholder: '../static/images/60x60.gif'
	});
})


new Vue({
  el: 'body',
  components: { 
  	App 
  }
})