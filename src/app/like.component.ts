
export class LikeComponent{
    constructor(private _LikesCount: number, private _isSelected : boolean){
    }
    onclick(){
        if (this._isSelected){
            this._LikesCount--;
        }else{
        this._LikesCount++;
    }
    this._LikesCount += (this.isSelected) ? -1 : +1;
    this._isSelected = !this.isSelected;
}
    get LikesCount()
{
    return this._LikesCount;
}
get isSelected(){
    return this._isSelected;
}
}