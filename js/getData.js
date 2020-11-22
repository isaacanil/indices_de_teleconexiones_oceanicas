function updateTable(){
    //var a = $('#DataTables_Table_0').DataTable();
    // $('datatable_div').hidden = false;
    // $('dt_template').hidden=false;
    console.log('update' + Date.now().toString());

    var e = document.getElementById('indice');

    // console.log(e.selectedIndex);

    if(!!e.selectedIndex){
        indice = e.options[e.selectedIndex].value;

        // console.log(indice);
        // var x = document.getElementById("dt_view").rows.length;
        // console.log(x);
        // if (x>0){
        //     var table = $('#dt_view').DataTable();
        //     //table.clear().draw();
        //     table.rows().remove().draw();
        // }
        
        $('#dt_view').DataTable( {
            data: arrTable[0,indice],
            //retrieve: true,
            destroy: true,
            columns: [
                { title: "Año" },
                { title: "Enero" },
                { title: "Febreo" },
                { title: "Marzo" },
                { title: "Abril" },
                { title: "Mayo" },
                { title: "Junio" },
                { title: "Julio" },
                { title: "Agosto" },
                { title: "Septiembre" },
                { title: "Octubre" },
                { title: "Noviembre" },
                { title: "Diciembre" }
            ],
            columnDefs: [ {
                targets: [ 1 ],
                orderData: [ 0, 1 ]
            }  ]
        } );
    }
       

    // $('#dt_template').DataTable( {
    //     data: dataSet
    // } );

    // $('#dt_template tbody').on( 'click', 'tr', function () {
    //     console.log( a.row( this ).data() );
    // } );


    // console.log(window.location.pathname);
    // console.log(window.location.href);
};
