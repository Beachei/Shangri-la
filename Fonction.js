/* Restaurant */

    const resto = document.getElementById("Resto&bar");
    const cuisine = document.getElementById("Cuisine");
    const restobtn = document.getElementById("restoBtn");
    const cuisinebtn = document.getElementById("cuisineBtn");
    const btntocuisine = document.getElementById("bottomBtn");

    restobtn.addEventListener("click", (e) => {
       resto.classList.add('d-block');
       resto.classList.remove('d-none');
       resto.classList.add('show');
       cuisine.classList.add('d-none');
       cuisine.classList.remove('d-block');
    })
    btntocuisine.addEventListener("click", (e) => {
        cuisine.classList.remove('d-none');
        cuisine.classList.add('d-block');
        cuisine.classList.add('show');
        resto.classList.remove('d-block');
        resto.classList.add('d-none');
     })
    cuisinebtn.addEventListener("click", (e) => {
        cuisine.classList.remove('d-none');
        cuisine.classList.add('d-block');
        cuisine.classList.add('show');
        resto.classList.remove('d-block');
        resto.classList.add('d-none');
    })

