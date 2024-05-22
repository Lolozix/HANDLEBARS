const express = requie ("express");
const exphbs = requie ("express-handlebars");

const app = express();

app.egine("handlebars", exphbs.egine());
app.set("view egine", "handlebars");

app.get("/", (req, res)=>{
    res.render("home")
    ;
})

app.listen(8000, ()=>{
    console.log("servidor rodando!");
})