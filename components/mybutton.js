
function MyButton(props) {

    function myFunc() {

        if (props.func !== undefined)
            props.func();
    }

    return (
        <div className="px-20 p-1">
            <button className="text-xl rounded-full px-4 bg-my-hover hover:bg-my-purple text-purple-900" onClick={myFunc}> {props.text} </button>
        </div>
    )
}

export default MyButton