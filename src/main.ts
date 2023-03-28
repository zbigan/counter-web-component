const styled = `
<style>
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  }


  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
  }
</style>
`

class CounterWCNative extends HTMLElement {
  count: number
  constructor() {
    super()

    this.countIncrease = this.countIncrease.bind(this)
    this.countDecrease = this.countDecrease.bind(this)

    this.count = 0

    this.attachShadow({ mode: "open" });

    this.render()
  }

  render() {
    this.shadowRoot!.innerHTML = `
    ${styled}
    <div class="root-container">
      <h1>Counter (native web component)</h1>
      <div class="card">
        <button id="increase">+</button>
        <button id="decrease">-</button>
        <div id="count">${this.count}</div>
      </div>
    </div>
    `
  }

  connectedCallback() {
    let increaseButton = this.shadowRoot!.getElementById("increase")
    let decreaseButton = this.shadowRoot!.getElementById("decrease")
    increaseButton!.addEventListener("click", this.countIncrease)
    decreaseButton!.addEventListener("click", this.countDecrease)
  }

  countIncrease() {
    const counterContainer = this.shadowRoot!.getElementById("count")
    counterContainer!.innerText = `${++this.count}`
  }

  countDecrease() {
    const counterContainer = this.shadowRoot!.getElementById("count")
    counterContainer!.innerText = `${--this.count}`
  }
}

customElements.define("counter-wc-native", CounterWCNative)

export { CounterWCNative }
