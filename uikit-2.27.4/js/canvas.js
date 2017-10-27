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
            dragOnTop: false
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

    $('.tm-draw').click(function(){
        var droppableRect = new Konva.Rect({
            x: 0,
            y: 0,
            width: 300,
            height: 200,
            /* fill: 'green', */
            stroke: 'black',
            strokeWidth: 2
        });
        /* droppableRect.on('mousedown', function() {
            var layer = this.getLayer();
            layer.draw();
        }); */
        droppableRect.on('mouseover', function() {
            var layer = this.getLayer();
            document.body.style.cursor = 'move';
            layer.draw();
        });
        droppableRect.on('mouseout', function() {
            var layer = this.getLayer();
            document.body.style.cursor = 'default';
            layer.draw();
        });
        var droppableGroup = new Konva.Group({
            x: 50,
            y: 50,
            draggable: true
        });
        layer.add(droppableGroup);

        droppableGroup.add(droppableRect).draw();
        addAnchor(droppableGroup, 0, 0, 'topLeft');
        addAnchor(droppableGroup, 300, 0, 'topRight');
        addAnchor(droppableGroup, 300, 200, 'bottomRight');
        addAnchor(droppableGroup, 0, 200, 'bottomLeft');
    });

    $('.tm-rem').click(function(){
        stage.clear();
        layer.clear();
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