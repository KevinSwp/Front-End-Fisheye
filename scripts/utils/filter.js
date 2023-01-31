/**
 * Hide/Display filter
*/
const filter = () => {
    const option = document.querySelector(".dropdown_content");
    const btnPrimary = document.getElementById("btnPrimary");
    
    if (option.style.display === "none") {
        option.style.display = "block";
    }
    else {
        option.style.display = "none";
    }
    
    //Alternate on active
    // btnPrimary.addEventListener('click', function () {
    //     btnPrimary.classList.toggle('active');
    // });
}

/**
 * Replace text on click
 */

const textReplace = () => {
    const btn = document.getElementById('selected');
    const items = document.querySelectorAll('.item');

    items.forEach((item, index) => {

        // On ajoute une classe particulière au tout dernier element
        // on utilise items.length -1 car on commence calculer un tableu à partir de 0
        if(index === items.length - 1){
            item.classList.add('isLast')
        }

        item.addEventListener('click', () => {

            // On affiche / supprime le doublon
            items.forEach(newItem => {
                newItem.classList.remove('hidden');
                filter();
            })

            item.classList.add('hidden');

            // On modifie le texte du bouton principale
            btn.innerHTML = item.innerHTML;

            // On détecte quand on clique sur le dernier élément => on modifie le style
            document.querySelector('.dropdown_content').classList.remove('isLast')
            if(item.classList.contains('isLast')){
                document.querySelector('.dropdown_content').classList.add('isLast')
            }
        })
    })
}

// TODO : 
// - Au démarrage, il faudrait masquer popularité dans liste du dropdown car il est déjà sélectionné par default
// - Modifier ton css, pour que les "barre blanche" des btn s'arfichent proprement
