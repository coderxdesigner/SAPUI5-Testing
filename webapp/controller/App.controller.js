sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function (Controller, MessageToast, JSONModel,ResourceModel) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough",{
       
        onShowHello : function  () {
                // read msg from i18n model!
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var oRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [oRecipient]);
                MessageToast.show(sMsg);
        }
    })

})