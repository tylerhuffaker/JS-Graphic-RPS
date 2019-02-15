/* My original Rock,Paper,Scissors game 
   designed by me 100%
*/
var wintxt1 = new Text("You win!", "30pt Arial");
var losetxt = new Text("You lose", "30pt Arial");
var tietxt = new Text("Tie!", "30pt Arial");
var x = getWidth() / 4;
var y = getHeight() / 2;
function start(){
    var user = prompt("Rock(1), Paper(2), Scissors(3) ");
    var inm = Randomizer.nextInt(1,3);
    if(inm == 1){
        drawRock();
    }else if(inm == 2){
        drawPaper();
    }else{
        drawScissors();
    }
    if(inm == 1 && user == 2 || inm == 2 && user == 3 || inm == 3 && user == 1){
        wintxt1.setPosition(200,200);
        add(wintxt1);
    }else if(inm == 1 && user == 3 || inm == 2 && user == 1 || inm == 3 && user == 2){
        losetxt.setPosition(200,200);
        add(losetxt);
    }else if(inm == 1 && user == 1 || inm == 2 && user == 2 || inm == 3 && user == 3){
        tietxt.setPosition(200,200);
        add(tietxt);
    }
}
function drawRock(){
    var rock = new WebImage("https://www.goodfreephotos.com/albums/vector-images/grey-stone-rock-vector-clipart.png");
    rock.setSize(100,100);
    rock.setPosition(x, y);
    add(rock);
}
function drawPaper(){
    var paper = new WebImage("http://res.publicdomainfiles.com/pdf_view/65/13920015614263.png");
    paper.setSize(100,100);
    paper.setPosition(x, y);
    add(paper);
}
function drawScissors(){
    var scissors = new WebImage("https://www.goodfreephotos.com/albums/vector-images/blue-scissors-vector-clipart.png");
    scissors.setSize(100,100);
    scissors.setPosition(x, y);
    add(scissors);
}
