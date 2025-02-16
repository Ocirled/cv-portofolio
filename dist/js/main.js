const tabsNav = document.querySelectorAll('.page-scroll').forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        let tujuan = this.getAttribute('href')
        let elemenTujuan = document.querySelector(tujuan);
        
        window.scrollTo({
            top: elemenTujuan.offsetTop - 70,
            behavior: "smooth"
        })
    })
})