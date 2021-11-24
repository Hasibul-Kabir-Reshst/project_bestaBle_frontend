import { useState } from "react";


const SelectCategory = ({ categories, handleFilters }) => {

    const getSelectedValue = () => {
        const value = "";
        return value;
    };

    const [value, setValue] = useState(getSelectedValue);

    const handleChange = (e) => {
        setValue(e.target.value);
        handleFilters(value);
    };


    return (

        <div>
            <select name="category" className="form-control caret" onChange={handleChange}>
                <option value="">---Choose Category---</option>
                {categories && categories.map(item => (
                    <option value={item._id} key={item._id}>{item.name}</option>
                ))}
            </select>
        </div>
    )

}

export default SelectCategory;