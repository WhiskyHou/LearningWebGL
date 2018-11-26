let VSHADER =
    'void main() {\n' +
    '   gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n' +
    '   gl_PointSize = 10.0;\n' +
    '}\n';

let FSHADER =
    'void main() {\n' +
    '   gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n' +
    '}\n';

function main() {
    let canvas = document.getElementById('webgl')
    let gl = getWebGLContext(canvas, false)     // 通过工具包获得webgl上下文
    // let gl = canvas.getContext('webgl')      // 直接获得webgl上下文

    initShaders(gl, VSHADER, FSHADER)

    if (gl) {
        gl.clearColor(0, 0, 0, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)

        gl.drawArrays(gl.POINTS, 0, 1)
    }
}