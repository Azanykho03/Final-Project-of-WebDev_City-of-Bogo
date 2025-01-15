$(document).ready(function () {
   
    // Button click event to open modal and load PDF
    $('#openModalButton').on('click', function () {
      const pdfPath = '/mnt/data/Unified-Business-Permit-Application-Form.pdf';
      loadPDF(pdfPath);
    });
  });
  
  // Function to dynamically load PDF
  function loadPDF(pdfPath) {
    const pdfViewer = document.getElementById('pdfViewer');
    const downloadLink = document.getElementById('downloadPDF');
  
    pdfViewer.src = pdfPath; // Set the iframe source
    downloadLink.href = pdfPath; // Set the download link
  }