export default ({ body, title }) =>
  `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>
        #root, #root * {
          display: flex;
          flex: 1;
          padding: 2em;
        }
        body, #root {
          height: 100vh;
          padding: 0;
          margin: 0;
        }
        left, right {
          flex-direction: column;
        }
        example{
          background: #6fa2a2;
        }
        left{
          background: #3F51B5;
        }
        right{
          background: #A91EE3;
        }
        nav{
          background: #EE1A63;
        }
        content{
          background: #ffc107;
        }
        sidebar{
          background: #8bc34a;
        }
        </style>
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      
      <script src="/bundle.js"></script>
    </html>
  `;
