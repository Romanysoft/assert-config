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
    baseUrl += "promotions/release/";

	_U.createUI = function(){
		var t$ = this;
        var url = baseUrl + "js/data.js";
        $.getScript(url).done(function(data, textStatus, jqxhr){
            var promotData = [];
            if($.RTYUtils.isString(data)){
                var obj = eval(data);  
                promotData = obj.data;
            }
            
            var curAppId = b$.App.getAppId(), 
            	isRegistered = b$.App.getIsRegistered();
        	$.each(promotData, function(i, obj){
        		if(obj.id == curAppId){
        			promotData.splice(i,1);
        		}
        	});

            try{
                var content = template("tmpl-app-promot", {
                    promotionTitle: "Romanysoft LAB Discount",
                    list:promotData
                });
                $('#rty-app-promot-layer').html(content);
                $('#rty-app-promot-layer').show();
                
            	$.each(promotData, function(index, obj){
            		
            		var msg = "Save " + obj.save + " on " + obj.name + "\n";
            			msg += "Coupon: " + obj.coupon + " \n";
            		
            		$("#app-share-" + index).jsSocials({
			        	url: obj.homeUrl,
	    				text: msg,
				        showLabel: false,
	    				showCount: false,
			            shares: ["email", "twitter", "facebook", "googleplus", "linkedin", "pinterest", "stumbleupon", "whatsapp"]
			        });
            	});
                
               
            }catch(e){
                console.error(e);
            }

        })
	};

    _U.launch = function () {
		var t$ = this;
		t$.createUI();
    };

    //-----------------------------------------------------------------------------------------------------------------
    _U.launch();

}());