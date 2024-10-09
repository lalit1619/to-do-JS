const form=document.querySelector(".todoForm");
const todoValue=document.querySelector(".todoForm input[type='text']")
const ul=document.querySelector(".todo-list");
form.addEventListener("submit",(e)=>
{
    e.preventDefault(); //by default the page is refreshed and this is used to prevent that
    // console.log(todoValue.value);
    
    const newTodoText=todoValue.value;
    const newli=document.createElement("li")
    const newliInnerHtml=` 
                <span class="text">${newTodoText}</span>
                <div class="todo-btns">
                    <button class="todo-btn done">
                        Done
                    </button><button class="todo-btn remove ">
                        Remove
                    </button>
                </div>

            ` ;
            newli.innerHTML=newliInnerHtml;
            ul.append(newli);
            todoValue.value=''
            


})

ul.addEventListener("click",(e)=>
{
    //check if user clicked on done button
    if(e.target.classList.contains("done"))
    {
        const li = e.target.closest("li");
                const liSpan = li.querySelector(".text");
                liSpan.style.textDecoration = "line-through";
    }
    if(e.target.classList.contains("remove"))
    {   
        const lielement=e.target.closest("li");
        lielement.remove();
    }
}
)