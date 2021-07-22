async function bubble(){
    console.log('bubble()');
    const ele = document.querySelectorAll('.bar');
    for (let i = 0; i < ele.length-1; i++) {
        // console.log('in i loop');
        for(let j=0; j<ele.length-i-1; j++){
            // console.log('in j loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'red';
            if((parseInt(ele[j].style.height)) > (parseInt(ele[j+1].style.height))){
                await waitforme(delay);
                swap(ele[j],ele[j+1])
            }
            ele[j].style.background = 'blueviolet';
            ele[j+1].style.background = 'blueviolet';

        }
        ele[ele.length-1-i].style.background = 'purple';
    }
    ele[0].style.background = 'purple';

}
let bubbleBtn = document.querySelector('.bubbleBtn')
bubbleBtn.addEventListener('click', async function(){
    disableSortBtn();
    disableSizeSlider();
    disablenewArrayBtn();
    await bubble();
    enableSortBtn();
    enableSizeSlider();
    enablenewArrayBtn();
})

