$(document).ready(function(){
    var currentPlayer = true;

    function takeTurns(square){
        if (currentPlayer) {
            $(square).html("X");
        } else {
            $(square).html("O");
        }
    }

    function alternatePlayers() {
            $("#square1").click(function(){
                takeTurns(this);
                currentPlayer = false;
                //stop the currentPlayer from changing
                $(this).unbind('click');
            });
            $("#square2").click(function(){
                takeTurns(this);
                currentPlayer = true;
                $(this).unbind('click');
            });
            $("#square3").click(function(){
                takeTurns(this);
                currentPlayer = false;
                $(this).unbind('click');
            });
            $("#square4").click(function(){
                takeTurns(this);
                currentPlayer = true;
                $(this).unbind('click');
            });
            $("#square5").click(function(){
                takeTurns(this);
                currentPlayer = false;
                $(this).unbind('click');
            });
            $("#square6").click(function(){
                takeTurns(this);
                currentPlayer = true;
                $(this).unbind('click');
            });
            $("#square7").click(function(){
                takeTurns(this);
                currentPlayer = false;
                $(this).unbind('click');
            });
            $("#square8").click(function(){
                takeTurns(this);
                currentPlayer = true;
                $(this).unbind('click');
            });
            $("#square9").click(function(){
                takeTurns(this);
                currentPlayer = false;
                $(this).unbind('click');
            });
        }
        alternatePlayers();

    //how does a person win
    // function selectWinner(){
    //     if 
    // }

    //when someone wins, display a message

    //reset game
})