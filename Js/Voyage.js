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
    const k = document.getElementById('k');
    const l = document.getElementById('l');
    const m = document.getElementById('m');
    const n = document.getElementById('n');
    const o = document.getElementById('o');
    const p = document.getElementById('p');
    const q = document.getElementById('q');
    const r = document.getElementById('r');
    const s = document.getElementById('s');
    const t = document.getElementById('t');
    const u = document.getElementById('u');
    const v = document.getElementById('v');
    const w = document.getElementById('w');
    const x = document.getElementById('x');
    const y = document.getElementById('y');
    const z = document.getElementById('z');
    const z1 = document.getElementById('z1');
    const z2 = document.getElementById('z2');
    const animScroll = document.getElementById('animScroll');
    const animScroll1 = document.getElementById('animScroll1');
    let timer = 0;
    let timer1 = 0;
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
    }
    setTimeout(() => {
        animScroll.classList.add('cna');
    }, 2000);
        setInterval(minuteur,1000); 
    function minuteur1(){
        timer1++
        if(timer1 == 55){
            timer1 = 1
        }
        switch (timer1){
            case 2:
                l.classList.add("aScale")
                break
            case 5 :
                l.classList.remove("aScale")
                m.classList.add("aScale")
                break
            case 8 :
                m.classList.remove("aScale")
                n.classList.add("aScale")
                break
            case 11: 
                n.classList.remove("aScale");
                o.classList.add("aScale");
                break
            case 14:
                o.classList.remove("aScale");
                p.classList.add("aScale");
                break
            case 17:
                p.classList.remove("aScale");
                q.classList.add("aScale");
                break
            case 20:
                q.classList.remove("aScale");
                r.classList.add("aScale");
                break
            case 23:
                r.classList.remove("aScale");
                s.classList.add("aScale");
                break
            case 26:
                s.classList.remove("aScale");
                t.classList.add("aScale");
                break
            case 29:
                t.classList.remove("aScale");
                u.classList.add("aScale");
                break
            case 35:
                u.classList.remove("aScale");
                v.classList.add("aScale");
                break
            case 38:
                v.classList.remove("aScale");
                w.classList.add("aScale");
                break
            case 41:
                w.classList.remove("aScale");
                x.classList.add("aScale");
                break
            case 44:
                x.classList.remove("aScale");
                y.classList.add("aScale");
                break
            case 47:
                y.classList.remove("aScale");
                z.classList.add("aScale");
                break
            case 50:
                z.classList.remove("aScale");
                z1.classList.add("aScale");
                break
            case 53:
                z1.classList.remove("aScale");
                break
        }
        console.log(timer1);
    }
    setTimeout(() => {
        animScroll1.classList.add('cna1');
    }, 2000);
      setInterval(minuteur1, 1000);
})