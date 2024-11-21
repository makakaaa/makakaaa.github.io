const lines = [
  { text: "Maksym", id: "line1" },
  { text: "Zinchuk", id: "line2" },
  { text: "Hello! I'm Maksym Zinchuk. And I'm an aspiring frontend developer.", id: "line3" }
];

const typingSpeed = 70; // Скорость печати (мс)
const lineDelay = 800;  // Задержка между строками (мс)

function typeLine(lineIndex = 0) {
  if (lineIndex >= lines.length) {
    return; // Прекратить анимацию после последней строки
  }

  const line = lines[lineIndex];
  const element = document.getElementById(line.id);
  const text = line.text;
  let charIndex = 0;

  // Анимация печати строки
  function typeChar() {
    if (charIndex < text.length) {
      const currentChar = text[charIndex];
      if (currentChar === "<") {
        // Обработка HTML-тегов вручную
        const closingTagIndex = text.indexOf(">", charIndex);
        element.innerHTML += text.slice(charIndex, closingTagIndex + 1);
        charIndex = closingTagIndex + 1;
      } else {
        element.innerHTML += currentChar;
        charIndex++;
      }
      setTimeout(typeChar, typingSpeed);
    } else {
      setTimeout(() => typeLine(lineIndex + 1), lineDelay); // Следующая строка
    }
  }

  typeChar();
}

// Запуск анимации
typeLine();






const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;