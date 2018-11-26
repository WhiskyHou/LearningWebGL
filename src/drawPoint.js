let VSHADER =
    'attribute vec4 a_Position;\n' +
    'void main() {\n' +
    '   gl_Position = a_Position;\n' +
    '   gl_PointSize = 10.0;\n' +
    '}\n';

let FSHADER =
    'void main() {\n' +
    '   gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n' +
    '}\n';

function main() {
    let canvas = document.getElementById('webgl')
    // let gl = getWebGLContext(canvas, false)     // 通过工具包获得webgl上下文
    let gl = canvas.getContext('webgl')      // 直接获得webgl上下文

    initShaders(gl, VSHADER, FSHADER)

    if (gl) {
        // 获取 a_Position 变量的地址
        let a_Position = gl.getAttribLocation(gl.program, 'a_Position')
        if (a_Position < 0) console.log("a_Position < 0")

        // 给 a_Position 地址的遍历赋值
        gl.vertexAttrib3f(a_Position, 0.4, 0.0, 0.0)

        gl.clearColor(0, 0, 0, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)

        gl.drawArrays(gl.POINTS, 0, 1)
    }

    setTimeout(() => {
        // 获取 a_Position 变量的地址
        let a_Position = gl.getAttribLocation(gl.program, 'a_Position')
        if (a_Position < 0) console.log("a_Position < 0")

        // 给 a_Position 地址的遍历赋值
        gl.vertexAttrib3f(a_Position, 0.8, 0.0, 0.0)

        gl.clear(gl.COLOR_BUFFER_BIT)

        gl.drawArrays(gl.POINTS, 0, 1)
    }, 1000)
}