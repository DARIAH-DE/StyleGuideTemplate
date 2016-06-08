// load global menu JSON and re-populate the global navigation menu
// Copyright 2016 SUB Göttingen
// Author Carsten Thiel
//
$.getJSON( 'https://res.de.dariah.eu/globalmenu/menu.json', function( data ) {

  // replace the existing menu with an empty one
  $( 'ul#home_dropdown_menu' ).replaceWith( '<ul id="home_dropdown_menu" class="dropdown-menu"></ul>' );

  var lifromarrayitem = function (arrayitem) {
    // create an empty li
    var myobject = document.createElement('li');
    var linktarget, tabindexstring;
    if ('divider' in arrayitem) {
      // make it a divider
      $(myobject).addClass('divider');
    } else {
      // check whether there is a link
      if ('link' in arrayitem) {
        linktarget = arrayitem['link'];
        tabindexstring = '';
      } else {
        linktarget = '#';
        tabindexstring = 'tabindex="-1"';
      }
      // add the link inside
      $(myobject).html('<a '+ tabindexstring +' href="' + linktarget + '">' + arrayitem['title'] + '</a>');
      // if the li has a submenu, add another ul
      if ('submenu' in arrayitem) {
        $(myobject).addClass('dropdown-submenu');
        var newsubmenu = document.createElement('ul');
        $(newsubmenu).addClass('dropdown-menu');
        // for each cild, recurse!
        $.each(arrayitem['submenu'], function (arrayid, arrayitem) {
          $(newsubmenu).append(lifromarrayitem(arrayitem));
        });
        $(myobject).append(newsubmenu);
      }
    }
    return myobject;
  };

  // loop through the outer array and append childs to the new ul from above
  $.each( data['menu'], function( arrayid, arrayitem ) {
    $( 'ul#home_dropdown_menu' ).append( lifromarrayitem(arrayitem) );
  });

}).fail(function() {
  console.log( 'Error loading menu JSON!' );
});


// submenu workaround for mobiles. 
$(function() {
  $('.navbar-dariah').on('touchstart click tap', '.dropdown-submenu > a', function(e) {
    e.preventDefault();
    $(this).parent('li').toggleClass('open');
    return false;
  });
});

