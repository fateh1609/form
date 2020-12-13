class Form{
    constructor(){

    }


    display(){
        var title=createElement("h2");
        title.html("CAR RACING GAME");
        title.position(500,90);

        var input=createInput("NAME");
        var button=createButton("play");
        input.position(500,350);
        button.position(600,380);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value();
            playerCount=playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            
            var greeting=createElement("h3");
            greeting.html("Hello "+ name);
            greeting.position(570,350);
            

        })

        
    }
}