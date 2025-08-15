// Mode switch
function switchMode(mode) {
  document.getElementById('patternMode').classList.toggle('hidden', mode !== 'pattern');
  document.getElementById('multiplierMode').classList.toggle('hidden', mode !== 'multiplier');
  document.getElementById('outputBox').innerText = '';
}

// Pattern Generator (no emojis)
function generatePattern() {
  const text = document.getElementById("patternText").value;
  const max = parseInt(document.getElementById("patternCount").value);
  let output = "";

  const waveDepth = 7;
  let wave = 0;
  let direction = 1;

  for (let i = 1; i <= max; i++) {
    let spaces = " ".repeat(waveDepth - wave);
    output += `${spaces}${text} ${i}%\n`;

    wave += direction;
    if (wave === waveDepth || wave === 0) direction *= -1;
  }

  document.getElementById("outputBox").innerText = output;
}

// Text Multiplier
function generateMultiplier() {
  const text = document.getElementById("multiText").value;
  const count = parseInt(document.getElementById("multiCount").value);
  const numbered = document.getElementById("enableNumbering").checked;
  let output = "";

  for (let i = 1; i <= count; i++) {
    output += numbered ? `${i}) ${text}\n` : `${text}\n`;
  }

  document.getElementById("outputBox").innerText = output;
}

// Copy Output
function copyOutput() {
  const output = document.getElementById("outputBox").innerText;
  navigator.clipboard.writeText(output).then(() => {
    alert("Copied to clipboard!");
  });
}

// Theme Handling
const themeSelect = document.getElementById('themeSelect');
themeSelect.addEventListener('change', () => {
  const body = document.body;
  body.className = ''; // reset all classes

  let theme = themeSelect.value;

  if (theme === 'dark') body.classList.add('dark-mode');
  if (theme === 'light') body.classList.add('light-mode');
  if (theme === 'candy') body.classList.add('candy-mode');
  if (theme === 'emoji') {
    body.classList.add('emoji-mode');
    addEmojis();
  } else {
    removeEmojis();
  }
});

// Emoji Mode UI Decorator
function addEmojis() {
  document.getElementById('title').innerText = "🎉 Text Pattern Generator 🎉";
  document.getElementById('patternBtn').innerText = "🎨 Pattern Mode";
  document.getElementById('multiplierBtn').innerText = "🔁 Text Multiplier";
  document.getElementById('patternLabel').innerText = "📏 Pattern Length";
  document.getElementById('generatePatternBtn').innerText = "✨ Generate Pattern";
  document.getElementById('generateMultiplierBtn').innerText = "🔥 Multiply It!";
  document.getElementById('copyBtn').innerText = "📋 Copy to Clipboard";
  document.getElementById('numberedLabel').innerHTML = `<input type="checkbox" id="enableNumbering"> 🧾 Numbered List`;
}

function removeEmojis() {
  document.getElementById('title').innerText = "Text Pattern Generator";
  document.getElementById('patternBtn').innerText = "Pattern Mode";
  document.getElementById('multiplierBtn').innerText = "Text Multiplier";
  document.getElementById('patternLabel').innerText = "Pattern Length";
  document.getElementById('generatePatternBtn').innerText = "Generate Pattern";
  document.getElementById('generateMultiplierBtn').innerText = "Multiply It!";
  document.getElementById('copyBtn').innerText = "Copy to Clipboard";
  document.getElementById('numberedLabel').innerHTML = `<input type="checkbox" id="enableNumbering"> Numbered List`;
}
