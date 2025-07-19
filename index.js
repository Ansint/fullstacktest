import express from 'express';
import jwt from 'jsonwebtoken';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/auth/login', (req, res) => {
    const token = jwt.sign({
        email: req.body.email,
        password: req.body.password
    }, 'secret', {
        expiresIn: '1h'
    }, (err, token) => {
        if(err){
            console.log(err);
        }
        console.log(token);
    })
   res.json({
    success: true
   })
});


const port = process.env.APP_PORT || 3000;

app.listen(port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`Server running on port ${port}`);
    
});


