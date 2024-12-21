import express, { Router } from "express";
import * as dotenv from "dotenv";
import { sequelize } from "./database/db";
import { authMiddleware } from "./middlewares/authMiddleware";
import routesHandler from "./routes";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(authMiddleware);

app.use("/", routesHandler);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: `http://localhost:3000`,
    methods: ['GET', 'POST']
  }
});

io.on('connection', (socket) => {
  console.log("A user connected: ", socket.id);

  socket.on('send_message', (data) => {
    io.emit('receive_message: ', data);
  })

  socket.on('disconnect', () => {
    console.log('User disconnected: ', socket.id)
  });
});

server.listen(5000, () => {
  console.log(`Server is listening on port: `, 5000)
})


// const syncSequelize = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection established successfully...");

//     await sequelize.sync({ alter: true });
//     console.log("Database synchronized...");

//     app.listen(process.env.PORT, () => {
//       console.log(`Server listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("error: ", error);
//   }
// };

// syncSequelize();