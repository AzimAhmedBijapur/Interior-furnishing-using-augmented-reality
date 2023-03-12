
function onSearch(){

console.log('test')
var obj=document.getElementById('item').value;
var str = obj.toLowerCase();

if(str.includes("sofa")){
    window.open('./sofas.html')
}

}