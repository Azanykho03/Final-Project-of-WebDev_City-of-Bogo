$(document).ready(function() {
    $('.table').DataTable({
        dom: "<'row mb-3'<'col-12'f>>" +
             "<'row'<'col-12'tr>>" +
             "<'row mt-3'<'col-sm-12 col-md-5'l><'col-sm-12 col-md-7'p>>",
        language: {
            search: "Search:",
            lengthMenu: "Show _MENU_ entries",
            info: "Showing _START_ to _END_ of _TOTAL_ entries",
            paginate: {
                first: "First",
                last: "Last",
                next: "Next",
                previous: "Previous"
            }
        },
        pageLength: 10,
        lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]]
    });
});

function loadPDF(pdfPath) {
    const pdfViewer = document.getElementById('pdfViewer');
    const downloadLink = document.getElementById('downloadPDF');
  
    pdfViewer.src = pdfPath; 
    downloadLink.href = pdfPath; 
    
  }

  
