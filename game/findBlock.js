function findBlock(block) {
    let element = block;
    cL=element.classList;
    let piece = (cL[1]+cL[2]);
    let row_name=(cL[cL.length-1][1]);
    let column_name=(cL[cL.length-1][0]);
    let column_number=column_name.charCodeAt(0)-96;
    let column=String.fromCharCode(column_number+48);
    let row='';
    switch (row_name) {
        case "1":
            row='8';
            break;

        case "2":
            row='7';
            break;

        case "3":
            row='6';
            break;
        
        case "4":
            row='5';
            break;
        
        case "5":
            row='4';
            break;

        case "6":
            row='3';
            break;
        
        case "7":
            row='2';
            break;

        case "8":
            row='1';
            break;
    
        default:
            console.log("hello world");
            break;
    }
    let ret={row,column,piece};
    return ret;
}

function findMove(element,hmove,vmove,e,isKill) {
    if(hmove<=8 && vmove<=8 && hmove>0 && vmove>0 &&isKill==false){
    let block=findPlacement(hmove,vmove);
    if(boardPlacement[block]==''){
        console.log(block);
        console.log(1);
        let board=document.getElementsByClassName('board')[0];
        clickedElement=e;
        board.innerHTML='<div class= "move '+element['piece'][0]+element['piece'][1]+' '+element['piece'][2]+ ' '+ block+' " onclick="movePiece(this)"></div>'+board.innerHTML;   
        let movee=document.getElementsByClassName('move')[0];
        movee.style.transform="translateX("+hmove+"00%) translateY("+vmove+"00%)";
        console.log(hmove,vmove);
    }else
    if((boardPlacement[block][0]=='w' && element['piece'][0]=='b')||(boardPlacement[block][0]=='b' && element['piece'][0]=='w')){
        if(element['piece'][2]=='n'){
        let board=document.getElementsByClassName('board')[0];
        console.log(block);
        console.log(2);
        clickedElement=e;
        board.innerHTML='<div class= "kill '+element['piece'][0]+element['piece'][1]+' '+element['piece'][2]+ ' '+ block+' " onclick="movePiece(this)"></div>'+board.innerHTML;   
        let move1=document.getElementsByClassName('kill')[0];
        move1.style.transform="translateX("+hmove+"00%) translateY("+vmove+"00%)";
        console.log(hmove,vmove); }
    }
    }else
    if(hmove<=8 && vmove<=8 && hmove>0 && vmove>0 &&isKill==true){
        let block=findPlacement(hmove,vmove);
        if((boardPlacement[block][0]=='w' && element['piece'][0]=='b')||(boardPlacement[block][0]=='b' && element['piece'][0]=='w')){
                let board=document.getElementsByClassName('board')[0];
                console.log(block);
                console.log(3);
                console.log(hmove,vmove);
                clickedElement=e;
                board.innerHTML='<div class= "kill '+element['piece'][0]+element['piece'][1]+' '+element['piece'][2]+ ' '+ block+' " onclick="movePiece(this)"></div>'+board.innerHTML;   
                let movee=document.getElementsByClassName('kill')[0];
                movee.style.transform="translateX("+hmove+"00%) translateY("+vmove+"00%)";
                console.log(hmove,vmove);
        }
    }
}


function findPlacement(column,row) {
    if(column<=8 && row<=8 && column>0 && row>0 ){
        let col='';
        switch (column) {
            case 1:
                col='a';
                break;
            case 2:
                col='b';
                break;
            case 3:
                col='c';
                break;
            case 4:
                col='d';
                break;
            case 5:
                col='e';
                break;
            case 6:
                col='f';
                break;
            case 7:
                col='g';
                break;
            case 8:
                col='h';
                break;
        
            default:
                break;
        }
        row=8-row+1;
        let block=col+row;
        return block;
    }
}