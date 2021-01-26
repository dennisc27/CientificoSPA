import getData from '../utils/getData';

//Template
const Home = async () => {
    const characters = await getData();
    const view = `
        <div class="Characters">
        ${characters.results.map(character => `

            <article class="Character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a>
            </article>
            `).join('')} 
        </div>
    `;
    return view;
};
//SE USA .join('') mas arriba para iterar los caracteres, y se le pone '' para no ponr comas al iterar.
//Export permite usar ese archive en otros archivos de javascript
export default Home;