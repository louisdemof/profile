const projectList = [
  {
    name: "Konnected",
    text: "Web application build on Ruby Rails that connects tech alumni to small companies. Two interfaces exist one for business owners to post their projects and one for junior dev's to apply to those.",
    img: "Konnected-thumb",
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
    name: "Raster Systeme",
    text: "A clone of Airbnb for sport equipment built on Ruby on Rails. ",
    img: "equipr",
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
    name: "Euromillions Number Generator",
    text: "A small Euromillions lottery React app. It generates a random number combination for the Euromillions lottery.",
    img: "euro-thumb-01",
    link: {
      site: "https://caballero-react-ex.github.io/euromillions/",
      repo: "https://github.com/caballero-react-ex/euromillions"
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
        name: "SASS",
        color: "css"
      },
      {
        name: "React",
        color: "js"
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
    name: "Nice That Clone",
    text: "In order to learn more about CSS and JavaScript, I created a small project where I cloned the It´s Nice That frontpage with my own code.",
    img: "clone-thumb",
    link: {
      site: "https://losgridos.github.io/02-nicethat/",
      repo: "https://github.com/losgridos/02-nicethat"
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
        name: "SASS",
        color: "css"
      },
      {
        name: "JavaScript ES6",
        color: "js"
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
