import express, { Request, Response } from "express";  
import bodyParser from "body-parser";  
import cors from "cors";  
import dotenv from "dotenv";  
  
dotenv.config();  
const app = express();  
const port = process.env.PORT || 5000;  
  
app.use(cors());  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true }));  
  
app.get("/", (req: Request, res: Response) => {  
  res.send("Hello from Express.js!");  
});  
  
app.listen(port, () => {  
  console.log(`Server is running on port ${port}`);  
});  

// Du könntest hier nach dem Vorbild unter "DATA" neue Datensätze anlegen und versuchen 
// diese aus dem Frontend abzurufen. Wenn du einen Schritt weiter gehen möchtest
// denke darüber nach, wie man hier Daten aus dem Frontend empfangen und speichern könnte.

// DATA
const users = [  
  { id: 1, name: "Alice", gender: "female", age: 21, married: false, email: "alice@example.com" },  
  { id: 2, name: "Bob", gender: "male", age: 47, married: true,  email: "bob@example.com" },  
  { id: 3, name: "Carol", gender: "female", age: 18, married: false,  email: "carol@example.com" },  
  { id: 4, name: "Max", gender: "male", age: 31, married: true,  email: "max@example.com" },
  { id: 5, name: "Erik", gender: "male", age: 38, married: false,  email: "erik@example.com" },
  { id: 6, name: "Anna", gender: "female", age: 40, married: true,  email: "anna@example.com" },
  { id: 7, name: "Elisabeth", gender: "female", age: 67, married: true,  email: "elisabeth@example.com" },
];  
  
const products = [  
  { id: 1, name: "Product 1", description: "This is product 1", price: 10.99 },  
  { id: 2, name: "Product 2", description: "This is product 2", price: 15.99 },  
  { id: 3, name: "Product 3", description: "This is product 3", price: 12.99 },  
];  

// Get users  
app.get("/api/users", (req: Request, res: Response) => {  
  res.json(users);  
});  
  
// Get products  
app.get("/api/products", (req: Request, res: Response) => {  
  res.json(products);  
});  

