/**
 * Created by Ian on 2016/10/18.
 */

(function () {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var b$ = BS.b$;

    var _U =  {};

    _U.launch = function () {
        var t$ = this;

        var baseUrl = "../release/";
        var cssUrls = [
        	baseUrl + "common/font-awesome-4.7.0/css/font-awesome.min.css",
        	baseUrl + "common/jssocials-1.4.0/jssocials.css",
        	baseUrl + "common/jssocials-1.4.0/jssocials-theme-flat.css",
            baseUrl + "styles/styles.css"
        ];

        var htmlUrls = [
            baseUrl + "tpl/tpl.promot.html"
        ];

        var jsUrls = [];
        if(typeof window.template === "undefined") jsUrls.push( baseUrl + "common/artTemplate.js");
        
        jsUrls.push(baseUrl + "common/jssocials-1.4.0/jssocials.min.js");
        jsUrls.push(baseUrl + "js/main.js");

        var _$fn = function(nxt, tag, in_urls){
                var _f = function(urls){
                    if (urls.length > 0){
                        var o ={};
                        o[tag] = urls.shift();
                        $.RTY_3rd_Ensure.ensure(o, function () {  _f && _f(urls);})
                    }else{
                        nxt && nxt();
                    }
                };

                _f(in_urls);
        };


        $.RTYUtils.queue()
            .next(function(nxt){
                _$fn(nxt, "css", cssUrls);
            })
            .next(function(nxt){
                _$fn(nxt, "html", htmlUrls);
            })
            .next(function(nxt){
                _$fn(nxt, "js", jsUrls);
            })
            .done(function(nxt){
                console.log('----------- load complate ----------------');
            })

    };

    //-----------------------------------------------------------------------------------------------------------------
    _U.launch();

}());