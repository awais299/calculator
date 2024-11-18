function displayContent(content){
result.value += content
}
function calclear(){
    result.value = ""
}
function addresult(content){
    result.value += content
}
function calcoutput(){
    result.value = eval(result.value)
}
function caldlt(){
    result.value = result.value.slice(0,-1)
}