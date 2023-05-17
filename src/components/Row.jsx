
const Row = ({data,handleClickDelete,handleClickEdit,handleClickPdf,handleClickTxt}) => {
    return(
        <tr>
            <td>{data["name"]}</td>
            <td>{data["email"]}</td>
            {/* <td><button onClick={handleClickEdit} name={data["email"]}>Editar</button></td> */}
            <td><button onClick={handleClickDelete} name={data["email"]}>Eliminar</button></td>
            <td><button onClick={handleClickTxt} name={data["email"]}>TXT</button></td>
            <td><button onClick={handleClickPdf} name={data["email"]}>PDF</button></td>
        </tr>
    )
}

export default Row;