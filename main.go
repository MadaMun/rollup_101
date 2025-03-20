package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, Newbie!")
}

func main() {
	http.HandleFunc("/", handler) // ✅ ใช้ HandleFunc ที่ถูกต้อง
	fmt.Println("Server running on port 8080")
	http.ListenAndServe(":8080", nil) // ✅ ใช้ ListenAndServe และ nil ที่ถูกต้อง
}
