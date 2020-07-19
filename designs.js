// Select color input
// Select size input
const fo = document.querySelector('form');
fo.addEventListener('submit',function(event){
    //console.log("hii...");
    let color = document.querySelector('#colorPicker').value;
    let height = document.querySelector('#inputHeight').value;
    let width = document.querySelector('#inputWidth').value;
    event.preventDefault();
// When size is submitted by the user, call makeGrid()
    makeGrid(height, width);
    markColor(color);
});


function makeGrid(height, width) {
    const table = document.querySelector('table');
    var res = "";
    for(var i = 0; i < height; i++){
        res +="<tr>";
        for(var j = 0; j < width; j++){
            res +="<td></td>";
        }
        res +="</tr>";
    }
    table.innerHTML=res;
   
}

function markColor(c){
    const list = document.querySelectorAll('td');
    list.forEach(function(ele, ind, ar){
        ele.addEventListener('click', function(){
            ele.style.backgroundColor=c;
        });
    });
}
