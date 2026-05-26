(async () => {
  const accepted_banner_type = ['pedro', 'rainy', 'lucas', 'nicolas', 'tehpig', 'default']
  const members_list_tag = document.getElementById('members_list')
  const members_fetch = await fetch('/data/members.json')

  if (!members_fetch.ok) {
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
    document.getElementById('members').appendChild(no_data_card_a)
    return;
  }

  const members_array = await members_fetch.json()

  for (let i = 0; i < members_array.length; i++) {
    const data = members_array[i];
    const members_card = document.createElement('members-card')
    const members_card_wrapper = document.createElement('members-card-wrapper')
    const members_card_header = document.createElement('members-card-header')
    const members_card_desc = document.createElement('members-card-desc')

    if (accepted_banner_type.includes(data.banner_type)) {
      members_card.setAttribute('type', data.banner_type)
    } else {
      members_card.setAttribute('type', 'default')
    }

    members_card_header.innerHTML = data.name
    members_card_wrapper.appendChild(members_card_header)

    members_card_desc.innerHTML = data.desc
    members_card_wrapper.appendChild(members_card_desc)

    if (!data.social_media || data.social_media.length == 0) {
      members_card.appendChild(members_card_wrapper)
      members_list_tag.appendChild(members_card)
      continue
    }

    const members_card_social_media = document.createElement('members-card-social-media')

    for (let i = 0; i < data.social_media.length; i++) {
      const social_media_data = data.social_media[i];
      const a_link_tag = document.createElement('a')
      a_link_tag.setAttribute('target', '_blank')
      a_link_tag.setAttribute('href', social_media_data.link)
      a_link_tag.setAttribute('alt', social_media_data.type)
      const a_link_icon = document.createElement(social_media_data.type + '-icon')
      a_link_tag.appendChild(a_link_icon)
      members_card_social_media.appendChild(a_link_tag)
    }
    
    members_card_wrapper.appendChild(members_card_social_media)
    members_card.appendChild(members_card_wrapper)
    members_list_tag.appendChild(members_card)
  }
})()
