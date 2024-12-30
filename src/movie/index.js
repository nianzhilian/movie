import { getMovies } from "@/api/movies";
import { renderList } from "@/movie/list";
import { createPager } from '@/movie/pager';
async function init(){
    const res = await getMovies(1,50);
    console.log(res);
    renderList(res.data.movieList);
    createPager(1,50,res.data.movieTotal);
}
init();