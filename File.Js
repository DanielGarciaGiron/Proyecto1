//Universidad del Valle de Guatemala 
//Programacion de plataformas moviles y juegos 
//Proyecto #1 
// Daniel Garcia, 14152 


//Utilizando bootstrap, se puede obtener el tamaño de la pantalla
//en la que se esta navegando. En este caso bootstrap ya tiene
//las dimensiones definidas. 
function findBootstrapEnvironment() {
    var envs = ['xs', 'sm', 'md', 'lg'];

    var $el = $('<div>');
    $el.appendTo($('body'));

    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];

        $el.addClass('hidden-'+env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env;
        }
    }
}


