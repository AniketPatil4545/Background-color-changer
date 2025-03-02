const { useState } = require("react");

function App (){
    const[color, setColor] = useState("olive")

    return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}
      >

        <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2"
        >
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl"> 
            <button onClick={()=> setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "red", color: "white", fontWeight:"bold"}}
            >Red</button>

<button onClick={()=> setColor("green")}
 className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "green" ,color: "white", fontWeight:"bold"}}
            >green</button>

<button onClick={()=> setColor("blue")}
 className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "blue",color: "white", fontWeight:"bold"}}
            >blue</button>

<button onClick={()=> setColor("pink")}
 className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "pink",color: "white", fontWeight:"bold"}}
            >pink</button>

<button onClick={()=> setColor("grey")}
 className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "grey",color: "white", fontWeight:"bold"}}
            >grey</button>

<button onClick={()=> setColor("yellow")}
 className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "yellow",color: "white", fontWeight:"bold"}}
            >yellow</button>

<button onClick={()=> setColor("purple")}
 className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{backgroundColor: "purple",color: "white", fontWeight:"bold"}}
            >purple</button>



          </div>
        </div>


      </div>
    )
}
export default App;