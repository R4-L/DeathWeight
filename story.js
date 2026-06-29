const story = {
  start: {
    text: "Kamu bangun di Kasur tua yang rapuh. Kamu merasa ada sesuatu yang salah. Apa yang akan kamu lakukan?",
    choices: [
      { text: "Bangkit dan periksa sekitar", next: "ruang_berikut" },
      { text: "Tidur lagi", next: "dead" }
    ]
  },

  ruang_berikut: {
    text: "Kamu melihat ruang berikutnya. Ada sesuatu yang mencurigakan di sana.",
    choices: [
      { text: "Periksa lebih dekat", next: "meja" },
      { text: "Kembali ke kasur", next: "dead" }
    ]
  },


  // ending scenes
  
  meja: {
    text: "Tamat kamu berhasil menemukan meja",
    choices: []
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
    text: "Kamu mati karena tidak bangun. Game Over. 💀",
    choices: []
  }
};