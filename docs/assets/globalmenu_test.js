$.getJSON("https://res.de.dariah.eu/globalmenu/menu.json", function( data ) {

$( 'div#replace' ).replaceWith( "<div id='replace' class='nav_menu -portal'></div>" );

var ul_main = $("<ul class='nav_list -level-2 -portal'></ul>");

$.each(data.menu, function (key, val) {
	if (val.title) {
    var li = $("<li class='nav_item -level-2'>", { id: 'li' + key, text : val.title + 'test' });
    if (val.submenu != null) {

        var ul = $("<ul>", { class: 'nav_list -level-3' });

        $.each(val.submenu, function (key, sub) {
        	if (sub.title) {
            ul.append("<li class='nav_item -level-3'><a class='nav_link' href='" + sub.link + "'>" + sub.title + "</a></li>")
            }
           else {
            ul.append("<li class='nav_item -level-3'><hr></li>")
           }

        });

        ul.appendTo(li);
    }
    li.appendTo(ul_main);
}});

$("<div id='replace' class='nav_menu -portal'></div>").append(ul_main).appendTo('#nav');

}).fail(function() {
  console.log( 'Error loading menu JSON!' );
});
