function photographerFactory(data) {
    const { name, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const town = document.createElement( 'h3' );
        town.textContent = city + ', ' + country;

        const tag = document.createElement( 'p' );
        tag.textContent = tagline;

        const prices = document.createElement( 'span' );
        prices.textContent = price+'€'+' /jour';

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(town);
        article.appendChild(tag);
        article.appendChild(prices);
        return (article);
    }
    
    return { name, city, country, tagline, price, picture, getUserCardDOM }
}