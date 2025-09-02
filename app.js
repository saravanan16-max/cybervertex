<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Cyber Knights — Quest</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js" defer></script>
  <script src="app.js" defer></script>
</head>
<body>
  <div class="app">
    <aside class="sidebar">
      <div class="brand">
        <div class="logo"></div>
        <div>
          <h1>CYBER KNIGHTS Club</h1>
          <div class="subtitle">CyberVerteX</div>
        </div>
      </div>
      <div class="card">
        <div class="title">Quest Progress</div>
        <div id="progressText" class="small mt8">0 / 5 QR fragments</div>
        <div class="grid c2 mt12">
          <button class="btn secondary" id="resetBtn">Reset</button>
          <button class="btn secondary" id="saveBtn">Save</button>
        </div>
        <div class="mt12">
          <div class="small">Timer</div>
          <div id="timer" class="title mt8">00:00:00</div>
          <div class="grid c2 mt8">
            <button class="btn ghost" id="startTimer">Start</button>
            <button class="btn ghost" id="stopTimer">Stop</button>
          </div>
        </div>
      </div>
      <div class="level-list mt16" id="levelList"></div>
      <div class="footer mt12">Tip: You can jump to a level, but you must solve at least one challenge in that level to unlock the next.</div>
    </aside>
    <main class="content">
      <section id="home" class="card">
        <h2 class="title">Welcome, Cyber Knight!</h2>
        <div id="homeQR" class="mt16"></div>
        <div class="mt20">
          <div class="title">Enter Final Line to Win</div>
          <input id="finalLine" class="mt12" placeholder="Enter the final line here" />
          <div class="grid c2 mt12">
            <button class="btn" id="submitFinal">Submit</button>
            <button class="btn secondary" id="demoFill">Demo Fill</button>
          </div>
          <div id="finalStatus" class="mt12 small"></div>
        </div>
      </section>
      <section id="level1" class="card hidden"></section>
      <section id="level2" class="card hidden"></section>
      <section id="level3" class="card hidden"></section>
      <section id="level4" class="card hidden"></section>
      <section id="level5" class="card hidden"></section>
    </main>
  </div>
  <div id="modalRoot" class="hidden"></div>
  <div id="toast" class="toast hidden"></div>
</body>
</html>

