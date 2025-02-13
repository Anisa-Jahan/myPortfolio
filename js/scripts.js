// responsive menu btn
document.getElementById("menu-btn").addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
});
// download cv btn
function downloadCV() {
    // PDF file URL and name
    const pdfUrl = 'Anisa Jahan.pdf';
    const pdfName = 'Anisa Jahan.pdf';

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = pdfName;
    a.style.display = 'none';

    // Append to body, trigger download, and remove it
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
