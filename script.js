document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');

    // Function to perform search on Google
    function performSearch() {
        const query = searchInput.value;
        if (query.trim() !== '') {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    }

    // Event listener for Enter key press
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });

    // Event listener for search icon click
    searchIcon.addEventListener('click', performSearch);
});
