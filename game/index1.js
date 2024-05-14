let pieces=document.getElementsByClassName("piece");

let clicked=0;
for (let i = 0; i < pieces.length; i++) {
    let element = pieces[i];    //Piece object
    cL=element.classList;       //Class list
    let piece = (cL[1]+cL[2]);  //piece name
    let row_name=(cL[cL.length-1]); //row name
    let column_name=(cL[cL.length-2]);//column name
    let column_number=column_name.charCodeAt(0)-96; //column number
    let column=String.fromCharCode(column_number+48); //column number in str
    let row='';
    switch (row_name) { //row number in str
        case "one":
            row='8';
            break;

        case "two":
            row='7';
            break;

        case "three":
            row='6';
            break;
        
        case "four":
            row='5';
            break;
        
        case "five":
            row='4';
            break;

        case "six":
            row='3';
            break;
        
        case "seven":
            row='2';
            break;

        case "eight":
            row='1';
            break;
    
        default:
            console.log("hello world");
            break;
    }

    console.log(row);
    console.log(column);
    console.log(piece)

    element.style.transform="translateX("+column+"00%) translateY("+row+"00%)";
    element.style.backgroundImage="url(assets/images/"+piece+".png";
}

class Piece{
    
}