const acordionItemHeaders = document.querySelectorAll(".acordion-item-header");

acordionItemHeaders.forEach(acordionItemHeader => {
    acordionItemHeader.addEventListener("click", event => {
        acordionItemHeader.classList.toggle("active");
        const acordionItemBody = acordionItemHeader.nextElementSibling;
        if (acordionItemHeader.classList.contains("active")) {
            acordionItemBody.style.maxHeight = acordionItemBody.scrollHeight + "px"; 
        }
        else {
            acordionItemBody.style.maxHeight = 0;
        }
    });
});