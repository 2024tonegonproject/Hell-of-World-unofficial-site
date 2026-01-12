fetch("https://2024tonegonproject.github.io/Hell-of-World-official-site/projects.json?v=" + Date.now())
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("scratch-projects");

    projects.forEach((item, index) => {
      const id = item.id;

      const thumb = `https://cdn2.scratch.mit.edu/get_image/project/${id}_282x210.png`;

      const link = document.createElement("a");
      link.href = `https://scratch.mit.edu/projects/${id}/`;
      link.target = "_blank";

      const img = document.createElement("img");
      img.src = thumb;
      img.classList.add("scratch-thumb");

      img.style.animationDelay = `${index * 0.1}s`;

      link.appendChild(img);
      container.appendChild(link);
    });
  });
