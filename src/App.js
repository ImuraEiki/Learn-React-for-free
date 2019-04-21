import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"

function App() {
    //mapが何かは分からんが、とりあえずこういう風に書けば別ファイルのデータを取り出せるらしい。すげー
    const jokeComponents = jokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine} />)
    
    
    return (
        <div>
            {jokeComponents}            
        </div>
    )
}

export default App