class Form{
    constructor(){
         this.input=createInput("Name");
         this.button=createButton("PLAY");
         this.greeting=createElement("h3");
        
    }
hideform(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}
    display(){
 var title=createElement("h2");
        title.html("CAR RACING GAME");
        title.position(600,0);
 
        this.input.position(600,160);
       this.button.position(600,200);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
player.name=this.input.value();
            playerCount+=1;
           player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("HELLO "+player.name);
            this.greeting.position(600,160);
                })
    }
}