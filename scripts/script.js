//    Открытие выпадающего подменю во втором пункте основного меню

    let subMenuShow = document.querySelector('.menu li:nth-child(2)'); 
    let subMenu = document.querySelector('.sub-menu');
    let traingle = subMenuShow.querySelector('span');
    
    let SwitchMenu = function(){
//        показать подменю:
        subMenu.classList.toggle('open');
//          индикатор-треугольник вверх:
        traingle.classList.toggle('up');
        event.stopPropagation();
    };
    
       
    subMenuShow.addEventListener("click", SwitchMenu);


// Menu Close
function menuClose() {
    subMenu.classList.remove('open');
    traingle.classList.remove('up');
}

// Menu Close Click Outside
function menuCloseClickOutside(e) {
    if(!e.target.matches('.sub-menu, .sub-menu *')) {
        menuClose();
    };
};

document.addEventListener('click', menuCloseClickOutside);
document.addEventListener('touchstart', menuCloseClickOutside);


//Кнопка назад
function goBack() {window.history.back();};
  let buttonBack = document.querySelector('.navigation a img');

buttonBack.addEventListener("click", goBack);


//Отображение текущего положения пользователя

function currentPlace() {   
   let myLocation = document.querySelector('.navigation a:last-child');
   myLocation.textContent = document.title;
 };

document.addEventListener("DOMContentLoaded", currentPlace);


//Предупреждение об отключенном поиске на сайте:

  let searchForm = document.querySelector('.search-text');
  function searchAlert(){
        if (event.code === 'Enter'){
        alert("Извините, в настоящее время поиск по сайту недоступен.");};
  };
   searchForm.addEventListener("keyup", searchAlert);