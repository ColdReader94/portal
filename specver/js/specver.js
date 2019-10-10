$(document).ready(function(){

function loadform(){
  $( "<button style='float:right'  onclick='$.removeCookie(\"openspec\", { path: \"/\" });location.reload();'>Закрыть версию для слабовидящих</button>" ).insertBefore( "body" );
$( "body" ).before( "<iframe width='100%' height='110'  style='border: none' src='specver/spec.html'></iframe>" ); 
//Добавлено:
//    спрятать карусель
    let carouselOffBlock = document.querySelector('.row-two .grid-item-left');
    carouselOffBlock.classList.add('close');
    
//    спрятать изобрадения блока ссылок
    let linksImg = document.querySelectorAll('.links img');
    for (let m of linksImg) {
        m.style.display = "none";
    };
    
//    показать ссылки текстом вместо изображений
        let textHide = document.querySelectorAll('.links .texthide');
         for (let e of textHide ) {
        e.style.display = "flex";  
    };
//        блок ссылок переходит на место карусели, нужен отступ слева:
        let linksBlock = document.querySelector('.row-two .grid-item-right');
        linksBlock.style.paddingLeft = '20px';
    
    
    let searchForm = document.querySelector('.search-form');
    searchForm.classList.add('close');
};   
//
$('.spec').click(function (e) {

if (!$.cookie('openspec'))
{
$.cookie('openspec',1, { path: '/' });
$("body *").css("background", "#fff");
$("body *").css("color", "#000");
$("img").css("-webkit-filter", "grayscale(100%)");
loadform();
}});

if ($.cookie('openspec')==1)
loadform();



});
