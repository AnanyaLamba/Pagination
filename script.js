let items = [];
  for(let i=1;i<=50;i++)
  {
    items.push(`item ${i}`);
  }

  const itemPerPage = 10;
  let currentPage = 1;

  function displayItems(){
    const itemContainer = document.getElementById("itemContainer");
    itemContainer.innerHTML="";

    const start = (currentPage-1)* itemPerPage;
    const end = start+itemPerPage;
    const itemToDisplay = items.slice(start,end);

    itemToDisplay.forEach((element) =>{
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        itemDiv.textContent = element;
        itemContainer.appendChild(itemDiv);
    });

     updatePagination();
  }

  function updatePagination()
  {
    const pageInfo = document.getElementById("pageInfo");
    const totalPages = Math.ceil(items.length/itemPerPage);

    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`

    document.getElementById("prevbtn").disabled = currentPage === 1;
    document.getElementById("nxtbtn").disabled = currentPage === totalPages;
  }


  function nextPage()
  {
    currentPage++;
    displayItems();
  }

  function prevPage(){
    currentPage--;
    displayItems();
  }

  displayItems();