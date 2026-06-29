const story = {
  start: {
    text: "Kamu bangun di kapal luar angkasa yang rusak...",
    choices: [
      { text: "Periksa ruang kontrol", next: "control" },
      { text: "Tidur lagi", next: "dead" }
    ]
  },

  control: {
    text: "Sistem AI menyapa kamu: 'Butuh bantuan?'",
    choices: [
      { text: "Percaya AI", next: "good" },
      { text: "Matikan AI", next: "bad" }
    ]
  },

  good: {
    text: "AI membantu memperbaiki kapal. Kamu selamat! 🚀",
    choices: []
  },

  bad: {
    text: "Tanpa AI, kamu tersesat di luar angkasa... 💀",
    choices: []
  },

  dead: {
    text: "Kamu kehabisan oksigen saat tidur... ☠️",
    choices: []
  }
};