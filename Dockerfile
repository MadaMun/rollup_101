FROM golang:1.24.0-alpine AS builder

WORKDIR /app

COPY go.mod ./

RUN go mod tidy

COPY . .

RUN go build -o api .

FROM alpine:3.17

WORKDIR /app

COPY --from=builder /app/api .

EXPOSE 8080

CMD ["./api"]
