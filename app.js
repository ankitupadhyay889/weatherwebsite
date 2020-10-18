const express = require("express");
const app = express();
const port = process.env.PORT || 8000;



//serving the static file 
app.use('/static' , express.static('static'))
app.use(express.urlencoded())

app.set('view engine' , 'ejs')//set the template engine as html of ejs

app.set('views' , __dirname + '/views')//set the views directory   this line is not compulsory for the html file serving isko hta bhi skte ho tbhi render hoga
app.engine('html', require('ejs').renderFile);//render the file



// routing
app.get("/", (req, res) => {
  res.status(200).render("Home.html");
});

app.get("/about", (req, res) => {
  res.status(200).render("About.html");
});

app.get("/weather", (req, res) => {
  res.status(200).render("Weather.html");
});

app.get("*", (req, res) => {
  res.render("Eror.html" , {
    errMsg: 'Oops! Page Not Found'
  });
});


// app run
app.listen(port, () => {
  console.log(`Server is run in ${port}`);
});
