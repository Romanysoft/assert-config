/**
 * Created by Ian on 2016/10/18.
 */

(function () {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var b$ = BS.b$;

    var _U =  {};

    _U.launch = function () {
        var baseUrl = "../release/";
        var url = baseUrl + "js/data.js";
        $.getScript(url).done(function(data, textStatus, jqxhr){
            var promotData = [];
            if($.RTYUtils.isString(data)){
                var obj = eval(data);  
                promotData = obj.data;
            }

            try{
                var content = template("tmpl-app-promot", {
                    promotionTitle: "Romanysoft LAB",
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

    //-----------------------------------------------------------------------------------------------------------------
    _U.launch();

}());