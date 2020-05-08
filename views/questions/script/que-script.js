var colours = [
    "colour1",
    "colour2",
    "colour3",
    "colour4",
    "colour5",
    "colour6",
    "colour7"
]

var current_colour = 0;
//$("body").addClass(colours[current_colour]);

for(var i=0;i<18;i++){
    $('#que'+(i+1)).mouseenter(function(event){
        console.log("entered "+event.target.id+" "+ $('.nextanchor').attr('href'));
        var nextque = '#que'+ String(Number(event.target.id.match(/\d+/))+Number(1));
        console.log(nextque);
        
        $('.nextanchor').attr('href',nextque);

        // $("body").fadeOut(500,function(){
        //     $("body").removeClass(colours[current_colour]);
        // });


        // //$("body").removeClass(colours[current_colour]);

        // if(current_colour<6){
        //     current_colour+=1;
        // }
        // else{
        //     current_colour=0;
        // }

        // $("body").fadeIn(1000,function(){
        //     $("body").addClass(colours[current_colour]);
        // });
        
        // //$("body").addClass(colours[current_colour]);
    });
    // $('#que'+(i+1)).mouseleave(function(event){
    //     console.log("exited"+event.target.id+" "+ $('.nextanchor').attr('href'));
    // });
}

// $('#que1').mouseenter(function(){
//     var hrref = $('.nextanchor').attr('href');

//     console.log("entered"+" que1 "+ hrref);
// });