const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)
const path = require("path")

const PORT = 3000
server.listen(PORT)

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

// socket.io
io.on('connection', socket => {
  console.log("Socket connected: " + socket.id)
  socket.on('action', (action) => {
    switch (action.type) {
      case "server/ADD_VIDEO":
        console.log("adding video")
        socket.broadcast.emit("action", {
          type: "ADD_VIDEO",
          video: action.video
        });
        break
      default:
        break
    }
  })
})
