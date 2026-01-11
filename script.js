const correctName = "naoley vale";
const message = `Hi, pretty.

First of all i wanted to say thank you, for the time, the talks, and the little things you do without realizing how much they matter to me. I really thank God for letting me get to know you. My days feel lighter lately, and i think you have a lot to do with that.

I’m pretty sure you already know that i like you through my actions and i want you to know that its not just a phase, a joke, or something i say without meaning. I mean it. Every bit of it. You make things feel easy and warm at the same time, and i like how i feel when you’re around. 

Hold on, did i just say that i like you? No my bad, let me correct that. I love you, Naoley.

If I asked you to make this real properly, would you say yes?`;


function showVerification() {
  const introText = document.getElementById('introText');
  const startBtn = document.getElementById('startBtn');
  const verificationBox = document.getElementById('verificationBox');
  
  introText.classList.add('fade-out');
  startBtn.classList.add('fade-out');
  
  setTimeout(() => {
    introText.style.display = 'none';
    startBtn.style.display = 'none';
    verificationBox.style.display = 'block';
    verificationBox.classList.add('fade-in');
    document.getElementById('nameInput').focus();
  }, 600);
}

// Handle Enter key press
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('nameInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      verifyName();
    }
  });
});

function verifyName() {
  const input = document.getElementById('nameInput').value.trim().toLowerCase();
  const errorMsg = document.getElementById('errorMsg');
  
  if (input === correctName.toLowerCase()) {
    errorMsg.textContent = '';
    showLetter();
  } else {
    errorMsg.textContent = 'Yah salah, coba ulangg';
    errorMsg.style.animation = 'none';
    setTimeout(() => {
      errorMsg.style.animation = 'shake 0.5s ease';
    }, 10);
    document.getElementById('nameInput').value = '';
    document.getElementById('nameInput').focus();
  }
}

function showLetter() {
  const verificationBox = document.getElementById('verificationBox');
  const letterBox = document.getElementById('letterBox');
  const typedText = document.getElementById('typedText');
  const readMeContainer = document.getElementById('readMeContainer');
  const signatureContainer = document.getElementById('signatureContainer');
  const signature = document.getElementById('signature');
  
  verificationBox.classList.add('fade-out');
  
  setTimeout(() => {
    verificationBox.style.display = 'none';
    letterBox.style.display = 'block';
    letterBox.classList.add('fade-in');
    typedText.innerHTML = "";
    
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
      } else {
        // Show signature with fade effect
        signatureContainer.style.display = 'block';
        setTimeout(() => {
          signature.classList.add('show');
        }, 100);
        
        // Show read me button with fade effect
        setTimeout(() => {
          readMeContainer.style.display = 'block';
          setTimeout(() => {
            readMeContainer.classList.add('show');
          }, 100);
        }, 800);
      }
    }

    setTimeout(typeWriter, 300);
  }, 600);
}