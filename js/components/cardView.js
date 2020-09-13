const projectList = [
  {
    name: "Konnected",
    text: "Web application build on Ruby Rails that connects tech alumni to small companies. Two interfaces exist one for business owners to post their projects and one for junior dev's to apply to those.",
    img: "Konnected",
    link: {
      site: "https://konnect-ed.herokuapp.com/",
      repo: "https://github.com/louisdemof/konnected"
    },
    stack: [
      {
        name: "HTML",
        color: "html"
      },
      {
        name: "CSS",
        color: "css"
      },
      {
        name: "Ruby",
        color: "backend"
      },
      {
        name: "Ruby on Rails",
        color: "backend"
      },
      {
        name: "JavaScript ES6",
        color: "js"
      },
      {
        name: "UX/UI",
        color: "design"
      },
    ]
  },
  {
    name: "Equip'R",
    text: "Copy cat of Airbnb to rent sport equipment built on Ruby on Rails in one week based on the MVC Framework. Creation of a search engine to look for specific equipment.",
    img: "equipr2",
    link: {
      site: "https://equipr.herokuapp.com/",
      repo: "https://github.com/mailysrenson/-equipr"
    },
    stack: [
      {
        name: "HTML",
        color: "html"
      },
      {
        name: "CSS",
        color: "css"
      },
      {
        name: "Bootstrap",
        color: "css"
      },
      {
        name: "Ruby",
        color: "backend"
      },
      {
        name: "Ruby on Rails",
        color: "backend"
      },
      {
        name: "SQL",
        color: "backend"
      },
      {
        name: "JavaScript ES6",
        color: "js"
      },

      {
        name: "UX/UI",
        color: "design"
      },

    ]
  },
  {
    name: "Mixozax",
    text: "My first project built on Ruby on Rails. This is a website where you can create and list your favorite cocktails. It was built on the MVC pattern and the data is hosted on Postgresql.",
    img: "Mixozax",
    link: {
      site: "https://mixozax.herokuapp.com/",
      repo: "https://github.com/louisdemof/rails-mister-cocktail"
    },
    stack: [
      {
        name: "HTML",
        color: "html"
      },
      {
        name: "CSS",
        color: "css"
      },
      {
        name: "Bootstrap",
        color: "css"
      },
      {
        name: "JavaScript ES6",
        color: "js"
      },
            {
        name: "Ruby",
        color: "backend"
      },
      {
        name: "Ruby on Rails",
        color: "backend"
      },
      {
        name: "SQL",
        color: "backend"
      },

    ]
  },

];

const projects = document.querySelector(".col-2-container");

function renderProjects() {
  const cardMarkup = projectList.map(function(project) {
    let stackMarkup = project.stack.map((stack) =>
      `<div class="u-flex-inline u-mr-1 u-pt u-pb">
          <span class="dot dot--${stack.color} u-mr"></span>
          <h5>${stack.name}</h5>
      </div>`
    ).join('')

    return `
    <div class="card">
      <a href="${project.link.site}" target="_blank" rel=”noopener noreferrer”>
        <img class="card__img" src="images/${project.img}.png" alt="${project.name}">
      </a>
      <h2 class="card__title">${project.name}</h2>
      <p class="card__text">${project.text}</p>
      <div class="card__stack-container">
        ${stackMarkup}
      </div>
      <div class="u-flex-column">
        <a class="link-icon__container" href="${project.link.site}" target="_blank" rel=”noopener noreferrer”>
          <span class="link-icon material-icons">visibility</span>
          <h5>View project</h5>
        </a>
        <a class="link-icon__container" href="${project.link.repo}" target="_blank" rel=”noopener noreferrer”>
          <span class="link-icon material-icons">folder</span>
          <h5>Repository</h5>
        </a>
      </div>
    </div>`
  }).join('');

  projects.insertAdjacentHTML('afterbegin', cardMarkup);
}

renderProjects();
