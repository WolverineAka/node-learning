# 模块文件说明
### app.js 入口模块
   - 创建服务
   - 做一些服务相关配置
        + 配置中间件 body-parser
        + 配置模板引擎 art-template
        + 开放静态资源
   - 挂载路由
   - 监听端口，启动服务

### router.js 路由模块
    - 处理路由
        + 根据不同的请求方法+请求路径指定不同的路由处理函数

### data.js 数据操作模块
    - 提供操作数据的API
        + 增删改查        