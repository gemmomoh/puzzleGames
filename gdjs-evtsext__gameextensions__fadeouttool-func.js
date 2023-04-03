
if (typeof gdjs.evtsExt__GameExtensions__FadeOutTool !== "undefined") {
  gdjs.evtsExt__GameExtensions__FadeOutTool.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GameExtensions__FadeOutTool = {};
gdjs.evtsExt__GameExtensions__FadeOutTool.GDmiscObjects1= [];
gdjs.evtsExt__GameExtensions__FadeOutTool.GDmiscObjects2= [];
gdjs.evtsExt__GameExtensions__FadeOutTool.GDobjectObjects1= [];
gdjs.evtsExt__GameExtensions__FadeOutTool.GDobjectObjects2= [];

gdjs.evtsExt__GameExtensions__FadeOutTool.conditionTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__FadeOutTool.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__FadeOutTool.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__FadeOutTool.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__FadeOutTool.condition3IsTrue_0 = {val:false};
gdjs.evtsExt__GameExtensions__FadeOutTool.conditionTrue_1 = {val:false};
gdjs.evtsExt__GameExtensions__FadeOutTool.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__GameExtensions__FadeOutTool.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__GameExtensions__FadeOutTool.condition2IsTrue_1 = {val:false};
gdjs.evtsExt__GameExtensions__FadeOutTool.condition3IsTrue_1 = {val:false};


gdjs.evtsExt__GameExtensions__FadeOutTool.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95FadeOutTool_46GDobjectObjects1Objects = Hashtable.newFrom({"object": gdjs.evtsExt__GameExtensions__FadeOutTool.GDobjectObjects1});
gdjs.evtsExt__GameExtensions__FadeOutTool.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95FadeOutTool_46GDmiscObjects1Objects = Hashtable.newFrom({"misc": gdjs.evtsExt__GameExtensions__FadeOutTool.GDmiscObjects1});
gdjs.evtsExt__GameExtensions__FadeOutTool.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("misc"), gdjs.evtsExt__GameExtensions__FadeOutTool.GDmiscObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("object"), gdjs.evtsExt__GameExtensions__FadeOutTool.GDobjectObjects1);

gdjs.evtsExt__GameExtensions__FadeOutTool.condition0IsTrue_0.val = false;
gdjs.evtsExt__GameExtensions__FadeOutTool.condition1IsTrue_0.val = false;
gdjs.evtsExt__GameExtensions__FadeOutTool.condition2IsTrue_0.val = false;
{
gdjs.evtsExt__GameExtensions__FadeOutTool.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__GameExtensions__FadeOutTool.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95FadeOutTool_46GDobjectObjects1Objects, gdjs.evtsExt__GameExtensions__FadeOutTool.mapOfGDgdjs_46evtsExt_95_95GameExtensions_95_95FadeOutTool_46GDmiscObjects1Objects, false, runtimeScene, false);
}if ( gdjs.evtsExt__GameExtensions__FadeOutTool.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__GameExtensions__FadeOutTool.GDmiscObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__GameExtensions__FadeOutTool.GDmiscObjects1[i].getVariableNumber(gdjs.evtsExt__GameExtensions__FadeOutTool.GDmiscObjects1[i].getVariables().get("id")) == (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("id")) || 0 : 0) ) {
        gdjs.evtsExt__GameExtensions__FadeOutTool.condition1IsTrue_0.val = true;
        gdjs.evtsExt__GameExtensions__FadeOutTool.GDmiscObjects1[k] = gdjs.evtsExt__GameExtensions__FadeOutTool.GDmiscObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__GameExtensions__FadeOutTool.GDmiscObjects1.length = k;}if ( gdjs.evtsExt__GameExtensions__FadeOutTool.condition1IsTrue_0.val ) {
{
{gdjs.evtsExt__GameExtensions__FadeOutTool.conditionTrue_1 = gdjs.evtsExt__GameExtensions__FadeOutTool.condition2IsTrue_0;
gdjs.evtsExt__GameExtensions__FadeOutTool.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(10584820);
}
}}
}
if (gdjs.evtsExt__GameExtensions__FadeOutTool.condition2IsTrue_0.val) {
/* Reuse gdjs.evtsExt__GameExtensions__FadeOutTool.GDobjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__GameExtensions__FadeOutTool.GDobjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GameExtensions__FadeOutTool.GDobjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween((gdjs.evtsExt__GameExtensions__FadeOutTool.GDobjectObjects1[i].getName()) + "scaleOut", 2, 2, "easeOutQuad", 300, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__GameExtensions__FadeOutTool.GDobjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GameExtensions__FadeOutTool.GDobjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween((gdjs.evtsExt__GameExtensions__FadeOutTool.GDobjectObjects1[i].getName()) + "fadeOut", 0, "easeOutQuad", 300, true);
}
}}

}


};

gdjs.evtsExt__GameExtensions__FadeOutTool.func = function(runtimeScene, misc, object, Tween, id, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"misc": misc
, "object": object
},
  _objectArraysMap: {
"misc": gdjs.objectsListsToArray(misc)
, "object": gdjs.objectsListsToArray(object)
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
if (argName === "id") return id;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__GameExtensions__FadeOutTool.GDmiscObjects1.length = 0;
gdjs.evtsExt__GameExtensions__FadeOutTool.GDmiscObjects2.length = 0;
gdjs.evtsExt__GameExtensions__FadeOutTool.GDobjectObjects1.length = 0;
gdjs.evtsExt__GameExtensions__FadeOutTool.GDobjectObjects2.length = 0;

gdjs.evtsExt__GameExtensions__FadeOutTool.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__GameExtensions__FadeOutTool.registeredGdjsCallbacks = [];