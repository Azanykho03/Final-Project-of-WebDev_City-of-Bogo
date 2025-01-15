// Function to format the date
function formatDate(isoDate) {
    // Check if the input is just a year
    if (/^\d{4}$/.test(isoDate)) {
        return isoDate; // Return the year as is
    }
    
    // Check if the input is year and month (YYYY-MM)
    if (/^\d{4}-\d{2}$/.test(isoDate)) {
        const date = new Date(isoDate + '-01'); // Add day to make it valid
        const options = { year: 'numeric', month: 'long' };
        return new Date(date).toLocaleDateString(undefined, options);
    }
    
    // Otherwise, assume it's a full date (YYYY-MM-DD)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(isoDate).toLocaleDateString(undefined, options);
}

// Apply formatting to all elements with the "formatted-date" class
document.addEventListener('DOMContentLoaded', () => {
    const dateElements = document.querySelectorAll('.formatted-date');
    dateElements.forEach(el => {
        const isoDate = el.getAttribute('data-date');
        if (isoDate) {
            el.textContent = formatDate(isoDate);
        }
    });
});