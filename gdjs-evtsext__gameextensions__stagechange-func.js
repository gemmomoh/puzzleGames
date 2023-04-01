
if (typeof gdjs.evtsExt__GameExtensions__StageChange !== "undefined") {
  gdjs.evtsExt__GameExtensions__StageChange.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GameExtensions__StageChange = {};
gdjs.evtsExt__GameExtensions__StageChange.GDs1UPObjects1= [];
gdjs.evtsExt__GameExtensions__StageChange.GDs1UPObjects2= [];
gdjs.evtsExt__GameExtensions__StageChange.GDs2BGObjects1= [];
gdjs.evtsExt__GameExtensions__StageChange.GDs2BGObjects2= [];

gdjs.evtsExt__GameExtensions__StageChange.conditionTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__StageChange.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__StageChange.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__StageChange.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__GameExtensions__StageChange.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95StageChange_46GDs1UPObjects1Objects = Hashtable.newFrom({"s1UP": gdjs.evtsExt__GameExtensions__StageChange.GDs1UPObjects1});
gdjs.evtsExt__GameExtensions__StageChange.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
}

}


};gdjs.evtsExt__GameExtensions__StageChange.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("s1UP"), gdjs.evtsExt__GameExtensions__StageChange.GDs1UPObjects1);

gdjs.evtsExt__GameExtensions__StageChange.condition0IsTrue_0.val = false;
gdjs.evtsExt__GameExtensions__StageChange.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__GameExtensions__StageChange.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__GameExtensions__StageChange.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95StageChange_46GDs1UPObjects1Objects, runtimeScene, true, false);
}if ( gdjs.evtsExt__GameExtensions__StageChange.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__GameExtensions__StageChange.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.evtsExt__GameExtensions__StageChange.condition1IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("s2BG"), gdjs.evtsExt__GameExtensions__StageChange.GDs2BGObjects1);
{gdjs.evtTools.tween.tweenCamera(runtimeScene, "Camera", (( gdjs.evtsExt__GameExtensions__StageChange.GDs2BGObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GameExtensions__StageChange.GDs2BGObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__GameExtensions__StageChange.GDs2BGObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GameExtensions__StageChange.GDs2BGObjects1[0].getCenterYInScene()), "", 500, "easeOutQuad");
}
{ //Subevents
gdjs.evtsExt__GameExtensions__StageChange.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__GameExtensions__StageChange.func = function(runtimeScene, s1UP, s2BG, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"s1UP": s1UP
, "s2BG": s2BG
},
  _objectArraysMap: {
"s1UP": gdjs.objectsListsToArray(s1UP)
, "s2BG": gdjs.objectsListsToArray(s2BG)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__GameExtensions__StageChange.GDs1UPObjects1.length = 0;
gdjs.evtsExt__GameExtensions__StageChange.GDs1UPObjects2.length = 0;
gdjs.evtsExt__GameExtensions__StageChange.GDs2BGObjects1.length = 0;
gdjs.evtsExt__GameExtensions__StageChange.GDs2BGObjects2.length = 0;

gdjs.evtsExt__GameExtensions__StageChange.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__GameExtensions__StageChange.registeredGdjsCallbacks = [];