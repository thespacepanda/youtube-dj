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

let teams = {
  "gregs": "greg"
}

io.on('connection', socket => {
  console.log("Socket connected: " + socket.id)
  socket.on('action', (action) => {
    switch (action.type) {
      case "server/CREATE_TEAM":
        // this destructively updates teams :0
        teams[action.team] = action.pin
        socket.join(action.team)
        break
      case "server/JOIN_TEAM":
        if (teams[action.team] === action.pin) {
          socket.join(action.team)
          socket.emit("action", {
            type: "JOIN_TEAM",
            team: action.team
          })
        }
        break
      case "server/ADD_VIDEO":
        socket.to(action.team).emit("action", {
          type: "ADD_VIDEO",
          video: action.video
        })
        break
      default:
        break
    }
  })
})
