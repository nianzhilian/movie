
//导入模块  仅运行一次该模块，不会导入任何的内容
//es6的模块导入 分静态导入和动态导入（动态导入的会自动分包） commonJS的导入是动态导入
import './cover';
import './globall.css'
//能够创建多个包 并在运行时动态加载
//依赖类型 分为静态依赖和动态依赖
import('./movie')