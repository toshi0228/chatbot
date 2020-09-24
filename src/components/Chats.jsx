import React, { useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Chat from "./Chat";

const useStyles = makeStyles(() =>
  createStyles({
    chats: {
      height: 400,
      padding: 0,
      overflow: "auto",
    },
  })
);

const Chats = ({ chats }) => {
  const classes = useStyles();

  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  });

  return (
    <List className={classes.chats} id={"scroll-area"}>
      {chats.map((chat, index) => {
        return (
          <Chat text={chat.text} type={chat.type} key={index.toString()} />
        );
      })}
    </List>
  );
};

export default Chats;
