class SiteHeader extends HTMLElement {
    connectedCallback() {
        fetch("header.html")
            .then(res => res.text())
            .then(html => this.innerHTML = html);
    }
}
customElements.define("site-header", SiteHeader);
