import { useEffect, useState } from "react";
import BlockContainer from "./components/BlockContainer";
import ButtonForm from "./components/ButtonForm";
import Container from "./components/Container";
import Form from "./components/Form";
import InputField from "./components/InputField";
import Table from "./components/Table";

const App = () => {
  const [reload,setReload] = useState(true);
  const [data,setData] = useState(undefined);
  const [user,setUser] = useState({
    name  : "",
    middleName : "",
    lastName : "",
    position : "",
    company : "",
    street : "",
    numExt: "",
    numInt : "",
    town : "",
    city : "",
    state : "",
    codigoPostal : "",
    telephone : "",
    email : "",
    birthday : "",
  });

  const URL = "http://localhost:8000/api/employees";

  useEffect(() => {
    fetch(URL).then((response) => {
        console.log(response);
        return response.json()
    })
    .then((response) => {
        console.log(response);
        setData(response);
    })
    .catch((error) => {
        console.log(error);
    });
  },[reload,]);

  const handleClickEdit = (e) => {
    e.preventDefault();
    console.log(data);
    const info_employee = data?.data.find((info) => info["email"] === e.target.name);
    console.log(info_employee);
    setUser(info_employee);
    // fetch(URL,{
    //   method: "PUT", 
    //   headers: {
    //     "Content-Type": "text/plain",
    //   },
    //   body: JSON.stringify({
    //     "email" : e.target.name
    //   }),
    // }).then((response) => {
    //   return response.json()
    // })
    // .then((response) => {
    //     setData(response);
    // })
    // .catch((error) => {
    //     console.log(error);
    // });
  }

  const handleClickDelete = (e) => {
    e.preventDefault();
    fetch(URL,{
      method: "DELETE", 
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({
        "email" : e.target.name
      }),
    }).then((response) => {
      return response.json()
    })
    .then((response) => {
      setReload(true);
    })
    .catch((error) => {
        console.log(error);
    });
  }

  const handleClickTxt = (e) => {
    fetch("http://localhost:8000/api/txt/employees",{
      method: "POST", 
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({
        "email" : e.target.name
      }),
    }).then((response) => {
      return response.json()
    })
    .then((response) => {
    })
    .catch((error) => {
        console.log(error);
    });
  }

  const handleClickPdf = (e) => {
    fetch("http://localhost:8000/api/pdf/employees",{
      method: "POST", 
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({
        "email" : e.target.name
      }),
    }).then((response) => {
      return response.json()
    })
    .then((response) => {
      //setReload(true);
    })
    .catch((error) => {
        console.log(error);
    });
  }

  return (
    <Container>
      <BlockContainer>
        <Table  data={data} 
                handleClickDelete={handleClickDelete} 
                handleClickEdit={handleClickEdit}
                handleClickPdf={handleClickPdf}
                handleClickTxt={handleClickTxt}/>
      </BlockContainer>
      <BlockContainer>
        <Form user={user}
              setReload={setReload}/>
      </BlockContainer>
    </Container>
  );
}

export default App;
