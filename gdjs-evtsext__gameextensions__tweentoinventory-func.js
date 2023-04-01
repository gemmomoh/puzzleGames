
if (typeof gdjs.evtsExt__GameExtensions__TweenToInventory !== "undefined") {
  gdjs.evtsExt__GameExtensions__TweenToInventory.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GameExtensions__TweenToInventory = {};
gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects1= [];
gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects2= [];
gdjs.evtsExt__GameExtensions__TweenToInventory.GDpauseObjects1= [];
gdjs.evtsExt__GameExtensions__TweenToInventory.GDpauseObjects2= [];

gdjs.evtsExt__GameExtensions__TweenToInventory.conditionTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__TweenToInventory.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__TweenToInventory.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__TweenToInventory.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__GameExtensions__TweenToInventory.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95TweenToInventory_46GDs1t1Objects1Objects = Hashtable.newFrom({"s1t1": gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects1});
gdjs.evtsExt__GameExtensions__TweenToInventory.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95TweenToInventory_46GDpauseObjects1Objects = Hashtable.newFrom({"pause": gdjs.evtsExt__GameExtensions__TweenToInventory.GDpauseObjects1});
gdjs.evtsExt__GameExtensions__TweenToInventory.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("s1t1"), gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects1);

gdjs.evtsExt__GameExtensions__TweenToInventory.condition0IsTrue_0.val = false;
gdjs.evtsExt__GameExtensions__TweenToInventory.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__GameExtensions__TweenToInventory.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__GameExtensions__TweenToInventory.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95TweenToInventory_46GDs1t1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.evtsExt__GameExtensions__TweenToInventory.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__GameExtensions__TweenToInventory.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.evtsExt__GameExtensions__TweenToInventory.condition1IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("pause"), gdjs.evtsExt__GameExtensions__TweenToInventory.GDpauseObjects1);
/* Reuse gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects1 */
{for(var i = 0, len = gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionTween((gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects1[i].getName()) + "pos", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("xpos")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ypos")) || 0 : 0), "easeOutQuad", 500, false);
}
}{for(var i = 0, len = gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectAngleTween((gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects1[i].getName()) + "angle", -(45), "easeOutQuad", 500, false);
}
}{for(var i = 0, len = gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Sticker")).Stick(gdjs.evtsExt__GameExtensions__TweenToInventory.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95TweenToInventory_46GDpauseObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
}

}


};

gdjs.evtsExt__GameExtensions__TweenToInventory.func = function(runtimeScene, s1t1, Tween, xpos, ypos, Sticker, pause, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"s1t1": s1t1
, "pause": pause
},
  _objectArraysMap: {
"s1t1": gdjs.objectsListsToArray(s1t1)
, "pause": gdjs.objectsListsToArray(pause)
},
  _behaviorNamesMap: {
"Tween": Tween
, "Sticker": Sticker
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
if (argName === "xpos") return xpos;
if (argName === "ypos") return ypos;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects1.length = 0;
gdjs.evtsExt__GameExtensions__TweenToInventory.GDs1t1Objects2.length = 0;
gdjs.evtsExt__GameExtensions__TweenToInventory.GDpauseObjects1.length = 0;
gdjs.evtsExt__GameExtensions__TweenToInventory.GDpauseObjects2.length = 0;

gdjs.evtsExt__GameExtensions__TweenToInventory.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__GameExtensions__TweenToInventory.registeredGdjsCallbacks = [];