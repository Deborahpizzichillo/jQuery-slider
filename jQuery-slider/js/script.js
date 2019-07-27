
$(document).ready(function () {
    $('ul').before('<button id="btn1"><i class="fas fa-angle-left"></i></button> <button id="btn2"><i class="fas fa-angle-right"></i></button>');
    $('li').css('list-style-type', 'none');
    let indexSlide = 1;
    let $arrayImg = $('img');
  
    $('#btn1').click(function () {
      nextPreviousImg(-1);
    });
  
    $('#btn2').click(function () {
      nextPreviousImg(+1);
    });
  
    function nextPreviousImg(n) {
      indexSlide += n;
      if (indexSlide > $arrayImg.length - 1) {
        indexSlide = 0;
      }
  
      if (indexSlide < 0) {
        indexSlide = $arrayImg.length - 1;
      }
  
      for (let i = 0; i < $arrayImg.length; i++) {
        $arrayImg[i].style.display = 'none';
      }
  
      $('img')[indexSlide].style.display = 'block';
    }
  
    let sliderLoop = function () {
      setTimeout(function () {
          nextPreviousImg(+1);
          sliderLoop(); // restarts the function
        }, 3000);
    };
  
    sliderLoop();
  
});