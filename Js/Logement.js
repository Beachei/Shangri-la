document.addEventListener("DOMContentLoaded", ()=>{

    var elementsWithBackgroundImages = document.querySelectorAll('[style*="background-image"]');
    
    elementsWithBackgroundImages.forEach(function(element) {
        var backgroundImage = element.style.backgroundImage;
        var imageUrl = backgroundImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');

        var img = new Image();
        img.src = imageUrl;
    });
    /* Logement */
    const tcc2 = document.getElementById("tcc2");
    const tcc1 = document.getElementById("tcc1");
    const tcc = document.getElementById("tcc");
    const bgreen2 = document.getElementById("bgreen2");
    const bgreen1 = document.getElementById("bgreen1");
    const bgreen = document.getElementById("bgreen");
    const red2 = document.getElementById("bred2");
    const red1 = document.getElementById("bred1");
    const red = document.getElementById("bred");
    const chcount2 = document.getElementById("ch-count2");
    const chcount1 = document.getElementById("ch-count1");
    const chcount = document.getElementById("ch-count");
            /* Récuperation des nombres de chambre restant */
            var bungallow = chcount2.innerHTML;
            var bungallow1 = chcount1.innerHTML;
            var villa = chcount.innerHTML;
            /* Récuperation des nombres de chambre restant */
            if(bungallow == 0){
                bgreen2.classList.add("d-none");
                bgreen2.classList.remove("d-block");
                red2.classList.add("d-block");
                red2.classList.remove("d-none");
                tcc2.classList.add("text-danger");
                tcc2.classList.remove("text-success");
            }else{
                bgreen2.classList.remove("d-none");
                bgreen2.classList.add("d-block");
                red2.classList.remove("d-block");
                red2.classList.add("d-none");
                tcc2.classList.remove("text-danger");
                tcc2.classList.add("text-success");
            }
            if(bungallow1 ==0){
                bgreen1.classList.add("d-none");
                bgreen1.classList.remove("d-block");
                red1.classList.add("d-block");
                red1.classList.remove("d-none");
                tcc1.classList.add("text-danger");
                tcc1.classList.remove("text-success");
            }else{
                bgreen1.classList.remove("d-none");
                bgreen1.classList.add("d-block");
                red1.classList.remove("d-block");
                red1.classList.add("d-none");
                tcc1.classList.remove("text-danger");
                tcc1.classList.add("text-success");
            }
            if(villa ==0){
                bgreen.classList.add("d-none");
                bgreen.classList.remove("d-block");
                red.classList.add("d-block");
                red.classList.remove("d-none");
                tcc.classList.remove("text-danger");
                tcc.classList.add("text-success");
            }else{
                bgreen.classList.remove("d-none");
                bgreen.classList.add("d-block");
                red.classList.remove("d-block");
                red.classList.add("d-none");
                tcc.classList.remove("text-danger");
                tcc.classList.add("text-success");
            }


})