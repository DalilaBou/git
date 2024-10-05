var item, website, link;


website = ['Casbah', 'Ghardaia', 'Tmimoun'];
link = ['https://en.wikipedia.org/wiki/Casbah_of_Algiers', 'https://en.wikipedia.org/wiki/Gharda%C3%AFa', 'https://en.wikipedia.org/wiki/Timimoun'];
let element_list = document.getElementById('list');
website.forEach((item) => {
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.setAttribute("href", link.shift());
  new_a.innerText = item;

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);
});

link.forEach((item) => {
});
