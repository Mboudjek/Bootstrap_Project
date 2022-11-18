$(function(){
    $('#calendar').evoCalendar({
        theme: "Midnight Blue",   
    });
    $("#vacRequestButton").click(function(){
        $("#vacationModal").modal("show")
    });
});

const styPre = document.getElementById('safetyPre');
const gwLink = document.getElementById('gowanlink');

styPre.addEventListener('click', openPre);
gwLink.addEventListener('click', openLink);

function openPre(){
    window.open("others/11-16-2022.pptx");
}

function openLink(){
    window.open("https://kyma.com/news/home-grown/2022/11/01/gowan-company-celebrates-60th-anniversary/", "_blank");
}