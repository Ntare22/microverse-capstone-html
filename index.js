function loadIndex() {
  const programs = [
    {
      icon: './assets/chat.svg',
      caption: 'program image',
      title: 'Lecture',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod doloribus accusamus natus. Velit corrupti alias quibusdam placeat voluptatibus quis iste debitis laboriosam adipisci, eum possimus maxime.',
    },
    {
      icon: './assets/chat.svg',
      caption: 'program image',
      title: 'Lecture',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod doloribus accusamus natus. Velit corrupti alias quibusdam placeat voluptatibus quis iste debitis laboriosam adipisci, eum possimus maxime.',
    },
  ];

  programs.forEach((item) => {
    const programItem = document.createElement('div');

    const imgItem = document.createElement('img');
    imgItem.setAttribute('src', item.icon);
    imgItem.setAttribute('alt', item.caption);

    const itemTitle = document.createElement('h6');
    itemTitle.innerHTML = item.title;

    const itemDesc = document.createElement('p');
    itemDesc.innerHTML = item.description;

    programItem.appendChild(imgItem);
    programItem.appendChild(itemTitle);
    programItem.appendChild(itemDesc);

    document.getElementById('programs').appendChild(programItem);
  });

  const performers = [
    {
      image: './assets/img-cap.jpeg',
      name: 'Yochai Benkler',
      title: 'Lecture',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod doloribus accusamus natus. Velit corrupti alias quibusdam placeat voluptatibus quis iste debitis laboriosam adipisci, eum possimus maxime.',
    },
    {
      image: './assets/img-cap.jpeg',
      name: 'Yochai Benkler',
      title: 'Lecture',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod doloribus accusamus natus. Velit corrupti alias quibusdam placeat voluptatibus quis iste debitis laboriosam adipisci, eum possimus maxime.',
    },
  ];

  performers.forEach((performer) => {
    const performerItem = document.createElement('div');

    const imgItem = document.createElement('img');
    imgItem.setAttribute('src', performer.image);
    imgItem.setAttribute('alt', 'performer image');

    const itemName = document.createElement('p');
    itemName.innerHTML = performer.name;

    const performerTitle = document.createElement('p');
    performerTitle.innerHTML = performer.title;

    const performerDesc = document.createElement('p');
    performerDesc.innerHTML = performer.description;

    performerItem.appendChild(imgItem);
    performerItem.appendChild(itemName);
    performerItem.appendChild(performerTitle);
    performerItem.appendChild(performerDesc);
    document.getElementById('speakers').appendChild(performerItem);
  });
}

loadIndex();

const partners = [
  {
    img: './assets/google-logo-black.svg',
    caption: 'google logo',
  },
  {
    img: './assets/google-logo-black.svg',
    caption: 'google logo',
  },
];

partners.forEach((partner) => {
  const imgItem = document.createElement('img');
  imgItem.setAttribute('src', partner.img);

  document.getElementById('partner').appendChild(imgItem);
});

function loadAbout() {
  const pastEvents = [
    {
      img: './assets/events.jpeg',
      year: 2013,
      title: 'CC Global Summit 2013 Warsaw',
    },
    {
      img: './assets/events.jpeg',
      year: 2011,
      title: 'CC Global Summit 2011 Buenose Aires',
    },
  ];

  pastEvents.forEach((event) => {
    const historyItem = document.createElement('div');

    const imgItem = document.createElement('img');
    imgItem.setAttribute('src', event.img);
    const year = document.createElement('h3');
    year.innerHTML = event.year;
    const eventDescription = document.createElement('p');
    eventDescription.innerHTML = event.title;

    historyItem.appendChild(imgItem);
    historyItem.appendChild(year);
    historyItem.appendChild(eventDescription);
    document.getElementById('history-items').appendChild(historyItem);
  });
}

loadAbout();