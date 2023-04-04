// Add a click event listener to all the anchor tags in the tree
const anchors = document.querySelectorAll('.tree span');
for (let i = 0; i < anchors.length; i++) {
  anchors[i].addEventListener('click', function (e) {
    e.preventDefault();

    // Toggle the class 'active' on the clicked anchor tag
    this.classList.toggle('active');

    // Toggle the display property of the nested UL element
    const ul = this.nextElementSibling;
    if (ul) {
      ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
    }
  });
}
