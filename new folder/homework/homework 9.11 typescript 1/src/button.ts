document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");

function btnClick(){
    btn.addEventListener("click", ()=>{
        const userName = +prompt('input user name');
        const lastName = +prompt('input last name');
        const email = +prompt('input email');
        const tel = +prompt('input tel');
        const age = +prompt('input age');
    })
}
});

export default{
    btnClick()
}