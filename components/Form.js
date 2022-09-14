

function Form(props){

    function textValue(e){
        props.onTextValue(e.target.value);
    }

    return(
        <>
        <div className="row p-4">
        <div className="col">
            <div className="form-group">
                <input type="text" className="form-control" onChange={textValue} placeholder="Search User"/>
            </div>
        </div>
        </div>
         
        </>
    )
}

export default Form;