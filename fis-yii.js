var fis = module.exports = require('fis');

fis.cli.name = "fis-yii";
fis.cli.info = fis.util.readJSON(__dirname + "/package.json");

fis.config.merge({
    webroot: "/public",
    statics: "/static",
    modules: {
        parser: {
            sass: 'sass'
        },
        postprocessor: {
            js: 'jswrapper, require-async',
            php: 'require-async'
        },
        // postpackager: ['autoload', 'simple'],
        lint : {
            js : 'jshint'
        }
    },
    roadmap: {
        ext: {
            scss: 'css'
        },
        path: [
            {
                reg: /static\/js\/core\/.*/,
                useMap: false,
                usePostprocessor: false,
                url: '/$&',
                release: '${webroot}/$&'
            },
            {
                reg: /static\/js\/lib\/([^\.]+)([-|\.]min)?\.js/i,
                id: '$1',
                isMod: true,
                url: '/$&',
                release: '${webroot}/$&'
            },
            {
                reg: /static\/js\/(.+)\.js/i,
                id: '$1',
                isMod: true,
                url: '/$&',
                release: '${webroot}/$&'
            },
            {
                reg: /([^\/]+\/.*)\.js/,
                release: '${webroot}${statics}/js/$&',
                url: '${statics}/js/$&',
                id: '$1',
                isMod: true
            },
            {
                reg: /static\/css\/(.*\.css)/,
                url: '/$&',
                release: '${webroot}/$&'
            },
            {
                reg: /[^\/]+\/.*\.css/,
                release: '${webroot}${statics}/css/$&',
                url: '${statics}/css/$&',
                isMod: true
            },
            {
                reg: /.*\.php/i,
                release: '$&',
                useCache: false
            },
            {
                reg: /[^\/]+\/(.*)/,
                url: '/$&',
                release: '${webroot}/$&'
            }
        ]
    },
    settings: {
        postprocessor: {
            jswrapper: {
                type: 'amd'
            }
        },
        lint : {
            jshint : {
                camelcase : true,
                curly : true,
                eqeqeq : true,
                forin : true,
                immed : true,
                latedef : true,
                newcap : true,
                noarg : true,
                noempty : true,
                node : true
            }
        }
    }
});
