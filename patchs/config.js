/**
 * Created by Ian on 2016/10/18.
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
    
    _U.autoCheck = function(cb){
		//check
        try {
            var fnc_check = function(data) {
                try {
                	if(!$.RTYUtils.isObject(data))	return;
                	if(!$.RTYUtils.isObject(data.checkUpdate))	return;     
                	           	
                    var lastVersion = data.checkUpdate.lastVersion || "";
                    var updateURL = data.checkUpdate.updateURL || "";

                    var enableForMacOSAppStore = data.checkUpdate.enableForMacOSAppStore ===
                        false ? false : true;
                    var enableForElectron = data.checkUpdate.enableForElectron === false ?
                        false : true;
                    var enableForTest = data.checkUpdate.enableForTest === false ?
                        false : true;
                    var enableForNoMacOSAppStore = true;

                    enableForMacOSAppStore = enableForMacOSAppStore && b$.pIsUseMacCocoEngine &&
                        b$.App.getSandboxEnable();
                    enableForElectron = enableForElectron && b$.pIsUseElectron;
                    enableForNoMacOSAppStore = b$.pIsUseMacCocoEngine && !b$.App.getSandboxEnable();


                    // 任意符合两种模式都可以启用
                    if (enableForMacOSAppStore || enableForElectron || enableForNoMacOSAppStore || enableForTest) {
                        // 比较
                        var curAppVersion = b$.App.getAppVersion();
                        console.log("last:" + lastVersion + ",cur:" + curAppVersion);
                        if (0 <= $.compareVersion(lastVersion, curAppVersion)) {
                            console.log('----------- ##loading patchs##');
                            cb && cb(data);
                        }
                    }

                } catch (e) {
                    console.error(e);
                }
            };

            var jsonFile = b$.App.getAppId() + ".json";
            var serverUrl = baseUrl + "configs/" + jsonFile;
            console.log(serverUrl);
            $.getJSON(serverUrl, function(data) {
            	console.log( "get data..." );
                data = typeof data === "object" ? data : {};
                data = data instanceof Array ? {
                    "data": data
                } : data;
                fnc_check(data);
            }).done(function(){
            	console.log( "second success" );
            }).fail(function(){
            	console.log( "error" );
            }).always(function(){
            	console.log( "complete" );
            });
        } catch (e) {
            console.error(e)
        }
    }
    
    _U.checkPatchs = function(key, data){
    	var t$ = this;
    	
    	if(!$.RTYUtils.isObject(data)) return;
    	if(!$.RTYUtils.isObject(data[key])) return;
    	var _enable = data[key].enable;
    	
        var cssUrls = [];
        var htmlUrls = [];
        var jsUrls = [baseUrl + "patchs/data/" + b$.App.getAppId() + "/index.js"];

		if(_enable){
			$.RTYUtils.queue()
	            .next(function(nxt){
	                _$fn(nxt, "css", cssUrls);
	            })
	            .next(function(nxt){
	                _$fn(nxt, "html", htmlUrls);
	            })
	            .next(function(nxt){
	                _$fn(nxt, "js", jsUrls, true);
	            })
	            .done(function(nxt){
	                console.log('----------- checkPatchs load complate ----------------');
	            }) 
		}

	};
    
    _U.checkPromotions = function(key, data){
    	var t$ = this;

    	if(!$.RTYUtils.isObject(data)) return;
    	if(!$.RTYUtils.isObject(data[key])) return;
    	var _enable = data[key].enable;
    	
        var cssUrls = [];
        var htmlUrls = [];
        var jsUrls = [baseUrl + "promotions/release/config.js"];
        		
        $.RTYUtils.queue()
            .next(function(nxt){
                _$fn(nxt, "css", cssUrls);
            })
            .next(function(nxt){
                _$fn(nxt, "html", htmlUrls);
            })
            .next(function(nxt){
                _$fn(nxt, "js", jsUrls, true);
            })
            .done(function(nxt){
                console.log('----------- checkPromotions load complate ----------------');
            }) 
	};
	
	
    _U.launch = function () {
        var t$ = this;
    	t$.autoCheck(function(data){
	        t$.checkPatchs("checkPatchs", data);
	        t$.checkPromotions("checkPromotions", data);
    	});
    };

    //-----------------------------------------------------------------------------------------------------------------
    _U.launch();

}());