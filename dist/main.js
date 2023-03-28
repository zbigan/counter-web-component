(()=>{"use strict";class n extends HTMLElement{constructor(){super(),this.countIncrease=this.countIncrease.bind(this),this.countDecrease=this.countDecrease.bind(this),this.count=0,this.attachShadow({mode:"open"}),this.render()}render(){this.shadowRoot.innerHTML=`\n    \n<style>\n  :root {\n    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\n    line-height: 1.5;\n    font-weight: 400;\n\n    color-scheme: light dark;\n    color: rgba(255, 255, 255, 0.87);\n    background-color: #242424;\n\n    font-synthesis: none;\n    text-rendering: optimizeLegibility;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-text-size-adjust: 100%;\n  }\n\n  body {\n    margin: 0;\n    display: flex;\n    place-items: center;\n    min-width: 320px;\n    min-height: 100vh;\n  }\n\n\n  @media (prefers-color-scheme: light) {\n    :root {\n      color: #213547;\n      background-color: #ffffff;\n    }\n  }\n</style>\n\n    <div class="root-container">\n      <h1>Counter (native web component)</h1>\n      <div class="card">\n        <button id="increase">+</button>\n        <button id="decrease">-</button>\n        <div id="count">${this.count}</div>\n      </div>\n    </div>\n    `}connectedCallback(){let n=this.shadowRoot.getElementById("increase"),e=this.shadowRoot.getElementById("decrease");n.addEventListener("click",this.countIncrease),e.addEventListener("click",this.countDecrease)}countIncrease(){this.shadowRoot.getElementById("count").innerText=""+ ++this.count}countDecrease(){this.shadowRoot.getElementById("count").innerText=""+--this.count}}customElements.define("counter-wc-native",n)})();