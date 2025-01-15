function loadExcel(excelPath) {
    const downloadLink = document.getElementById('downloadExcel');
    downloadLink.href = excelPath;
    
    fetch(excelPath)
        .then(response => response.arrayBuffer())
        .then(data => {
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const htmlTable = XLSX.utils.sheet_to_html(firstSheet, { id: 'excelTable', class: 'table table-bordered' });
            document.getElementById('excelViewer').innerHTML = htmlTable;
        })
        .catch(error => {
            console.error('Error loading Excel file:', error);
            document.getElementById('excelViewer').innerHTML = '<div class="alert alert-danger">Error loading Excel file</div>';
        });
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
});