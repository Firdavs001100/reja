console.log("Frontend started working!");


function itemTemplate(plan) {
    return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
        <span class="item-text">${plan.reja}</span>
        <div>
        <button data-id="${plan._id}" class="edit-me btn btn-secondary btn-sm mr-1">Ozgartirish</button>
        <button data-id="${plan._id}" class="delete-me btn btn-danger btn-sm">Ochirish</button>
        </div>
    </li>`
}


let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", (e) => {
  e.preventDefault();

  axios.post("/create-item", { reja: createField.value })
  .then((response) => {
    console.log("Issue: ", response.data)
    document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data))
    createField.value = "";
    createField.focus();
  })
  .catch((err) => {
    console.log("Please try again!");
  });
});

document.addEventListener("click", (e) => {
    console.log(e)

    // delate operation
    if (e.target.classList.contains("delete-me")) {
        let getId = e.target.getAttribute("data-id");
        if (confirm("Are you sure to delate this plan/goal?")) {
            axios.post("/delete-item", { id: getId})
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }

    // edit operation
    if (e.target.classList.contains("edit-me")) {
        if (confirm("Are you trying to edit this plan/goal?")) {
            
        }
    }
})
