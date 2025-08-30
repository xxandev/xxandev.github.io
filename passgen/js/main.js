document.addEventListener('DOMContentLoaded', function () {
    const lengthSlider = document.getElementById('length');
    const lengthValue = document.getElementById('length-value');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
    const excludeSimilarCheckbox = document.getElementById('exclude-similar');
    const generateButton = document.getElementById('generate');
    const passwordsContainer = document.getElementById('passwords');
    const copyNotification = document.getElementById('copy-notification');

    // Оновлення значення довжини пароля
    lengthSlider.addEventListener('input', function () {
        lengthValue.textContent = this.value;
    });

    // Генерація паролів
    generateButton.addEventListener('click', function () {
        const length = parseInt(lengthSlider.value);
        const includeUppercase = uppercaseCheckbox.checked;
        const includeLowercase = lowercaseCheckbox.checked;
        const includeNumbers = numbersCheckbox.checked;
        const includeSymbols = symbolsCheckbox.checked;
        const excludeSimilar = excludeSimilarCheckbox.checked;

        // Перевірка, що хоча б один параметр вибрано
        if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
            alert('Будь ласка, виберіть хоча б один тип символів');
            return;
        }

        // Генерація 10 паролів
        passwordsContainer.innerHTML = '';
        for (let i = 0; i < 10; i++) {
            const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, excludeSimilar);
            const passwordElement = document.createElement('div');
            passwordElement.className = 'password-item';
            passwordElement.innerHTML = `<span class="password-text">${password}</span>`;

            // Додавання функціоналу копіювання
            passwordElement.addEventListener('click', function () {
                copyToClipboard(password);
                showNotification();
            });

            passwordsContainer.appendChild(passwordElement);
        }
    });

    // Функція генерації пароля
    function generatePassword(length, uppercase, lowercase, numbers, symbols, excludeSimilar) {
        let uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        let numberChars = '0123456789';
        // let symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        let symbolChars = '!@#$^&*()_+-=[]{}|';

        // Вилучення схожих символів, якщо потрібно
        if (excludeSimilar) {
            uppercaseChars = uppercaseChars.replace(/[OIL]/g, '');
            lowercaseChars = lowercaseChars.replace(/[oil1]/g, '');
            numberChars = numberChars.replace(/[01]/g, '');
        }

        let allowedChars = '';
        let password = '';

        if (uppercase && uppercaseChars.length > 0) allowedChars += uppercaseChars;
        if (lowercase && lowercaseChars.length > 0) allowedChars += lowercaseChars;
        if (numbers && numberChars.length > 0) allowedChars += numberChars;
        if (symbols && symbolChars.length > 0) allowedChars += symbolChars;

        // Перевірка, чи є доступні символи
        if (allowedChars.length === 0) {
            return "Оберіть хоча б один тип символів";
        }

        // Гарантуємо, що пароль містить хоча б один символ з кожного обраного типу
        const requiredChars = [];
        if (uppercase && uppercaseChars.length > 0) requiredChars.push(uppercaseChars);
        if (lowercase && lowercaseChars.length > 0) requiredChars.push(lowercaseChars);
        if (numbers && numberChars.length > 0) requiredChars.push(numberChars);
        if (symbols && symbolChars.length > 0) requiredChars.push(symbolChars);

        // Додаємо по одному символу з кожного обов'язкового типу
        for (const chars of requiredChars) {
            password += chars[Math.floor(Math.random() * chars.length)];
        }

        // Додаємо випадкові символи до потрібної довжини
        for (let i = password.length; i < length; i++) {
            password += allowedChars[Math.floor(Math.random() * allowedChars.length)];
        }

        // Перемішуємо символи у паролі
        return shuffleString(password);
    }

    // Функція для перемішування символів у рядку
    function shuffleString(string) {
        const array = string.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    }

    // Функція копіювання в буфер обміну
    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    // Показати сповіщення про копіювання
    function showNotification() {
        copyNotification.classList.add('show');
        setTimeout(() => {
            copyNotification.classList.remove('show');
        }, 2000);
    }

    // Згенерувати паролі при завантаженні сторінки
    generateButton.click();
});
