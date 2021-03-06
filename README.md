# React 开发cNode
这是一个 以cNode为例的 react项目，项目中涉及到 React，Redux，antd 等 技术点的应用
## 技术栈
- create-react-app
- react
- redux
- react-redux
- redux-thunk
- react-router-dom
- axios
- antd
## API接口
这里使用的是 cnodejs 官网给出的数据接口，接口文档地址：https://cnodejs.org/api

## 涉及知识前置说明：
- react 和 redux 相关
- antd 可以参考 design 官网文档。官网地址：https://ant.design/index-cn


## 主要步骤
- 环境安装
	1. `create-react-app my_cnode` 创建项目
	2. `cd my_cnode` 进入目录	
	3. `npm i redux -S` 安装redux
	4. `npm i react-redux -S` 安装redux
	5. `npm i redux-thunk -S` 安装中间件
	6. `npm i react-router-dom -S` 安装react路由
	7. `npm i axios -S` 安装axios
	8. `npm i antd -S` 安装antd
	9. 修改配置环境，以适应 antd([官网参考](https://ant.design/docs/react/use-with-create-react-app-cn))
		- `npm i react-app-rewired -D` 
		- 修改package.json的启动配置
		`
			"scripts": {
			    "start": "react-app-rewired start",
			    "build": "react-app-rewired build",
			    "test": "react-app-rewired test --env=jsdom",
			    "eject": "react-scripts eject"
			  }
		`	
		- `npm i babel-plugin-import -D`
		- 项目根目录创建config-overrides.js
		`
		  const { injectBabelPlugin } = require('react-app-rewired');
		  module.exports = function override(config, env) {
		  	config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
		    return config;
		  };
		`
- 视图
	- 视图结构划分
	- 路由配置
	- minHeader 组件
		- antd 响应式设计及栅格组件使用
		- antd {Layout, Row, Col, Menu, Icon, Divider，Dropdown} 等组件使用
	- minFooter 组件
	- Index 首页视图
		- 相关子视图及路由配置（全部、精华、问答、分享、招聘、测试）
		- param 参数
		- antd List组件、Pagination组件、Tag组件 使用讲解
	- Details 文章详情视图
		- Card 组件 使用讲解
		- dangerouslySetInnerHTML 方法		
	- User 用户视图  
	- Book 教程视图 和 About 关于视图

- 数据处理
	- redux的异步处理 
	- 中间件处理 
	- redux-thunk使用
	- 相关 reducer 处理
		- list.reducers
		- details.reducers
		- user.reducers
- 更新相关数据获取，完善整个项目
