// Number.prototype.times = function(callbackFn){
	// for(let i = 0; i < this; i++) callbackFn(i);
// }

let forms = document.querySelectorAll('.form');
let buttons = document.querySelectorAll('.next-button');

buttons.forEach(button => {
  button.addEventListener('click', switchForm);
});

let endTestButton = document.querySelector(".end-test");
endTestButton.addEventListener('click',switchAnswer);

let totalSum = 0;

function switchForm(event) {
  const currentIndex = Array.from(buttons).indexOf(event.target);
  const currentForm = forms[currentIndex];
  const radios = currentForm.querySelectorAll('input[type="radio"]');
  let formSum = 0;

  radios.forEach(radio => {
    if (radio.checked) {
      formSum += parseInt(radio.value);
    }
  });

  totalSum += formSum;

  currentForm.classList.remove('active');
  if (currentIndex < forms.length - 1) {
    forms[currentIndex + 1].classList.add('active');
  } else {
    forms[0].classList.add('active');
  }
  console.log(`Общая сумма: ${totalSum}`);
}

function switchAnswer(event){
    const currentForm = document.querySelector('.active');;
	currentForm.classList.remove('active');
	let firstAnswer = document.querySelector(".firstAnswer");
    let secondAnswer = document.querySelector(".secondAnswer");
    let thirdAnswer = document.querySelector(".thirdAnswer");

	if(totalSum < 9){
		firstAnswer.style.display = "block";
		firstAnswer.style.color = "#9932CC";	
	}else if(totalSum >= 9 && totalSum <= 14){
		secondAnswer.style.display = "block";
		secondAnswer.style.color = "#4682B4";
	}else {
		thirdAnswer.style.display = "block";
		thirdAnswer.style.color = "#008B8B";
  }
  
  // VN: Хочу предложить более лаконичный принцип для выбора формы:
  /*
    let answer;
    if (totalSum < 9) {
        answer = {selector: ".firstAnswer", color: "#9932CC"};
    } else if (totalSum >= 9 && totalSum <= 14){
        answer = {selector: ".secondAnswer", color: "#4682B4"};
    } else {
        answer = {selector: ".thirdAnswer", color: "#008B8B"};
    }

    let answerForm = document.querySelector(answer.selector);
    answerForm.style.color = answer.color;
    answerForm.style.display = "block";
  */
 // И всё-таки, цвета для форм лучше вынести в css
}




//Это моя функция которую я хочу разобрать позже! не обращайте на нее внимание!
// VN: Хорошо)

// function tabChange() {
  // let formActive = document.querySelector('.active');
  // console.log(formActive);
  // let forms = document.getElementsByTagName('form');
  // console.log(forms);
  // for(let i = 0; i < forms.length; i++){
    // if(!(forms[i] instanceof HTMLFormElement)) continue;
	
    // if(formActive === forms[i]){
		// console.log(i);
      // forms[i].classList.remove('active');
      // forms[(i+1)%forms.length].classList.add('active'); // добавил модуль по количеству форм
      // break; // выход из цикла
    // }  
  // }
// }
// let buttons = document.querySelectorAll('form button');
// buttons.forEach(function(button) {
  // button.addEventListener('click', tabChange);
// });


