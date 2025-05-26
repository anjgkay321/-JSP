
const Aside = ({asideLinks=[]})=>{
    return(
        <aside>
            <ul>
                {asideLinks.length>0 && asideLinks.map((item,index)=>{
                    return (
                        <li key={index}><a href={item.href}> {item.title} </a></li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Aside;