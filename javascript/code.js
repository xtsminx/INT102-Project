// html
const htmlcode = `<!DOCTYPE html>
    <html>
    <head>
    <title>HTML Tutorial</title>
    </head>
    <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

    </body>
    </html>`
let htmlcodeEl = document.getElementById("htmlcode").innerText = htmlcode

// css
const csscode = `body {
    background-color: lightblue;
  }
  
  h1 {
    color: white;
    text-align: center;
  }
  
  p {
    font-family: verdana;
  }`

let csscodeEl = document.getElementById("csscode").innerText = csscode

// JavaScript
const JavaScriptcode = `<button onclick="myFunction()">Click Me!</button>
<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}
</script>`
let JavaScriptcodeEl = document.getElementById("JavaScriptcode").innerText = JavaScriptcode

// Python
const Pythoncode = `if 5 > 2:
print("Five is greater than two!")`
let PythoncodeEl = document.getElementById("Pythoncode").innerText = Pythoncode

// SQL
const SQLcode = `SELECT * FROM Customers
WHERE Country='Mexico';`
let SQLcodeEl = document.getElementById("SQLcode").innerText = SQLcode
