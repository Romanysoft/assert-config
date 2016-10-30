/**
 * Created by Ian on 2016/10/18.
 */

(function () {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var b$ = BS.b$;
    
    if(typeof Array.prototype.shuffle === "undefined"){
        Array.prototype.shuffle = function() {
            var input = this;

            for (var i = input.length-1; i >=0; i--) {

                var randomIndex = Math.floor(Math.random()*(i+1)); 
                var itemAtIndex = input[randomIndex]; 

                input[randomIndex] = input[i]; 
                input[i] = itemAtIndex;
            }
            return input;
        }       
    }    

    var _U =  {};
    
    var baseUrl = "../../";
    if(b$.pN){
    	baseUrl = "https://romanysoft.github.io/assert-config/";
    }
    baseUrl += "promotions/release/";

	_U.createUI = function(){
		var t$ = this;
        var url = baseUrl + "js/data.js";
        $.getScript(url, function(data, textStatus, jqxhr){
            var promotData = [];
            if($.RTYUtils.isString(data)){
                var obj = eval(data);  
                promotData = obj.data;
            }else if(!data){
            	promotData = window["RTY-PROMOTIONS-DATAOBJ"].data;
            }
            
            console.log("promotData.length = " + promotData.length);
            
            var curAppId = b$.App.getAppId(), 
            	isRegistered = b$.App.getIsRegistered();
        	$.each(promotData, function(i, obj){
        		if(obj.id == curAppId){
        			promotData.splice(i,1);
        		}
        	});

            try{
                var content = template("tmpl-app-promot", {
                    promotionTitle: "Romanysoft Promo",
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