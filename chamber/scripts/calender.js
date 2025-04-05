function createCalendar(year, month) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthElement = document.getElementById('month');
    monthElement.textContent = `${monthNames[month]} ${year}`;
  
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = ''; // Clear previous content
  
    // Create table
    const table = document.createElement('table');
  
    // Create table header
    const header = document.createElement('tr');
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        header.appendChild(th);
    });
    table.appendChild(header);
  
    // Create table rows and cells
    let date = 1;
    const today = new Date();
    const currentDay = today.getDate();
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            if (i === 0 && j < firstDayIndex) {
                cell.textContent = ''; // Empty cells before the first day of the month
            } else if (date > daysInMonth) {
                break; // Exit loop when all days have been added
            } else {
                cell.textContent = date;
                if (date === currentDay) {
                    cell.classList.add('current-day'); // Highlight current day
                }
                date++;
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
  
    calendar.appendChild(table);
  }
  
  // Example usage
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  createCalendar(currentYear, currentMonth);