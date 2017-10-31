

//When 'available' table is clicked, the form pops up

$('.avail, #popupBtn, #saveBtn').css( 'cursor', 'pointer' );

$ (".table, avail").on("click", function(e){
    $("#hideForm").show().delay(1200).fadeIn(800);
});

//Form can be closed by hitting the 'x' button

$("#popupBtn").on("click", function(e){
    $("#hideForm").hide().delay(1200).fadeOut(800);
});

//Available tables change colors and cursor changes.
$(".avail").hover(function(){
    $(this).css("background-color", "#333333");
    }, function(){
    $(this).css("background-color", "#d3d3d3");
});



//NEED HELP W/CODE BELOW


//Selected table is shown on New Res. Table Number
$(".table, avail").on("click", function(e){
    $(this).append(this.text);
});

//Table changes to 'Reserved' when form is Saved.
$(".avail").click(function(){
    $.change($(this).text()).$("#tableNum");
});


//Cursor changes on 'res' tables.
$('#res').css('cursor', 'value');



