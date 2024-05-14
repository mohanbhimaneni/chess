let pieces=document.getElementsByClassName("piece");
let clickedElement=document;
let moveCount={
    'whp':{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},'whk':0,'whq':0,'whr':{1:0,2:0},'whn':{1:0,2:0},'whb':{1:0,2:0},
    'blp':{1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0},'blk':0,'blq':0,'blr':{1:0,2:0},'bln':{1:0,2:0},'blb':{1:0,2:0}
};

let boardPlacement={
    'a1':'','b1':'','c1':'','d1':'','e1':'','f1':'','g1':'','h1':'',
    'a2':'','b2':'','c2':'','d2':'','e2':'','f2':'','g2':'','h2':'',
    'a3':'','b3':'','c3':'','d3':'','e3':'','f3':'','g3':'','h3':'',
    'a4':'','b4':'','c4':'','d4':'','e4':'','f4':'','g4':'','h4':'',
    'a5':'','b5':'','c5':'','d5':'','e5':'','f5':'','g5':'','h5':'',
    'a6':'','b6':'','c6':'','d6':'','e6':'','f6':'','g6':'','h6':'',
    'a7':'','b7':'','c7':'','d7':'','e7':'','f7':'','g7':'','h7':'',
    'a8':'','b8':'','c8':'','d8':'','e8':'','f8':'','g8':'','h8':'',
}
let clicked=0;
// let mutex=0; //0 for unlocked 
setPieces(pieces);

function move(element) {        //This function is called in index.html
    console.log("clicked");
    if(element.classList[0]!='boardbg' && clicked==0){
        element.style.opacity="0.5";
        clickedElement=element;
        clicked=1;
        addMoves(element);
        console.log(element.classList);
    }
    else{
        element.style.opacity='1.0';
        clicked=0;
        removeAllSelected();
    }
}

function movePiece(element){
    let new1 =document.getElementsByClassName(clickedElement.classList[3])[0];
    console.log(clickedElement.classList[3]);
    if(boardPlacement[element.classList[3]]!=''){
    document.getElementsByClassName('piece '+element.classList[3]+'')[0].remove();
    boardPlacement[new1.classList[3]]='';
    new1.classList=element.classList;
    new1.className=new1.className.replace('kill','piece');
    console.log(new1);
    console.log(new1.classList);
    console.log(element.classList);
    pieces=document.getElementsByClassName('piece');
    console.log(pieces);
    setPieces(pieces);
    removeAllSelected();
    clickedElement=document;
    clicked=0;}
    else{
    boardPlacement[new1.classList[3]]='';
    new1.classList=element.classList;
    new1.className=new1.className.replace('move','piece');
    console.log(new1);
    console.log(new1.classList);
    console.log(element.classList);
    pieces=document.getElementsByClassName('piece');
    console.log(pieces);
    setPieces(pieces);
    removeAllSelected();
    clickedElement=document;
    clicked=0;}
}