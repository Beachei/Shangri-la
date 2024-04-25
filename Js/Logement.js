document.addEventListener("DOMContentLoaded", ()=>{

    var elementsWithBackgroundImages = document.querySelectorAll('[style*="background-image"]');
    
    elementsWithBackgroundImages.forEach(function(element) {
        var backgroundImage = element.style.backgroundImage;
        var imageUrl = backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

        var img = new Image();
        img.src = imageUrl;
    });
    /* Logement */
    const tcc2 = Array.from(document.querySelectorAll(".tcc2"));
    const tcc1 = Array.from(document.querySelectorAll(".tcc1"));
    const tcc = Array.from(document.querySelectorAll(".tcc"));
    const bgreen2 = Array.from(document.querySelectorAll(".bgreen2"));
    const bgreen1 = Array.from(document.querySelectorAll(".bgreen1"));
    const bgreen = Array.from(document.querySelectorAll(".bgreen"));
    const red2 = Array.from(document.querySelectorAll(".bred2"));
    const red1 = Array.from(document.querySelectorAll(".bred1"));
    const red = Array.from(document.querySelectorAll(".bred"));
    const chcount2 = Array.from(document.querySelectorAll(".ch-count2"));
    const chcount1 = Array.from(document.querySelectorAll(".ch-count1"));
    const chcount = Array.from(document.querySelectorAll(".ch-count"));
            /* Récuperation des nombres de chambre restant */
            var bungallow = chcount2.map(function(bcount2){
                return  bcount2.innerHTML
            });
            var bungallow1 = chcount1.map(function(bcount1){
                return bcount1.innerHTML
            });
            var villa = chcount.map(function(bcount){
                return bcount.innerHTML
            });
                console.log(villa,bungallow,bungallow1)
            /* Récuperation des nombres de chambre restant */
            if(bungallow[0,1] == 0){
                bgreen2.map(function(bg2){
                    bg2.classList.add("d-none");
                    bg2.classList.remove("d-block");
                });
                red2.map(function(rd2){
                    rd2.classList.add("d-block");
                    rd2.classList.remove("d-none");
                })
                tcc2.map(function(t2){
                    t2.classList.add("text-danger");
                    t2.classList.remove("text-success");
                })
                console.log(bgreen2,red2,tcc2, bungallow)
            }else{
                bgreen2.map(function(bg2){
                    bg2.classList.remove("d-none");
                    bg2.classList.add("d-block");
                });
                red2.map(function(rd2){
                    rd2.classList.remove("d-block");
                    rd2.classList.add("d-none");
                })
                tcc2.map(function(t2){
                    t2.classList.remove("text-danger");
                    t2.classList.add("text-success");
                })
                console.log(bgreen2,red2,tcc2)
            }
            if(bungallow1[0,1] ==0){   
                bgreen1.map(function(bg1){
                    bg1.classList.add("d-none");
                    bg1.classList.remove("d-block");
                })            
                red1.map(function(rd1){
                    rd1.classList.add("d-block");
                    rd1.classList.remove("d-none");
                })
                tcc1.map(function(t1){
                    t1.classList.add("text-danger");
                    t1.classList.remove("text-success");
                })
            }else{
                bgreen1.map(function(bg1){
                    bg1.classList.remove("d-none");
                    bg1.classList.add("d-block");
                })
                red1.map(function(rd1){
                    rd1.classList.remove("d-block");
                    rd1.classList.add("d-none");
                })
                tcc1.map(function(t1){
                    t1.classList.remove("text-danger");
                    t1.classList.add("text-success");
                })

            }
            if(villa[0,1] ==0){
                bgreen.map(function(bg){
                    bg.classList.add("d-none");
                    bg.classList.remove("d-block");
                })
                red.map(function(rd){
                    rd.classList.add("d-block");
                    rd.classList.remove("d-none");
                })
                tcc.map(function(t){
                    t.classList.add("text-danger");
                    t.classList.remove("text-success");
                })

            }else{
                bgreen.map(function(bg){
                    bg.classList.remove("d-none");
                    bg.classList.add("d-block");
                })
                red.map(function(rd){
                    rd.classList.remove("d-block");
                    rd.classList.add("d-none");
                })
                tcc.map(function(t){
                    t.classList.remove("text-danger");
                    t.classList.add("text-success");
                })

            }


})