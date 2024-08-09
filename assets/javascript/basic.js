


nav_inner_html = `
<div class="logo_division">
    <img src="../images/SVG/logo_double_line.svg" alt="" class="nav_logo">

</div>
<div class="menu" onclick="toggle_links_division_sidebar()"></div>
<div class="menu_division">

    <div class="links_division">
        <div class="close" onclick="toggle_links_division_sidebar()"></div>
        <a href="" class="link_to_pages">Home</a>
        <a href="" class="link_to_pages">Wallets hand Made</a>
        <a href="" class="link_to_pages">Wallets Machine Crafted</a>
        <a href="" class="link_to_pages">Peshawari Chappal</a>
    </div>
</div>
`

load = () => {
load_nav = document.querySelector(".navbar");
// load_product_detail = 

    if (load_nav) {
load_nav.innerHTML = nav_inner_html;
    } else alert("failed!")
}
load()