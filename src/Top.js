import react from 'react'

const Top = ()=>{
    function handlepesan(){
        alert("Halaman Top")
    }
    return(
        <a href='/' onClick={handlepesan}>halaman Top</a>
    )
}

export default Top;