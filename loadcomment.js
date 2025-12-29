async function loadComments() {
  const res = await fetch("https://https://noisy-sound-60af.tgrk-2024tgproject-official.workers.dev/");
  const comments = await res.json();

  const container = document.getElementById("comments");
  container.innerHTML = "";

  comments
    .sort((a, b) => b.date - a.date)
    .forEach(c => {
      const div = document.createElement("div");
      div.style.border = "1px solid #ccc";
      div.style.padding = "10px";
      div.style.margin = "10px 0";

      const date = new Date(c.date).toLocaleString();

      div.innerHTML = `
        <strong>${c.name}</strong> (${date})<br>
        ${c.message}
      `;

      container.appendChild(div);
    });
}

loadComments();