const template = document.createElement('template')
template.innerHTML = `
  <div class="root-container">
    <h1>Counter (native web component)</h1>
    <div class="card">
      <button id="increase">+</button>
      <button id="decrease">-</button>
      <div id="count"></div>
    </div>
  </div>
`

class CounterWC extends HTMLElement {
  #count
  constructor() {
    super()

    this.countIncrease = this.countIncrease.bind(this)
    this.countDecrease = this.countDecrease.bind(this)

    this.#count = 0

    let templateContent = template.content;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }

  connectedCallback() {
    // add styles
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "style-wc.css");
    this.shadowRoot.appendChild(linkElem);

    // initialize counter
    const counterContainer = this.shadowRoot.getElementById("count")
    counterContainer.innerText = 0

    // attach onClick methods to buttons
    let increaseButton = this.shadowRoot.getElementById("increase")
    let decreaseButton = this.shadowRoot.getElementById("decrease")
    increaseButton.addEventListener("click", this.countIncrease)
    decreaseButton.addEventListener("click", this.countDecrease)
  }

  countIncrease() {
    const counterContainer = this.shadowRoot.getElementById("count")
    counterContainer.innerText = ++this.#count
  }

  countDecrease() {
    const counterContainer = this.shadowRoot.getElementById("count")
    counterContainer.innerText = --this.#count
  }
}

customElements.define("counter-wc", CounterWC)
