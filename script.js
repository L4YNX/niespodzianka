//make no button move to a random spot on every mouse over
const noButton = document.getElementById('no');
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// make #yes button hide every thing on click and show a center message "I knew you would say yes" additionally add a heart emoji and show unknown image
const yesButton = document.getElementById('yes');
yesButton.addEventListener('click', () => {
    document.body.innerHTML = '<h1 style="text-align: center;">Wiedziałem ze powiesz tak! ❤️</h1><img src="unknown.png" alt="Unknown Image" style="display: block; margin: 0 auto;">';
});