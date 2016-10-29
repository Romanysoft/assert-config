(function () {

    var _U = {};
    
    /////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////// Data
    /////////////////////////////////////////////////////////////////////////////////////////////////
    _U.data = [];
    _U.tp = function(data){
        var o = {
            id:"",
            name:"",                     
            logo:"",                                             
            description: "",   
            coupon:"",
            tip:"", 
            orgPrice:"",
            price:"",
            homeUrl: "",
            buyUrl:""                
        };

        return $.extend(o, data);
    };

    _U.data.push(_U.tp({
        id:"com.romanysoft.app.macos.speedtest",
        name:"Speed19X - Check Your Internet Speed",                     
        logo:"https://romanysoft.github.io/SpeedTest/images/logo_64.png",                                           
        description: "To start working immediately with Romanysoft Speed19X, just click \"Start\" and in few seconds you'll get your internet speed results.",   
        coupon:"ROMA-QXYF-NYXK",
        orgPrice: {
        	main:"$5",
        	sub:".99"	
        },
        price:{
        	main:"$4",
        	sub:".19"
        },
        save: "30%",
        homeUrl: "https://romanysoft.github.io/SpeedTest/",
        buyUrl:"https://shopper.mycommerce.com/checkout/cart/add/55399-1"     
    }));  


    _U.data.push(_U.tp({
        id:"com.romanysoft.app.macos.XLS2csv",
        name:"XLS2csv - Convet Excel(*.xls) to CSV(*.csv)",                     
        logo:"https://romanysoft.github.io/XLS2csv/images/logo_64.png",                                          
        description: "Fast, simple conversion of Excel data to csv.",   
        coupon:"ROMA-FL12-KYVP",
        orgPrice: {
        	main:"$19",
        	sub:".99"	
        },
        price:{
        	main:"$8",
        	sub:".99"
        },
        save: "55%",
        homeUrl: "https://romanysoft.github.io/XLS2csv/",
        buyUrl:"https://shopper.mycommerce.com/checkout/cart/new/55399-43"     
    })); 

 

    return _U;
})();