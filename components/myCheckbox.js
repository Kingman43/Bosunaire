
const MyCheckbox = ({ label, value, onChange }) => {
    return (

        <label>
            <input className=" h-3 w-3 accent-purple-400"
                   type="checkbox"
                   checked={value}
                   onChange={onChange}
            />
            {label}
        </label>

    );
};

export default MyCheckbox