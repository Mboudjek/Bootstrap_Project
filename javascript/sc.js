$(function(){
    $('#calendar').evoCalendar({
        theme: "Midnight Blue",   
    });
    $("#vacRequestButton").click(function(){
        $("#vacationModal").modal("show")
    });
});