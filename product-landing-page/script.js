function openModal(title, description, imgSrc, author, date) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = description;
    document.getElementById('modalImg').src = imgSrc;
    document.getElementById('modalAuthor').textContent = author;
    document.getElementById('modalDate').textContent = date;
    document.getElementById('productModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

window.onclick = function (event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
};
