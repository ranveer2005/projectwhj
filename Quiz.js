class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      background("yellow")
  
      

      //textSize(30);
      //text("quiz Start", 180,100);
  
    Contestant.getPlayerInfo();
  
  
    if(allContestants !== undefined){
      var display_position = 250;


      for(var plr in allContestants){

      var correctAns = "vikram";
      var correctAns1 = "Vikram";
      var correctAns2 = "Vikram Maskara";
      var correctAns3 = "Vikram maskara";
      var correctAns4 = "vikram Maskara";
      var correctAns5 = "vikram maskara";
      if(correctAns === allContestants[plr].answer || correctAns1 === allContestants[plr].answer || correctAns2 === allContestants[plr].answer || correctAns3 || correctAns4 === allContestants[plr].answer === allContestants[plr].answer || correctAns5 === allContestants[plr].answer){
        fill("green");
        var link = "check whatsapp :)";
        display_position += 20;
        textSize(15);
        text("dad"  + ":" +  link, 200, display_position);
          }


    
    
  
  
        
      
    }
    
    }
    
    }
  
  }