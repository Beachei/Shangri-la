document.addEventListener("DOMContentLoaded", function(){
    const a = document.querySelectorAll('.a');
    const b = document.querySelectorAll('.b');
    const c = document.querySelectorAll('.c');
    const d = document.querySelectorAll('.d');
    const e = document.querySelectorAll('.e');
    const f = document.querySelectorAll('.f');
    const g = document.querySelectorAll('.g');
    const h = document.querySelectorAll('.h');
    const i = document.querySelectorAll('.i');
    const j = document.querySelectorAll('.j');
    const k = document.querySelectorAll('.k');
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
    const animScroll = document.querySelectorAll('.animScroll');
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
                a.forEach(function(a1){
                    a1.classList.add("aScale")
                })
                break
            case 5 :
                a.forEach(function(a2){
                    a2.classList.remove("aScale")
                })
                b.forEach(function(b1){
                    b1.classList.add("aScale")
                })
                break
            case 8 :
                b.forEach(function(b2){
                    b2.classList.remove("aScale")
                })
                c.forEach(function(c1){
                    c1.classList.add("aScale")
                })
                break
            case 11:
                c.forEach(function(c2){
                    c2.classList.remove("aScale")
                }) 
                d.forEach(function(d1){
                    d1.classList.add("aScale")
                })
                break
            case 14:
                d.forEach(function(d2){
                    d2.classList.remove("aScale")
                })
                e.forEach(function(e1){
                    e1.classList.add("aScale")
                })
                break
            case 17:
                e.forEach(function(e2){
                    e2.classList.remove("aScale")
                })
                f.forEach(function(f1){
                    f1.classList.add("aScale")
                })
                break
            case 20:
                f.forEach(function(f2){
                    f2.classList.remove("aScale")
                })
                g.forEach(function(g1){
                    g1.classList.add("aScale")
                })
                break
            case 23:
                g.forEach(function(g2){
                    g2.classList.remove("aScale")
                })
                h.forEach(function(h1){
                    h1.classList.add("aScale")
                })
                break
            case 26:
                h.forEach(function(h2){
                    h2.classList.remove("aScale")
                })
                i.forEach(function(i1){
                    i1.classList.add("aScale")
                })
                break
            case 29:
                i.forEach(function(i2){
                    i2.classList.remove("aScale")
                })
                j.forEach(function(j1){
                    j1.classList.add("aScale")
                })
                break
            case 32:
                j.forEach(function(j2){
                    j2.classList.remove("aScale")
                })
                break
        }
    }
    setTimeout(() => {
        animScroll.forEach(function(anim){
            anim.classList.add('cna');
        })
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