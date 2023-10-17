
function myFunction() {
    var copyText = document.querySelector('[name="sumresult"]');
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges(); // Clear current selection
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges(); // Clear after copy
    // alert("Copied the text: " + copyText.textContent);
}