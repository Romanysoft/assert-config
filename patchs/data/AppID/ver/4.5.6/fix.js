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
    
    var _$fn = function(nxt, tag, in_urls, enableContinue){
        var _f = function(urls){
            if (urls.length > 0){
                var o ={};
                o[tag] = urls.shift();
                if(enableContinue){
                	$.RTY_3rd_Ensure.ensure(o, function () {  _f && _f(urls);}, function () {  _f && _f(urls);});
                }else{
                	$.RTY_3rd_Ensure.ensure(o, function () {  _f && _f(urls);});
                }
                
            }else{
                nxt && nxt();
            }
        };

        _f(in_urls);
    };
    

    _U.launch = function () {
        var t$ = this;
		console.log("------------------ App version 4.5.6 fix.js -------------------");
    };

    //-----------------------------------------------------------------------------------------------------------------
    _U.launch();

}());