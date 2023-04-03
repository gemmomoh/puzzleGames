
if (typeof gdjs.evtsExt__GameExtensions__ZOrder !== "undefined") {
  gdjs.evtsExt__GameExtensions__ZOrder.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GameExtensions__ZOrder = {};
gdjs.evtsExt__GameExtensions__ZOrder.GDpauseUIObjects1= [];
gdjs.evtsExt__GameExtensions__ZOrder.GDpauseUIObjects2= [];
gdjs.evtsExt__GameExtensions__ZOrder.GDs1t1Objects1= [];
gdjs.evtsExt__GameExtensions__ZOrder.GDs1t1Objects2= [];

gdjs.evtsExt__GameExtensions__ZOrder.conditionTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__ZOrder.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__ZOrder.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__ZOrder.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__ZOrder.conditionTrue_1 = {val:false};
gdjs.evtsExt__GameExtensions__ZOrder.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__GameExtensions__ZOrder.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__GameExtensions__ZOrder.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__GameExtensions__ZOrder.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ZOrder_46GDs1t1Objects1Objects = Hashtable.newFrom({"s1t1": gdjs.evtsExt__GameExtensions__ZOrder.GDs1t1Objects1});
gdjs.evtsExt__GameExtensions__ZOrder.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ZOrder_46GDpauseUIObjects1Objects = Hashtable.newFrom({"pauseUI": gdjs.evtsExt__GameExtensions__ZOrder.GDpauseUIObjects1});
gdjs.evtsExt__GameExtensions__ZOrder.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("pauseUI"), gdjs.evtsExt__GameExtensions__ZOrder.GDpauseUIObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("s1t1"), gdjs.evtsExt__GameExtensions__ZOrder.GDs1t1Objects1);

gdjs.evtsExt__GameExtensions__ZOrder.condition0IsTrue_0.val = false;
gdjs.evtsExt__GameExtensions__ZOrder.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__GameExtensions__ZOrder.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__GameExtensions__ZOrder.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ZOrder_46GDs1t1Objects1Objects, gdjs.evtsExt__GameExtensions__ZOrder.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95ZOrder_46GDpauseUIObjects1Objects, false, runtimeScene, false);
}if ( gdjs.evtsExt__GameExtensions__ZOrder.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__GameExtensions__ZOrder.conditionTrue_1 = gdjs.evtsExt__GameExtensions__ZOrder.condition1IsTrue_0;
gdjs.evtsExt__GameExtensions__ZOrder.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(10587292);
}
}}
if (gdjs.evtsExt__GameExtensions__ZOrder.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__GameExtensions__ZOrder.GDpauseUIObjects1 */
/* Reuse gdjs.evtsExt__GameExtensions__ZOrder.GDs1t1Objects1 */
{for(var i = 0, len = gdjs.evtsExt__GameExtensions__ZOrder.GDs1t1Objects1.length ;i < len;++i) {
    gdjs.evtsExt__GameExtensions__ZOrder.GDs1t1Objects1[i].setZOrder((( gdjs.evtsExt__GameExtensions__ZOrder.GDpauseUIObjects1.length === 0 ) ? 0 :gdjs.evtsExt__GameExtensions__ZOrder.GDpauseUIObjects1[0].getZOrder()) + 10);
}
}}

}


};

gdjs.evtsExt__GameExtensions__ZOrder.func = function(runtimeScene, pauseUI, s1t1, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"pauseUI": pauseUI
, "s1t1": s1t1
},
  _objectArraysMap: {
"pauseUI": gdjs.objectsListsToArray(pauseUI)
, "s1t1": gdjs.objectsListsToArray(s1t1)
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

gdjs.evtsExt__GameExtensions__ZOrder.GDpauseUIObjects1.length = 0;
gdjs.evtsExt__GameExtensions__ZOrder.GDpauseUIObjects2.length = 0;
gdjs.evtsExt__GameExtensions__ZOrder.GDs1t1Objects1.length = 0;
gdjs.evtsExt__GameExtensions__ZOrder.GDs1t1Objects2.length = 0;

gdjs.evtsExt__GameExtensions__ZOrder.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__GameExtensions__ZOrder.registeredGdjsCallbacks = [];