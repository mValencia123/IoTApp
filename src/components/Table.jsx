import Row from "./Row";

const Table = ({data,handleClickDelete,handleClickEdit,handleClickPdf,handleClickTxt}) => {
    data = data?.data;

    return(
        <table className="table-style">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th colSpan={3}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.map((r,index) => <Row data={r} key={index} 
                    handleClickDelete={handleClickDelete} 
                    handleClickEdit={handleClickEdit}
                    handleClickPdf={handleClickPdf}
                    handleClickTxt={handleClickTxt}/>)
                }
            </tbody>
        </table>
    )
}

export default Table;