const { PluginBaseClass } = window;

export default class PriceHistoryPlugin extends PluginBaseClass {
    init() {
        console.log('History Plugin loaded');

        this.button = this.el.children['ajax-button'];
        this.textdiv = this.el.children['ajax-display'];
        this.id = this.el.children['ajax-button'].value;

        this._registerEvents();
    }

    _registerEvents() {
        this.button.onclick = this._fetch.bind(this);
    }

    _fetch() {
        const response = await fetch('/price_history/price_change/' + this.id, this._setContent.bind(this), 'application/json', true);
        const data = await response.json();
    }

    _setContent(data) {
        console.log(data);
        let historyData = JSON.parse(data);
        let html = '<ul>';
        Object.entries(historyData).forEach(([key, value]) => {
            html += '<li>' + key + ': ' + value.old + ' to '  + value.new + '</li>'
        });
        html += '</ul>'
        this.textdiv.innerHTML = html;
    }
}
