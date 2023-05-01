
function Myselect({value, options, onChange}) {


    return (
        <div className="py-2 text-purple-900">
            <select value={value} onChange={onChange}>
                {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Myselect