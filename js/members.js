(async () => {
  const accepted_banner_type = ['pedro', 'rainy', 'lucas', 'nicolas', 'tehpig', 'default']
  const members_list_tag = document.getElementById('members_list')
  const members_fetch = await fetch('/data/members.json')

  if (!members_fetch.ok) {
    document.getElementById('members').innerHTML += `
      <a target="_blank" href="https://github.com/PerformanC/Website/issues" alt="https://github.com/PerformanC/Website/issues">
        <no-data-card>
          <no-data-card-header>No data avaliable!</no-data-card-header>
          <no-data-card-desc>No data avaliable! Please click this card to go to issue page and report!</no-data-card-desc>
        </no-data-card>
      </a>
    `
    return;
  }

  const members_array = await members_fetch.json()

  for (let i = 0; i < members_array.length; i++) {
    const data = members_array[i];
    let social_media_string = null

    if (data.social_media && data.social_media.length !== 0) {
      let social_media_link_string = ''

      for (let i = 0; i < data.social_media.length; i++) {
        const social_media_data = data.social_media[i]
        social_media_link_string += `
          <a target="_blank" href="${social_media_data.link}" alt="${social_media_data.type}">
            <${social_media_data.type}-icon></${social_media_data.type}-icon>
          </a>
        `
      }

      social_media_string = '<members-card-social-media>' + social_media_link_string + '</members-card-social-media>'
    }

    if (data.desc.includes('[[REDACTED]]')) {
      const splited_desc = /(.*)\[\[REDACTED\]\](.*)/.exec(data.desc)
      data.desc = splited_desc[1] + '<code class="redacted-content">REDACTED</code>' +  splited_desc[2]
    }

    members_list_tag.innerHTML += `
      <members-card type="${accepted_banner_type.includes(data.banner_type) ? data.banner_type : 'default'}">
        <members-card-wrapper>
          <members-card-header>${data.name}</members-card-header>
          <members-card-desc>${data.desc}</members-card-desc>
          ${social_media_string === null ? '' : social_media_string}
        </members-card-wrapper>
      </members-card>
    `
  }
})()
