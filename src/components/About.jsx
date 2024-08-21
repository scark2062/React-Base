import React, { useContext, useEffect } from 'react'
import blogContext from '../context/blogs/BlogContext'

const About = () => {
    const context = useContext(blogContext)
    const { state, updateValue } = context
    // console.log("this is the value of a:", a);
    useEffect(() => {
        updateValue()
    }, [])

    return (
        <div>
            <h4>hello this is {state.name} and i am {state.age} years old</h4>
        </div>
    )
}

export default About