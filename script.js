// -------------------- Mode Switch --------------------
function switchMode(mode) {
  document.getElementById('patternMode').classList.toggle('hidden', mode !== 'pattern');
  document.getElementById('multiplierMode').classList.toggle('hidden', mode !== 'multiplier');
  document.getElementById('outputBox').innerText = '';
}

// -------------------- Pattern Mode --------------------
function generatePattern() {
  const text = document.getElementById("patternText").value || "I love you";
  const max = parseInt(document.getElementById("patternCount").value) || 30;

  // Rainbow hearts in exact order (fixed, not editable)
  const hearts = ["❤️","🩷","🧡","🧡","💛","💚","💙","🩵","💜","💜"];

  let output = "";
  const waveDepth = 7; // max spaces
  let wave = 0;
  let direction = 1;

  for (let i = 0; i < max; i++) {
    const heart = hearts[i % hearts.length]; // cycle in exact order
    let spaces = " ".repeat(waveDepth - wave);
    output += `${spaces}${heart} ${text} ${i + 1}%\n`;

    wave += direction;
    if (wave === waveDepth || wave === 0) direction *= -1;
  }

  document.getElementById("outputBox").innerText = output;
}

// -------------------- Text Multiplier --------------------
function generateMultiplier() {
  const text = document.getElementById("multiText").value || "Hello";
  const count = parseInt(document.getElementById("multiCount").value) || 5;
  const numbered = document.getElementById("enableNumbering").checked;

  let output = "";
  for (let i = 1; i <= count; i++) {
    output += numbered ? `${i}) ${text}\n` : `${text}\n`;
  }

  document.getElementById("outputBox").innerText = output;
}

// -------------------- Copy Output --------------------
function copyOutput() {
  const output = document.getElementById("outputBox").innerText;
  navigator.clipboard.writeText(output).then(() => {
    alert("✨ Copied to clipboard! ✨");
  });
}

// -------------------- Theme Handling --------------------
const themeSelect = document.getElementById('themeSelect');
themeSelect.addEventListener('change', () => {
  const body = document.body;
  body.className = ''; // reset classes

  let theme = themeSelect.value;

  if (theme === 'dark') body.classList.add('dark-mode');
  if (theme === 'light') body.classList.add('light-mode');
  if (theme === 'candy') body.classList.add('candy-mode');
  if (theme === 'emoji') body.classList.add('emoji-mode');
});
