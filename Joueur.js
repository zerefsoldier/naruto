var Joueur = (function(){
  Joueur.prototype.joueur = function(datas){
    var datasTemp = datas.split("*");
    this.nom = datasTemp[0];
    this.village = datasTemp[1];
    //this. = datasTemp[2];
  };
});
