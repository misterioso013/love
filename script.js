const typing = document.querySelector('.typing');

const text = 'I love you!';
let index = 0;

const typingText = () => {
    if (index < text.length) {
        typing.textContent += text[index];
        index++;
        setTimeout(typingText, 100);
    }
    }

setTimeout(typingText, 1000);
