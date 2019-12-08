const { widthHeight } = require("../functions/util");

class SizedBox {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    generateWidget() {
        if ((this.w == 0 && this.h == 0) || (this.w == undefined && this.h == undefined)) return "SizedBox()";
        return `SizedBox(${widthHeight(this.w, true)}${widthHeight(this.h, false)})`.replace(",", "");
    }
}

module.exports = { SizedBox };