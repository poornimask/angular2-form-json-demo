"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_LikesCount, _isSelected) {
        this._LikesCount = _LikesCount;
        this._isSelected = _isSelected;
    }
    LikeComponent.prototype.onclick = function () {
        if (this._isSelected) {
            this._LikesCount--;
        }
        else {
            this._LikesCount++;
        }
        this._LikesCount += (this.isSelected) ? -1 : +1;
        this._isSelected = !this.isSelected;
    };
    Object.defineProperty(LikeComponent.prototype, "LikesCount", {
        get: function () {
            return this._LikesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
