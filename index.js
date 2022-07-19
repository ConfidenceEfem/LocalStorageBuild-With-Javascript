const studentData = [
  {
    id: 1,
    name: 'Confidence Efem',
    image:
      'https://media.istockphoto.com/photos/african-student-sitting-in-classroom-picture-id1351445530?b=1&k=20&m=1351445530&s=170667a&w=0&h=9Lmy0oy3tqoFgvuIPhEKPhbNQrLR12Ym518Zjs-KpF4=',
    year: '100l',
  },
  {
    id: 2,
    name: 'Emmanuel Earli',
    image:
      'https://media.istockphoto.com/photos/handsome-afro-student-posing-on-bookshelves-background-picture-id1171062918?k=20&m=1171062918&s=612x612&w=0&h=I6djuMs92BCgJaBv5iIsPALt2oZ8mYQU7ttF1hmhPkE=',
    year: '200l',
  },
  {
    id: 3,
    name: 'Rose Tilda',
    image: 'https://www.fmjfee.com/i901fee/img/home/learn/learn_1.jpg',
    year: '400l',
  },
  {
    id: 4,
    name: 'Fawas Lekan',
    image: 'https://www.fmjfee.com/i901fee/img/home/learn/learn_1.jpg',
    year: '400l',
  },
];

const wholeCont = document.getElementById('body');
const name = document.getElementById('name');
var classText = document.getElementById('class');
const image = document.getElementById('mainimage');
let minus = document.getElementById('minus');
let add = document.getElementById('add');
let inputName = document.getElementById('enterName');
let inputClass = document.getElementById('enterClass');
let button = document.getElementById('submit');

let counter = 0;

button.addEventListener('click', () => {
  const id = new Date().getTime().toString();

  console.log(inputClass.value, inputName.value);

  const element = document.createElement('div');
  element.classList.add('card');

  let addValue = document.createAttribute('data-id');
  addValue.value = id;
  // console.log(addValue);
  element.setAttributeNode(addValue);
  // console.log(element);
  element.innerHTML = ` <div class="image" id="image">
  <img src="" id="mainimage" />
</div>
<div class="name" id="name">${inputClass.value}</div>
<div class="class" id="class">${inputName.value}</div>
<div class="buttonHold">
  <button class="minus" id="minus" onclick="minusCount()">-</button>
  <button class="add" id="add" onclick="addCount()">+</button>
</div>`;
  wholeCont.appendChild(element);

  const data = {
    id: id,
    inputName: inputName.value,
    inputClass: inputClass.value,
  };

  const items = localStorage.getItem('javalist')
    ? JSON.parse(localStorage.getItem('javalist'))
    : [];

  items.push(data);

  localStorage.setItem('javalist', JSON.stringify(items));

  inputClass.value = '';
  inputName.value = '';
});

// window.addEventListener("", ()=>{

// })

const ShowItem = (number) => {
  // const item = studentData[number];
  // image.src = item.image;
  // name.innerHTML = item.name;
  // classText.innerHTML = item.year;
};

// window.addEventListener('DOMContentLoaded', () => {
//   const item = studentData[counter];
//   image.src = item.image;
//   name.innerHTML = item.name;
//   classText.innerHTML = item.year;
// });

const startItem = () => {
  ShowItem(counter);
};

const minusCount = () => {
  counter--;
  ShowItem(counter);
};
const addCount = () => {
  counter++;
  // const item = studentData[0];
  ShowItem(counter);
  // console.log(item.name);
};

window.addEventListener('DOMContentLoaded', () => {
  let showDatas = JSON.parse(localStorage.getItem('javalist')).map(
    (props) =>
      `<div class="card">
    <div class="image" id="image">
      <img src=${props.image} id="mainimage"/>
    </div>
    <div class="name" id="name">${props.inputName}</div>
    <div class="class" id="class">${props.inputClass}</div>
    <div class="buttonHold">
      <button class="minus" id="minus" onclick="minusCount()">-</button>
      <button class="add" id="add" onclick="addCount()">+</button>
    </div>
  </div>`
  );

  showDatas = showDatas.join(' ');
  wholeCont.innerHTML = showDatas;
});
