function Web(type){
    this.x = 0;
    this.y=0;
    this.scale = 1;
    this.type = type;
    this.move();
}
Web.prototype.draw = function(gd){
    gd.save();
    gd.translate(this.x,this.y);
    gd.scale(this.scale,this.scale);
    switch (this.type){
        case 1:
            gd.drawImage(JSON['web'],
                20,20,200,200,
                -100,-100,200,200
            );

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            gd.drawImage(JSON['web'],
                20,20,200,200,
                -100,-100,200,200
            );

            break;
    }
    gd.restore();
};
Web.prototype.move = function(){
    var _this = this;
    setInterval(function(){
        _this.scale+=0.01;
    },16);
};
