module.exports = (app) => {
    app.get(`/`, (req, resp) => {
        resp.send('<h1>Olá Mundo</h1>')
    })
}