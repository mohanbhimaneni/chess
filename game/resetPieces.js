function setPieces(pieces) {
    for (let i = 0; i < pieces.length; i++) {
        ret=findBlock(pieces[i]);
        let row=ret['row'];
        let column=ret['column'];
        let piece=ret['piece'];
    
        console.log(row);
        console.log(column);
        console.log(piece);
    
        pieces[i].style.transform="translateX("+column+"00%) translateY("+row+"00%)";
        pieces[i].style.backgroundImage="url(assets/images/"+piece+".png";
        let place=pieces[i].classList[3];
        boardPlacement[place]=piece;
    }
}

function removeAllSelected(){
    let pieces=document.getElementsByClassName('piece');
    for (let i = 0; i < pieces.length; i++) {
        const element = pieces[i];
        element.style.opacity='1.0';
    }
    let moves=document.getElementsByClassName('move');
    let i=0;
    while (moves.length) {
        moves[i].remove();
    }
    let kills=document.getElementsByClassName('kill');
    i=0;
    while(kills.length){
        kills[i].remove();  
    }
}