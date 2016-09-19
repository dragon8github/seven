import Vue from 'vue'
import App from './App'


/* 懶加載 */
$(function(){
	(function($) {
		$(document).imageLazyload({
			placeholder: '../static/images/60x60.gif'
		});
	})(mui);
})


new Vue({
  el: 'body',
  components: { 
  	App 
  }
})