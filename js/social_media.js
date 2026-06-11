(async () => {
  const social_media_list_tag = document.getElementById('social-media-list')
  const social_media_fetch = await fetch('/data/social_media.json')

  if (!social_media_fetch.ok) {
    document.getElementById('social_media').innerHTML += `
      <a target="_blank" href="https://github.com/PerformanC/Website/issues" alt="https://github.com/PerformanC/Website/issues">
        <no-data-card>
          <no-data-card-header>No data avaliable!</no-data-card-header>
          <no-data-card-desc>No data avaliable! Please click this card to go to issue page and report!</no-data-card-desc>
        </no-data-card>
      </a>
    `
    return;
  }

  const social_media_array = await social_media_fetch.json()

  for (let i = 0; i < social_media_array.length; i++) {
    const data = social_media_array[i];

    social_media_list_tag.innerHTML += `
      <a href="${data.link}" alt="${data.id}_social_media" target="_blank">
        <social-media-card>
          <social-media-card-icon>
            <${data.id}-icon></${data.id}-icon>
          </social-media-card-icon>
          <social-media-card-header>${data.name}</social-media-card-header>
        </social-media-card>
      </a>
    `
  }
})()
