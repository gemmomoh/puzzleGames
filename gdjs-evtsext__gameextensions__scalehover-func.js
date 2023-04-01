
if (typeof gdjs.evtsExt__GameExtensions__ScaleHover !== "undefined") {
  gdjs.evtsExt__GameExtensions__ScaleHover.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GameExtensions__ScaleHover = {};
gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1= [];
gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects2= [];
gdjs.evtsExt__GameExtensions__ScaleHover.GDmiscObjects1= [];
gdjs.evtsExt__GameExtensions__ScaleHover.GDmiscObjects2= [];

gdjs.evtsExt__GameExtensions__ScaleHover.conditionTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__ScaleHover.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__ScaleHover.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__ScaleHover.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__GameExtensions__ScaleHover.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ScaleHover_46GDs1t1Objects1Objects = Hashtable.newFrom({"s1t1": gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1});
gdjs.evtsExt__GameExtensions__ScaleHover.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ScaleHover_46GDs1t1Objects1Objects = Hashtable.newFrom({"s1t1": gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1});
gdjs.evtsExt__GameExtensions__ScaleHover.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ScaleHover_46GDmiscObjects1Objects = Hashtable.newFrom({"misc": gdjs.evtsExt__GameExtensions__ScaleHover.GDmiscObjects1});
gdjs.evtsExt__GameExtensions__ScaleHover.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ScaleHover_46GDs1t1Objects1Objects = Hashtable.newFrom({"s1t1": gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1});
gdjs.evtsExt__GameExtensions__ScaleHover.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ScaleHover_46GDs1t1Objects1Objects = Hashtable.newFrom({"s1t1": gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1});
gdjs.evtsExt__GameExtensions__ScaleHover.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ScaleHover_46GDmiscObjects1Objects = Hashtable.newFrom({"misc": gdjs.evtsExt__GameExtensions__ScaleHover.GDmiscObjects1});
gdjs.evtsExt__GameExtensions__ScaleHover.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("misc"), gdjs.evtsExt__GameExtensions__ScaleHover.GDmiscObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("s1t1"), gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1);

gdjs.evtsExt__GameExtensions__ScaleHover.condition0IsTrue_0.val = false;
gdjs.evtsExt__GameExtensions__ScaleHover.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__GameExtensions__ScaleHover.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__GameExtensions__ScaleHover.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ScaleHover_46GDs1t1Objects1Objects, runtimeScene, true, true);
}if ( gdjs.evtsExt__GameExtensions__ScaleHover.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__GameExtensions__ScaleHover.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__GameExtensions__ScaleHover.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ScaleHover_46GDs1t1Objects1Objects, gdjs.evtsExt__GameExtensions__ScaleHover.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ScaleHover_46GDmiscObjects1Objects, true, runtimeScene, false);
}}
if (gdjs.evtsExt__GameExtensions__ScaleHover.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1 */
{for(var i = 0, len = gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween((gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1[i].getName()) + "scale", 1, 1, "easeOutQuad", 500, false, true);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("misc"), gdjs.evtsExt__GameExtensions__ScaleHover.GDmiscObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("s1t1"), gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1);

gdjs.evtsExt__GameExtensions__ScaleHover.condition0IsTrue_0.val = false;
gdjs.evtsExt__GameExtensions__ScaleHover.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__GameExtensions__ScaleHover.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__GameExtensions__ScaleHover.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ScaleHover_46GDs1t1Objects1Objects, runtimeScene, true, false);
}if ( gdjs.evtsExt__GameExtensions__ScaleHover.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__GameExtensions__ScaleHover.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__GameExtensions__ScaleHover.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ScaleHover_46GDs1t1Objects1Objects, gdjs.evtsExt__GameExtensions__ScaleHover.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ScaleHover_46GDmiscObjects1Objects, true, runtimeScene, false);
}}
if (gdjs.evtsExt__GameExtensions__ScaleHover.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1 */
{for(var i = 0, len = gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween((gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1[i].getName()) + "scale", 1.2, 1.2, "easeOutQuad", 500, false, true);
}
}}

}


};

gdjs.evtsExt__GameExtensions__ScaleHover.func = function(runtimeScene, s1t1, Tween, misc, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"s1t1": s1t1
, "misc": misc
},
  _objectArraysMap: {
"s1t1": gdjs.objectsListsToArray(s1t1)
, "misc": gdjs.objectsListsToArray(misc)
},
  _behaviorNamesMap: {
"Tween": Tween
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

gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects1.length = 0;
gdjs.evtsExt__GameExtensions__ScaleHover.GDs1t1Objects2.length = 0;
gdjs.evtsExt__GameExtensions__ScaleHover.GDmiscObjects1.length = 0;
gdjs.evtsExt__GameExtensions__ScaleHover.GDmiscObjects2.length = 0;

gdjs.evtsExt__GameExtensions__ScaleHover.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__GameExtensions__ScaleHover.registeredGdjsCallbacks = [];