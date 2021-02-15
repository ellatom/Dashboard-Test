const setOptions = () => {
    let options = {
        sorting: true,
        search: true,
        exportButton: true,
        filtering: true,
        grouping: true,
        fixedColumns: {
            left: 2,
        },
        headerStyle: {
            backgroundColor: 'rgb(90 87 87)',
            color: '#FFF'
        },
        rowStyle: {
            color: '#FFF',
            backgroundColor: '#000000',
        },
        cellStyle: 
        rowData => {
            if (rowData === 'active' || rowData === 'BUY') {
                return { color: "green" };
            }
            else if (rowData === 'SELL') {
                return { color: "red" };
            }
        },
        searchFieldStyle: {
            color: '#01579b'
        }
    };
    return options;
}
export default function utils() {
    return {
        setOptions
    }
}