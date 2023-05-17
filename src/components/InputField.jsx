

const InputField = ({field,name,type,handleChangeText}) => {
    return(
       <div className="form-group">
            <h5 className="block color-black">{field}</h5>
            <input type={type} placeholder={field} className="block" name={name} onChange={handleChangeText}/>
       </div>
    );
}

export default InputField;