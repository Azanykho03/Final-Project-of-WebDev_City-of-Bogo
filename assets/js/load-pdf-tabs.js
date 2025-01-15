// Function to load PDF into modal
function loadPDF(pdfPath) {
    // Set up the PDF viewer and download link
    const pdfViewer = document.getElementById('pdfViewer');
    const downloadLink = document.getElementById('downloadPDF');
    
    // Update the source paths
    if (pdfViewer) {
        pdfViewer.src = pdfPath;
    }
    
    if (downloadLink) {
        downloadLink.href = pdfPath;
    }
}

// Initialize DataTables for each quarterly table
$(document).ready(function() {
    $('.quarterly-table').each(function() {
        $(this).DataTable({
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
            lengthMenu: [[10, 25, 50, 100], [10, 25, 50, 100]],
            destroy: true // This allows reinitializing DataTable when switching tabs
        });
    });

    // Reinitialize DataTables when switching tabs
    $('a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
    });

    // Handle modal events
    $('#pdfModal').on('shown.bs.modal', function () {
        // Any initialization needed when modal is shown
    });

    $('#pdfModal').on('hidden.bs.modal', function () {
        // Clear the PDF viewer when modal is closed
        const pdfViewer = document.getElementById('pdfViewer');
        if (pdfViewer) {
            pdfViewer.src = '';
        }
    });

    // Handle PDF loading errors
    const pdfViewer = document.getElementById('pdfViewer');
    if (pdfViewer) {
        pdfViewer.onerror = function() {
            pdfViewer.style.display = 'none';
            const errorDiv = document.createElement('div');
            errorDiv.className = 'alert alert-danger';
            errorDiv.textContent = 'Error loading PDF file';
            pdfViewer.parentNode.appendChild(errorDiv);
        };
    }
});