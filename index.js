import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

const app = express();
const PORT=5000;
app.use(bodyParser.json());

app.use('/users',userRoutes);

// app.get('/',(req,res)=>{
//     console.log('[TEST]!');

//     res.send('Hello from Homepage.');
// });
app.get('/',(req,res)=>res.send('Hello from Homepage.'));

app.listen(PORT,()=>console.log(`Server running on port: http//:localhost:${PORT}`))

//1. get/users --finds all users

//2. post/users --creates a user

//3. get/users/:id --finds user details

//4. delete/users/:id --deletes a user

//5. patch/users/:id --updates a user
