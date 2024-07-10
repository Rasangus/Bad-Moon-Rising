export default class bmrItemSheet extends itemSheet {

        get template() {
            return `systems/bmr/templates/sheets/${this.item.data.type}-sheet.html`
        }
    getData() {
        const data = super.getData();

        data.config = CONFIG.fs2;

        return data;
    }
 
 }