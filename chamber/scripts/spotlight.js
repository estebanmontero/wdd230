
const spotlightContainer = document.getElementById("spotlight-container");
const LOGO_DEV_KEY = 'pk_Elxpe_uTRv6jo7GGo3uf9Q'; // Your logo.dev API key

function extractLogoUrl(website) {
  try {
    const url = new URL(website); // Extracts hostname like www.example.com
    return `https://img.logo.dev/${url.hostname}?token=${LOGO_DEV_KEY}`;
  } catch (error) {
    console.error("Invalid website URL:", website);
    return '';
  }
}

async function loadSpotlightMembers() {
  try {
    const response = await fetch("data/members.json"); // Adjust the path if needed
    const data = await response.json();
    const companies = data.companies;

    // Filter by Gold or Silver membership
    const qualified = companies.filter(company =>
      company.membershipLevel === "Gold" || company.membershipLevel === "Silver"
    );

    // Shuffle and select 2 or 3 companies
    const shuffled = qualified.sort(() => 0.5 - Math.random());
    const numberToShow = Math.floor(Math.random() * 2) + 2;
    const selected = shuffled.slice(0, numberToShow);

    // Create spotlight cards
    selected.forEach(company => {
      const logoUrl = extractLogoUrl(company.website);
      console.log(`${company.name}: ${logoUrl}`); // Debug: See the generated logo URL

      const card = document.createElement("div");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <h3>${company.name}</h3>
        <img src="${logoUrl}" alt="Logo of ${company.name}" onerror="this.style.display='none';">
        <p><strong>Industry:</strong> ${company.industry}</p>
        <p><strong>Address:</strong> ${company.address}</p>
        <p><strong>Phone:</strong> ${company.phone !== "null" ? company.phone : "Not available"}</p>
        <p><strong>Website:</strong> 
          <a href="${company.website || '#'}" target="_blank">
            ${company.website || 'Unavailable'}
          </a>
        </p>
      `;

      spotlightContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading spotlight members:", error);
  }
}

loadSpotlightMembers();
