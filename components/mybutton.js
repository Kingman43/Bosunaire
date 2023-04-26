
function MyButton(props) {
    return (
        <div className="px-20 py-2">
            <button className="text-xl rounded-full px-8 py-1 bg-my-hover hover:bg-my-purple text-purple-900" onClick={props.func}> Search Again </button>
        </div>
    )
}

export default MyButton