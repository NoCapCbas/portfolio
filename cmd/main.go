package main

import (
  "log"
  "net/http"
  "html/template"
)

type PageData struct {
  Title string
  Message string
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
  
  // main portfolio handler

  // parse template file
  tmpl, err := template.ParseFiles("templates/index.html", "templates/nav.html")
  if err != nil {
    log.Println(err)
    http.Error(w, "Could not load template: ", http.StatusInternalServerError)
  }

  // create some data to pass to the template
  data := PageData{
    Title: "title",
    Message: "message",
  }

  // execute the template and pass the data
  err = tmpl.Execute(w, data)
  if err != nil {
    log.Println(err)
    http.Error(w, "Could not render template", http.StatusInternalServerError)
  }

}

func main() {
  // pass porfolio handler to server
  http.HandleFunc("/", indexHandler)
  
  // start server
  log.Println("Listening on port :8010...")
  err := http.ListenAndServe(":8010", nil)
  if err != nil {
    log.Fatal("ListenAndServe: ", err)
  }
}
