(function () {
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

	// SpeedTest 
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

	// XLS2csv 
    _U.data.push(_U.tp({
        id:"com.romanysoft.app.macos.XLS2csv",
        name:"XLS2csv - Convet Excel(*.xls) to CSV(*.csv)",                     
        logo:"https://romanysoft.github.io/XLS2csv/images/logo_64.png",                                          
        description: "Fast, simple conversion of Excel data to csv. Support batch",   
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
            
    // CSSDesigner        
    _U.data.push(_U.tp({
        id:"com.romanysoft.app.macos.CSSDesigner",
        name:"CSSDesigner - Best CSS2/CSS3 Designer",                     
        logo:"https://romanysoft.github.io/CSSDesigner/images/logo_64.png",                                          
        description: "Full-featured CSS2/CSS3 Designer. ",   
        coupon:"ROMA-86W6-CSSD",
        orgPrice: {
            main:"$9",
            sub:".99"   
        },
        price:{
            main:"$4",
            sub:".99"
        },
        save: "50%",
        homeUrl: "https://romanysoft.github.io/CSSDesigner/",
        buyUrl:"https://shopper.mycommerce.com/checkout/cart/new/55399-6"     
    })); 

	// MarkdownD
    _U.data.push(_U.tp({
        id:"com.romanysoft.app.macos.MarkdownD",
        name:"MarkdownD - Markdown Editor",                     
        logo:"https://romanysoft.github.io/MarkdownD/images/logo_64.png",                                          
        description: "Full-featured Markdown editor. ",   
        coupon:"ROMA-R6TK-WCFG",
        orgPrice: {
            main:"$19",
            sub:".99"   
        },
        price:{
            main:"$9",
            sub:".99"
        },
        save: "50%",
        homeUrl: "https://romanysoft.github.io/MarkdownD/",
        buyUrl:"https://shopper.mycommerce.com/checkout/cart/new/55399-32"     
    })); 	
    		
	// BarcodePro
    _U.data.push(_U.tp({
        id:"com.romanysoft.app.macos.barcodepro",
        name:"BarcodePro - Barcode Creator",                     
        logo:"https://romanysoft.github.io/BarcodePro/images/logo_64.png",                                          
        description: "Professional Barcode builder and creator. ",   
        coupon:"ROMA-A1JL-EATS",
        orgPrice: {
            main:"$25",
            sub:".99"   
        },
        price:{
            main:"$12",
            sub:".99"
        },
        save: "50%",
        homeUrl: "https://romanysoft.github.io/BarcodePro/",
        buyUrl:"https://shopper.mycommerce.com/checkout/cart/new/55399-3"     
    })); 
    		
   
	// BarcodeUV
    _U.data.push(_U.tp({
        id:"com.romanysoft.app.macos.BarcodeUV",
        name:"BarcodeUV - Beautiful Barcode Creator ",                     
        logo:"https://romanysoft.github.io/BarcodeUV/images/logo_64.png",                                          
        description: "Easily and simply creates custom, beautiful barcodes. ",   
        coupon:"ROMA-KCXD-IDEM",
        orgPrice: {
            main:"$35",
            sub:".99"   
        },
        price:{
            main:"$17",
            sub:".99"
        },
        save: "50%",
        homeUrl: "https://romanysoft.github.io/BarcodeUV/",
        buyUrl:"https://shopper.mycommerce.com/checkout/cart/new/55399-2"     
    })); 
    		
    		
	// DataStorm
    _U.data.push(_U.tp({
        id:"com.romanysoft.app.macos.DataStorm",
        name:"DataStorm - Advanced data conversion tool",                     
        logo:"https://romanysoft.github.io/DataStorm/images/logo_64.png",                                          
        description: "A plurality of data format conversion, supports Windows, Linux and MacOSX. ",   
        coupon:"ROMA-07W7-DATA",
        orgPrice: {
            main:"$49",
            sub:".99"   
        },
        price:{
            main:"$14",
            sub:".99"
        },
        save: "70%",
        homeUrl: "https://romanysoft.github.io/DataStorm/",
        buyUrl:"https://shopper.mycommerce.com/checkout/cart/new/55399-17"     
    })); 
    		
	// TryToTranslate
	// BatchFileTranslater
	// ImageMinify
	// GraphSketcher
	// CSVEditorPro2

    // 随机处理
    var enabeShuffle = true;
    if(enabeShuffle && $.RTYUtils.isFunction(Array.prototype.shuffle)){
        _U.data.shuffle();
    }

	window["RTY-PROMOTIONS-DATAOBJ"] = _U;
    return _U;
})();