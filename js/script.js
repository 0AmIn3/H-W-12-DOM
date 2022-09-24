/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        
    ]
};

movieDB.movies.sort()


let deleteAdd = document.querySelector('.promo__adv')
let promo__genre = document.querySelector('.promo__genre')
let promo__bg = document.querySelector('.promo__bg')

deleteAdd.style.display = 'none'
promo__genre.innerHTML = 'драма'
promo__bg.style.background = 'url(../img/bg.jpg) center center/cover no-repeat'



let promo__interactive_list = document.querySelector('.promo__interactive-list')

function reload(arr, place) {
    let count = 0
    place.innerHTML = ''

    for(let item of arr){
        let promo__interactive_item = document.createElement('li') 
        let deleteBtn = document.createElement('div')
        count++
        promo__interactive_item.classList.add('promo__interactive-item')
        deleteBtn.classList.add('delete')
        
        place.append(promo__interactive_item)
        promo__interactive_item.append(count + '.', ' ' + item , deleteBtn)
        console.log(item);
    }

}
reload(movieDB.movies , promo__interactive_list)