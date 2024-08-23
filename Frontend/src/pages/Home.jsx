import React from 'react'
import Heroo from '../components/Heroo';
import Biography from '../components/Biography';
import Departments from '../components/Departments';
import MessageForm from '../components/MessageForm';

const Home = () => {
    return (
        <>
        <Heroo title={"Welcome to Medicare Medical Institute | Your Trusted Healthcare provider"} 
        imageUrl={"/heroo.png"}/>
        <Biography imageUrl={"/about.png"}/>
        <Departments/>
        <MessageForm/>
        </>
    )
}

export default Home;