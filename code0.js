gdjs.MenuCode = {};
gdjs.MenuCode.GDNewGameObjects1= [];
gdjs.MenuCode.GDNewGameObjects2= [];
gdjs.MenuCode.GDNewGameObjects3= [];
gdjs.MenuCode.GDContinueObjects1= [];
gdjs.MenuCode.GDContinueObjects2= [];
gdjs.MenuCode.GDContinueObjects3= [];
gdjs.MenuCode.GDMoreGameObjects1= [];
gdjs.MenuCode.GDMoreGameObjects2= [];
gdjs.MenuCode.GDMoreGameObjects3= [];
gdjs.MenuCode.GDbgObjects1= [];
gdjs.MenuCode.GDbgObjects2= [];
gdjs.MenuCode.GDbgObjects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewGame"), gdjs.MenuCode.GDNewGameObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDNewGameObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDNewGameObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDNewGameObjects2[k] = gdjs.MenuCode.GDNewGameObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDNewGameObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Info", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.MenuCode.GDContinueObjects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDContinueObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDContinueObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDContinueObjects2[k] = gdjs.MenuCode.GDContinueObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDContinueObjects2.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MoreGame"), gdjs.MenuCode.GDMoreGameObjects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDMoreGameObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDMoreGameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.MenuCode.condition0IsTrue_0.val = true;
        gdjs.MenuCode.GDMoreGameObjects1[k] = gdjs.MenuCode.GDMoreGameObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDMoreGameObjects1.length = k;}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.openURL("http://www.mirchigames.com/", runtimeScene);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewGameObjects1.length = 0;
gdjs.MenuCode.GDNewGameObjects2.length = 0;
gdjs.MenuCode.GDNewGameObjects3.length = 0;
gdjs.MenuCode.GDContinueObjects1.length = 0;
gdjs.MenuCode.GDContinueObjects2.length = 0;
gdjs.MenuCode.GDContinueObjects3.length = 0;
gdjs.MenuCode.GDMoreGameObjects1.length = 0;
gdjs.MenuCode.GDMoreGameObjects2.length = 0;
gdjs.MenuCode.GDMoreGameObjects3.length = 0;
gdjs.MenuCode.GDbgObjects1.length = 0;
gdjs.MenuCode.GDbgObjects2.length = 0;
gdjs.MenuCode.GDbgObjects3.length = 0;

gdjs.MenuCode.eventsList1(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
