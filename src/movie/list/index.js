import styles from './index.module.less';
import $ from 'jquery';
let container;
function init(){
    container = $('<div>').addClass(styles.container).appendTo('#app');
}

init();

export function renderList(movies) {
    const result = movies
    .map(
      (m) => `<div>
  <a href="${m.url}" target="_blank"><img src="${m.cover}"></a>
  <a href="${m.url}" target="_blank"><p class="${styles.title}">${m.title}</p></a>
  <p class="${styles.rate}">${m.rate}</p>
  </div>`
    )
    .join('');
    container.html(result)
}