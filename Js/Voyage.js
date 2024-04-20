document.addEventListener("DOMContentLoaded", function(){
    const a = document.getElementById('a');
    const b = document.getElementById('b');
    const c = document.getElementById('c');
    const d = document.getElementById('d');
    const e = document.getElementById('e');
    const f = document.getElementById('f');
    const g = document.getElementById('g');
    const h = document.getElementById('h');
    const i = document.getElementById('i');
    const j = document.getElementById('j');
    const center = this.documentElement.querySelectorAll(".bgVoyage");
    const animScroll = document.getElementById('animScroll');
    let timer = 0;
    function minuteur(){
        timer++
        if(timer == 37){
            timer = 1
        }
        switch (timer){
            case 2:
                a.classList.add("aScale")
                break
            case 5 :
                a.classList.remove("aScale")
                b.classList.add("aScale")
                break
            case 8 :
                b.classList.remove("aScale")
                c.classList.add("aScale")
                break
            case 11: 
                c.classList.remove("aScale");
                d.classList.add("aScale");
                break
            case 14:
                d.classList.remove("aScale");
                e.classList.add("aScale");
                break
            case 17:
                e.classList.remove("aScale");
                f.classList.add("aScale");
                break
            case 20:
                f.classList.remove("aScale");
                g.classList.add("aScale");
                break
            case 23:
                g.classList.remove("aScale");
                h.classList.add("aScale");
                break
            case 26:
                h.classList.remove("aScale");
                i.classList.add("aScale");
                break
            case 29:
                i.classList.remove("aScale");
                j.classList.add("aScale");
                break
            case 32:
                j.classList.remove("aScale");
                break
        }
        console.log(timer)
    }
    setTimeout(() => {
        animScroll.classList.add('cna');
    }, 2000);
    setTimeout(() => {
        setInterval(minuteur,1000);
    }, 0000);
})