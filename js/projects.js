(async () => {
  const projects_list_tag = document.getElementById('projects-list')
  const projects_fetch = await fetch('https://api.github.com/orgs/PerformanC/repos')
  const projects_json = await projects_fetch.json()
  const projects_array = projects_json.sort((a, b) => b.stargazers_count - a.stargazers_count); 

  if (!projects_fetch.ok) {
    document.getElementById('projects').innerHTML += `
      <a target="_blank" href="https://github.com/PerformanC/Website/issues" alt="https://github.com/PerformanC/Website/issues">
        <no-data-card>
          <no-data-card-header>No data avaliable!</no-data-card-header>
          <no-data-card-desc>No data avaliable! Please click this card to go to issue page and report!</no-data-card-desc>
        </no-data-card>
      </a>
    `
    return;
  }

  for (let i = 0; i < 6; i++) {
    const repo = projects_array[i];
    projects_list_tag.innerHTML += `
      <a target="_blank" href="${repo.html_url}" alt="Github projject: ${repo.name}">
        <projects-card>
          <projects-card-header>${repo.name}</projects-card-header>
          <projects-card-desc>${repo.description}</projects-card-desc>
          <projects-card-count>
            <projects-card-stargazers>
              <b>Stars:</b> <u>${repo.stargazers_count}</u>
            </projects-card-stargazers>
            <projects-card-forks>
              <b>Forks:</b> <u>${repo.forks_count}</u>
            </projects-card-forks>
          </projects-card-count>
        </projects-card>
      </a>
    `
  }
})()