window.onload = function() {
    document.getElementById("add").onclick = function() {
        //var task_info = document.getElementsByTagName("input");
        var task_info = document.getElementById("form_task").getElementsByTagName("input");
        var nTask = task_info[0].value;
        task_info[0].value = ""; // Clear the input
        task_info[0].focus(); //Set the cursor

        var nTime = task_info[1].value;
        task_info[1].value = ""; //Clear the input

        //Edition Buttons
        var tools = document.createElement("span");
        var img_remove = document.createElement("img");
        img_remove.src = "images/remove.png";
        img_remove.onclick = function() {
            remove(this);
        }
        var img_status = document.createElement("img");
        img_status.src = "images/incomplete.png";
        img_status.dataset.flag = "0";
        img_status.onclick = function() {
            update_status(this);
        }


        //
        tools.appendChild(img_remove);
        tools.appendChild(img_status);

        /*Task List */
        var TaskList = document.getElementById("task-list");
        var nLi = document.createElement("li");
        nLi.className = "list-product";
        var nTxt = nTask + " <span class='lead'>" + nTime + "</span>";
        nLi.innerHTML = nTxt;

        //Add tools
        nLi.appendChild(tools);
        TaskList.appendChild(nLi);

        return false;

    }


}

//Functions
function remove(obj) {
    obj.parentNode.parentNode.remove();
}

function update_status(obj) {
    if (obj.dataset.flag == 0) {
        obj.dataset.flag = 1;
        obj.src = "images/complete.png";
        obj.parentNode.parentNode.style.backgroundColor = newFunction();
    } else {
        obj.dataset.flag = 0;
        obj.src = "images/incomplete.png";
    }

    function newFunction() {
        return "#333333";
    }
}