const baseURL = "https://estebanmontero.github.io/wdd230/";
const linksURL = "https://estebanmontero.github.io/wdd230/data/links.json";


async function apiFetch() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
        displayLinks(data.weeks);
    } catch (error) {
        console.log('Error fetching links:', error);
    }
}

apiFetch();

const displayLinks = (weeksData) => {
    const linksList = document.querySelector('#links-list'); 

    weeksData.forEach((week) => {
        const li = document.createElement('li');
        li.textContent = `Week ${week.week}: `;

        week.links.forEach((link, index) => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;

            li.appendChild(anchor);

            if (index < week.links.length - 1) {
                li.appendChild(document.createTextNode(' | '));
            }
        });

        linksList.appendChild(li);
    });
};