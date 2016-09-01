$(document).ready(function() {

    function exportTableToCSV($table, filename) {
        var $rows = $table.find('tr'),
                tmpColDelim = String.fromCharCode(11), // vertical tab character
                tmpRowDelim = String.fromCharCode(0), // null character

                // actual delimiter characters for CSV format
                colDelim = '","',
                rowDelim = '"\r\n"',
                // Grab text from table into CSV formatted string
                csv = '"' + $rows.map(function(i, row) {
            var $row = $(row),
                    $cols = $row.find('td');
            var $header = $(row),
                    $headerCols = $row.find('th');

            var $r = $cols.map(function(j, col) {
                var $col = $(col),
                        text = $col.text();

                return text.replace('"', '""'); // escape double quotes

            }).get().join(tmpColDelim);
            
        var $h = $headerCols.map(function(j, headercol) {
                var $headercol = $(headercol),
                        text = $headercol.text();

                return text.replace('"', '""'); // escape double quotes

            }).get().join(tmpColDelim);
        
        return $h + $r;

        }).get().join(tmpRowDelim)
                .split(tmpRowDelim).join(rowDelim)
                .split(tmpColDelim).join(colDelim) + '"',
                // Data URI
        csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

        $(this)
                .attr({
            'download': filename,
            'href': csvData,
            'target': '_blank'
        });
    }

    // This must be a hyperlink
    $(".export").on('click', function(event) {
        // CSV
        exportTableToCSV.apply(this, [$('#posting'), 'export.csv']);
    });
});