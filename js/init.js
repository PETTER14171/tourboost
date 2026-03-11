(function(){

/* CARGAR CSS DRIVER */

var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdn.jsdelivr.net/npm/driver.js/dist/driver.css';

document.head.appendChild(link);


/* CARGAR LIBRERIA DRIVER */

var scriptDriver = document.createElement('script');
scriptDriver.src = 'https://cdn.jsdelivr.net/npm/driver.js/dist/driver.js.iife.js';

document.head.appendChild(scriptDriver);


/* CUANDO DRIVER ESTE LISTO CARGAMOS TU SCRIPT */

scriptDriver.onload = function(){

    var scriptApp = document.createElement('script');

    scriptApp.src = 'https://kryptodevstudio.com//tourboost/js/tour.js';

    document.head.appendChild(scriptApp);

};

})();
