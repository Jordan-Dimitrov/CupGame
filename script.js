function func(){
    var bet1 = document.getElementById("bet1").value;
    var bet2= document.getElementById("bet2").value;
    if(bet1>0&&bet2>0){
        var player1 = document.getElementById("player1").value;
        var player2 = document.getElementById("player2").value;
        localStorage.setItem("first", player1)
        localStorage.setItem("second", player2)
        localStorage.setItem("firsTbet", bet1)
        localStorage.setItem("seconDbet", bet2)
        var all = parseInt(bet1) + parseInt(bet2)
        localStorage.setItem("all",all)

        alert(player1 + " and " + player2 + " have entered!")
    }if(bet1<=0||bet2<=0){
        alert("enter valid bets!")
    }
}
function move(){
    var player1 = localStorage.getItem("first")
    var player2 = localStorage.getItem("second")
    var bet1 = parseInt(localStorage.getItem("firsTbet"))
    var bet2 = parseInt(localStorage.getItem("seconDbet"))
    if (player1.length>0&&player2.length>0){
        if (bet1>0&&bet2>0){
            location.href="game.html"
            min = 14;
            max = 23;
            var result = Math.floor(Math.random() * (max - min) + min);
            localStorage.setItem("result", result)
        }

    }
}

function game1(){
var firstcoin = document.getElementById("firstCoin").value
    var firstcoinn = parseInt(firstcoin)
    if (firstcoinn<=5&&firstcoinn>=1){
        var result = parseInt(localStorage.getItem("result"))
        result = result-firstcoinn
        localStorage.removeItem("result")
        localStorage.setItem("result", result)
        if (result<0){
            var winner = localStorage.getItem("second")
            localStorage.setItem("winner",winner)
            alert("oops")
            location.href="winscreen.html"
        }
        var delayInMilliseconds = 1000; //1 second
        var vid = document.getElementById("vid");
        vid.play()
        setTimeout(function() {
            vid.pause()
        }, delayInMilliseconds);
    }else{
        alert("enter a coin between 1 and 5!")
    }
}

function game2(){
    var secondcoin = document.getElementById("firstCoin").value
    var secondcoinn = parseInt(secondcoin)
    if (secondcoinn<=5&&secondcoinn>=1){
        var result = parseInt(localStorage.getItem("result"))
        result = result-secondcoinn
        localStorage.removeItem("result")
        localStorage.setItem("result", result)
        if (result<0){
            var winner = localStorage.getItem("first")
            localStorage.setItem("winner",winner)
            alert("oops")
            location.href="winscreen.html"
        }
        var delayInMilliseconds = 1000; //1 second
        var vid = document.getElementById("vid");
        vid.play()
        setTimeout(function() {
            vid.pause()
        }, delayInMilliseconds);
    }else{
        alert("enter a coin between 1 and 5!")
    }
}
document.getElementById("winnerr").innerHTML=localStorage.getItem("winner")
document.getElementById("bets").innerHTML=localStorage.getItem("all")


