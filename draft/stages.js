
var self._resources = {
  firstStage: [],
  secondStage: [],
  add: function( stage, type, source )
};

(function(){
  //-- define local symlinks
    var cssRoot    = self._option.cssRoot;
    var cssPath    = self._option.cssPath;
    var libRoot    = self._option.libRoot;
    var mochaPath  = self._option.mochaPath;
    var chaiPath   = self._option.chaiPath;
    var scriptPath = self._option.scriptPath;
    var specRoot   = self._option.specRoot;
    var specPath   = self._option.specPath;
  //
    
  for (var i=0; i<cssPath.length; i++){
    self._resources.add( 'firstStage', 'link', cssRoot + cssPath[i] );
  }
  self._resources.add( 'firstStage', 'script', libRoot + mochaPath );
  self._resources.add( 'firstStage', 'script', libRoot + chaiPath );
  
  for (var i=0; i<scriptPath.length; i++){
    self._resources.add( 'secondStage', 'script', scriptPath[i] );
  }
  for (var i=0; i<specPath.length; i++){
    self._resources.add( 'secondStage', 'script', specRoot + specPath[i] );
  }
  
})();

self._onResourcesLoaded( 'firstStage', function(){
  if ( !self._hasResourceLoadError ){
  
    mocha.setup( self._option.mochaSetup );
    
    self._loadResources( 'secondStage' );
  };
});

self._onResourcesLoaded( 'secondStage', function(){
  if ( !self._hasResourceLoadError ){
    createMochaViewport();
    self.runner = mocha.run();
  }
});

self._loadResources( 'firstStage' );




IncludeMocha.prototype._loadResources = function( stage ){

  var resNodes = [];

  this._resources[stage].forEach(function(res, i, resorces){
    if ( res[0] == 'link' ){
      resNodes.push( self._includeStylesheet( res[1] ) );
    } else if ( res[0] == 'script' ){
      resNodes.push( self._includeScript( res[1] ) );
    }
  });
  
  self._onNodesLoaded( resNodes, self._stagesCallbacks[stage] );

};

IncludeMocha.prototype._onResourcesLoaded( stage, callback ){
    self._stagesCallbacks[stage] = callback;
};

IncludeMicha.prototype._onNodesLoaded = function( nodes, callback ){
  
  var counter = {
    nodesCount : nodes.length,
    loadedNodesCount : 0,
    nodeLoaded : function(){
      this.loadedNodesCount++;
      if ( nodesCount === loadedNodesCount ){
        callback();
      }
    }
  };
  
  for (var i=0; i<nodes.length; i++){
    nodes[i].addEventListener('load', function(){
      counter.nodeLoaded();
    });
  }
  
  for (var i=0; i<nodes.length; i++){
    nodes[i].addEventListener('error', function(){
      self._foundResourceLoadError( nodes[i] );
    });
  }
};