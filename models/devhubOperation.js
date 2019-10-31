const requirejs = require('requirejs');
const DevHub = {
    UploadQlikFilesStartEngine(req, res) {
        console.log('Upload QVF file.... Dev HUB');
        var prefix = '/';
        // window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1);
        var config = {
            host: 'localhost',
            prefix: prefix,
            port: 1234,
            isSecure: false
        };
        requirejs.config({
            baseUrl: (config.isSecure ? "https://" : "http://")
                + config.host
                + (config.port ? ":" + config.port : "")
                + config.prefix + "resources"
        });
        var OBJECTD = {};
        requirejs(["qlik"], function (qlik) {
            console.log(qlik);
            // qlik.setOnError(function (error) {
            //     $('#popupText').append(error.message + "<br>");
            //     $('#popup').fadeIn(1000);
            // });
            // $("#closePopup").click(function () {
            //     $('#popup').hide();
            // });

            //callbacks -- inserted here --
            //open apps -- inserted here --
            // var app = qlik.openApp('IPvisulualizations.qvf', config);
            // console.log('app');
            // console.log(app);

            // //get objects -- inserted here --
            // OBJECTD = app.getObject('QV01', 'cxpXqjn');
            // console.log(OBJECTD);

            //create cubes and lists -- inserted here --

        });
        console.log(prefix);
        console.log(config);
        // console.log(requirejs);
        res.render('devhub');
    }
};
module.exports = DevHub;