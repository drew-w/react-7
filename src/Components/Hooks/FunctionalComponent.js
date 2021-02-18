import React, {useState, useEffect} from 'react'

const FunctionalComponent = (props) => {
    const [word, setWord] = useState('berutorudo')
    useEffect(() => {
        console.log('mounted!')
    }, [])
    return (
        <div>{word}</div>
    )
}

export default FunctionalComponent