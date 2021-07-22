let arraySize = document.querySelector('#arr_sz'),
arraySpeed = document.querySelector('#speed_input'),
newArray = document.querySelector('#new_array');

function swap(ele_1, ele_2){
    let temp = ele_1.style.height;
    ele_1.style.height = ele_2.style.height;
    ele_2.style.height = temp
}

function enableSortBtn() {
    document.querySelector(".bubbleBtn").disabled = false;
    document.querySelector(".insertBtn").disabled = false;
    document.querySelector(".mergeBtn").disabled = false;
    document.querySelector(".quickBtn").disabled = false;
    document.querySelector(".selectionBtn").disabled = false;
}
function disableSortBtn() {
    document.querySelector(".bubbleBtn").disabled = true;
    document.querySelector(".insertBtn").disabled = true;
    document.querySelector(".mergeBtn").disabled = true;
    document.querySelector(".quickBtn").disabled = true;
    document.querySelector(".selectionBtn").disabled = true;
}
function disableSizeSlider() {
    document.querySelector('#arr_sz').disabled = true
}
function enableSizeSlider() {
    document.querySelector('#arr_sz').disabled = false
}

function disablenewArrayBtn() {
    newArray.disabled = true
}
function enablenewArrayBtn() {
    newArray.disabled = false
}


function waitforme(milisec){
    return new Promise(resolve => {
        setTimeout(() => {resolve('')}, milisec);
    })
}

//Set Size the array bar
arraySize.addEventListener('input', ()=>{
    // console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(parseInt(arraySize.value))
})

let delay = 300;
// set speed
arraySpeed.addEventListener('input', ()=>{
    //  console.log(arraySpeed.value, typeof(arraySpeed.value));
   delay = 320 -  parseInt(arraySpeed.value)
})

let array = []

// display the bars on the ui
createNewArray();
function createNewArray(noOfBars = 60) {
    array = [];
    deletBar()
    for(let i=0; i<noOfBars; i++){
        array.push(Math.floor(Math.random() * 250) +1)
    }
    // console.log(array);

    const bars = document.querySelector('#bars')
    for(let i=0; i<noOfBars; i++){
        const bar = document.createElement('div');

        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar) 
    }
}

// delete bar when decrease the szie
function deletBar() {
    let bars= document.querySelector('#bars');
    bars.innerHTML = '';
}

// Generate new array
newArray.addEventListener('click', ()=>{
    enableSortBtn();
    enableSizeSlider();
    createNewArray(arraySize.value)
})