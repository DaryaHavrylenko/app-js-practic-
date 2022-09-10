const books = [{
    id: "1",
    title: `Apple. Эволюция компьютера`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Богато иллюстрированный хронологический справочник по истории компьютеров, в котором увлекательно 
    и в структурированном виде изложена информация о создании и развитии техники Apple на фоне истории 
    персональных компьютеров в целом.
    В книге даны описания десятков наиболее значимых моделей устройств как Apple, так и других производителей, 
    сопровождающиеся большим количеством оригинальных студийных фотографий.
    Книга предназначена для широкого круга читателей, интересующихся историей электроники. 
    Она также может послужить источником вдохновения для дизайнеров, маркетологов и предпринимателей.`,
},
  
  {
    id: "2",
    title: `Как объяснить ребенку информатику`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Иллюстрированная энциклопедия в формате инфографики о технических, социальных и культурных аспектах 
    в информатике. Пошагово объясняет, как детям максимально эффективно использовать компьютеры и интернет-сервисы, 
    оставаясь в безопасности. 
    Книга рассказывает обо всем: от хранения данных до жизни в интернет-пространстве, 
    от программирования до компьютерных атак. О том, как компьютеры функционируют, о современном программном 
    обеспечении, устройстве Интернета и цифровом этикете. Все концепты - от хакера до биткоина - 
    объясняются наглядно с помощью иллюстраций и схем.`,
  },
{
    id: "3",
    title: `Путь скрам-мастера. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `Эта книга поможет вам стать выдающимся скрам-мастером и добиться отличных результатов с вашей командой. 
    Она иллюстрированная и легкая для восприятия - вы сможете прочитать ее за выходные, а пользоваться полученными 
    знаниями будете в течение всей карьеры.
    Основываясь на 15-летнем опыте, Зузана Шохова рассказывает, какие роли и обязанности есть у скрам-мастера, 
    как ему решать повседневные задачи, какие компетенции нужны, чтобы стать выдающимся скрам-мастером, 
    какими инструментами ему нужно пользоваться.`,
  },

]
const STORAGE_KEY = "books";
localStorage.setItem(STORAGE_KEY, JSON.stringify(books));

const rootEl = document.querySelector('#root');
const firstDiv = document.createElement('div');
const secondDiv = document.createElement('div');
firstDiv.classList.add('firstDiv');
secondDiv.classList.add('secondDiv');

rootEl.append(firstDiv, secondDiv);

const headingEl = document.createElement('h1');
headingEl.textContent = 'Library';
const ulEl = document.createElement('ul');

const btnEl = document.createElement('button');
btnEl.textContent = 'Add';
btnEl.setAttribute("type", "button");


firstDiv.append(headingEl, ulEl, btnEl);


function renderList() {
    const books = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const bookTitle = books.map(({ title, id }) => {
  return `<li id='${id}'><p>${title}</p>
    <button class='edit'>edit</button>
    <button class='delete'>delete</button>
</li> 
       `
    }).join('');
    ulEl.insertAdjacentHTML('beforeend', bookTitle);
    const titleEl = document.querySelectorAll('p');

    titleEl.forEach(element => {
        element.addEventListener('click', renderPreview);
    });
   
    const btnEdit = document.querySelectorAll('.edit');
    const btnDelete = document.querySelectorAll('.delete');
    btnEdit.forEach((element) => {
        element.addEventListener('click', renderEdit);
    })
     btnDelete.forEach((element) => {
        element.addEventListener('click', renderDelete);
    })
}
renderList();
function renderEdit(event) {
    const bookId = event.target.parentNode.id
    console.log(bookId);
    console.log('edit');
}
function renderDelete(event) {
     const bookId = event.target.parentNode.id;
    const deleteId = JSON.parse(localStorage.getItem(STORAGE_KEY))
        .filter((element) => element.id !== bookId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(deleteId));
    console.log(deleteId);
   
    console.log(bookId);
    console.log('delete');
    ulEl.innerHTML = '';
    renderList();
    const divContainer = document.querySelector('.container');
    if (!divContainer) {
        return;
    }
    if (bookId === divContainer.dataset.id) {
        secondDiv.innerHTML = "";
 }
    renderPreview();
}

function renderPreview(event) {
    const books = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const titleTC = event.target.textContent;
    console.log(titleTC);
    
 const titleObj = books.find(options => options.title === titleTC);
    console.log(titleObj);
    
    secondDiv.innerHTML = createPreviewMarkUp(titleObj);
}

function createPreviewMarkUp({ id, title, author, img, plot }) {
 const oneBook = `<div class="container" data-id="${id}">
    <h2>${title}</h2>
    <p>${author}</p>
    <img src="${img}" alt="" />
    <p>${plot}</p>
</div>`     
      
    return oneBook;
}

btnEl.addEventListener("click", addBook);
function addBook() {
    const newObject = {
        id: `${Date.now()}`,
        title: "",
        author: "",
        img: "",
        plot: "",
    };
    secondDiv.innerHTML = "";
    secondDiv.insertAdjacentHTML('beforeend', createFormMarkUp());
    fillObject(newObject);
}
function createFormMarkUp() {
    const form = `<form action="">
      <label >Title:<input name="title" type="text" /></label
      ><label >Author:<input name="author" type="text" />Author</label
      ><label >Image<input name="img" type="text" />Image</labelname=$
      ><label >Plot<input name="plot" type="text" />Plot</label>
      <button type='submit'>Save</button>
    </form>
`   
    return form;  
}


function fillObject(book) {
    const allInputEl = document.querySelectorAll('input');
    allInputEl.forEach(input => input.addEventListener('change', onInputChange));
    function onInputChange() {
    
}
}


