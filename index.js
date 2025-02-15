var counterContainer = document.querySelector(".website-counter");
if (counterContainer) {
    var visitCount = localStorage.getItem("page_view") || 0;
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
    counterContainer.innerHTML = visitCount;
}
