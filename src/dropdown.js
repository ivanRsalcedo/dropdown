export function initDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(i => {
        const menu = i.querySelector('.dropdown-menu');

        if (!menu) return;

        i.addEventListener('mouseover', () => {
            menu.classList.add('visible');
        });

        i.addEventListener('mouseleave', () => {
            menu.classList.remove('visible');
        });

    });
}