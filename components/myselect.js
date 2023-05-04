
function MySelect({value, options, onChange}) {

    return (
        <div className="p-2  text-purple-900">
            <select className="px-10 rounded-full bg-my-hover" value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default MySelect