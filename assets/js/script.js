//VARIABLES

let tableNum = $(this).text();



//Cursor changes

$('.avail, #popupBtn, #reserveBtn').css( 'cursor', 'pointer' );



//When 'available' table is clicked, the form pops up
$ (".avail").on("click", function(e){
    $("#hideForm").fadeIn(800);
});


//Selected table is shown on form.
$(".table").on("click", function(e){
    var selectedTable = $(this).text();
    $("#selectedTable").text(" " + selectedTable);
    $(this).addClass('selected');
});



//When Reserve Btn is clicked, remove class of 'selected' & 'avail'.
//Add class of 'reserved'
$(".reservingBtn").on("click", function(e){ 
    $("#hideForm").fadeOut(800);
    $(".selected").addClass("reserved").removeClass("selected", "avail")
});


//When Reserve Button is clicked, take input value and show on hover of that reserved table.

 
function retrieveData(){
    var name = $(".inputGuestName").val;
    var partySize = $(".inputGuestPhone").val;

    $(".hoverBox", this).append(name);
    $(".hoverBox", ".reserved").append(partySize);
};
retrieveData();


//Change reserve table to be unclickable.
$(".reserved").hover(function() {
	$(".hoverBox").show();
 	});










/* When 'x' is clicked, remove 'reserved' class.
And close the form */
$("#popupBtn").on("click", function(e){
    $(".selected").removeClass("selected");
    $("#hideForm").fadeOut(800);
})







    



