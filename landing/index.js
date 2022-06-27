"use script"

window.onload = function() {
    console.log('Hello world');

   
}


// Menu opening Hamburger
const sandwichmenu = document.querySelector('#sandwichmenu');
const popup = document.querySelector('.header__navigation');
// const menu = document.querySelector('.menu');
const menu = document.querySelector('#menu').cloneNode(1);

sandwichmenu.addEventListener('click', (e)  => {
e.preventDefault();
// document.body.classList.add('menu__opened');
sandwichmenu.classList.toggle('_active');
menu.classList.toggle('_active');
popup.classList.toggle('_active');

renderPopup();

});


function renderPopup() {
    popup.appendChild(menu);
}

//Menu opening Sidebar
function showhide(n) {
    if (document.getElementById('otd'+n).style.display=='none') {
        document.getElementById('otd'+n).style.display='inline';
    } else {
        document.getElementById('otd'+n).style.display='none';
    }
    
 
    
  return false; 
    
}

//Form submission

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
        
        
        if (error === 0) {
            alert('Ваша заявка отправлена');
            
        }else {
            alert('Заполните обязательные поля');
        }
        
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_phone')) {
                if (phoneTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }


    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    //Функция проверки номера телефона
    function phoneTest(input) {
        return !/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);
        
    }
})


// Mask for phone

var inp = document.getElementById("inp");

inp.onclick = function() {
    inp.value = "+";
}

var old = 0;

inp.onkeydown = function() {
    var curLen = inp.value.length;
    
    if (curLen < old){
      old--;
      return;
      }
    
    if (curLen == 2) 
    	inp.value = inp.value + "(";
      
    if (curLen == 6)
    	inp.value = inp.value + ")-";
      
     if (curLen == 11)
    	inp.value = inp.value + "-"; 
      
     if (curLen == 14)
    	inp.value = inp.value + "-";  
      
     if (curLen > 16)
    	inp.value = inp.value.substring(0, inp.value.length - 1);
      
     old++;
}