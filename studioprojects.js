const studioId = "50976499";

const container = document.getElementById("scratch-projects");

async function loadStudioProjects() {
  let offset = 0;
  const limit = 40;
  let allProjects = [];
  let hasMore = true;

  while (hasMore) {
    const res = await fetch(
      `https://api.scratch.mit.edu/studios/${studioId}/projects?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    allProjects = allProjects.concat(data);

    if (data.length < limit) {
      hasMore = false;
    } else {
      offset += limit;
    }
  }
  
  allProjects.forEach(project => {
    const link = document.createElement("a");
    link.href = `https://scratch.mit.edu/projects/${project.id}/`;
    link.target = "_blank";

    link.innerHTML = `
      <div class="scratch-project">
        <img src="https://cdn2.scratch.mit.edu/get_image/project/${project.id}_282x210.png">
        <p>${project.title}<br>by ${project.author.username}</p>
      </div>
    `;

    container.appendChild(link);
  });
}

loadStudioProjects();
