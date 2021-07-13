var canvas;
var gl;
var program;
var vertices;

var theta = 10.0;
var thetaLoc;

var red = 1.0;
var green = 0.0;
var blue = 0.0;

var color;
var colorLoc;

var xr = 0.2;
var yr = 0.1;

var posX = 1.0;
var posXLoc;

var posY = 1.0;
var posYLoc;

var scaleY = 1.0;
var scaleYLoc;

var scaleX = 1.0;
var scaleXLoc;




window.onload = function init()
{
	canvas = document.getElementById( "gl-canvas" );

    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    //
    //  Configure WebGL
    //
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    //  Load shaders and initialize attribute buffers
    program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    // Load the data into the GPU
    

    vertices = [

        
    ];
    vertices.push(0, 0);

    for (let i = 0.0; i <= 360.0; i+=theta) {
        theta1 = i;
        theta1 = theta1 * (Math.PI / 180.0);
        const x = xr * Math.cos(theta1);
        const y = yr * Math.sin(theta1);
        vertices.push(x, y);
    }
		
	//vertex buffer
	var vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );    

    // Associate out shader variables with our data buffer
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    
    
	document.getElementById("posX").oninput = function(event) {
        //TODO: fill here to adjust translation according to slider value
        posX = event.target.value;
        init();


    };    
    document.getElementById("posY").oninput = function(event) {
        //TODO: fill here to adjust translation according to slider value
        posY = event.target.value;
        init();


    };
    document.getElementById("scaleX").oninput = function(event) {
        //TODO: fill here to adjust scale according to slider value
        scaleX = event.target.value;
        init();
        
    };
    document.getElementById("scaleY").oninput = function(event) {
        //TODO: fill here to adjust scale according to slider value
        scaleY = event.target.value;
        init();
        
    };  
    document.getElementById("redSlider").oninput = function(event) {
        //TODO: fill here to adjust color according to slider value
        red = event.target.value;
        color = vec4(red+red,green,blue,1.0);
        init();
    };
    document.getElementById("greenSlider").oninput = function(event) {
        //TODO: fill here to adjust color according to slider value
        green = event.target.value;
        color = vec4(red,green+green,blue,1.0);
        init();
    };
    document.getElementById("blueSlider").oninput = function(event) {
        //TODO: fill here to adjust color according to slider value
        blue = event.target.value;
        color = vec4(red,green,blue+blue,1.0);
        init();
    };
	document.getElementById("theta1").onclick = function(event) {
        //TODO: fill here to adjust resolution of the ellipse
        theta = parseFloat(1.0);
        init();
    };	
	document.getElementById("theta2").onclick = function(event) {
        //TODO: fill here to adjust resolution of the ellipse
        theta = 10.0;
        theta = parseFloat(theta);
        init();
    };
	document.getElementById("theta3").onclick = function(event) {
        //TODO: fill here to adjust resolution of the ellipse 
        theta = 20.0;
        theta = parseFloat(theta);
        init();
    };	
	document.getElementById("theta4").onclick = function(event) {
        //TODO: fill here to adjust resolution of the ellipse
        theta = 30.0;
        theta = parseFloat(theta);
        init();
    };	
	document.getElementById("theta5").onclick = function(event) {
        //TODO: fill here to adjust resolution of the ellipse
        theta = 60.0;
        theta = parseFloat(theta);
        init();
    };	
	document.getElementById("xrSlider").oninput = function(event) {
        //TODO: fill here to adjust x radius of the ellipse
        xr =  event.target.value;
        init();
    };	
	document.getElementById("yrSlider").oninput = function(event) {
        //TODO: fill here to adjust y radius of the ellipse
        yr =  event.target.value;
        init();
    };	

    
    color = vec4(red,green,blue,1.0);

    scaleXLoc = gl.getUniformLocation( program, "scaleX" );
    scaleYLoc = gl.getUniformLocation( program, "scaleY" );
    
    posXLoc = gl.getUniformLocation( program, "posX" );
    posYLoc = gl.getUniformLocation( program, "posY" );
    

    render();
};


function render() {
	//TODO: send necessary variables to shader, draw call, swap buffers
    gl.clear( gl.COLOR_BUFFER_BIT );

    
    colorLoc = gl.getUniformLocation(program,"color");
	gl.uniform4fv(colorLoc,color);

    gl.uniform1f( scaleXLoc, scaleX );
    gl.uniform1f( scaleYLoc, scaleY );

    gl.uniform1f( posXLoc, posX );
    gl.uniform1f( posYLoc, posY );

	gl.drawArrays(gl.TRIANGLE_FAN, 0, vertices.length);

    requestAnimFrame(render);

}