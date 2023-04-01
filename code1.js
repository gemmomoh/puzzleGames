gdjs.InfoCode = {};
gdjs.InfoCode.GDContinueObjects1= [];
gdjs.InfoCode.GDContinueObjects2= [];
gdjs.InfoCode.GDContinueObjects3= [];
gdjs.InfoCode.GDbgObjects1= [];
gdjs.InfoCode.GDbgObjects2= [];
gdjs.InfoCode.GDbgObjects3= [];
gdjs.InfoCode.GDtxtObjects1= [];
gdjs.InfoCode.GDtxtObjects2= [];
gdjs.InfoCode.GDtxtObjects3= [];

gdjs.InfoCode.conditionTrue_0 = {val:false};
gdjs.InfoCode.condition0IsTrue_0 = {val:false};
gdjs.InfoCode.condition1IsTrue_0 = {val:false};


gdjs.InfoCode.eventsList0 = function(runtimeScene) {

{


gdjs.InfoCode.condition0IsTrue_0.val = false;
{
gdjs.InfoCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.InfoCode.condition0IsTrue_0.val) {
{/* Unknown instruction - skipped. */}{/* Unknown instruction - skipped. */}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.InfoCode.GDContinueObjects2);

gdjs.InfoCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.InfoCode.GDContinueObjects2.length;i<l;++i) {
    if ( gdjs.InfoCode.GDContinueObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.InfoCode.condition0IsTrue_0.val = true;
        gdjs.InfoCode.GDContinueObjects2[k] = gdjs.InfoCode.GDContinueObjects2[i];
        ++k;
    }
}
gdjs.InfoCode.GDContinueObjects2.length = k;}if (gdjs.InfoCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


{
}

}


};gdjs.InfoCode.eventsList1 = function(runtimeScene) {

{


gdjs.InfoCode.eventsList0(runtimeScene);
}


};

gdjs.InfoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InfoCode.GDContinueObjects1.length = 0;
gdjs.InfoCode.GDContinueObjects2.length = 0;
gdjs.InfoCode.GDContinueObjects3.length = 0;
gdjs.InfoCode.GDbgObjects1.length = 0;
gdjs.InfoCode.GDbgObjects2.length = 0;
gdjs.InfoCode.GDbgObjects3.length = 0;
gdjs.InfoCode.GDtxtObjects1.length = 0;
gdjs.InfoCode.GDtxtObjects2.length = 0;
gdjs.InfoCode.GDtxtObjects3.length = 0;

gdjs.InfoCode.eventsList1(runtimeScene);

return;

}

gdjs['InfoCode'] = gdjs.InfoCode;
