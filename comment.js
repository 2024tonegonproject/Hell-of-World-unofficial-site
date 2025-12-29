console.log("スクリプト");
document.getElementById("commentForm").addEventListener("submit", async (e) => {
    console.log("送信");
  e.preventDefault();

  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const res = await fetch("https://noisy-sound-60af.tgrk-2024tgproject-official.workers.dev/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, message })
  });
});