const fs = require('fs');
test('Página HTML contiene Hola Mundo', () => {
    const htmlContent = fs.readFileSync('../index.html', 'utf8');
    expect(htmlContent).toMatch(/Hola Mundo/);
});
