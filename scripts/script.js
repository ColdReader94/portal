//(function() {
// 
//  "use strict";
// 
//  var toggles = document.querySelectorAll(".c-hamburger");
// 
//  for (var i = toggles.length - 1; i >= 0; i--) {
//    var toggle = toggles[i];
//    toggleHandler(toggle);
//  };
// 
//  function toggleHandler(toggle) {
//    toggle.addEventListener( "click", function(e) {
//      e.preventDefault();
//      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
//    });
//  }
//
//document.getElementById("hamburger").onclick = function() {
//  open()
//};
//
//function open() {
//  document.getElementById("showMenu").classList.toggle("open");
//}
//
//  
//})();


    let i = 1;
    for(let li of carousel.querySelectorAll('li')) {
      li.style.position = 'relative';
      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
      i++;
    }

 
    let width = 235; // ширина картинки
    let count = 1; // видимое количество изображений

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
    
//    Открытие выпадающего подменю во втором пункте основного меню

    let subMenuShow = document.querySelector('ul li:nth-child(2)'); 
    let submenu = document.querySelector('.sub-menu');
    let traingle = document.querySelector('.menu li:nth-child(2) span');
    subMenuShow.onclick = function(){
//        показать подменю:
        submenu.classList.toggle('open');
//          индикатор-треугольник вверх:
        traingle.classList.toggle('up');        
    };
 