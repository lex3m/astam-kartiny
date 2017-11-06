$(function(){
    var calculation = {
        koef: 8
    }
    var width = $('#canvas').width();
    var height = $('#canvas').height();
    var modal = UIkit.modal("#my-id");
    var modal2 = UIkit.modal("#see-in");
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
            /* dragBoundFunc: function(pos) {
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
            } */
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
            saveStage();
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
    var tooltipLayer = new Konva.Layer();
    var tooltip = new Konva.Text({
        text: "",
        fontFamily: "Calibri",
        fontSize: 12,
        padding: 5,
        visible: true,
        fill: "red",
        opacity: 0.75,
        textFill: "white"
    });
    tooltipLayer.add(tooltip);
    
    stage.add(tooltipLayer);

    var sel, active;
    function rectDraw() {
         var droppableRect = new Konva.Rect({
            x: 0,
            y: 0,
            width: 30,
            height: 20,
            stroke: 'black',
            strokeWidth: 2,
        });
        droppableRect.on('mouseover', function(e) {
            var layer = this.getLayer();
            document.body.style.cursor = 'move';
            layer.draw();
        });
        /* droppableRect.on('dragmove', function(e) {
            // update tooltip
            var mousePos = stage.getPointerPosition();
            tooltip.position({
                x : mousePos.x + 5,
                y : mousePos.y + 5
            });
            tooltip.text("width: " + e.target.attrs.width + ", height: " + e.target.attrs.height);
            tooltip.show();
            tooltipLayer.draw();
        });*/
        droppableRect.on('mousemove', function(e) {
            tooltip.hide();
            tooltipLayer.draw();
        }); 

        droppableRect.on('mouseout', function(e) {
            var layer = this.getLayer();
            document.body.style.cursor = 'default';
            layer.draw();
            tooltip.hide();
            tooltipLayer.draw();
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
            // update tooltip
            var mousePos = stage.getPointerPosition();
            tooltip.position({
                x : mousePos.x + 5,
                y : mousePos.y + 5
            });
            /* calculation.koef = 38/globalKoef; */
            tooltip.text("ширина: " + Math.ceil(e.target.attrs.width/globalKoef) + "см, высота: " + Math.ceil(e.target.attrs.height/globalKoef) + "см");
            tooltip.show();
            tooltipLayer.draw();
            console.log(tooltip);
            // console.log(tooltip);
            // console.log(tooltipLayer);
        });
        droppableRect.on('mouseup', function(e) {
            saveStage();
            tooltip.hide();
            tooltipLayer.draw();
        });
        var droppableGroup = new Konva.Group({
            x: 50,
            y: 50, 
            draggable: true,
            /* fill: 'rgba(180, 160, 127, .3)', */
            /* dragBoundFunc: function(pos) {
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
            } */
        });
        layer.add(droppableGroup);
        stage.add(layer); 
        droppableGroup.add(droppableRect).draw();

        addAnchor(droppableGroup, 0, 0, 'topLeft');
        addAnchor(droppableGroup, 30, 0, 'topRight');
        addAnchor(droppableGroup, 30, 20, 'bottomRight');
        addAnchor(droppableGroup, 0, 20, 'bottomLeft'); 
        saveStage();
    }
    $('.tm-draw').click(function(){
        rectDraw();       
    });
    
    $('.tm-rem').click(function(){
        stage.clear();
        layer.clear();
        layer = new Konva.Layer(); 
        stage = new Konva.Stage({
            container: 'canvas',
            width: width,
            height: height
        });
        stage.add(layer);
        $("#canvas").css('backgroundImage', 'none');
        $('#logo').val('');
    });

    function clearStage () {
        stage.clear();
        layer.clear();
        layer = new Konva.Layer(); 
        stage = new Konva.Stage({
            container: 'canvas',
            width: width,
            height: height
        });
        stage.add(layer);
        stage.add(tooltipLayer);
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
       /*  console.log(dataURL); */
        $('.tm-ready').attr('src', dataURL);
        //downloadURI(dataURL, 'stage.png');
        e.preventDefault();
        clearStage();
    });
    $('.js-inter').click(function(e){
        // if ( modal2.isActive() ) {
            modal2.show();
            var curPic = $(this).attr('src');
            $('.js-bgpic').attr('src', curPic);
        // }
    });

    var bg, imageObj = new Image();

    function loadImg() {
        imageObj.onload = function() {
            bg = new Konva.Image({
                x: 0,
                y: 0,
                image: imageObj,
                width: width,
                height: height,
            }); 
           // console.log('Img loaded');
        };   
        imageObj.crossOrigin = "Anonymous"; 
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
        saveStage();
    });

    $('.tm-check').click(function(){
        var nodes = stage.find('Group');
        clearStage();
        layer.clearBeforeDraw(false);
        var x, y;
        // console.log(nodes);
         for (var i = 0, len = nodes.length; i < len; i++) {
             x = nodes[i].attrs.x + nodes[i].children[0].attrs.x;
             y = nodes[i].attrs.y + nodes[i].children[0].attrs.y;
            clipImg(x, y, nodes[i].children[0].attrs.width, nodes[i].children[0].attrs.height);
        } 
        // var clipStage = JSON.parse(stage.toJSON()).children[0].children;
        // for (var i = 0, len = clipStage.length; i < len; i++) {
        //     if(clipStage[i].attrs.x && clipStage[i].attrs.y){
        //         /* if(clipStage[i].children[0].attrs.y) {
        //             y = clipStage[i].attrs.y + clipStage[i].children[0].attrs.y + clipStage[i].children[0].attrs.height;
        //         } else {
        //             y = clipStage[i].attrs.y;
        //         }
        //         if(clipStage[i].children[0].attrs.x) {
        //             x = clipStage[i].attrs.x + clipStage[i].children[0].attrs.x + clipStage[i].children[0].attrs.width;
        //         } else {
        //             x = clipStage[i].attrs.x;
        //         }
        //         clipImg(x, y, Math.abs(clipStage[i].children[0].attrs.width), Math.abs(clipStage[i].children[0].attrs.height));
        //         */clipImg(clipStage[i].attrs.x, clipStage[i].attrs.y, Math.abs(clipStage[i].children[0].attrs.width), Math.abs(clipStage[i].children[0].attrs.height));
        //     }
        // }
        $("#canvas").css('backgroundImage', 'none');
        $('#logo').val('');
        /* $("#imgprvw").attr("src", ""); */
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
                 $("#canvas").css('backgroundImage', 'url(' + b + ')');
                 loadImg();
                 layer.clearBeforeDraw(true);
            };
            reader.readAsBinaryString(file.files[0]);
        }
    });
    $('.tm-upload').click(function(){
        //console.log('upload');
        clearStage();
        // var json = '{"attrs":{"width":578,"height":200},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":100,"y":100,"sides":6,"radius":70,"fill":"red","stroke":"black","strokeWidth":4},"className":"RegularPolygon"}]}]}';
    // create node using json string
        stage = Konva.Node.create(json, 'canvas');
        var arRect = stage.find('Rect');
        var arCircle = stage.find('Circle');
        for(var i = 0, len = arCircle.length; i < len; i ++){
            var group = arCircle[i].parent;
            arCircle[i].on('dragmove', function() {
                update(this);
                layer.draw();
            });
            arCircle[i].on('mousedown touchstart', function() {
                group.setDraggable(false);
                this.moveToTop();
            });
            arCircle[i].on('dragend', function() {
                group.setDraggable(true);
                layer.draw();
                saveStage();
            });
            // add hover styling
            arCircle[i].on('mouseover', function() {
                var layer = this.getLayer();
                document.body.style.cursor = 'nesw-resize';
                this.setStrokeWidth(4);
                layer.draw();
            });
            arCircle[i].on('mouseout', function() {
                var layer = this.getLayer();
                document.body.style.cursor = 'default';
                this.setStrokeWidth(2);
                layer.draw();
            });
        }
        for(var i = 0, len = arRect.length; i < len; i ++){
            arRect[i].on('mouseover', function(e) {
                var layer = this.getLayer();
                document.body.style.cursor = 'move';
                layer.draw();
            });
            arRect[i].on('mouseout', function(e) {
                var layer = this.getLayer();
                document.body.style.cursor = 'default';
                layer.draw();
            });
            arRect[i].on('mousedown', function(e) {
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
            arRect[i].on('mouseup', function(e) {
                saveStage();
            });
        }
        //console.log(stage.find('Rect'));
    });
    var json;
    function saveStage() {
        //console.log('download');
        json = stage.toJSON();
        //console.log(json);
    }
    $('.tm-download').click(function(){
        //saveStage();
        getTotal();
    });
    $('.tm-api').click(function(){
        var imgArr = [];
        $.ajax({
            type: 'GET',
            url: 'https://pixabay.com/api/?key=6906797-5f5add9e7ac4c0d8d54331350&q=mountain&image_type=photo&pretty=true',
            success: function(data){
                //console.log('success');
                imgArr = data.hits;
                var cont = $(".tm-modal-pics");
                    cont.empty();
                for(var i = 0, len = imgArr.length; i < len; i ++) {
                    cont.append('<div class="uk-width-large-1-4 uk-width-medium-1-3 uk-width-small-1-2 uk-margin-bottom tm-preview-cont uk-text-center" data-count="' + i + '"><img src="' +  imgArr[i].previewURL + '" alt="pic' + i + '"><div>');
                }
                $('.tm-preview-cont').click(function(){
                    var count = $(this).attr('data-count');
                    var img = imgArr[count].webformatURL;
                    imageObj.src = img;
                    $("#canvas").css('backgroundImage', 'url(' + img + ')');
                    loadImg();
                    layer.clearBeforeDraw(true);
                    if ( modal.isActive() ) {
                        modal.hide();
                    }
                });
            }
        });
    });

    var sum = 0;
    function getTotal() {
        sum = 0;
        var getStage = JSON.parse(stage.toJSON()).children[0].children;
        for (var i = 0, len = getStage.length; i < len; i++) {
            if(getStage[i].attrs.x && getStage[i].attrs.y){
                sum += Math.abs(getStage[i].children[0].attrs.width)/globalKoef * Math.abs(getStage[i].children[0].attrs.height)/globalKoef;
            }
        }
        //console.log(sum);
        $('.js-total').text(sum);
    }

});