const form = document.getElementById("chat-form");
const messageInput = document.getElementById("message");
const chatContainer = document.getElementById("chat");
const template = document.getElementById("message-template");
const micButton = document.getElementById("mic-button");

const synth = window.speechSynthesis;
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

if (recognition) {
  recognition.lang = "es-ES";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.addEventListener("result", (event) => {
    const transcript = Array.from(event.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join(" ");

    messageInput.value = transcript;
    micButton.setAttribute("aria-pressed", "false");
    form.requestSubmit();
  });

  recognition.addEventListener("end", () => {
    micButton.setAttribute("aria-pressed", "false");
  });

  micButton.addEventListener("click", () => {
    if (micButton.getAttribute("aria-pressed") === "true") {
      recognition.stop();
      return;
    }

    micButton.setAttribute("aria-pressed", "true");
    recognition.start();
  });
} else {
  micButton.disabled = true;
  micButton.title = "Tu navegador no soporta reconocimiento de voz";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = messageInput.value.trim();
  if (!text) return;

  addMessage("Tú", text);
  messageInput.value = "";

  setTimeout(() => {
    const response = `Echo: ${text}`;
    addMessage("Bot", response);
    speak(response);
  }, 450);
});

function addMessage(author, text) {
  const fragment = template.content.cloneNode(true);
  fragment.querySelector(".author").textContent = author;
  fragment.querySelector(".text").textContent = text;
  chatContainer.appendChild(fragment);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function speak(text) {
  if (!synth) return;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-ES";
  synth.speak(utterance);
}

addMessage("Bot", "¡Hola! ¿En qué puedo ayudarte?");
