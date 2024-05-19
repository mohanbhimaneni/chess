function addMoves(element) {
    let block=findBlock(element);
    let i=1;
    switch (block['piece']) {
        case 'whp':
            console.log(block['piece']);
            console.log(block['row'].charCodeAt(0)-48);
            console.log(block['column'].charCodeAt(0)-48);
            findMove(block,(block['column'].charCodeAt(0)-48)+0,(block['row'].charCodeAt(0)-48)-1,element,false);
            if(moveCount['whp'][element.classList[4]]==0)
            findMove(block,(block['column'].charCodeAt(0)-48)+0,(block['row'].charCodeAt(0)-48)-2,element,false);
            findMove(block,(block['column'].charCodeAt(0)-48)+1,(block['row'].charCodeAt(0)-48)-1,element,true);
            findMove(block,(block['column'].charCodeAt(0)-48)-1,(block['row'].charCodeAt(0)-48)-1,element,true);
            break;
        case 'blp':
            console.log(block['piece']);
            console.log(block['row'].charCodeAt(0)-48);
            console.log(block['column'].charCodeAt(0)-48);
            findMove(block,(block['column'].charCodeAt(0)-48)-0,(block['row'].charCodeAt(0)-48)+1,element,false);
            if(moveCount['blp'][element.classList[4]]==0)
            findMove(block,(block['column'].charCodeAt(0)-48)-0,(block['row'].charCodeAt(0)-48)+2,element,false);
            findMove(block,(block['column'].charCodeAt(0)-48)+1,(block['row'].charCodeAt(0)-48)+1,element,true);
            findMove(block,(block['column'].charCodeAt(0)-48)-1,(block['row'].charCodeAt(0)-48)+1,element,true);
            break;

        case 'whn':
        case 'bln':
            findMove(block,(block['column'].charCodeAt(0)-48)+1,(block['row'].charCodeAt(0)-48)-2,element,false);
            findMove(block,(block['column'].charCodeAt(0)-48)-1,(block['row'].charCodeAt(0)-48)-2,element,false);
            findMove(block,(block['column'].charCodeAt(0)-48)+2,(block['row'].charCodeAt(0)-48)-1,element,false);
            findMove(block,(block['column'].charCodeAt(0)-48)-2,(block['row'].charCodeAt(0)-48)-1,element,false);
            findMove(block,(block['column'].charCodeAt(0)-48)+1,(block['row'].charCodeAt(0)-48)+2,element,false);
            findMove(block,(block['column'].charCodeAt(0)-48)-1,(block['row'].charCodeAt(0)-48)+2,element,false);
            findMove(block,(block['column'].charCodeAt(0)-48)+2,(block['row'].charCodeAt(0)-48)+1,element,false);
            findMove(block,(block['column'].charCodeAt(0)-48)-2,(block['row'].charCodeAt(0)-48)+1,element,false);
            break;
        case 'whb':
        case 'blb':
            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48)+i)]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48)+i,element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48)+i,element,true);

            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48)+i)]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48)+i,element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48)+i,element,true);
            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48)-i)]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48)-i,element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48)-i,element,true);
            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48)-i)]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48)-i,element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48)-i,element,true);
            break;

        case 'whq':
        case 'blq':
            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48)+i)]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48)+i,element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48)+i,element,true);

            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48)+i)]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48)+i,element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48)+i,element,true);
            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48)-i)]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48)-i,element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48)-i,element,true);
            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48)-i)]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48)-i,element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48)-i,element,true);

            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48))]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48),element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48),element,true);
            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48))]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48),element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48),element,true);
            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)-i)]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)-i,element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)-i,element,true);
            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)+i)]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)+i,element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)+i,element,true);
            break;

        case 'whr':
        case 'blr':
            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48))]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48),element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48)+i,(block['row'].charCodeAt(0)-48),element,true);
            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48))]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48),element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48)-i,(block['row'].charCodeAt(0)-48),element,true);
            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)-i)]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)-i,element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)-i,element,true);
            i=1;
            while(boardPlacement[findPlacement((block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)+i)]=='')
                {findMove(block,(block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)+i,element,false);i+=1;}
            findMove(block,(block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)+i,element,true);
            break;
        
        case 'whk':
        case 'blk':
            if (boardPlacement[findPlacement((block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)+1)]=='') {
                findMove(block,(block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)+1,element,false);                
            }
            else{
                findMove(block,(block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)+1,element,true);
            }
            if (boardPlacement[findPlacement((block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)-1)]=='') {
                findMove(block,(block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)-1,element,false);                
            }
            else{
                findMove(block,(block['column'].charCodeAt(0)-48),(block['row'].charCodeAt(0)-48)-1,element,true);
            }
            if (boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)+1,(block['row'].charCodeAt(0)-48))]=='') {
                findMove(block,(block['column'].charCodeAt(0)-48)+1,(block['row'].charCodeAt(0)-48),element,false);                
            }
            else{
                findMove(block,(block['column'].charCodeAt(0)-48)+1,(block['row'].charCodeAt(0)-48),element,true);
            }
            if (boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)-1,(block['row'].charCodeAt(0)-48))]=='') {
                findMove(block,(block['column'].charCodeAt(0)-48)-1,(block['row'].charCodeAt(0)-48),element,false);                
            }
            else{
                findMove(block,(block['column'].charCodeAt(0)-48)-1,(block['row'].charCodeAt(0)-48),element,true);
            }
            if (boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)-1,(block['row'].charCodeAt(0)-48)-1)]=='') {
                findMove(block,(block['column'].charCodeAt(0)-48)-1,(block['row'].charCodeAt(0)-48)-1,element,false);                
            }
            else{
                findMove(block,(block['column'].charCodeAt(0)-48)-1,(block['row'].charCodeAt(0)-48)-1,element,true);
            }
            if (boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)-1,(block['row'].charCodeAt(0)-48)+1)]=='') {
                findMove(block,(block['column'].charCodeAt(0)-48)-1,(block['row'].charCodeAt(0)-48)+1,element,false);                
            }
            else{
                findMove(block,(block['column'].charCodeAt(0)-48)-1,(block['row'].charCodeAt(0)-48)+1,element,true);
            }
            if (boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)+1,(block['row'].charCodeAt(0)-48)-1)]=='') {
                findMove(block,(block['column'].charCodeAt(0)-48)+1,(block['row'].charCodeAt(0)-48)-1,element,false);                
            }
            else{
                findMove(block,(block['column'].charCodeAt(0)-48)+1,(block['row'].charCodeAt(0)-48)-1,element,true);
            }
            if (boardPlacement[findPlacement((block['column'].charCodeAt(0)-48)+1,(block['row'].charCodeAt(0)-48)+1)]=='') {
                findMove(block,(block['column'].charCodeAt(0)-48)+1,(block['row'].charCodeAt(0)-48)+1,element,false);                
            }
            else{
                findMove(block,(block['column'].charCodeAt(0)-48)+1,(block['row'].charCodeAt(0)-48)+1,element,true);
            }

        
        default:
            console.log('mg');
            break;
    }
}