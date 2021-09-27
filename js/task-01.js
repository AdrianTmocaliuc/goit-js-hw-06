'use strict'


const nrOfCategories = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${nrOfCategories}`);



document.querySelectorAll('.item').forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}\n` +
        `Elements: ${item.querySelectorAll('li').length}`);
    });


