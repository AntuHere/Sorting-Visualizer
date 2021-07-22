async function selection(){
    var min_index;
    const ele = document.querySelectorAll('.bar');
    for(let i = 0; i < ele.length; i++){
        min_index = i;
        ele[i].style.background = 'blue';
        for(let j=i+1; j < ele.length; j++){
            ele[j].style.background = 'red';
            await waitforme(delay);
            if((parseInt(ele[j].style.height)) < (parseInt(ele[min_index].style.height))){
                if(min_index !== i){
                    ele[min_index].style.background = 'blueviolet';
                    
                }
                min_index = j;
                
            } else{
                ele[j].style.background = 'blueviolet';
            }
        }
        await waitforme(delay);
        swap(ele[min_index],ele[i]);
        ele[min_index].style.background = 'purple';
        ele[i].style.background = 'purple';
    }
}

let selectbtn = document.querySelector('.selectionBtn')
selectbtn.addEventListener('click', async function(){
    disableSortBtn();
    disableSizeSlider();
    disablenewArrayBtn();
    await selection();
    enableSortBtn();
    enableSizeSlider();
    enablenewArrayBtn();
})