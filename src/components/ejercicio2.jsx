export const Lista = ({productos}) => {

    console.log(productos);
    
    return (
        <ol>
            {productos.map((item,i)=>(
                <li key={i}>
                    {item}
                </li>))}
        </ol>

    )
}

