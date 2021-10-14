const toggle = (btn) => {
  btn.classList.toggle('toggle');
}

const loadIndex = () => {
  const programs = [
    {
      icon: './assets/chat.svg',
      caption: 'program image',
      title: 'Lecture',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod.',
    },
    {
      icon: './assets/chat.svg',
      caption: 'program image',
      title: 'Lecture',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod.',
    },
    {
      icon: './assets/chat.svg',
      caption: 'program image',
      title: 'Lecture',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod.',
    },
    {
      icon: './assets/chat.svg',
      caption: 'program image',
      title: 'Lecture',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod.',
    },
    {
      icon: './assets/chat.svg',
      caption: 'program image',
      title: 'Lecture',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod.',
    },
  ];

  programs.forEach((item) => {
    const programItem = document.createElement('div');
    programItem.classList = 'program'

    const imgItem = document.createElement('img');
    imgItem.setAttribute('src', item.icon);
    imgItem.setAttribute('alt', item.caption);

    const itemTitle = document.createElement('h4');
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
      decorator: './assets/checkered-img.jpeg',
      image: './assets/img-cap.jpeg',
      name: 'Yochai Benkler',
      title: 'Lecturer @ Havard',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod.',
    },
    {
      decorator: './assets/checkered-img.jpeg',
      image: './assets/img-cap.jpeg',
      name: 'Yochai Benkler',
      title: 'Lecturer @ Havard',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod.',
    },
    {
      decorator: './assets/checkered-img.jpeg',
      image: './assets/img-cap.jpeg',
      name: 'Yochai Benkler',
      title: 'Lecturer @ Havard',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod.',
    },
    {
      decorator: './assets/checkered-img.jpeg',
      image: './assets/img-cap.jpeg',
      name: 'Yochai Benkler',
      title: 'Lecturer @ Havard',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod.',
    },
    {
      decorator: './assets/checkered-img.jpeg',
      image: './assets/img-cap.jpeg',
      name: 'Yochai Benkler',
      title: 'Lecturer @ Havard',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod.',
    },
    {
      decorator: './assets/checkered-img.jpeg',
      image: './assets/img-cap.jpeg',
      name: 'Yochai Benkler',
      title: 'Lecturer @ Havard',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem magni ratione velit quod.',
    },
  ];

  performers.forEach((performer) => {
    const performerItem = document.createElement('div');
    const performerDetails = document.createElement('div');
    performerDetails.classList = 'performerInfo';

    const imgContainer = document.createElement('div');
    imgContainer.classList = 'img-container'

    const imgItem = document.createElement('img');
    imgItem.classList = 'img-item';
    imgItem.setAttribute('src', performer.image);
    imgItem.setAttribute('alt', 'performer image');

    const imgItemContainer = document.createElement('div');
    const imgDecoratorContainer = document.createElement('div');

    const imgDecoration = document.createElement('img');
    imgDecoration.classList = 'img-decorator'
    imgDecoration.setAttribute('src', performer.decorator);
    imgDecoration.setAttribute('alt', 'image decorator')

    const itemName = document.createElement('p');
    itemName.innerHTML = performer.name;
    itemName.classList = 'performer-name';

    const performerTitle = document.createElement('p');
    performerTitle.innerHTML = performer.title;
    performerTitle.classList = 'performer-title';

    const performerDesc = document.createElement('p');
    performerDesc.innerHTML = performer.description;
    performerDesc.classList = 'performer-desc';

    imgDecoratorContainer.appendChild(imgDecoration)
    imgItemContainer.appendChild(imgItem)

    imgContainer.appendChild(imgDecoratorContainer)
    imgContainer.appendChild(imgItemContainer);
    performerDetails.appendChild(itemName);
    performerDetails.appendChild(performerTitle);
    performerDetails.appendChild(performerDesc);
    performerItem.appendChild(imgContainer);
    performerItem.appendChild(performerDetails);
    document.getElementById('speakers').appendChild(performerItem);
  });
}

const partners = [
  {
    img: './assets/google-logo-black.svg',
    caption: 'google logo',
  },
  {
    img: './assets/google-logo-black.svg',
    caption: 'google logo',
  },
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

  document.getElementById('partners').appendChild(imgItem);
});

const loadAbout = () => {
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
    historyItem.classList = 'history-item';

    const imgItem = document.createElement('img');
    imgItem.setAttribute('src', event.img);

    const eventDetails = document.createElement('div');
    eventDetails.classList = 'event-details';

    const eventText = document.createElement('div');
    eventText.classList = 'event-text'

    const year = document.createElement('h3');
    year.innerHTML = event.year;
    const eventDescription = document.createElement('p');
    eventDescription.innerHTML = event.title;

    eventText.appendChild(year);
    eventText.appendChild(eventDescription);
    eventDetails.appendChild(eventText)

    historyItem.appendChild(imgItem);
    historyItem.appendChild(eventDetails);
    document.getElementById('history-items').appendChild(historyItem);
  });
}
