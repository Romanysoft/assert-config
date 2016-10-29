/**
 * Created by Ian on 2016/10/29.
 */

(function () {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var b$ = BS.b$;

    var _U =  {};

    var baseUrl = "../../";
    if(b$.pN){
    	baseUrl = "https://romanysoft.github.io/assert-config/";
    }
    baseUrl += "patchs/data/com.romanysoft.app.macos.speedtest/";

    _U.launch = function () {
        var t$ = this;
        
        var cssUrls = [], htmlUrls = [], jsUrls = [];
        
        
        //TODO：根据产品的版本或者其他标识特殊处理
        

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
