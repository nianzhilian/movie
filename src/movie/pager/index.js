
import $ from 'jquery';
import styles from './index.module.less';
import { getMovies } from "@/api/movies";
import { renderList } from "@/movie/list";
let container;

function init(){
    container = $('<div>').addClass(styles.pager).appendTo('#app');
}
init();
/**
 * 
 * @param {*} page 当前页码
 * @param {*} pageSize 每页显示条数
 * @param {*} total 总共条数
 */
export function createPager(page,pageSize,total){
    container.empty();
    //首页  上一页 1 2 3 4 5 6 7 8 9 10 后一页 尾页
    //辅助函数创建页码元素  需要接收三个参数 文字，状态，页码

    function createPageItem(text,status,currentPage){
        const span = $('<span>').appendTo(container).text(text);
        const className = styles[status];
        span.addClass(className);
        //普通样式才需要点击
        if(status === ''){
            span.on('click',async function(){
                const res = await getMovies(currentPage,pageSize);
                renderList(res.data.movieList);
                createPager(currentPage,pageSize,res.data.movieTotal);
            })
        }
    }
    //总页数
    const totalPage = Math.ceil(total/pageSize);
    
    //首页
    createPageItem('首页',page===1?'disabled':'',1);
    //上一页
    createPageItem('上一页',page===1?'disabled':'',page-1);
    //页码显示范围
    //最多显示多少个页码
    const maxPage = 10;
    //起始页码
    let start = page - Math.floor(maxPage/2);
    //处理边界条件
    start < 1 && (start = 1);
    //结束页码
    let end = start + maxPage - 1;
    //处理边界条件
    end>totalPage && (end = totalPage);
    //创建页码元素
    for(let i=start;i<=end;i++){        
        createPageItem(i,i===page?'active':'',i);
    }
    //后一页
    createPageItem('后一页',page===totalPage?'disabled':'',page+1);
    //尾页
    createPageItem('尾页',page===totalPage?'disabled':'',totalPage);
}