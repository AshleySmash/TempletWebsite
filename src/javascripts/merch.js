import 'bootstrap/dist/js/bootstrap.bundle.min';

function filterItems(category) {
    const items = document.querySelectorAll('.merch-item');
    items.forEach(item => {
        const categories = item.getAttribute('data-categories').split(',');
        if (category === 'all' || categories.includes(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Initial display
filterItems('all');