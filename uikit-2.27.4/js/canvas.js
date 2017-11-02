$(function(){
    var width = $('#canvas').width();
    var height = $('#canvas').height();
    function update(activeAnchor) {
        var group = activeAnchor.getParent();
        var topLeft = group.get('.topLeft')[0];
        var topRight = group.get('.topRight')[0];
        var bottomRight = group.get('.bottomRight')[0];
        var bottomLeft = group.get('.bottomLeft')[0];
        var rect = group.get('Rect')[0];
        var anchorX = activeAnchor.getX();
        var anchorY = activeAnchor.getY();
        // update anchor positions
        switch (activeAnchor.getName()) {
            case 'topLeft':
            topRight.setY(anchorY);
            bottomLeft.setX(anchorX);
            break;
            case 'topRight':
            topLeft.setY(anchorY);
            bottomRight.setX(anchorX);
            break;
            case 'bottomRight':
            bottomLeft.setY(anchorY);
            topRight.setX(anchorX);
            break;
            case 'bottomLeft':
            bottomRight.setY(anchorY);
            topLeft.setX(anchorX);
            break;
                                        }
        rect.position(topLeft.position());
        var width = topRight.getX() - topLeft.getX();
        var height = bottomLeft.getY() - topLeft.getY();
        if(width && height) {
            rect.width(width);
            rect.height(height);
        }
        /* console.log(rect); */
    }

    function addAnchor(group, x, y, name) {
        var stage = group.getStage();
        var layer = group.getLayer();
        var anchor = new Konva.Circle({
            x: x,
            y: y,
            stroke: '#666',
            fill: '#ddd',
            strokeWidth: 2,
            radius: 8,
            name: name,
            draggable: true,
            dragOnTop: false,
            dragBoundFunc: function(pos) {
                var newY, newX;
                if(pos.y < 0){
                    newY = 0;
                } else if (pos.y > height) {
                    newY = height;
                } else {
                    newY = pos.y;
                }
                if(pos.x < 0){
                    newX = 0;
                } else if (pos.x > width) {
                    newX = width;
                } else {
                    newX = pos.x;
                }
                return {
                    x: newX,
                    y: newY
                };
            }
        });
        anchor.on('dragmove', function() {
            update(this);
            layer.draw();
        });
        anchor.on('mousedown touchstart', function() {
            group.setDraggable(false);
            this.moveToTop();
        });
        anchor.on('dragend', function() {
            group.setDraggable(true);
            layer.draw();
        });
        // add hover styling
        anchor.on('mouseover', function() {
            var layer = this.getLayer();
            document.body.style.cursor = 'nesw-resize';
            this.setStrokeWidth(4);
            layer.draw();
        });
        anchor.on('mouseout', function() {
            var layer = this.getLayer();
            document.body.style.cursor = 'default';
            this.setStrokeWidth(2);
            layer.draw();
        });
        group.add(anchor);
    }

    var stage = new Konva.Stage({
        container: 'canvas',
        width: width,
        height: height
    });
    var layer = new Konva.Layer(); 

    stage.add(layer);
    var sel, active;
    $('.tm-draw').click(function(){
     
        var droppableRect = new Konva.Rect({
            x: 0,
            y: 0,
            width: 30,
            height: 20,
            stroke: 'black',
            strokeWidth: 2,
            /* globalCompositeOperation: 'luminosity' */
        });
        /* droppableRect.on('mousedown', function() {
            var layer = this.getLayer();
            layer.draw();
        }); */
        droppableRect.on('mouseover', function(e) {
            var layer = this.getLayer();
            document.body.style.cursor = 'move';
            layer.draw();
        });
        droppableRect.on('mouseout', function(e) {
            var layer = this.getLayer();
            document.body.style.cursor = 'default';
            /* e.target.fill(null); */
            layer.draw();
        });
        droppableRect.on('mousedown', function(e) {
            var allRect = stage.find('Rect');
            if(allRect) {
                for (var i = 0, len = allRect.length; i < len; i++) {
                    allRect[i].fill(null);
                }
            }
            sel = e.target.parent;
            active = e.target;
            active.fill('rgba(37, 60, 127, .3)');
        });
        var droppableGroup = new Konva.Group({
            x: 50,
            y: 50, 
            draggable: true,
            dragBoundFunc: function(pos) {
                var newY, newX;
                if(pos.y < 0){
                    newY = 0;
                } else if (pos.y > height - active.attrs.height) {
                    newY = height - active.attrs.height;
                } else {
                    newY = pos.y;
                }
                if(pos.x < 0){
                    newX = 0;
                } else if (pos.x > width - active.attrs.width) {
                    newX = width - active.attrs.width;
                } else {
                    newX = pos.x;
                }
                return {
                    x: newX,
                    y: newY
                };
            }
        });
        layer.add(droppableGroup);
        
        stage.add(layer); 
        droppableGroup.add(droppableRect).draw();
        /* console.log(droppableGroup); */
        addAnchor(droppableGroup, 0, 0, 'topLeft');
        addAnchor(droppableGroup, 30, 0, 'topRight');
        addAnchor(droppableGroup, 30, 20, 'bottomRight');
        addAnchor(droppableGroup, 0, 20, 'bottomLeft');
    });

    $('.tm-rem').click(function(){
         stage.clear();
        layer.clear();
        /* stage.destroy(layer); */
        layer = new Konva.Layer({
            /* clearBeforeDraw: false */
        }); 
        stage = new Konva.Stage({
            container: 'canvas',
            width: width,
            height: height
        });
        stage.add(layer);
        c = 10;
    });

    function clearStage () {
        stage.clear();
        layer.clear();
        /* stage.destroy(layer); */
        layer = new Konva.Layer({
            /* clearBeforeDraw: false */
        }); 
        stage = new Konva.Stage({
            container: 'canvas',
            width: width,
            height: height
        });
        stage.add(layer);
    }

    function downloadURI(uri, name) {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        delete link;
    }

    $('.tm-save').click(function(e){
        var dataURL = stage.toDataURL();
        /* console.log(dataURL); */
        downloadURI(dataURL, 'stage.png');
        e.preventDefault();
        clearStage();
    });

        var bg, imageObj = new Image();
    /* $('.tm-image').click(function() {
        loadImg();
    }); */
    function loadImg() {
        // imageObj = new Image();
        imageObj.onload = function() {
            bg = new Konva.Image({
                x: 0,
                y: 0,
                image: imageObj,
                width: width,
                height: height,
                /* globalCompositeOperation: 'luminosity' */
            }); 
            console.log('Img loaded');
            /* clipImg(100, 300, 200, 100); */
        };
        

        // imageObj.src = 'https://wallpaperstock.net/wallpapers/thumbs1/48733wide.jpg'; 
        /* imageObj.crossorigin="anonymous"; */
        imageObj.crossOrigin = "Anonymous"; 
        /*  imageObj.src = 'images/astam-img/top-slide-img-3.jpg'; */ 
    };
   function clipImg (x, y, w, h) {
        var group = new Konva.Group({
            clip: {
                x : x,
                y : y,
                width : w,
                height : h
            }
        });
        group.add(bg);
   
        layer.add(group);   
        layer.draw(); 
    }

    $('.tm-del').click(function(e){
        if(sel) sel.destroy();
        layer.draw();
    });

    $('.tm-check').click(function(){
        var nodes = stage.find('Group');
        clearStage();
        layer.clearBeforeDraw(false);
        for (var i = 0, len = nodes.length; i < len; i++) {
            clipImg(nodes[i].attrs.x, nodes[i].attrs.y, nodes[i].children[0].attrs.width, nodes[i].children[0].attrs.height);
        }
        $("#canvas").css('backgroundImage', 'none');
        $("#imgprvw").attr("src", "");
        $('#logo').val('');
        layer.clearBeforeDraw(true);
        imageObj.src = "";
        /* console.log('**************************');
        console.log(Konva.stages[0].children[0].children[0].attrs.x);
        console.log(Konva.stages[0].children[0].attrs.y);
        console.log(Konva.stages[0].children[0].children[0].attrs.width);
        console.log(Konva.stages[0].children[0].children[0].attrs.height);
         console.log(Konva); */
    });

    $('#logo').bind('change', function(evt){
		var file = evt.target;
        if(file.files.length) {
            var reader = new FileReader();
            reader.onload = function(e) {
                var b = "data:image/jpeg;base64," + $.base64.encode(e.target.result);
                imageObj.src = b;
                 /* $("#imgprvw").attr("src", b); */
                 $("#canvas").css('backgroundImage', 'url(' + b + ')');
                 loadImg();
                 layer.clearBeforeDraw(true);
                 /* imageObj.src = ""; */
            };
            reader.readAsBinaryString(file.files[0]);
        }
    });
    $('.tm-upload').click(function(){
        console.log('upload');
        // var json = '{"attrs":{"width":578,"height":200},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":100,"y":100,"sides":6,"radius":70,"fill":"red","stroke":"black","strokeWidth":4},"className":"RegularPolygon"}]}]}';
    // create node using json string
        stage = Konva.Node.create(json, 'canvas');
    });
    var json;
    $('.tm-download').click(function(){
        console.log('download');
        json = stage.toJSON();
        console.log(json);
    });
    $('.tm-api').click(function(){
        var imgArr = [];
        $.ajax({
            type: 'GET',
            url: 'https://pixabay.com/api/?key=6906797-5f5add9e7ac4c0d8d54331350&q=yellow+flowers&image_type=photo&pretty=true',
            success: function(data){
                console.log('success');
                imgArr = data.hits;
                /* var img = data.hits[0].webformatURL;
                imageObj.src = img; 
                $("#canvas").css('backgroundImage', 'url(' + img + ')');
                loadImg();
                layer.clearBeforeDraw(true); */
                var cont = $(".tm-modal-pics");
                for(var i = 0, len = imgArr.length; i < len; i ++) {
                    cont.append('<div class="uk-width-large-1-4 uk-width-medium-1-3 uk-width-small-1-2 uk-margin-bottom"><img src="' +  imgArr[i].previewURL + '" alt="work1"><div>');
                }
            }
        });
    });

    /* $('.draw').click(function(){
        c = c + 5;
        draw_b();
    }); 
    $('.undraw').click(function(){
        var b_canvas = document.getElementById("canvas");
        var b_context = b_canvas.getContext("2d");
        b_context.clearRect(55, 30, 150, 100);
    }); */

});