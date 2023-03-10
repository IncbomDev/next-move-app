class Grid {
    constructor() {
        this.grid = (function (dims) { var allocate = function (dims) { if (dims.length === 0) {
            return false;
        }
        else {
            var array = [];
            for (var i_1 = 0; i_1 < dims[0]; i_1++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([9, 3]);
        this.nextGridPoint = (function (s) { var a = []; while (s-- > 0)
            a.push(null); return a; })(9 * 3);
        this.PointPotential = (function (dims) { var allocate = function (dims) { if (dims.length === 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i_2 = 0; i_2 < dims[0]; i_2++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([9, 3]);
        this.Difficulty = [[7, 4, 1], [7, 4, 1], [8, 5, 2], [9, 6, 3], [10, 7, 4], [9, 6, 3], [8, 5, 2], [7, 4, 1], [7, 4, 1]];
        this.DynamicLocScore = (function (dims) { var allocate = function (dims) { if (dims.length === 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i_3 = 0; i_3 < dims[0]; i_3++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([9, 3]);
        this.DynamicLinkLoc = (function (dims) { var allocate = function (dims) { if (dims.length === 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i_4 = 0; i_4 < dims[0]; i_4++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([9, 3]);
        this.DynamicCooperationBonus = (function (dims) { var allocate = function (dims) { if (dims.length === 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i_5 = 0; i_5 < dims[0]; i_5++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([9, 3]);
        this.DynamicLinkStart = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
        this.NextSpotPotential = (function (dims) { var allocate = function (dims) { if (dims.length === 0) {
            return 0;
        }
        else {
            var array = [];
            for (var i_6 = 0; i_6 < dims[0]; i_6++) {
                array.push(allocate(dims.slice(1)));
            }
            return array;
        } }; return allocate(dims); })([9, 3]);
        this.CooperationBonus = false;
        this.CooperationBonusString = javaemul.internal.BooleanHelper.toString(this.CooperationBonus);
        var i;
        var k;
        var val;
        for (i = 0; i < 3; i++) {
            {
                for (k = 0; k < this.PointPotential.length; k++) {
                    {
                        switch ((i)) {
                            case 0:
                                val = 5;
                                break;
                            case 1:
                                val = 3;
                                break;
                            case 2:
                                val = 2;
                                break;
                            default:
                                val = 0;
                                break;
                        }
                        this.PointPotential[k][i] = val;
                    }
                    ;
                }
            }
            ;
        }
        this.TOP_INDEX = 0;
        this.MID_INDEX = 1;
        this.BOTTOM_INDEX = 2;
    }
    /**
     * Sets the node at the specified row and column to the specified value
     * @param {number} row Row to set value at (Use TOP_INDEX, MID_INDEX, or BOTTOM_INDEX constants)
     * @param {number} column Column to set value at (1-9)
     * @param {boolean} value Value to set node to (true or false)
     */
    setnode(row, column, value) {
        if (column < 0)
            throw Object.defineProperty(new Error("Column greater than 0. Column passed: " + column), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
        if (column > 8)
            throw Object.defineProperty(new Error("Column greater than 0. Column passed: " + column), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
        switch ((row)) {
            case 0 /* TOP_INDEX */:
                this.grid[column - 1][Grid.TOP_INDEX] = value;
                break;
            case 1 /* MID_INDEX */:
                this.grid[column - 1][Grid.MID_INDEX] = value;
                break;
            case 2 /* BOTTOM_INDEX */:
                this.grid[column - 1][Grid.BOTTOM_INDEX] = value;
                break;
        }
    };
}

class GridPoint {
    constructor(xi, yi, setscore) {
        if (this.xindex === undefined) {
            this.xindex = 0;
        }
        if (this.yindex === undefined) {
            this.yindex = 0;
        }
        if (this.score === undefined) {
            this.score = 0;
        }
        this.xindex = xi;
        this.yindex = yi;
        this.score = setscore;
    }
    GetScore() {
        return this.score;
    }
    GetScore = function () {
        return this.score;
    };
    GetXPos = function () {
        return this.xindex + 1;
    };
    GetYPos = function () {
        return this.yindex + 1;
    };
}
