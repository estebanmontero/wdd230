document.addEventListener('DOMContentLoaded', () => {
    const LOGO_DEV_KEY = 'pk_Elxpe_uTRv6jo7GGo3uf9Q'; // Your logo.dev API key
    const membersGrid = document.getElementById('membersGrid');
    const membersList = document.getElementById('membersList');
    const gridButton = document.getElementById('grid');
    const listButton = document.getElementById('list');
  
  
  
    // Fetch data from members.json
    fetch('data/members.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load members.json');
        }
        return response.json();
      })
      .then(data => {
        console.log('Loaded data:', data);
        showGridView(data.companies); // Default view: Grid
  
        gridButton.addEventListener('click', () => {
          showGridView(data.companies);
          toggleActiveButton(gridButton, listButton);
        });
  
        listButton.addEventListener('click', () => {
          showListView(data.companies);
          toggleActiveButton(listButton, gridButton);
        });
      })
      .catch(error => {
        console.error('Error loading member data:', error);
      });
  
    // Get logo.dev URL
    function getLogoDevURL(website) {
      try {
        const url = new URL(website);
        return `https://img.logo.dev/${url.hostname}?token=${LOGO_DEV_KEY}`;
      } catch (error) {
        console.error('Invalid URL for logo:', website);
        return '';
      }
    }
  
    // Create a grid-style card
    function createGridCard(company) {
      const card = document.createElement('div');
      card.classList.add('member-card');
  
      const logoURL = getLogoDevURL(company.website || '');
  
      card.innerHTML = `
        <img src="${company.image || 'images/default.png'}" alt="${company.name} logo" loading="lazy">
        <h3>${company.name}</h3>
        <p>${company.description || ''}</p>
        <p><strong>Industry:</strong> ${company.industry || 'N/A'}</p>
        <p><strong>Level:</strong> ${company.membershipLevel || 'N/A'}</p>
        <a href="${company.website || '#'}" target="_blank">
          <img src="${logoURL}" alt="Logo" width="16" height="16" style="vertical-align: middle;"> Visit Website
        </a>
      `;
      return card;
    }
  
    // Create a list-style item
    function createListItem(company) {
      const item = document.createElement('li');
  
      const logoURL = getLogoDevURL(company.website || '');
  
      item.innerHTML = `
        <h3>${company.name}</h3>
        <p><strong>Address:</strong> ${company.address || 'N/A'}</p>
        <p><strong>Phone:</strong> ${company.phone || 'N/A'}</p>
        <p>${company.description || ''}</p>
        <p><strong>Industry:</strong> ${company.industry || 'N/A'}</p>
        <p><strong>Level:</strong> ${company.membershipLevel || 'N/A'}</p>
        <a href="${company.website || '#'}" target="_blank">
          <img src="${logoURL}" alt="Logo" width="16" height="16" style="vertical-align: middle;"> Visit Website
        </a>
      `;
      return item;
    }
  
    // Display grid view
    function showGridView(companies) {
      membersGrid.innerHTML = '';
      membersList.innerHTML = '';
      membersList.style.display = 'none';
      membersGrid.style.display = 'grid';
  
      companies.forEach(company => {
        membersGrid.appendChild(createGridCard(company));
      });
    }
  
    // Display list view
    function showListView(companies) {
      membersGrid.innerHTML = '';
      membersList.innerHTML = '';
      membersGrid.style.display = 'none';
      membersList.style.display = 'block';
  
      companies.forEach(company => {
        membersList.appendChild(createListItem(company));
      });
    }
  
    // Toggle active class on buttons
    function toggleActiveButton(activeBtn, inactiveBtn) {
      activeBtn.classList.add('active');
      inactiveBtn.classList.remove('active');
    }
  });
  
    
    