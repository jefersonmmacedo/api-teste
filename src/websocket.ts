import { Socket } from "socket.io";
import { stringify } from "uuid";
import { v4 as uuidv4 } from "uuid";
import { collections } from "../services/database.service";
import { io } from "./http";

interface Rooms {
  room: string;
  idAccount: string;
  idFriend: string;
}

interface RoomUser  {
  socketId: string;
  room: string;
  idAccount: string;
  idFriend: string;
}
interface UsersOline  {
  socketId: string;
  idAccount: string;
  username: string;
  nickname: string;
  avatar: string;
  lat: number;
  long: number;
  equalCity: boolean;
}

interface Messages {
  room: string;
  idAccount: string;
  text: string;
  link: string;
  type: string;
  avatar: string;
  username: string;
  nickname: string;
  created_at: string;
  id: string;
}

const users: RoomUser[] = [];
const usersOnline: UsersOline[] = [];
const messages: Messages[] = [];
const rooms: Rooms[] = [];


io.on("connection", (socket) => {
    console.log(`User Connection ${socket.id}`)
    console.log("Connection successfully established!");



    socket.emit("rooms", rooms);

    console.log("rooms")
    console.log(rooms)
    console.log(rooms.length)
  
    socket.on("message", (data) => {
      console.log(data);
      const message: Messages = {
        room: data.room,
        idAccount: data.idAccount,
        text: data.text,
        link: data.link,
        type: data.type,
        avatar: data.avatar,
        username: data.username,
        nickname: data.nickname,
        created_at: data.created_at,
        id: data.id
      }

      collections.messages.insertOne({
        idRoom: data.room,
        idAccount: data.idAccount,
        text: data.text,
        link: data.link,
        type: data.type,
        avatar: data.avatar,
        username: data.username,
        nickname: data.nickname,
        created_at: data.created_at,
        id: data.id
      })
      messages.push(message);

      socket.to(data.room).emit("message", message);
    });
      
 

    socket.on("disconnect", () => {
      console.log("Disconnected user!", socket.id);
    });
  });

