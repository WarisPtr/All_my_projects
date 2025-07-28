const TodoItem =({items,del,check,active})=>{
    let filterItems = [];

    if(active === 'all'){
        filterItems = items
    }else if(active === 'done'){
        filterItems = items.filter(item => item.checked === true)
    }else if(active === 'working'){
        filterItems = items.filter(item => item.checked === false)
    }

    return(
        <div>
            {filterItems.map((item,index)=>(
                <div className="item-list" key={index}>
                    <input type="checkbox" onChange={()=>check(index)}/>
                    <label>{item.checked ? <s>{item.text}</s> : item.text}</label>
                    <button type="button" className="del-item button-template-single" onClick={()=>del(item)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default TodoItem