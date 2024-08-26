
document.addEventListener('DOMContentLoaded', () => {
    const searchToggle = document.querySelector('.search-toggle');
    const searchContainer = document.querySelector('.search-container');

    searchToggle.addEventListener('click', (event) => {
        event.preventDefault();
        // Toggle visibility of the search box
        if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
            searchContainer.style.display = 'block';
            searchContainer.querySelector('input').focus(); // Focus the input field
        } else {
            searchContainer.style.display = 'none';
        }
    });

    // Close search box if clicked outside
    document.addEventListener('click', (event) => {
        if (!searchToggle.contains(event.target) && !searchContainer.contains(event.target)) {
            searchContainer.style.display = 'none';
        }
    });
});

