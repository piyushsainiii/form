import  './Header.css'

const Header = ()=>{
    const nav:any = [
        {

            name:"HOME",
            pos:1
    
        },
        {

            name:"ABOUT US",
            pos:2
    
        },

        {

            name:" SERVICES",
            pos:3    
        },

        {

            name:"CONTACT",
            pos:4
    
        },
    ]

    return(

        <>
         <div className="header"> 
         
        <img src="src/assets/images/headerlogo.png" className="headerlogo"/>
        
        <ol>
       { nav.map((v:any,i:number) => {
       

            return <li key={i}>{v.name}</li>


        })
        }
        
        </ol>
        </div>
    </>
    )
}

        export default Header;