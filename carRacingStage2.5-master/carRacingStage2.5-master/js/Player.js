class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank= null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  read (){
    database.ref("rank").on(
      "value",function(data){
        this.rank = data.val()
      }
    )
  }
  static rankup(abcd){
    database.ref("/").update({
      rank:abcd
    })
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
