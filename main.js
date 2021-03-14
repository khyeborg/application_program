$(document).ready(function() {
    // get reference
    let initialDivRef = document.getElementById("initial_div");
    let initialHiddenDivRef = document.getElementById("initial_hidden_div");
    let initialButtonRef = document.getElementById("initial_button");

    initialButtonRef.onclick = function() {
    	initialDivRef.style.display = "none";
    	initialHiddenDivRef.style.display = "block";

    	// responsive image map
   		$('map').imageMapResize();
    }
});