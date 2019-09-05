var images = [];
images[0] = "images/GridImage-1.png";
images[1] = "images/GridImage-2.png";
images[2] = "images/GridImage-3.png";
images[3] = "images/GridImage-4.png";
images[4] = "images/GridImage-5.png";
images[5] = "images/GridImage-6.png";
images[6] = "images/GridImage-7.png";
images[7] = "images/GridImage-8.png";
function choosePic() {
    var image = images;
    var choosePics = [];
    for (var i = 0; i < 8; i++) {
        let num = parseInt(Math.random() * (image.length - 1));
        choosePics[i] = image[num];
        image.splice(num, 1);
    }
    return choosePics;
}

function inputPic() {
    var choosePics = choosePic();
    for (var i = 0; i < choosePics.length; i++) {
        let doc = document.getElementsByClassName('p' + i)[0];
        doc.style.backgroundImage = 'url(' + choosePics[i] + ')';
    }
}
inputPic()
var time = 0;
function nowTime() {
    time += 1;
    document.getElementsByClassName('times')[0].innerHTML = time;
}
setInterval(nowTime, 1000);
function reset() {
    window.location.reload(true)
}

function ifSuccess() {
    var box = document.getElementsByClassName('box')[0];
    var nodes = document.getElementsByClassName('box')[0].childNodes;
    for (var j = 0; j < nodes.length; j++) {
        if (nodes[j].nodeType!== 1) {
           box.removeChild(nodes[j]);
        }   //元素节点:nodeType=1,属性节点:nodeTyp=2,文本节点:nodeType=3 

    }
    var temp = [];
    for (var q = 0; q < nodes.length; q++) {
        temp[q] = nodes[q].getAttribute('style');
    }
    for (var k = 0; k < temp.length; k++) {
        if (temp[k] == null) {
            temp[k] = "image"
        }
    }
    var success = 0;
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].indexOf(i + 1) != -1) {
            continue;
        } else { success = 1; }
    }
    if (success == 0) {
        alert('你成功啦！用时：' + time);
    }
}
var kongbai=8;
function move(e) {
    var box = document.getElementsByClassName('box')[0];
    var nodes = document.getElementsByClassName('box')[0].childNodes;
    for (var j = 0; j < nodes.length; j++) {
        if (nodes[j].nodeType!== 1) {
           box.removeChild(nodes[j]);
        }   //元素节点:nodeType=1,属性节点:nodeTyp=2,文本节点:nodeType=3 

    }
    var temp = [];
   var exiabiao;
    for (var q = 0; q < nodes.length; q++) {
        temp[q] = nodes[q];
    }
    for(var o=0;o<temp.length;o++){
        if(temp[o]==e){
            exiabiao=o;
        }
    }
    var xiabiao=kongbai;
    var empty=temp[kongbai];
    if(xiabiao==0){
        if(exiabiao==1||exiabiao==3){
            exchange(e, empty);
            kongbai=exiabiao;
        }
    }else if(xiabiao==1){
        if(exiabiao==0||exiabiao==2||exiabiao==4){
            exchange(e, empty);
            kongbai=exiabiao;
        }
    }else if(xiabiao==2){
        if(exiabiao==1||exiabiao==5){
            exchange(e, empty);
            kongbai=exiabiao;
        }
    }else if(xiabiao==3){
        if(exiabiao==0||exiabiao==4||exiabiao==6){
            exchange(e, empty);
            kongbai=exiabiao;
        }
    }else if(xiabiao==4){
        if(exiabiao==1||exiabiao==3||exiabiao==5||exiabiao==7){
            exchange(e, empty);
            kongbai=exiabiao;
        }
    }else if(xiabiao==5){
        if(exiabiao==2||exiabiao==4||exiabiao==8){
            exchange(e, empty);
            kongbai=exiabiao;
        }
    }else if(xiabiao==6){
        if(exiabiao==3||exiabiao==7){
            exchange(e, empty);
            kongbai=exiabiao;
        }
    }else if(xiabiao==7){
        if(exiabiao==4||exiabiao==6||exiabiao==8){
            exchange(e, empty);
            kongbai=exiabiao;
        }
    }else if(xiabiao==8){
        if(exiabiao==7||exiabiao==5){
            exchange(e, empty);
            kongbai=exiabiao;
        }
    }  
    ifSuccess();
}

function exchange(e1, e2) {
    var temp1,temp2;
    temp1=e1.getAttribute('style');
    temp2=e2.getAttribute('style');
    e2.setAttribute('style',temp1);
    e1.setAttribute('style',temp2);
}
