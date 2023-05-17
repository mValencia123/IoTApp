import { useState } from "react";
import ButtonForm from "./ButtonForm";
import InputField from "./InputField";


const Form = ({setReload}) => {
    const URL = "http://localhost:8000/api/employees"
    const [data,setData] = useState({});
    const handleClickSubmit = (e) => {
        e.preventDefault();
        fetch(URL,{
            method : "POST",
            body   : JSON.stringify(data),
            headers: {
                "Content-Type": "text/plain",
            },
        }).then((response) => {
            console.log(response);
            return response.json()
        })
        .then((response) => {
            console.log(response);
            setReload(prev => !prev);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const handleChangeText = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }


    return(
        <div>
            <InputField name="name"
                        field="First Name"
                        type="text"
                        //value={data["name"]}
                        handleChangeText={handleChangeText}/>
            
            <InputField name="middlename"
                        field="Middle Name"
                        type="text"
                        //value={data["middlename"]}
                        handleChangeText={handleChangeText}/>

            <InputField name="lastname"
                        field="Last Name"
                        type="text"
                        //value={data["lastname"]}
                        handleChangeText={handleChangeText}/>
            
            <InputField name="position"
                        field="Position"
                        type="text"
                        //value={data["position"]}
                        handleChangeText={handleChangeText}/>
            
            <InputField name="company"
                        field="Company"
                        type="text"
                        //value={data["company"]}
                        handleChangeText={handleChangeText}/>

            <InputField name="street"
                        field="Street"
                        type="text"
                        //value={data["street"]}
                        handleChangeText={handleChangeText}/>
            
            <InputField name="numext"
                        field="Number Ext"
                        type="number"
                        //value={data["numExt"]}
                        handleChangeText={handleChangeText}/>
            
            <InputField name="numint"
                        field="Number Int"
                        type="number"
                        //value={data["numInt"]}
                        handleChangeText={handleChangeText}/>

            <InputField name="town"
                        field="Town"
                        type="text"
                        //value={data["town"]}
                        handleChangeText={handleChangeText}/>
            
            <InputField name="city"
                        field="City"
                        type="text"
                        //value={data["city"]}
                        handleChangeText={handleChangeText}/>
            
            <InputField name="state"
                        field="State"
                        type="text"
                        //value={data["state"]}
                        handleChangeText={handleChangeText}/>

            <InputField name="codigopostal"
                        field="Codigo Postal"
                        type="text"
                        //value={data["codigoPostal"]}
                        handleChangeText={handleChangeText}/>

            <InputField name="telephone"
                        field="Telephone"
                        type="number"
                        //value={data["telephone"]}
                        handleChangeText={handleChangeText}/>
            
            <InputField name="email"
                        field="Email"
                        type="email"
                        //value={data["email"]}
                        handleChangeText={handleChangeText}/>

            <InputField name="birthday"
                        field="Birthday"
                        type="date"
                        //value={data["birthday"]}
                        handleChangeText={handleChangeText}/>
            
            <InputField name="age"
                        field="Age"
                        type="number"
                        //value=""
                        handleChangeText={handleChangeText}/>
            
            <ButtonForm handleClickSubmit={handleClickSubmit}/>
        </div>
    )
}

export default Form;