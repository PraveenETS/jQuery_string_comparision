jQuery(document).ready(function(){

    jQuery("#reset_btn").click(function(){
        jQuery("#result_mother").hide();
        
    });

    jQuery("#result_mother").hide();
    jQuery("#btn_submit").click(function(event){
        debugger;
        event.preventDefault();
        var patt1 = /\n/;
        let data1 = jQuery("#original_text").val();
        let data2 = jQuery("#comp_text").val();
        // data2 = data2.trim();
        // data1 = data1.trim();
        data1 = data1.split(patt1);
        data2 = data2.split(patt1);
        // let d1v = data1.val();
        // let d2v = data2.val();
        // $("#result_original_text").html(data1);
        // $("#result_comp_text").html(data2);
        jQuery("#result_mother").show();
        $("#result_original_text").html("");
        $("#result_comp_text").html("");
        let len;
        let extra;
        if(data1.length>data2.length){
            len=data2.length;
            extra=data1.length-data2.length;
            
        }
        else{
            len=data1.length;
            extra=data2.length-data1.length;
        }


        for(let i=0; i<len; i++){
            
            if(data1[i]==data2[i]){
                $("#result_original_text").append(`<span>${data1[i]}</span><br>`);
                $("#result_comp_text").append("<span>" + data2[i] + "</span>" + "<br>");
                // $("#result_original_text").css({"background-color":"green", "color":"white"});
                // $("#result_comp_text").css({"background-color":"green", "color":"white"});
            }
            else{
                $("#result_original_text").append("<em>" + data1[i] + "</em>" + "<br>");
                $("#result_comp_text").append("<em>" + data2[i] + "</em>" + "<br>");
                // $("#result_original_text").css({"background-color":"yellow", "color":"black"});
                // $("#result_comp_text").css({"background-color":"red", "color":"white"});
            }
        } 
        
        if(extra){
            extra+=len;
                if(data1.length>data2.length){
                    for(i=len;i<extra;i++) {
                        $("#result_original_text").append("<em>" + data1[i] + "</em>" + "<br>");
                    }
                }
                else{
                    for(i=len;i<extra;i++) {
                        $("#result_comp_text").append("<em>" + data2[i] + "</em>" + "<br>"); 
                    }
                }
        }

    })
});