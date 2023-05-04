
function MyButton({func, text, bActive}) {

    function myFunc() {
        if (func !== undefined)
            func();
    }

    if (bActive)
        return (
            <div className="p-1">
                <button className="text-l rounded-full px-4 bg-my-hover hover:bg-my-purple text-purple-900" onClick={myFunc}> {text} </button>
            </div>
        );
    else
        return (
            <div className="p-1">
                <button className="text-l rounded-full px-4 bg-gray-300 text-purple-300" > {text} </button>
            </div>
        )
}

export default MyButton