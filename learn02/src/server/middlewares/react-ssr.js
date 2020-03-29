// ./src/server/middlewares/react-ssr.js
// 完成 react ssr 工作的中间件，组件在服务端渲染的逻辑都在这个文件内

// 引入 react
import React from 'react';
// 引入 index 组件
import Index from '../../client/pages/index';
import { renderToString } from 'react-dom/server'

export default (ctx, next) => {
    const html = renderToString(<Index />);

    ctx.body = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>传统 ssr</title>
            </head>
            <body>
                <div id="root">
                    ${html}
                    <span>测试内容</span>
                </div>
            </body>
        </html>
        <script type="text/javascript" src="index.js"></script>
    `;

    return next();
}