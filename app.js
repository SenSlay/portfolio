(function seceretMessage() {
    const heroPic = document.getElementById('hero-pic');
    const secretContent = document.getElementById('secret-content');
    let clickCount = 0;
    let resetTimer;

    heroPic.addEventListener('click', () => {
        clickCount++;
        
        if (clickCount === 5) {
            // Reveal secret content
            heroPic.style.transform = 'translateY(-100%)'; // Slide hero pic up

            secretContent.style.display = 'flex';
        }

        // Reset click count after 2 seconds of no activity
        clearTimeout(resetTimer);
        resetTimer = setTimeout(() => {
            clickCount = 0;
        }, 500);
    });

    const secretInput = secretContent.querySelector('input[name="secret"]');
    const secretWord = "pineapple";
    const inputResponse = document.querySelector('.input-response');

    // Function to check the input value
    function checkInput() {
        const userInput = secretInput.value.trim().toLowerCase(); // Normalize the input
        if (userInput === secretWord) {
            secretInput.disabled = true; // Disable input after correct answer
            inputResponse.style.color = 'green';
            inputResponse.textContent = 'HAHAH nice, i love u stink :*'
        } else if (userInput === 'pogi') {
            secretInput.value = ''; // Clear the input field
            inputResponse.textContent = 'Pwede :) pero try again!'
        } else {
            secretInput.value = ''; // Clear the input field
            inputResponse.textContent = 'Enkkkk wrong.'
        }
    }

    secretInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            checkInput();
        }
    });
})();

(function slideAnimationHandler() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('hidden')) {
                    entry.target.classList.add('show');
                }

                if (entry.target.matches('section.projects ul li:last-child button')) {
                    entry.target.classList.add('animate');
                }

                if (entry.target.matches('section.projects li')) {
                    // Wait for the initial transition to finish
                    entry.target.addEventListener('transitionend', handleTransitionEnd, { once: true });
                }
            }
            // else {
            //     entry.target.classList.remove('show');
            // }
        })
        },
    );

    const hiddenEls = document.querySelectorAll('.hidden');
    hiddenEls.forEach((el) => observer.observe(el));

    const target = document.querySelector('section.projects ul li:last-child button');
    if (target) observer.observe(target);

    function handleTransitionEnd(event) {
        const target = event.currentTarget;

        // Add hover listeners after the transition ends
        target.addEventListener('mouseenter', handleHover);
        target.addEventListener('mouseleave', handleHoverOut);
    }

    function handleHover(event) {
        const target = event.currentTarget;
        target.style.transition = 'transform 0.3s ease';
        target.style.transform = 'translateY(-3%)';
    }

    function handleHoverOut(event) {
        const target = event.currentTarget;
        target.style.transform = 'translateY(0)';
    }
})();