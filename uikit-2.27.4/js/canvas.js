
$(function(){

    $('.js-file').click(function(e){
        e.preventDefault();
        $('#logo').click();
    });

    var width = $('#canvas').width();
    var height = $('#canvas').height();
    var modal = UIkit.modal("#my-id");
    var modal2 = UIkit.modal("#see-in");
    var modal3 = UIkit.modal("#js-shape-modal");
    var isTplAct = false;

    /* Ready shapes for modular pictures */
    var shapes = [
    /* 1 rect */        '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":-1,"y":-1,"draggable":true},"className":"Group","children":[{"attrs":{"width":802,"height":482,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":802,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":482,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":802,"y":482,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":395.3125,"y":273.5625,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 100см, высота: 60см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":395.3125,"y":273.5625},"className":"Text"}]}]}',
    /* 2 rect row*/     '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":-2,"y":-1,"draggable":true},"className":"Group","children":[{"attrs":{"width":395,"height":483,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":395,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":483,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":395,"y":483,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":402,"y":-1,"draggable":true},"className":"Group","children":[{"attrs":{"x":4,"width":395,"height":482,"stroke":"black"},"className":"Rect"},{"attrs":{"x":4,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":399,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":399,"y":482,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":4,"y":482,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":190.3125,"y":220.5625,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 49см, высота: 60см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":190.3125,"y":220.5625},"className":"Text"}]}]}',
    /* 2 rect col*/     '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":1,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":798,"height":228,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":798,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":228,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":798,"y":228,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"y":251,"draggable":true},"className":"Group","children":[{"attrs":{"x":1,"y":-3,"width":798,"height":231,"stroke":"black"},"className":"Rect"},{"attrs":{"x":799,"y":-3,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":1,"y":228,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":799,"y":228,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":1,"y":-3,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":172,"y":410.4375,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 100см, высота: 29см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":172,"y":410.4375},"className":"Text"}]}]}',
    /* 3 rect row*/     '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":1,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":256,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":256,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":256,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":271,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":256,"height":478,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":256,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":256,"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":537,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"x":5,"width":256,"height":478,"stroke":"black"},"className":"Rect"},{"attrs":{"x":5,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":261,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":5,"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":261,"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":644,"y":141.4375,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 38см, высота: 72см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":644,"y":141.4375},"className":"Text"}]}]}',
    /* 3 rect col*/     '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":796,"height":149,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":796,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":149,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":796,"y":149,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":2,"y":166,"draggable":true},"className":"Group","children":[{"attrs":{"width":796,"height":149,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":796,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":149,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":796,"y":149,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":1,"y":330,"draggable":true},"className":"Group","children":[{"attrs":{"width":797,"height":149,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":797,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":149,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":797,"y":149,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":367.8125,"y":259.375,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 100см, высота: 19см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":367.8125,"y":259.375},"className":"Text"}]}]}',
    /* 4 rect row*/     '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":187,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":206,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":187,"height":478,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":409,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":187,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":612,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":187,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":692,"y":197.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 23см, высота: 60см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":692,"y":197.6875},"className":"Text"}]}]}',
    /* 4 rect 2row/2col*/   '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":385,"height":225,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":412,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":386,"height":225,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":386,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":386,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":1,"y":252,"draggable":true},"className":"Group","children":[{"attrs":{"width":385,"height":226,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":226,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"y":226,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":414,"y":253,"draggable":true},"className":"Group","children":[{"attrs":{"x":-2,"y":-1,"width":387,"height":226,"stroke":"black"},"className":"Rect"},{"attrs":{"x":385,"y":-1,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":-2,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":-2,"y":-1,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":514,"y":144.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 48см, высота: 28см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":514,"y":144.6875},"className":"Text"}]}]}',
    /* 6 rect 3row/2col*/   '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":249,"height":225,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":1,"y":253,"draggable":true},"className":"Group","children":[{"attrs":{"width":249,"height":225,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":212,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"x":63,"width":249,"height":225,"stroke":"black"},"className":"Rect"},{"attrs":{"x":63,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":312,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":63,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":312,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":276,"y":253,"draggable":true},"className":"Group","children":[{"attrs":{"width":249,"height":225,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":549,"y":1},"className":"Group","children":[{"attrs":{"width":249,"height":226,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"y":226,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":226,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":550,"y":247,"draggable":true},"className":"Group","children":[{"attrs":{"y":7,"width":249,"height":225,"stroke":"black"},"className":"Rect"},{"attrs":{"x":249,"y":7,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":232,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"y":232,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":7,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":387,"y":245.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 9см, высота: 6см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":387,"y":245.6875},"className":"Text"}]}]}',
    /* 3 rect row 2r=1r+3r*/    '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":1,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":190,"height":476,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":190,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":190,"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":608,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":190,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":190,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":190,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":207,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":385,"height":476,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":399,"y":237.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 9см, высота: 6см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":399,"y":237.6875},"className":"Text"}]}]}',
    /* 3 rect row 1row, 2col*/  '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":1,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":386,"height":478,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":386,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":386,"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":412,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"x":-1,"width":387,"height":227,"stroke":"black"},"className":"Rect"},{"attrs":{"x":-1,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":386,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":386,"y":227,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":-1,"y":227,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":411,"y":252,"draggable":true},"className":"Group","children":[{"attrs":{"width":387,"height":227,"stroke":"black"},"className":"Rect"},{"attrs":{"x":387,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":227,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":387,"y":227,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":443,"y":224.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":443,"y":224.6875},"className":"Text"}]}]}',
    /* 4 rect row 1row, 3col*/  '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":276,"height":476,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":276,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":276,"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":297,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":502,"height":146,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":502,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":146,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":502,"y":146,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":297,"y":167,"draggable":true},"className":"Group","children":[{"attrs":{"width":502,"height":146,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":502,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":146,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":502,"y":146,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":297,"y":332,"draggable":true},"className":"Group","children":[{"attrs":{"width":502,"height":146,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":502,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":146,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":502,"y":146,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":421,"y":213.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":421,"y":213.6875},"className":"Text"}]}]}',
    /* 5 rect row 1row, 2row+2col*/     '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":46,"draggable":true},"className":"Group","children":[{"attrs":{"width":383,"height":384,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":383,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":384,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":383,"y":384,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":408,"y":46,"draggable":true},"className":"Group","children":[{"attrs":{"width":184,"height":180,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":408,"y":250,"draggable":true},"className":"Group","children":[{"attrs":{"width":184,"height":180,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":615,"y":46,"draggable":true},"className":"Group","children":[{"attrs":{"width":184,"height":180,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":615,"y":250,"draggable":true},"className":"Group","children":[{"attrs":{"width":184,"height":180,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":355,"y":228.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":355,"y":228.6875},"className":"Text"}]}]}',
    /* 5 rect row 1row, sin*/           '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":327,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":144,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":163,"y":81,"draggable":true},"className":"Group","children":[{"attrs":{"width":144,"height":316,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":316,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"y":316,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":491,"y":80,"draggable":true},"className":"Group","children":[{"attrs":{"width":144,"height":316,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":316,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"y":316,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":2,"y":116,"draggable":true},"className":"Group","children":[{"attrs":{"width":144,"height":243,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":243,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"y":243,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":655,"y":116,"draggable":true},"className":"Group","children":[{"attrs":{"width":144,"height":243,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":243,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"y":243,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":433,"y":234.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":433,"y":234.6875},"className":"Text"}]}]}',
    /* 4 rect row 1row 2rect 2 cubs*/   '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":171,"draggable":true},"className":"Group","children":[{"attrs":{"width":237,"height":239,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":237,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":239,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":237,"y":239,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":561,"y":72,"draggable":true},"className":"Group","children":[{"attrs":{"width":237,"height":239,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":237,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":239,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":237,"y":239,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":255,"y":71,"draggable":true},"className":"Group","children":[{"attrs":{"width":136,"height":408,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":136,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":408,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":136,"y":408,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":408,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":136,"height":408,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":136,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":408,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":136,"y":408,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":119,"y":298.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 30см, высота: 30см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":119,"y":298.6875},"className":"Text"}]}]}',
    /* 3 rect row 2cubs, 1rect*/        '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":99,"draggable":true},"className":"Group","children":[{"attrs":{"width":279,"height":281,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":279,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":281,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":279,"y":281,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":519,"y":99,"draggable":true},"className":"Group","children":[{"attrs":{"width":279,"height":281,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":279,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":281,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":279,"y":281,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":301,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":199,"height":476,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":199,"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":199,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":435,"y":244.25,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":435,"y":244.25},"className":"Text"}]}]}',
    /* 2 rect row 1rect 1 cub*/         '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":1,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":236,"height":476,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":236,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":236,"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":253,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":545,"height":476,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":545,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":545,"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":417,"y":233.25,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":417,"y":233.25},"className":"Text"}]}]}',
    /* 4 rect row 2rect half-h 2full-h*/   '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":97,"draggable":true},"className":"Group","children":[{"attrs":{"y":21,"width":183,"height":238,"stroke":"black"},"className":"Rect"},{"attrs":{"y":21,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":259,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":21,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":259,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":205,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":183,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":412,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":183,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":616,"y":117,"draggable":true},"className":"Group","children":[{"attrs":{"width":183,"height":238,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":238,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":238,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":423,"y":256.25,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":423,"y":256.25},"className":"Text"}]}]}',
    /* 4 rect row 1row, ascending*/         '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":1,"y":237,"draggable":true},"className":"Group","children":[{"attrs":{"width":183,"height":241,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":241,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":241,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":206,"y":157,"draggable":true},"className":"Group","children":[{"attrs":{"width":183,"height":322,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":322,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":322,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":412,"y":78,"draggable":true},"className":"Group","children":[{"attrs":{"y":1,"width":183,"height":400,"stroke":"black"},"className":"Rect"},{"attrs":{"y":1,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":401,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":401,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":1,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":616,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":183,"height":478,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":432,"y":234.25,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":432,"y":234.25},"className":"Text"}]}]}'
    ]
    $('.js-shape').click(function(e) {
        e.preventDefault();
        modal3.show();
    });
    var shapeNo;
    var isShapeAtStage;
    $('.item').click(function(e) {
        shapeNo = $(this).attr('data-number');
        clearStage();
        stage = Konva.Node.create(shapes[shapeNo], 'canvas');
        clipShape();
        // stage.add(shadowedBg);
        // stage.add(tooltipLayer);
        // shadowedBg.moveToBottom();
        // stage = Konva.Node.create(shapes[shapeNo], 'canvas');
        // updateBindings();
        $('.tm-canv-icon.check').css('display', 'none');
        $('.tm-canv-icon.tm-check').css('display', 'block');
        modal3.hide();
        //block adding rect/unblock deletion
        $('.tm-canv-icon.square').css('display', 'block');
        $('.tm-canv-icon.tm-draw').css('display', 'none');
        //block deletion
        $('.tm-canv-icon.close').css('display', 'block');
        $('.tm-canv-icon.tm-del').css('display', 'none');
        isTplAct = true; //disable draw rectangles
        isShapeAtStage = true; //some shapes present at current stage
       /*  uncomment to make shape
        st1 = stage.toJSON();
        console.log(st1); */
        // console.log($(this).attr('data-number'));
    });

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

        var rwBefore = rect.width();
        var rhBefore = rect.height()

        /* var Const = 20*globalKoef;  */
        if(width && height) {
            rect.width(width);
            rect.height(height); 
        }
        var rw = Math.round(rect.width()/globalKoef);
        var rh = Math.round(rect.height()/globalKoef);
            if(rw > 100 && rh > 100 || rw < 10) {
                rect.width(rwBefore);
                switch (activeAnchor.getName()) {
                    case 'topLeft':
                    topLeft.setX(topRight.getX() - rwBefore);
                    bottomLeft.setX(bottomRight.getX() - rwBefore);
                    rect.position(topLeft.position());
                    break;
                    case 'topRight':
                    topRight.setX(topLeft.getX() + rwBefore);
                    bottomRight.setX(bottomLeft.getX() + rwBefore);
                    rect.position(topLeft.position());
                    break;
                    case 'bottomRight':
                    bottomRight.setX(bottomLeft.getX() + rwBefore);
                    topRight.setX(topLeft.getX() + rwBefore);
                    rect.position(topLeft.position());
                    break;
                    case 'bottomLeft':
                    bottomLeft.setX(bottomRight.getX() - rwBefore);
                    topLeft.setX(topRight.getX() - rwBefore);
                    rect.position(topLeft.position());
                    break;
                }

            } 
            if(rh > 100 && rw > 100 || rh < 10) {
                // rect.height(20*globalKoef);
                rect.height(rhBefore);
                switch (activeAnchor.getName()) {
                    case 'topLeft':
                    topLeft.setY(bottomLeft.getY() - rhBefore);
                    topRight.setY(bottomLeft.getY() - rhBefore);
                    rect.position(topLeft.position());
                    break;
                    case 'topRight':
                    topRight.setY(bottomLeft.getY() - rhBefore);
                    topLeft.setY(bottomLeft.getY() - rhBefore);
                    rect.position(topLeft.position());
                    break;
                    case 'bottomRight':
                    bottomRight.setY(topLeft.getY() + rhBefore);
                    bottomLeft.setY(topLeft.getY() + rhBefore);
                    rect.position(topLeft.position());
                    break;
                    case 'bottomLeft':
                    bottomLeft.setY(topLeft.getY() + rhBefore);
                    bottomRight.setY(topLeft.getY() + rhBefore);
                    rect.position(topLeft.position());
                    break;
                }
            } /* else {
                rect.height(height);
            }  */
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

            layerProc();
        });
        anchor.on('mousedown touchstart', function() {
            group.setDraggable(false);
            this.moveToTop();
        });
        anchor.on('dragend', function(e) {
            group.setDraggable(true);
            layer.draw();
            saveStage();
            // console.log('4');
            getTotal();

           
            // console.log(this.getLayer().children[0]);
            //  var l = this.getLayer(), g = this.getLayer().children[0], r = this.getLayer().children[0].children[0], newX, newY;
            // console.log(l); 
            // console.log(g); 
            // console.log(r);
            // newX = Math.abs(g.attrs.x + r.attrs.x);
            // newY = Math.abs(g.attrs.y + r.attrs.y);
            //  g.setAttrs({
            //     x : newX,
            //     y : newY
            // });  
            //  r.setAttrs({
            //     x : 0,
            //     y : 0
            // }); 
            // g.draw();
            // layer.draw();
            // stage.draw();
            // console.log(l); 
            // console.log(g); 
            // console.log(r);
        });
        // add hover styling
        anchor.on('mouseover', function() {
            var layer = this.getLayer();
            this.setStrokeWidth(4);
            switch (this.getName()) {
                case 'topLeft':
                document.body.style.cursor = 'nwse-resize';
                break;
                case 'topRight':
                document.body.style.cursor = 'nesw-resize';
                break;
                case 'bottomLeft':
                document.body.style.cursor = 'nesw-resize';
                break;
                case 'bottomRight':
                document.body.style.cursor = 'nwse-resize';
                break;
            }
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

    /* function adjustBlocksKoef() {
        console.log("globalKoef: " + globalKoef);
    } */

    var stage = new Konva.Stage({
        container: 'canvas',
        width: width,
        height: height
    });
    var layer = new Konva.Layer({
        name: 'layer1'
    }); 

    var layer1 = new Konva.Layer({
        name: 'mainLayer'
    }); 

    stage.add(layer);
    stage.add(layer1);
    var tooltipLayer = new Konva.Layer({
        fill: "black"
    });
    var tooltip = new Konva.Text({
        text: "",
        fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: 900,
        lineHeight: 1.2,
        padding: 5,
        visible: true,
        fill: "white",
        opacity: 0.75,
        textFill: "red"
    });
     var back = new Konva.Rect({
        x: 0,
        y: 0,
        /* width: tooltip.getWidth(), */
        height: 35,
        cornerRadius: 5
        /*  fill: "green",
         stroke: 'black' */ 
        /* opacity: 0.5, */
    }); 
    tooltipLayer.add(back);
    tooltipLayer.add(tooltip);
    
    stage.add(tooltipLayer);

    var shadowedBg = new Konva.Layer({
        fill: "white",
        opacity: 0.75,
    });
    var transpBg = new Konva.Rect({
            x: 0,
            y: 0,
            width: width,
            height: height,
            fill: 'rgba(255, 255, 255, .9)'
        });
    
    shadowedBg.add(transpBg);
    stage.add(shadowedBg);

    var sel, active, current;
    function rectDraw() {
         var droppableRect = new Konva.Rect({
            x: 0,
            y: 0,
            width: 150,
            height: 100,
            stroke: 'black',
            strokeWidth: 2,
        });
        droppableRect.on('mouseover', function(e) {
            var layer = this.getLayer();
            document.body.style.cursor = 'move';
            layer.draw();
        });

        droppableRect.on('mouseout', function(e) {
            var layer = this.getLayer();
            document.body.style.cursor = 'default';
            layer.draw();
            tooltip.hide();
            back.hide();
            tooltipLayer.draw();
        });
        droppableRect.on('mouseover mousemove', function(e) {
            var mousePos = stage.getPointerPosition();
            tooltip.position({
                x : mousePos.x + 5,
                y : mousePos.y + 5
            });
            tooltip.text("ширина: " + Math.round(e.target.attrs.width/globalKoef) + "см\nвысота: " + Math.round(e.target.attrs.height/globalKoef) + "см");
            tooltip.show();
            back.position({
                x : mousePos.x + 5,
                y : mousePos.y + 5
            });
            back.fill('#426ec7');
            back.width(tooltip.getWidth());
            back.show();

            tooltipLayer.moveToTop(); 
            tooltipLayer.draw(); 
        });
         droppableRect.on('mousedown', function(e) {  
              back.scale({
                x: 0,
                y: 0
            }); 
             tooltip.scale({
                x: 0,
                y: 0
            });  
             //layer.draw();  
        }); 
        droppableRect.on('mousedown', function(e) {
            selectionRectRemove();
            sel = e.target.parent;
            active = e.target;
            active.fill('rgba(37, 60, 127, .3)');
            //make active icon for deletion
            $('.tm-canv-icon.close').css('display', 'none');
            $('.tm-canv-icon.tm-del').css('display', 'block');

            shadowedBg.moveToBottom();
            shadowedBg.draw();
        });
        droppableRect.on('mouseup', function(e) {
            // selectionRectRemove();
            back.scale({
                x: 1,
                y: 1
            }); 
             tooltip.scale({
                x: 1,
                y: 1
            }) 
            saveStage();
            layerProc();
        });
        var droppableGroup = new Konva.Group({
            /* x: 330,
            y: 180, */
            x: 10,
            y: 10, 
            draggable: true,
            /* fill: 'rgba(180, 160, 127, .3)', */
               /* dragBoundFunc: function(pos) {
                var newY, newX, dX, dY;
                dY = active.parent.attrs.y + active.attrs.y;
                dX = active.parent.attrs.x + active.attrs.x;
                if(dY <= 0){
                    newY = -1 * active.attrs.y + 1;
                    // console.log('1y');
                } else if (dY > height - active.attrs.height) {
                    newY = height - active.attrs.height;
                    // console.log('2y');
                } else {
                    newY = pos.y;
                }
                if(dX <= 0){
                    newX = -1 * active.attrs.x + 1;
                    // console.log('1x');
                } else if (dX > width - active.attrs.width) {
                    newX = width - active.attrs.width;
                    // console.log('2x');
                } else {
                    newX = pos.x;
                }
                // console.log(newX, newY);
                // console.log(this);
               
                return {
                    x: newX,
                    y: newY
                };
            }    */
        });
        layer1.add(droppableGroup);

        droppableGroup.on('dragmove', function() {
            layerProc();
        });

        layer1.moveToTop();
        shadowedBg.moveToBottom();

        droppableGroup.add(droppableRect).draw();
        addAnchor(droppableGroup, 0, 0, 'topLeft');
        addAnchor(droppableGroup, 150, 0, 'topRight');
        addAnchor(droppableGroup, 150, 100, 'bottomRight');
        addAnchor(droppableGroup, 0, 100, 'bottomLeft'); 
        layer1.draw();
        saveStage();
        getTotal();
        //make clip active
        $('.tm-canv-icon.square').css('display', 'none');
        $('.tm-canv-icon.tm-check').css('display', 'block');

        layerProc();
        isShapeAtStage = true;
    }
    $('.tm-draw').click(function(){
        rectDraw();       
    });
    
    $('.tm-rem').click(function(){
        stage.clear();
        layer.clear();
        layer = new Konva.Layer({
            name: 'layer1'
        }); 
        layer1 = new Konva.Layer({
            name: 'mainLayer'
        }); 
        stage = new Konva.Stage({
            container: 'canvas',
            width: width,
            height: height
        });
        stage.add(layer);
        stage.add(layer1);
        stage.add(tooltipLayer);
        stage.add(shadowedBg);
        $("#canvas").css('backgroundImage', 'none');
        $('#logo').val('');
        clearTotal();
        clearHistory();
        var inputRange = document.querySelector('input[type="range"]');
        inputRange.disabled = false;
        inputRange.rangeSlider.update();
        toggleMesurement(false);
        isTplAct = false;
        isShapeAtStage = false;
        forTotal = false;
        $('.js-pic-data').empty();
        $('#canvas').width(800); $('#canvas').height(480);
        showPosterDimentions(800, 480);
    });
    //function for disable/enable slider and selects
    function toggleMesurement(arg) {
        // console.log('arg: ', arg);
        $('.js-material').attr('disabled', arg).trigger('refresh');
        $('.js-underframe').attr('disabled', arg).trigger('refresh');
        $('.js-stylization').attr('disabled', arg).trigger('refresh');
        $('.js-covering').attr('disabled', arg).trigger('refresh');
        $('.tm-canv-icon.sub').css('display', 'block');
        $('.tm-canv-icon.org').css('display', 'none');        

        if(sum && area && material && covering && stylization && perim && underframe) {
            $('.tm-book').attr('disabled', !arg);
        }
        
        if(!arg) {
            //set custom selects to default value
            $('.js-material').val('1').trigger('refresh');
            $('.js-underframe').val('1').trigger('refresh');
            $('.js-stylization').val('1').trigger('refresh');
            $('.js-covering').val('1').trigger('refresh');
            material = 1, covering = 1, underframe = 1, stylization = 1;
            $('.tm-api').css('display', 'block');
            $('.js-file').css('display', 'block');
            $('.tm-button-dis').css('display', 'none');
            $('.tm-book').attr('disabled', !arg);
            //set rangeslider to defaul value
            // var inputRange = document.querySelector('input[type="range"]');
            //     value = '100',
            //     event = document.createEvent('Event');
            //     event.initEvent('change', true, true);
            //     inputRange.value = value;
            //     inputRange.dispatchEvent(event);
            $('.js-shape').attr('disabled', true);
        } else {
            $('.tm-api').css('display', 'none');
            $('.js-file').css('display', 'none');
            $('.tm-button-dis').css('display', 'block');
            $('.js-shape').attr('disabled', true);
            $('.tm-canv-icon.tm-rem').css('display', 'block');
            $('.tm-canv-icon.trash').css('display', 'none');
        }
    }
    function clearHistory () {
        state = [];
        mods = 0;
    }
    function clearStage () {
        stage.clear();
        layer.clear();
        layer = new Konva.Layer({
            name: 'layer1'
        }); 
        stage = new Konva.Stage({
            container: 'canvas',
            width: width,
            height: height
        }); 

        stage.add(layer);
        stage.add(tooltipLayer);
    }


     /* function downloadURI(uri, name) {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        delete link;
    }  */
    var dataURL;
    function saveImg() {
        dataURL = stage.toDataURL();
        if(dataURL) $('.tm-ready').attr('src', dataURL);
       // console.log(dataURL);
        //downloadURI(dataURL, 'stage.png');
        // e.preventDefault();
        // clearStage();
        // clearHistory();
        // clearTotal();
    }

    $('.tm-save').click(function(e){
        saveImg();
    });
    $('.js-inter').click(function(e){
        modal2.show();
        var curPic = $(this).attr('src');
        $('.js-bgpic').attr('src', curPic);
        if(dataURL) $('.tm-ready').attr('src', dataURL);
    });

    function showPosterDimentions(w, h) {
        posterDimentions.width = w;
        posterDimentions.height = h;
        $('.js-poster-width').text(posterDimentions.width_cm());
        $('.js-poster-height').text(posterDimentions.height_cm());
    }

    var bg, imageObj = new Image();
        imageObj.crossOrigin = "Anonymous"; 

    function loadImg() {
        imageObj.onload = function() {
            var imgw, imgh, w, h, k, k1;
            k = 800/480;
            k1 = this.width/this.height;
            imgw = this.width;
            imgh = this.height;
            if (k <= k1) {
                h = 800*imgh/imgw;
                w = 800;
            } else {
                h = 480;
                w = imgw*480/imgh;
            }
            // console.log( imgw, imgh);
            // console.log( w, h);
            showPosterDimentions(w, h);
            $('#canvas').width(w); $('#canvas').height(h);
            bg = new Konva.Image({
                x: 0,
                y: 0,
                image: imageObj,
                width: w,
                height: h, 
            }); 
        };   
        if(!isTplAct) {
            $('.tm-canv-icon.square').css('display', 'none');
            $('.tm-canv-icon.tm-draw').css('display', 'block');
        }

        $('.tm-canv-icon.trash').css('display', 'none');
        $('.tm-canv-icon.tm-rem').css('display', 'block');
        $('.js-shape').attr('disabled', false);

        if(isShapeAtStage) {
            setTimeout(function(){
                clipShape();
            }, 100);
        }
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
        stage.draw();
        saveStage();

        getTotal();
        $('.tm-canv-icon.close').css('display', 'block');
        $('.tm-canv-icon.tm-del').css('display', 'none');
        layerProc();
    });

    function layerProc () {
        var layer = stage.find('.mainLayer')[0]  || stage.find('Group')[0].getParent() ;
        var layer1 = stage.find('.layer1')[0];

        var nodes = stage.find('.mainLayer')[0] && stage.find('.mainLayer')[0].children || stage.find('Group');
        layer1.clear();
        layer1.clearBeforeDraw(false);
        var x, y;

        for (var i = 0, len = nodes.length; i < len; i++) {
            if(nodes[i].children && nodes[i].children[0].attrs && nodes[i].children[0].attrs.x) {
                x = nodes[i].attrs.x + nodes[i].children[0].attrs.x;
            } else {
                x = nodes[i].attrs.x;
            }
            if(nodes[i].children && nodes[i].children[0].attrs && nodes[i].children[0].attrs.y) {
                y = nodes[i].attrs.y + nodes[i].children[0].attrs.y;
            } else {
                y = nodes[i].attrs.y;
            }
            clipImg(x, y, nodes[i].children[0].attrs.width, nodes[i].children[0].attrs.height);
        } 
 
    }
    
    function clipShape() {
        // var nodes = stage.find('Group');
        // var layer1 = nodes[0].getParent();
        var nodes = stage.find('.mainLayer')[0] && stage.find('.mainLayer')[0].children || stage.find('Group');
        var layer1 = stage.find('.mainLayer')[0] || stage.find('Group')[0].getParent();

        clearStage();
        layer.clearBeforeDraw(false);
        var x, y;

        for (var i = 0, len = nodes.length; i < len; i++) {
            if(nodes[i].children && nodes[i].children[0].attrs && nodes[i].children[0].attrs.x) {
                x = nodes[i].attrs.x + nodes[i].children[0].attrs.x;
            } else {
                x = nodes[i].attrs.x;
            }
            if(nodes[i].children && nodes[i].children[0].attrs && nodes[i].children[0].attrs.y) {
                y = nodes[i].attrs.y + nodes[i].children[0].attrs.y;
            } else {
                y = nodes[i].attrs.y;
            }
            clipImg(x, y, nodes[i].children[0].attrs.width, nodes[i].children[0].attrs.height);
        } 
        stage.add(shadowedBg);
        stage.add(layer1);

        shadowedBg.moveToBottom();
        layer1.moveToTop();
        layer1.name('mainLayer');

        updateBindings();

    }
    var forTotal;
    $('.tm-check').click(function(){
        forTotal = true;
        var nodes = stage.find('.mainLayer')[0].children;

        clearStage();
        layer.clearBeforeDraw(false);
        var x, y;
        for (var i = 0, len = nodes.length; i < len; i++) {
            if(nodes[i].children && nodes[i].children[0].attrs && nodes[i].children[0].attrs.x) {
                x = nodes[i].attrs.x + nodes[i].children[0].attrs.x;
            } else {
                x = nodes[i].attrs.x;
            }
            if(nodes[i].children && nodes[i].children[0].attrs && nodes[i].children[0].attrs.y) {
                y = nodes[i].attrs.y + nodes[i].children[0].attrs.y;
            } else {
                y = nodes[i].attrs.y;
            }
            clipImg(x, y, nodes[i].children[0].attrs.width, nodes[i].children[0].attrs.height);
        } 

        $("#canvas").css('backgroundImage', 'none');
        $('#logo').val('');
        /* $("#imgprvw").attr("src", ""); */
        layer.clearBeforeDraw(true);
        imageObj.src = "";
        
        var inputRange = document.querySelector('input[type="range"]');
        inputRange.disabled = true;
        inputRange.rangeSlider.update();
        saveImg();
        toggleMesurement(true);

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
                 $('.js-pic-data').empty();
            };
            reader.readAsBinaryString(file.files[0]);
        }
    });
    $('.tm-undo').click(function(){
        if (mods < state.length) {
            history(true);
        }        
    });
    $('.tm-redo').click(function(){
        if (mods > 0){
            history(false);
        }
    });
    function history(arg) {
        clearStage();
        var st;
        if(arg){
            st = state[state.length - 1 - mods - 1];
            mods += 1;
        } else {
            st = state[state.length - 1 - mods + 1];
            mods -= 1;
        }
        if(st) {
            stage = Konva.Node.create(st, 'canvas');
            updateBindings();
        }

        getTotal();
        selectionRectRemove();
    }
    function selectionRectRemove () {
        var l = stage.find('.mainLayer')[0];
        var allRect = l.find('Rect');

             if(allRect) {
                for (var i = 0, len = allRect.length; i < len; i++) {
                    allRect[i].fill(null);
                }
                stage.draw();
            } 
    }
    function updateBindings () {

            var layer = stage.find('Layer')[3];
            var arRect = layer.find('Rect');
            var arCircle = layer.find('Circle');
            var arGroup = layer.find('Group');

            for(var i = 0, len = arGroup.length; i < len; i ++){
                arGroup[i].on('dragmove', function() {
                    layerProc();
                });
            }
            for(var i = 0, len = arCircle.length; i < len; i ++){
                var group = arCircle[i].parent;
                arCircle[i].on('dragmove', function() {
                    update(this);
                    layer.draw();

                    layerProc();
                });
                arCircle[i].on('mousedown touchstart', function() {
                    group.setDraggable(false);
                    this.moveToTop();
                });
                arCircle[i].on('dragend', function() {
                    group.setDraggable(true);
                    layer.draw();
                    saveStage();
                    getTotal();                    
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
                arRect[i].on('mousemove', function(e) {
                    back.show();
                    tooltip.hide();
                    back.hide();
                    tooltipLayer.draw();

                    layerProc();
                }); 
                arRect[i].on('mousedown mousemove', function() {
                    layerProc();
                });
                arRect[i].on('mouseover', function(e) {
                    var layer = this.getLayer();
                    document.body.style.cursor = 'move';
                    var mousePos = stage.getPointerPosition();
                    tooltip.position({
                        x : mousePos.x + 5,
                        y : mousePos.y + 5
                    });
                    tooltip.text("ширина: " + Math.round(e.target.attrs.width/globalKoef) + "см, высота: " + Math.round(e.target.attrs.height/globalKoef) + "см");
                    tooltip.show();
                    tooltipLayer.draw();
                    layer.draw();
                });
                arRect[i].on('mouseout', function(e) {
                    var layer = this.getLayer();
                    document.body.style.cursor = 'default';
                    layer.draw();
                    tooltip.hide();
                    back.hide();
                    tooltipLayer.draw();
                });
                arRect[i].on('mousedown', function(e) {
                    selectionRectRemove();
                    sel = e.target.parent;
                    active = e.target;
                    active.fill('rgba(37, 60, 127, .3)');
                    // update tooltip
                     var mousePos = stage.getPointerPosition();
                    tooltip.position({
                        x : mousePos.x + 5,
                        y : mousePos.y + 5
                    });
                    tooltip.text("ширина: " + Math.round(e.target.attrs.width/globalKoef) + "см, высота: " + Math.round(e.target.attrs.height/globalKoef) + "см");
                    tooltip.show();
                    back.position({
                        x : mousePos.x + 5,
                        y : mousePos.y + 5
                    });
                    back.fill('white');
                    back.show(); 
                    tooltipLayer.moveUp(); 
                    tooltipLayer.draw(); 
                });
                arRect[i].on('mouseup', function(e) {
                    tooltip.hide();
                    back.hide();
                    tooltipLayer.draw();
                    saveStage();     
                    
                    layerProc();
                });
            }
        getTotal();
    }

    var query = {};
    $('.tm-api').click(function(){
        query.search = query.search || 'jungle';
        query.category = query.category || '';
        apiConnect(query.search, 1, true, query.category);
        $('.js-cat-search').click(function(){
            $('.js-cat-search .jq-selectbox__dropdown ul li').click(function(){
                query.category = $(this).attr('data-cat');
                apiConnect(query.search, 1, true, query.category);
            });
        });
    });
    $('.js-find').click(function(e){
        var val = $('.tm-modal-search').val();
        query.search = val;
        apiConnect(val, 1, true, query.category);
    });

    $('.tm-modal-search').keypress(function(e){
        
        if (e.which == 13) {
            e.preventDefault();
            query.search = this.value;
            apiConnect(this.value, 1, true, query.category);
            this.value = "";
       }
    });
    var paginationInit = function (page, ar, isInit) {
        $('#pagination-container').pagination({
            dataSource: ar,
            pageSize: 20,
             callback: function(data, pagination) {
                if(!isInit) {
                    apiConnect(query.search, pagination.pageNumber, false, query.category);
                    isInit = !isInit;
                }
                isInit = !isInit;
            } 
        });
    }
    function apiConnect(query, page, isInit, category) {
        var imgArr = [];
        if(category && category != 'Any') {
            cat =  '&category=' + category;
        } else {
            cat = '';
        }
        $.ajax({
            type: 'GET',
            //url: 'https://pixabay.com/api/?key=6906797-5f5add9e7ac4c0d8d54331350&q=' + query + '&image_type=photo&pretty=true&orientation=horizontal&page=' + page,
            url: 'https://api.shutterstock.com/v2/images/search?query=' + query + '&safe=true&image_type=photo&orientation=horizontal' + cat + '&page=' + page + '&per_page=20',
            headers: {
                Authorization: 'Basic ' + window.btoa('e1217-793f4-4a546-154ee-a78d0-53a3b:be6ab-1b11e-dd3b8-4ac57-8617a-9febe')
            },
            success: function(data){
                var testAr = Array.from(Array(data.total_count).keys());
                if(isInit) {
                    paginationInit(page, testAr, isInit);
                }
                imgArr = data.data;
                var cont = $(".tm-modal-pics");
                    cont.empty();
                var temp = $(".js-temp");
                    temp.empty();
                if(imgArr.length) {
                    for(var i = 0, len = imgArr.length; i < len; i ++) {
                        cont.append('<div class="uk-width-large-1-4 uk-width-medium-1-3 uk-width-small-1-2 uk-margin-bottom tm-preview-cont uk-text-center" data-count="' + i + '"><img onmouseover="showHint(this)" onmouseout="hideHint(this)" class="js-current-img" src="' +  imgArr[i].assets.large_thumb.url + '" data-origin="' +  imgArr[i].assets.preview.url + '" alt="pic' + i + '"><div>');
                        temp.append('<li><img src="' +  imgArr[i].assets.large_thumb.url + '" alt="pic' + i + '">');
                    }
                } else {
                    cont.append('<div class="js-nores">Нет результатов</div>');
                }
                $('.tm-preview-cont').click(function(){
                    var count = $(this).attr('data-count');
                    var img = imgArr[count].assets.preview.url;
                    var pic_id = imgArr[count].id;
                    var pic_descr = imgArr[count].description;
                    var pic_data = $('.js-pic-data');
                        pic_data.empty();
                        pic_data.append('<div class="pic-data">id: ' + pic_id + '</div>');
                        pic_data.append('<div class="pic-data">' + pic_descr + '</div>');
                    imageObj.src = img;
                    $("#canvas").css('backgroundImage', 'url(' + img + ')');
                    loadImg();

                    if ( modal.isActive() ) {
                        modal.hide();
                    }
                });
            }
        });
    }
    $('.js-material').change(function(){
        var val = $(this).val();
        material = +val;
        getTotal();
    });
    $('.js-covering').change(function(){
        var val = $(this).val();
        covering = +val;
        getTotal();
    });
    $('.js-underframe').change(function(){
        var val = $(this).val();
        underframe = +val;
        getTotal();
    });
    $('.js-stylization').change(function(){
        var val = $(this).val();
        stylization = +val;
        getTotal();
    });
    
    var sum = 0, perim = 0, area = 0, material = 1, covering = 1, underframe = 1, stylization = 1, iflag = false, mes = [];
    function getTotal() {
        iflag = false;
        var getStage;
        // var getStage = JSON.parse(stage.toJSON()).children[0].children;
        if(stage.find('.mainLayer')[0] && stage.find('.mainLayer')[0].children) {
            getStage = stage.find('.mainLayer')[0].children;
        } else {
            getStage = null;
        }

        if(getStage) {
            var getStage = stage.find('.mainLayer')[0].children
            for (var i = 0, len = getStage.length; i < len; i++) {
                if (getStage[i].children.length == 0 || getStage[i].children[0].className == 'Image'){
                    iflag = true;
                }
            }

        }

        if(!iflag){
            sum = 0;
            perim = 0;
            area = 0;
            mes = [];
            if(getStage && getStage[0] && getStage[0].children[0] && getStage[0].children[0].attrs) {
                for (var i = 0, len = getStage.length; i < len; i++) {
                    if(getStage[i] && getStage[i].children[0].className == 'Rect'){
                        //sum += Math.abs(getStage[i].children[0].attrs.width/globalKoef) * Math.abs(getStage[i].children[0].attrs.height/globalKoef);
                        perim += (Math.abs(Math.round(getStage[i].children[0].attrs.width/globalKoef)) + Math.abs(Math.round(getStage[i].children[0].attrs.height/globalKoef))) * 2;
                        area += Math.abs(Math.round(getStage[i].children[0].attrs.width/globalKoef)) * Math.abs(Math.round(getStage[i].children[0].attrs.height/globalKoef));
                        mes.push({'width': Math.abs(Math.round(getStage[i].children[0].attrs.width/globalKoef)), 'height': Math.abs(Math.round(getStage[i].children[0].attrs.height/globalKoef))});
                    }
                }
            }
            sum = area*(material + covering + stylization) + perim * underframe;
        }

        getSum();
    }
    function clearTotal() {
        $('.js-total').text('0');
    }
    var state = [];
    var mods = 0;
    var json;
    function saveStage() {
        json = stage.toJSON();
        state.push(json);
    }

    $('.js-dimen').change(function() {
        if(!forTotal) {
            getTotal();
        }
    });

    function getSum() {
        $('.js-total').text(sum);
        if(!sum) {
            $('.tm-canv-icon.close').css('display', 'block');
            $('.tm-canv-icon.tm-del').css('display', 'none');
            $('.tm-canv-icon.square').css('display', 'block');
            $('.tm-canv-icon.tm-check').css('display', 'none');
        }
    }

    $('.tm-book').click(function(e) {
        e.preventDefault();
        // console.log(sum, area, material, covering, stylization, perim, underframe, mes/* , dataURL */);
        var isEmpty = localStorage.getItem('orderM');
        var order, orderS, sumToCart = 0;
        if(isEmpty) {
            order = JSON.parse(isEmpty);
            order.push({'sum':sum, 'area':area, 'material':material, 'covering':covering, 'stylization':stylization, 'perim':perim, 'underframe':underframe, 'mes':mes, 'img':dataURL});
        } else {
            order = [];
            order.push({'sum':sum, 'area':area, 'material':material, 'covering':covering, 'stylization':stylization, 'perim':perim, 'underframe':underframe, 'mes':mes, 'img':dataURL});
        }
        for (var i = 0, len = order.length; i < len; i++) {
            sumToCart += order[i].sum;
        }
        $('.js-total-sum').empty();
        $('.js-total-sum').text(sumToCart);

        orderS = JSON.stringify(order);
        localStorage.setItem('orderM', orderS);
    });

});