class Form{
    constructor(){}

    display(){
        var title=createElement("h2");
        title.html("CAR RACING GAME");
        title.position(600,0);

        var input=createInput("Name");
        var button=createButton("PLAY");
        var greeting=createElement("h3");
        input.position(600,160);
        button.position(600,200);
        
        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name=input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("HELLO "+name);
            greeting.position(600,160);
                })
    }
}