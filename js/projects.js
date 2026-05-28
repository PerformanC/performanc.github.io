(async () => {
  const projects_list_tag = document.getElementById('projects-list')
  const projects_fetch = await fetch('https://api.github.com/orgs/PerformanC/repos')
  const projects_json = await projects_fetch.json()
  const projects_array = projects_json.sort((a, b) => b.stargazers_count - a.stargazers_count); 

  if (!projects_fetch.ok) {
    const no_data_card = document.createElement('no-data-card')

    const no_data_card_a = document.createElement('a')
    no_data_card_a.setAttribute('target', '_blank')
    no_data_card_a.setAttribute('href', 'https://github.com/PerformanC/Website/issues')
    no_data_card_a.setAttribute('alt', 'https://github.com/PerformanC/Website/issues')

    const no_data_card_header = document.createElement('no-data-card-header')
    no_data_card_header.innerHTML = 'No data avaliable!'
    no_data_card.appendChild(no_data_card_header)

    const no_data_card_desc = document.createElement('no-data-card-desc')
    no_data_card_desc.innerHTML = 'No data avaliable! Please click this card to go to issue page and report!'
    no_data_card.appendChild(no_data_card_desc)

    no_data_card_a.appendChild(no_data_card)
    document.getElementById('projects').appendChild(no_data_card_a)
    return;
  }

  for (let i = 0; i < 6; i++) {
    const repo = projects_array[i];
    const project_card_a = document.createElement('a')
    project_card_a.setAttribute('target', '_blank')
    project_card_a.setAttribute('href', repo.html_url)
    project_card_a.setAttribute('alt', 'https://github.com/PerformanC/Website/issues')
  
    const projects_card = document.createElement('projects-card')

    const projects_card_header = document.createElement('projects-card-header')
    projects_card_header.innerHTML = repo.name

    const projects_card_desc = document.createElement('projects-card-desc')
    projects_card_desc.innerHTML = repo.description

    const projects_card_count = document.createElement('projects-card-count')
    const projects_card_stargazers = document.createElement('projects-card-stargazers')
    projects_card_stargazers.innerHTML = `<b>Stars:</b> <u>${repo.stargazers_count}</u>`

    const projects_card_forks = document.createElement('projects-card-forks')
    projects_card_forks.innerHTML = `<b>Forks:</b> <u>${repo.forks_count}</u>`

    projects_card_count.appendChild(projects_card_stargazers)
    projects_card_count.appendChild(projects_card_forks)

    projects_card.append(projects_card_header, projects_card_desc, projects_card_count)
    project_card_a.appendChild(projects_card)
    projects_list_tag.appendChild(project_card_a)
  }


  // console.log(projects_json.reduce((a, data) => a + data.stargazers_count, 0))


  console.log(projects_array)

})()