async function insertion(){
    const ele = document.querySelectorAll('.bar'); 

    ele[0].style.background = 'green';
    for(let i=1; i<ele.length; i++){
        let temp = ele[i].style.height;
        let j = i-1;
        ele[i].style.background = 'blue';
        await waitforme(delay);
        while(j >=0 && parseInt(ele[j].style.height) > parseInt(temp)){
            ele[j].style.background = 'blue'

            ele[j+1].style.height = ele[j].style.height
            j--;

            await waitforme(delay);
            for(let k=i; k>=0; k--){
                ele[k].style.background = 'purple'
            }

        }
        ele[j+1].style.height = temp;
        ele[i].style.background = 'purple'
    }
}
let insertBtn = document.querySelector('.insertBtn')
insertBtn.addEventListener('click', async function(){
    disableSortBtn();
    disableSizeSlider();
    disablenewArrayBtn();
    await insertion();
    enableSortBtn();
    enableSizeSlider();
    enablenewArrayBtn();
})