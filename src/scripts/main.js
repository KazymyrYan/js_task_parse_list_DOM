'use strict';

const list = document.querySelector('ul');

function sortList() {
  const items = [...list.querySelectorAll('li')];
  const sorted = items.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/[$,]/g, ''));
    const salaryB = Number(b.dataset.salary.replace(/[$,]/g, ''));

    return salaryB - salaryA;
  });

  list.innerHTML = '';
  sorted.forEach((item) => list.appendChild(item));
}

function getEmployees() {
  const items = [...list.querySelectorAll('li')];

  return items.map((li) => ({
    name: li.textContent,
    position: li.dataset.position,
    salary: li.dataset.salary,
    age: li.dataset.age,
  }));
}

sortList(list);
getEmployees(list);
