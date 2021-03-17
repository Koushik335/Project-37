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
        
        question = new Question();
        question.display();
      }
    }

    play(){
        background('Yellow');
        textSize(30);
        fill('Black')
        text('Result of Quiz' , 350, 60);
        Contestant.Info();
        var displayPosition = 200;
        if(allContestants !== undefined){
          var displayPosition = 130;
          var correctAns = "2";
          for(var plr in allContestants){
             if(correctAns === allContestants[plr].answer){
              fill('Green');
             }
             else{
                fill('red');           
             }
          displayPosition += 20;
          textSize(15);
          text(allContestants[plr].name + " : " + allContestants[plr].answer , 350 , displayPosition );
          }

          }
      }
    }
