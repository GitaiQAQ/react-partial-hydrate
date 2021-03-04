export default ({ body, title }) =>
  `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>
        body * {
          display: flex;
          flex: 1;
          padding: 10px;
        }
        #root {
          transform: scale(0.5);
          transform-origin: left top;
        }
        </style>
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      
      <script src="/bundle.js"></script>
    </html>
  `;
