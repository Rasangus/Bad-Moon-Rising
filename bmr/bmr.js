import { bmr } from "./module/config.js";
import bmrsheets from "./module/sheets/bmrsheets.js";

Hooks.once("init", function (){
    console.log ("bmr | iniciando Bad Moon: Rising");

    CONFIG.bmr = bmr;

    Items.unregisterSheet ("core", ItemSheet);
    Items.registersheet ("bmr", bmrsheets, {makeDefault: true})
})