// Завдання 1 Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно



const inputRadioEls = document.querySelectorAll('[name="color"]');  
const inputCheck = document.querySelector('[name="color"]');
console.log(inputRadioEls);

inputRadioEls.forEach(input => {
    console.log(input);

    input.addEventListener('change', onRadioClick);
})

function onRadioClick(event) {
    const color = event.target.value;
    document.body.style.backgroundColor = color;
}

if (inputCheck) {
    document.body.style.backgroundColor = inputCheck.value;
}




// Завдання 2 Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.



const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    spanRef.textContent = event.target.value
}










const validationInp = document.querySelector("#validation-input")
console.log(validationInp);

validationInp.addEventListener("blur", onInpBlur)

function onInpBlur(event) {
    const requiredValue =  Number(event.target.dataset.length)

    const currentValue = event.target.value.length

    validationInp.classList.remove("valid", "invalid")

    if(currentValue === requiredValue) {
        validationInp.classList.add("valid")
    } else {
        validationInp.classList.add("invalid")
    }
}


// Завдання 3
const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");


rangeEl.addEventListener('input', onFontSize);

function onFontSize(event) {
    const size = event.target.value + "px";

    console.log(size);

    textEl.style.fontSize = size
}





const imageRef = document.querySelector(".image");
imageRef.addEventListener('click', onImageClick);


function onImageClick(event) {
    event.target.src = "https://pibig.info/uploads/posts/2022-06/thumbs/1655670913_2-pibig-info-p-leto-prishlo-kartinki-krasivo-2.jpg";

    event.target.width = 500;

    event.target.alt = "Фотоапарат"

}