function get_paragraph_1(){
    var input=[];
    for(var i=1; i<=6; i++){
        input.push(document.getElementById("Sentence_"+ i).value);
        input.join(". ");
    };
    document.getElementById("Show_paragraph_1").innerHTML=input.join(". ");
};
function get_paragraph_2(){
    var input1=[];
    for(var i=7; i<=12; i++){
        input1.push(document.getElementById("Sentence_"+ i).value);
        input1.join(". ");
    };
    document.getElementById("Show_paragraph_2").innerHTML=input1.join(". ");
};