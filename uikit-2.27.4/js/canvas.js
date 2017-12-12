
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
    
    
    var shapes = [
    /* 1 rect */    '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":-1,"y":-1,"draggable":true},"className":"Group","children":[{"attrs":{"width":802,"height":482,"stroke":"black","fill":"rgba(37, 60, 127, .3)"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":802,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":482,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":802,"y":482,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":395.3125,"y":273.5625,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 100см, высота: 60см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":395.3125,"y":273.5625},"className":"Text"}]}]}',
    /* 2 rect row*/    '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":-2,"y":-1,"draggable":true},"className":"Group","children":[{"attrs":{"width":395,"height":483,"stroke":"black","fill":"rgba(37, 60, 127, .3)"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":395,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":483,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":395,"y":483,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":402,"y":-1,"draggable":true},"className":"Group","children":[{"attrs":{"x":4,"width":395,"height":482,"stroke":"black"},"className":"Rect"},{"attrs":{"x":4,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":399,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":399,"y":482,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":4,"y":482,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":190.3125,"y":220.5625,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 49см, высота: 60см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":190.3125,"y":220.5625},"className":"Text"}]}]}',
    /* 2 rect col*/    '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":1,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":798,"height":228,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":798,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":228,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":798,"y":228,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"y":251,"draggable":true},"className":"Group","children":[{"attrs":{"x":1,"y":-3,"width":798,"height":231,"stroke":"black","fill":"rgba(37, 60, 127, .3)"},"className":"Rect"},{"attrs":{"x":799,"y":-3,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":1,"y":228,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":799,"y":228,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":1,"y":-3,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":172,"y":410.4375,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 100см, высота: 29см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":172,"y":410.4375},"className":"Text"}]}]}',
    /* 3 rect row*/    '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":1,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":256,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":256,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":256,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":271,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":256,"height":478,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":256,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":256,"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":537,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"x":5,"width":256,"height":478,"stroke":"black","fill":"rgba(37, 60, 127, .3)"},"className":"Rect"},{"attrs":{"x":5,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":261,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":5,"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":261,"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":644,"y":141.4375,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 38см, высота: 72см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":644,"y":141.4375},"className":"Text"}]}]}',
    /* 3 rect col*/   '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":796,"height":149,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":796,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":149,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":796,"y":149,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":2,"y":166,"draggable":true},"className":"Group","children":[{"attrs":{"width":796,"height":149,"stroke":"black","fill":"rgba(37, 60, 127, .3)"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":796,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":149,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":796,"y":149,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":1,"y":330,"draggable":true},"className":"Group","children":[{"attrs":{"width":797,"height":149,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":797,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":149,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":797,"y":149,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":367.8125,"y":259.375,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 100см, высота: 19см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":367.8125,"y":259.375},"className":"Text"}]}]}',
    /* 4 rect row*/   '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":187,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":206,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":187,"height":478,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":409,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":187,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":612,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":187,"height":477,"stroke":"black","fill":"rgba(37, 60, 127, .3)"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":187,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":692,"y":197.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 23см, высота: 60см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":692,"y":197.6875},"className":"Text"}]}]}',
    /* 4 rect 2row/2col*/   '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":385,"height":225,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":412,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":386,"height":225,"stroke":"black","fill":"rgba(37, 60, 127, .3)"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":386,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":386,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":1,"y":252,"draggable":true},"className":"Group","children":[{"attrs":{"width":385,"height":226,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":226,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"y":226,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":414,"y":253,"draggable":true},"className":"Group","children":[{"attrs":{"x":-2,"y":-1,"width":387,"height":226,"stroke":"black"},"className":"Rect"},{"attrs":{"x":385,"y":-1,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":-2,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":-2,"y":-1,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":514,"y":144.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 48см, высота: 28см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":514,"y":144.6875},"className":"Text"}]}]}',
    /* 6 rect 3row/2col*/'{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":249,"height":225,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":1,"y":253,"draggable":true},"className":"Group","children":[{"attrs":{"width":249,"height":225,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":212,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"x":63,"width":249,"height":225,"stroke":"black"},"className":"Rect"},{"attrs":{"x":63,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":312,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":63,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":312,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":276,"y":253,"draggable":true},"className":"Group","children":[{"attrs":{"width":249,"height":225,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"y":225,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":549,"y":1},"className":"Group","children":[{"attrs":{"width":249,"height":226,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"y":226,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":226,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":550,"y":247,"draggable":true},"className":"Group","children":[{"attrs":{"y":7,"width":249,"height":225,"stroke":"black"},"className":"Rect"},{"attrs":{"x":249,"y":7,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":232,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":249,"y":232,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":7,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":387,"y":245.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 9см, высота: 6см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":387,"y":245.6875},"className":"Text"}]}]}',
    /* 3 rect row 2r=1r+3r*/   '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":1,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":190,"height":476,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":190,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":190,"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":608,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":190,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":190,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":190,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":207,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":385,"height":476,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":385,"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":399,"y":237.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 9см, высота: 6см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":399,"y":237.6875},"className":"Text"}]}]}',
    /* 3 rect row 1row, 2col*/  '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":1,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":386,"height":478,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":386,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":386,"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":412,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"x":-1,"width":387,"height":227,"stroke":"black"},"className":"Rect"},{"attrs":{"x":-1,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":386,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":386,"y":227,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":-1,"y":227,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":411,"y":252,"draggable":true},"className":"Group","children":[{"attrs":{"width":387,"height":227,"stroke":"black"},"className":"Rect"},{"attrs":{"x":387,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":227,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":387,"y":227,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":443,"y":224.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":443,"y":224.6875},"className":"Text"}]}]}',
    /* 4 rect row 1row, 3col*/  '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":276,"height":476,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":276,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":276,"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":297,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":502,"height":146,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":502,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":146,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":502,"y":146,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":297,"y":167,"draggable":true},"className":"Group","children":[{"attrs":{"width":502,"height":146,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":502,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":146,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":502,"y":146,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":297,"y":332,"draggable":true},"className":"Group","children":[{"attrs":{"width":502,"height":146,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":502,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":146,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":502,"y":146,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":421,"y":213.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":421,"y":213.6875},"className":"Text"}]}]}',
    /* 5 rect row 1row, 2row+2col*/   '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":46,"draggable":true},"className":"Group","children":[{"attrs":{"width":383,"height":384,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":383,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":384,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":383,"y":384,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":408,"y":46,"draggable":true},"className":"Group","children":[{"attrs":{"width":184,"height":180,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":408,"y":250,"draggable":true},"className":"Group","children":[{"attrs":{"width":184,"height":180,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":615,"y":46,"draggable":true},"className":"Group","children":[{"attrs":{"width":184,"height":180,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":615,"y":250,"draggable":true},"className":"Group","children":[{"attrs":{"width":184,"height":180,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":184,"y":180,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":355,"y":228.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":355,"y":228.6875},"className":"Text"}]}]}',
    /* 5 rect row 1row, sin*/  '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":327,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":144,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":163,"y":81,"draggable":true},"className":"Group","children":[{"attrs":{"width":144,"height":316,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":316,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"y":316,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":491,"y":80,"draggable":true},"className":"Group","children":[{"attrs":{"width":144,"height":316,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":316,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"y":316,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":2,"y":116,"draggable":true},"className":"Group","children":[{"attrs":{"width":144,"height":243,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":243,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"y":243,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":655,"y":116,"draggable":true},"className":"Group","children":[{"attrs":{"width":144,"height":243,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":243,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":144,"y":243,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":433,"y":234.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":433,"y":234.6875},"className":"Text"}]}]}',
    /* 4 rect row 1row 2rect 2 cubs*/ '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":171,"draggable":true},"className":"Group","children":[{"attrs":{"width":237,"height":239,"stroke":"black","fill":"rgba(37, 60, 127, .3)"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":237,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":239,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":237,"y":239,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":561,"y":72,"draggable":true},"className":"Group","children":[{"attrs":{"width":237,"height":239,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":237,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":239,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":237,"y":239,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":255,"y":71,"draggable":true},"className":"Group","children":[{"attrs":{"width":136,"height":408,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":136,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":408,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":136,"y":408,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":408,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":136,"height":408,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":136,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":408,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":136,"y":408,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":119,"y":298.6875,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 30см, высота: 30см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":119,"y":298.6875},"className":"Text"}]}]}',
    /* 3 rect row 2cubs, 1rect*/ '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":99,"draggable":true},"className":"Group","children":[{"attrs":{"width":279,"height":281,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":279,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":281,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":279,"y":281,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":519,"y":99,"draggable":true},"className":"Group","children":[{"attrs":{"width":279,"height":281,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":279,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":281,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":279,"y":281,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":301,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":199,"height":476,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":199,"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":199,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":435,"y":244.25,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":435,"y":244.25},"className":"Text"}]}]}',
    /* 2 rect row 1rect 1 cub*/    '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":1,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":236,"height":476,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":236,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":236,"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":253,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":545,"height":476,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":545,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":545,"y":476,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":417,"y":233.25,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":417,"y":233.25},"className":"Text"}]}]}',
    /* 4 rect row 2rect half-h 2full-h*/   '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":2,"y":97,"draggable":true},"className":"Group","children":[{"attrs":{"y":21,"width":183,"height":238,"stroke":"black"},"className":"Rect"},{"attrs":{"y":21,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":259,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":21,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":259,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":205,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":183,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":412,"y":2,"draggable":true},"className":"Group","children":[{"attrs":{"width":183,"height":477,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":477,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":616,"y":117,"draggable":true},"className":"Group","children":[{"attrs":{"width":183,"height":238,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":238,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":238,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":423,"y":256.25,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":423,"y":256.25},"className":"Text"}]}]}',
    /* 4 rect row 1row, ascending*/  '{"attrs":{"width":800,"height":480},"className":"Stage","children":[{"attrs":{},"className":"Layer","children":[{"attrs":{"x":1,"y":237,"draggable":true},"className":"Group","children":[{"attrs":{"width":183,"height":241,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":241,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":241,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":206,"y":157,"draggable":true},"className":"Group","children":[{"attrs":{"width":183,"height":322,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":322,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":322,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":412,"y":78,"draggable":true},"className":"Group","children":[{"attrs":{"y":1,"width":183,"height":400,"stroke":"black"},"className":"Rect"},{"attrs":{"y":1,"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":401,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":401,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":1,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"}]},{"attrs":{"x":616,"y":1,"draggable":true},"className":"Group","children":[{"attrs":{"width":183,"height":478,"stroke":"black"},"className":"Rect"},{"attrs":{"stroke":"#666","fill":"#ddd","radius":8,"name":"topLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"stroke":"#666","fill":"#ddd","radius":8,"name":"topRight","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomLeft","draggable":true,"dragOnTop":false},"className":"Circle"},{"attrs":{"x":183,"y":478,"stroke":"#666","fill":"#ddd","radius":8,"name":"bottomRight","draggable":true,"dragOnTop":false},"className":"Circle"}]}]},{"attrs":{"fill":"black"},"className":"Layer","children":[{"attrs":{"x":432,"y":234.25,"width":160,"height":23,"visible":false,"fill":"white"},"className":"Rect"},{"attrs":{"text":"ширина: 19см, высота: 13см","fontFamily":"Calibri","padding":5,"visible":false,"fill":"#253c7f","opacity":0.75,"textFill":"white","x":432,"y":234.25},"className":"Text"}]}]}'
    ]
    $('.js-shape').click(function(e) {
        e.preventDefault();
        modal3.show();
    });
    $('.item').click(function(e) {
        clearStage();
        stage = Konva.Node.create(shapes[$(this).attr('data-number')], 'canvas');
        updateBindings();
        $('.tm-canv-icon.check').css('display', 'none');
        $('.tm-canv-icon.tm-check').css('display', 'block');
        modal3.hide();
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
        anchor.on('dragend', function(e) {
            group.setDraggable(true);
            layer.draw();
            saveStage();
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
    var tooltipLayer = new Konva.Layer({
        fill: "black"
    });
    var tooltip = new Konva.Text({
        text: "",
        fontFamily: "Calibri",
        fontSize: 12,
        padding: 5,
        visible: true,
        fill: "#253c7f",
        opacity: 0.75,
        textFill: "white"
    });
     var back = new Konva.Rect({
        x: 0,
        y: 0,
        width: 160,
        height: 23,
        /* opacity: 0.5, */
    }); 
    tooltipLayer.add(back);
    tooltipLayer.add(tooltip);
    
    stage.add(tooltipLayer);

    /* var too = new Konva.Text({
            text: "",
            fontFamily: "Calibri",
            fontSize: 12,
            padding: 5,
            visible: true,
            fill: "#253c7f",
            opacity: 0.75,
            textFill: "white"
        });
        var bac = new Konva.Rect({
            x: 0,
            y: 0,
            width: 100,
            height: 23,
            fill: 'white'
        });  */

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

        droppableRect.on('mousemove', function(e) {
            back.show();
            tooltip.hide();
            back.hide();
            tooltipLayer.draw();
        }); 

        droppableRect.on('mouseout', function(e) {
            var layer = this.getLayer();
            document.body.style.cursor = 'default';
            layer.draw();
            tooltip.hide();
            back.hide();
            tooltipLayer.draw();
        });
        droppableRect.on('mousedown', function(e) {
            selectionRectRemove();
            sel = e.target.parent;
            active = e.target;
            active.fill('rgba(37, 60, 127, .3)');
            //make active icon for deletion
            $('.tm-canv-icon.close').css('display', 'none');
            $('.tm-canv-icon.tm-del').css('display', 'block');
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

            tooltipLayer.moveToTop(); 
            tooltipLayer.draw(); 
        });
        droppableRect.on('mouseup', function(e) {
            back.hide();
            tooltip.hide();
            tooltipLayer.draw();
            saveStage();
        });
        var droppableGroup = new Konva.Group({
            x: 330,
            y: 180, 
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
        layer.add(droppableGroup);
        stage.add(layer); 

        droppableGroup.add(droppableRect).draw();
        addAnchor(droppableGroup, 0, 0, 'topLeft');
        addAnchor(droppableGroup, 150, 0, 'topRight');
        addAnchor(droppableGroup, 150, 100, 'bottomRight');
        addAnchor(droppableGroup, 0, 100, 'bottomLeft'); 
        stage.draw();
        saveStage();
        getTotal();
        //make clip active
        $('.tm-canv-icon.square').css('display', 'none');
        $('.tm-canv-icon.tm-check').css('display', 'block');
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
        stage.add(tooltipLayer);
        $("#canvas").css('backgroundImage', 'none');
        $('#logo').val('');
        clearTotal();
        clearHistory();
        var inputRange = document.querySelector('input[type="range"]');
        inputRange.disabled = false;
        inputRange.rangeSlider.update();
        toggleMesurement(false);
    });
    //function for disable/enable slider and selects
    function toggleMesurement(arg) {
        
        $('.js-material').attr('disabled', arg).trigger('refresh');
        $('.js-underframe').attr('disabled', arg).trigger('refresh');
        $('.js-stylization').attr('disabled', arg).trigger('refresh');
        $('.js-covering').attr('disabled', arg).trigger('refresh');
        $('.tm-canv-icon.sub').css('display', 'block');
        $('.tm-canv-icon.org').css('display', 'none');        
        // console.log(sum, area, material, covering, stylization, perim, underframe);
        if(sum && area && material && covering && stylization && perim && underframe) {
            $('.tm-book').attr('disabled', !arg);
            // console.log('in');
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
        layer = new Konva.Layer(); 
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
    } */
    var dataURL;
    function saveImg() {
        dataURL = stage.toDataURL();
        if(dataURL) $('.tm-ready').attr('src', dataURL);
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

    var bg, imageObj = new Image();
        imageObj.crossOrigin = "Anonymous"; 

    function loadImg() {
        imageObj.onload = function() {
            bg = new Konva.Image({
                x: 0,
                y: 0,
                image: imageObj,
                width: width,
                height: height,
            }); 
        };   
        $('.tm-canv-icon.square').css('display', 'none');
        $('.tm-canv-icon.trash').css('display', 'none');
        $('.tm-canv-icon.tm-draw').css('display', 'block');
        $('.tm-canv-icon.tm-rem').css('display', 'block');
        $('.js-shape').attr('disabled', false);
        // $('.tm-canv-icon.sub').css('display', 'none');
        // $('.tm-canv-icon.org').css('display', 'block');
    };
   function clipImg (x, y, w, h) {
       /* var too = new Konva.Text({
            text: "",
            fontFamily: "Calibri",
            fontSize: 12,
            padding: 5,
            visible: true,
            fill: "#253c7f",
            opacity: 0.75,
            textFill: "white"
        });
        var bac = new Konva.Rect({
            x: 0,
            y: 0,
            width: 100,
            height: 23,
            fill: 'white'
        }); 

        too.text(Math.round(w/globalKoef) + "см x " + Math.round(h/globalKoef) + "см"); */
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
    });
   
    $('.tm-check').click(function(){
        var nodes = stage.find('Group');
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
        var allRect = stage.find('Rect');
            if(allRect) {
                for (var i = 0, len = allRect.length; i < len; i++) {
                    allRect[i].fill(null);
                }
                stage.draw();
            }
    }
    function updateBindings () {
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
                    tooltipLayer.moveToTop(); 
                    tooltipLayer.draw(); 
                });
                arRect[i].on('mouseup', function(e) {
                    tooltip.hide();
                    tooltipLayer.draw();
                    saveStage();                    
                });
            }
        getTotal();
    }
    
    $('.tm-api').click(function(){
        var query = 'fest';
        apiConnect(query);
    });
    $('.js-find').click(function(e){
        var val = $('.tm-modal-search').val();
        apiConnect(val);
    });

    $('.tm-modal-search').keypress(function(e){
        if (e.which == 13) {
            e.preventDefault();
            apiConnect(this.value);
            this.value = "";
       }
    });
    function apiConnect(query) {
        var imgArr = [];
        $.ajax({
            type: 'GET',
            url: 'https://pixabay.com/api/?key=6906797-5f5add9e7ac4c0d8d54331350&q=' + query + '&image_type=photo&pretty=true',
            success: function(data){
                imgArr = data.hits;
                var cont = $(".tm-modal-pics");
                    cont.empty();
                var temp = $(".js-temp");
                    temp.empty();
                for(var i = 0, len = imgArr.length; i < len; i ++) {
                    cont.append('<div class="uk-width-large-1-4 uk-width-medium-1-3 uk-width-small-1-2 uk-margin-bottom tm-preview-cont uk-text-center" data-count="' + i + '"><img onmouseover="showHint(this)" onmouseout="hideHint(this)" class="js-current-img" src="' +  imgArr[i].previewURL + '" data-origin="' +  imgArr[i].webformatURL + '" alt="pic' + i + '"><div>');
                    temp.append('<li><img src="' +  imgArr[i].previewURL + '" alt="pic' + i + '">');
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
    }
    $('.js-material').change(function(){
        // console.log('material');
        var val = $(this).val();
        material = +val;
        getTotal();
    });
    $('.js-covering').change(function(){
        // console.log('covering');
        var val = $(this).val();
        covering = +val;
        getTotal();
    });
    $('.js-underframe').change(function(){
        // console.log('underframe');
        var val = $(this).val();
        underframe = +val;
        getTotal();
    });
    $('.js-stylization').change(function(){
        // console.log('stylization');
        var val = $(this).val();
        stylization = +val;
        getTotal();
    });
    
    var sum = 0, perim = 0, area = 0, material = 1, covering = 1, underframe = 1, stylization = 1, iflag = false, mes = [];
    function getTotal() {
        iflag = false;
        var getStage = JSON.parse(stage.toJSON()).children[0].children;
        // console.log(getStage);
        if(getStage) {
            for (var i = 0, len = getStage.length; i < len; i++) {
                if (getStage[i].children.length == 0 || getStage[i].children[0].className == 'Image'){
                    iflag = true;
                }
            }

        }
        // console.log(iflag);
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
        /* console.log(area, material, covering, stylization, perim, underframe, globalKoef);
        console.log(sum);  */
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
        getTotal();
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
        console.log(sum, area, material, covering, stylization, perim, underframe, mes);
    });

});