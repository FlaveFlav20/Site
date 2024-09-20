package main

import (
    "fmt"
    "net/http"
	"os"
    "path/filepath"
)

func readFile(file string) []byte {
	// Read the file with the correct path
	data, err := os.ReadFile(file)
	check(err)
	return data
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {
    // Get the absolute path of the current directory
    path, err := filepath.Abs(".")
    check(err)

    // Read the index.html file from the static directory
    html := filepath.Join(path, "static", "index.html")

    // Serve the index.html on the root "/"
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        var data string = string(readFile(html))
        fmt.Fprintf(w, data)
    })

    // Serve static files (CSS, JS) from the static directory
    fs := http.FileServer(http.Dir(filepath.Join(path, "static")))
    http.Handle("/static/", http.StripPrefix("/static/", fs))

    // Start the server on port 80
    err = http.ListenAndServe(":80", nil)
    if err != nil {
        fmt.Println("Error starting server:", err)
    }
}
