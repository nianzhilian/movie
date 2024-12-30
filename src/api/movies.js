import axios from "axios";

export const getMovies = async (page,limit) => {
    //await等待异步请求完成，状态成功变成fulfilled，会立马把 该函数后面的代码加入到微队列中去等待主渲染进程执行
    const resp = await axios.get('/api/movies',{
        params:{
            page,
            size:limit
        }
    });
    return resp.data;
};