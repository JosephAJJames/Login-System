let db = []
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile('C:/Users/JoeCe/OneDrive/Documents/Udemy Projects/log_in_system/homepage.html')
});

app.post('/check', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    let build = true
    if (db.some(([user, pass]) => user === username && pass === password)) {
        build = false
    }
    res.render('homepage.ejs', { build })
})

app.get('/create', (req, res) => {
    res.sendFile('C:/Users/JoeCe/OneDrive/Documents/Udemy Projects/log_in_system/createaccount.html')
})

app.post('/createaccount', (req, res) => {
    db.push([req.body.username, req.body.password])
    console.log(db)
    res.sendFile('C:/Users/JoeCe/OneDrive/Documents/Udemy Projects/log_in_system/homepage.html')
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
});