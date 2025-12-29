fetch("projects.json?v=" + Date.now())
  .then(res => res.json())
  .then(projects => {
    const container = document.getElementById("scratch-projects");

    projects.forEach(project => {
      const link = document.createElement("a");
      link.href = `https://scratch.mit.edu/projects/${project.id}/`;
      link.target = "_blank";

      link.innerHTML = `
        <img 
          src="https://cdn2.scratch.mit.edu/get_image/project/${project.id}_282x210.png"
          class="scratch-thumb"
        >
      `;
      img.style.animationDelay = `${index * 0.1}s`;

      link.appendChild(img);

      container.appendChild(link);
    });
  });