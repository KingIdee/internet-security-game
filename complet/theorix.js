//my fabric example

//canvas wrapper
function Theorix() {

  var that = this;  //reference to obj Theorix

  //the canvas object
  this.Canvas = function (canvasID,canvasProperties) {
    //get the canvas with ID 'canvasID'
    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext("2d");

    //canvas coordinate;
    this.canvasX = this.canvas.offsetLeft;
    this.canvasY = this.canvas.offsetTop;

    if(canvasProperties.width) this.canvas.width = canvasProperties.width;
    if(canvasProperties.height) this.canvas.height = canvasProperties.height;

    this.objects = [];
    var that = this;

    this.add = function(canvasObject) {
      that.objects.push(canvasObject);
    }


    this.renderRect = function(rectObj) { //console.log("rect...")
      that.ctx.fillStyle = rectObj.fill;
      that.ctx.globalAlpha = rectObj.opacity;
      that.ctx.fillRect(rectObj.left,rectObj.top,rectObj.width,rectObj.height);
    }

    this.renderCircle = function(circleObj) {
       that.ctx.fillStyle = circleObj.fill;
       that.ctx.globalAlpha = circleObj.opacity;
        that.ctx.beginPath();
        that.ctx.arc(circleObj.left,circleObj.top,circleObj.radius,0,2*Math.PI,false);
        that.ctx.fill();
        that.ctx.closePath();
    }

    this.renderText = function(textObj) {
      var font = textObj.fontSize+"px "+textObj.fontStyle;
      that.ctx.font = font;
      that.ctx.fillStyle = textObj.fontColor;
      that.ctx.fillText(textObj.text,textObj.left,textObj.top);
    }

    this.renderContainer = function(cObj) {
      //first render container rect
      that.renderAll([cObj.rectContainer]);
      that.renderAll(cObj.content); //console.log(cObj.content);
    }

    this.renderImage = function(imgObj) {
      imgObj.image.onload = function(e) { console.log("image");
        switch(imgObj.imgRole) {
          case "background":
          that.ctx.drawImage(imgObj.image,imgObj.left,imgObj.top,that.canvas.width,that.canvas.height);
          break;
          case "normal":
          that.ctx.drawImage(imgObj.image,imgObj.left,imgObj.top);
          break;
        }
      }
    }

    this.renderAll = function(objects) {console.log(objects);
      var objectList;
      if(objects) objectList = objects;
      else {
        that.ctx.clearRect(0,0,that.canvas.width,that.canvas.height);
        objectList = that.objects;
      }

      objectList.forEach((o)=>{

        switch(o.type) {
          case "Rect":
            that.renderRect(o);
          break;

          case "Circle":
            that.renderCircle(o);
          break;

          case "Text":
            that.renderText(o);
          break;

          case "Container":
            that.renderContainer(o);
          break;

          case "Image":
            that.renderImage(o);
          break;
        }
      });
    }

    //mouse events
    this.mousePos = {};
  var getMousePos = function(canvas, evt) { console.log("canvasX, canvasY",that.canvasX,that.canvasY);
     var rect = that.canvas.getBoundingClientRect();
      scaleX = (that.canvas.width / rect.width),    // relationship bitmap vs. element for X
      scaleY = (that.canvas.height / rect.height);   // relationship bitmap vs. element for Y

      return {
        x: (evt.pageX - that.canvasX),
        y: (evt.pageY - that.canvasY),
        pageX:evt.pageX,
        pageY:evt.pageY
      };
    }

    this.canvas.addEventListener('mousedown', function(evt) {
      //ctx.clearRect(0,0,canvas.width,canvas.height);
     that.mousePos = getMousePos(canvas, evt);
     that.whichClicked();
     //coin2.render(mousePos.x,mousePos.y);
     //question();
      console.log(that.mousePos.x,that.mousePos.y);
      }, false);

    //determine which object was clicked
    this.whichClicked = function(obj) {
      var objs, x, y,prevTop, prevLeft
      X = that.mousePos.pageX;
      Y = that.mousePos.pageY;
      console.log("pageX,pageY",X,Y);
      if(obj) { //console.log("coord",obj.x,obj.y)
        objs = obj.objects;
        x = obj.x;
       y = obj.y;

       prevTop = obj.prevTop;
       prevLeft = obj.prevLeft;

      //x = that.mousePos.x;
      //y = that.mousePos.y;
      }
      else { //console.log("coord 1",that.mousePos.x,that.mousePos.y)
        objs = that.objects;
        x = that.mousePos.x;
        y = that.mousePos.y;
        prevTop = that.canvasY;
        prevLeft = that.canvasX;

      }

      objs.forEach((o)=>{ //console.log("obj:",o.left,o.top,o.width,o.height,o.fill,o.type);
        //if(o.type === "container") {
       console.log(y+" > "+o.top+" && "+y+" < "+(o.top+o.height));
       console.log(x+" > "+o.left+" && "+x+" < "+(o.left+o.width));

          if(y > o.top && y < (o.top + o.height) && x > o.left && x < (o.left + o.width))
          {
            if(o.type === 'Container')
            { console.log("containerrrr");
              that.clickedObj = o;
              console.log("object clicked: ",o.type); //console.log("content:",o.content);
              that.whichClicked({objects:o.content, x:X - that.canvasX + o.left,y:Y - that.canvasY - o.top, prevTop:(prevTop+o.top),prevLeft:(prevLeft+o.left)});
            }
            else console.log("final Object Clicked:",that.clickedObj.left,that.clickedObj.top,that.clickedObj.width,that.clickedObj.height,that.clickedObj.fill,that.clickedObj.type);
          }
         else {
          if(that.clickedObj) console.log("final Object Clicked:",that.clickedObj.left,that.clickedObj.top,that.clickedObj.width,that.clickedObj.height,that.clickedObj.fill,that.clickedObj.type);
        }

      })
    }

  } //end Canvas

  this.Rect = function (rectProperties) {
    this.type = "Rect";
    if(rectProperties.left) this.left = rectProperties.left;
    else this.left = 0;

    if(rectProperties.top) this.top = rectProperties.top;
    else this.top = 0;

    if(rectProperties.fill) this.fill = rectProperties.fill;
    else this.fill = "black";

    if(rectProperties.width) this.width = rectProperties.width;
    else this.width = 0;

    if(rectProperties.height) this.height = rectProperties.height;
    else this.height = 0;

    if(rectProperties.opacity) this.opacity = rectProperties.opacity;
    else this.opacity = 1;
  }

  this.Circle = function(circleProperties) {
    this.type = "Circle";
    if(circleProperties.left) this.left = circleProperties.left;
    else this.left = 0;

    if(circleProperties.top) this.top = circleProperties.top;
    else this.top = 0;

    if(circleProperties.fill) this.fill = circleProperties.fill;
    else this.fill = "black";

    if(circleProperties.radius) this.radius = circleProperties.radius;
    else this.radius = 0;

    if(circleProperties.opacity) this.opacity = circleProperties.opacity;
    else this.opacity = 1;
  }

  this.Text = function(text,textProperties) {
    this.type = "Text";

    if(text)  this.text = text;
    else text = '';

    if(textProperties.left)  this.left = textProperties.left;
    else this.left = 0;

    if(textProperties.top)  this.top = textProperties.top;
    else this.top = 0;

    if(textProperties.fontSize)  this.fontSize = textProperties.fontSize;
    else this.fontSize = 5;

    if(textProperties.fontStyle)  this.fontStyle = textProperties.fontStyle;
    else this.fontStyle = 'Helvetica';

    if(textProperties.fontColor)  this.fontColor = textProperties.fontColor;
    else this.fontColor = 'black';
  }

//Container
  this.Container = function(content,properties) {
    this.type = "Container";
    this.content = content;
    this.dx = 1;
    this.dy = 1;


    if(properties.left) this.left = properties.left;
    else this.left = 0;

    if(properties.top) this.top = properties.top;
    else this.top = 0;

    if(properties.width) this.width = properties.width;
    else this.width = 50;

    if(properties.height) this.height = properties.height;
    else this.height = 50;

    if(properties.fill) this.fill = properties.fill;
    else this.fill = "white";

    if(properties.containerType) this.containerType = properties.containerType;
    else this.containerType = "fixed";  //there is also dynamic

    //create a rect container
    this.rectContainer = new that.Rect({
      top:this.top,
      left:this.left,
      width:this.width,
      height:this.height,
      fill:this.fill
    });

    //compute the coordinates of the client objects in the container so that they are relative
    content.forEach((c)=>{
      c.left += this.left + this.dx;
      c.top += this.top + this.dy;
    });

  }//container

  //image
  this.Image = function(imgProperties) {
    this.type = "Image";
    this.image = new Image();
    if(imgProperties.src) this.src = imgProperties.src;
    else this.src = "";

    if(imgProperties.top) this.top = imgProperties.top;
    else this.top = imgProperties.top;

    if(imgProperties.left) this.left = imgProperties.left;
    else this.left = imgProperties.left;

    if(imgProperties.role) this.imgRole = imgProperties.role;
    else this.imgRole = "normal";

    this.image.src = this.src;

  }

}
