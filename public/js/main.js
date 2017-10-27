log = function(a) { if (console && console.log) console.log(a); }
goToPath = function(path) { window.location.href = path }

function toggleDiv(selector) {
  $(selector).toggleClass('hidden');
}

function appendResults(elem){
  elem.after($("<div class='ac-results'><h1>my results</h1></div>"))
}

function setAutocompletes(){
  $('.ac').autocomplete({
    serviceUrl: '/search/ajax',
    triggerSelectOnValidInput: false,
    onSelect: function (sn) { goToPath('/search?q='+sn.value) },
  })

  $('.ac_orgs').autocomplete({
    serviceUrl: '/search/orgs',
  })
  // $('.ac').each((idx,el)=>{
  //   var el = $(el);
  //   console.log(el);
  //   el.parent().css('position','relative');
  //   appendResults(el);
  // });
    //$.getJSON('/search/ajax', {q: elem.val()}, (d)=>{cb(d.res)});
  //})
}

$( document ).ready(function() {
	$.material.init(); //init material design
  setAutocompletes();
	console.log('done on-document-ready')
}); 

