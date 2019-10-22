let carousel = document.querySelector('.carousel');

//    let i = 1;
//    for(let li of carousel.querySelectorAll('li')) {
//      li.style.position = 'relative';
//      li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//      i++;
//    };

//let li = carousel.querySelectorAll('li');
//
//for(i = 1; i < li.length; ++i) {
//    alert(li);
//     li.style.position = 'relative';
//     li.insertAdjacentHTML('beforeend', '<span style="position:absolute;left:0;top:0">${i}</span>');
//}

 
    let width = 235; // ширина картинки
    let count = 1; // видимое количество изображений

    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 0; // положение ленты прокрутки

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width * count;
      // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
      position = Math.min(position, 0);
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width * count;
      // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
      position = Math.max(position, -width * (listElems.length - count));
      list.style.marginLeft = position + 'px';
    };
    
    //    запрещаем выделение карусели при кликах
carousel.addEventListener("mousedown", function(event){
  event.preventDefault();
});


//Открытие изображений из карусели 
document.body.addEventListener('click', function(e){

    
//  for (let ep of carousel.querySelectorAll('img')){
//      ep.classList.remove('showimg');};
  
//               Если кликнули по картинке
    if (e.target.matches('li img')) {        
        return (e.target.classList.toggle('showimg'), undefined);        
    };
   
//   клик мимо изображений
    for (const ep of carousel.querySelectorAll('img'))
      ep.classList.remove('showimg');
      
  });
