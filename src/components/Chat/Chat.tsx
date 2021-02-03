import React, {useEffect, useRef, useState} from "react"
import {Box, Grid} from "@material-ui/core";
import classes from "./Chat.module.scss"
import CustomInput from "../common/Input/CustomInput";
import CustomButton from "../common/Button/CustomButton";
import sendIcon from "../../assets/images/send.svg"
import Message from "./Message/Message";

const Chat = () => {

    const [baseTexts, setBaseText] = useState([
        {
            id: "ac4db4d3-4d45-4-8066-3df76d8830e6",
            body: "Hello, sir!",
            addedAt: "1612282271724",
            senderId: 9763,
            senderName: "Manager",
            recipientId: 9342,
        },
        {
            id: "627ecb19-12f2-45-a6ff-3755f63478a4",
            body: "Who are you?",
            addedAt: "1612362271724",
            senderId: 9342,
            senderName: "You",
            recipientId: 9763,
        },
        {
            id: "d5226521-4d57-4c-9bbb-0c63b9e16732",
            body: "It's me, Tom, from the Marketing tool :)",
            addedAt: "1612360271724",
            senderId: 9763,
            senderName: "Manager",
            recipientId: 9342,
        },
        {
            id: "627ecb19-12f2-4e156ff-3755f63478a4",
            body: "From what?",
            addedAt: "1612360271724",
            senderId: 9342,
            senderName: "You",
            recipientId: 9763,
        },
        {
            id: "ac4db4d3-4d45-4e75-8066-f76d8830e6",
            body: "Can I offer you my help?",
            addedAt: "1612360271724",
            senderId: 9763,
            senderName: "Manager",
            recipientId: 9342,
        },
        {
            id: "627ecb19-12f2-4e15-a6ff-37f63478a4",
            body: "No, leave me alone, please",
            addedAt: "1612360271724",
            senderId: 9342,
            senderName: "You",
            recipientId: 9763,
        },
        {
            id: "ac4db4d3-4d45-4e75-8066-3df768830e6",
            body: "Listen here you little shitbird, I warn you! I will strike down upon you" +
                " with great vengeance and furious anger",
            addedAt: "1612362271724",
            senderId: 9763,
            senderName: "Manager",
            recipientId: 9342,
        },
        {
            id: "627ecb19-12f2-4e15-a6ff-3755f3478a4",
            body: "I'm calling the police",
            addedAt: "1612366271724",
            senderId: 9342,
            senderName: "You",
            recipientId: 9763,
        },
    ]);

    const Messages = baseTexts.map(el => (<Message key={el.id} message={el.body} senderName={el.senderName}
                                                   senderId={el.senderId} userId={9763} time={el.addedAt}/>));

    const [inputValue, setInputValue] = useState("");
    const scrollRef = useRef(document.createElement("div"));

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setBaseText((oldArray) => [...oldArray, {
            id: String(Math.random() * 1000),
            body: inputValue,
            addedAt: String(Date.now()),
            senderId: 9342,
            senderName: "You",
            recipientId: 9763,
        }]);
        setInputValue("");
    }

    useEffect(() => { //Auto scrolling to bottom on messages obj update
        scrollRef.current.scrollIntoView({behavior: "smooth"});
    }, [baseTexts])

    return <Box className={classes.mainContainer}>
        <Grid container justify={"center"} alignItems={"center"} direction={"column"} className={classes.chatContainer}>
            <Grid item className={classes.messagesBox}>
                {Messages}
                <div ref={scrollRef}/>
            </Grid>
            <Grid item className={classes.chatInputGrid}>
                <form className={classes.chatInputBox} onSubmit={handleSubmit}>
                    <CustomInput fullWidth
                                 placeholder={"Message Here"}
                                 value={inputValue}
                                 onChange={(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
                                     setInputValue(event.target.value)
                                 }/>
                    <CustomButton type={"submit"}
                                  text={<img src={sendIcon} alt={"send"}/>}
                                  width={"40px"}
                                  borderRadius={"10px"}/>
                </form>
            </Grid>
        </Grid>
    </Box>
}

export default Chat;