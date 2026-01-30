document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.image-item');
    let index = 0;
    let locked = false;

    function switchSlide(direction) {
        if (locked) return;
        locked = true;

        const current = items[index];
        current.classList.remove('active');
        current.classList.add('exit');

        index =
            direction === 'down'
                ? (index + 1) % items.length
                : (index - 1 + items.length) % items.length;

        const next = items[index];
        next.classList.add('active');

        setTimeout(() => {
            current.classList.remove('exit');
            locked = false;
        }, 900);
    }

    window.addEventListener(
        'wheel',
        (e) => {
            e.preventDefault();
            switchSlide(e.deltaY > 0 ? 'down' : 'up');
        },
        { passive: false }
    );
});
