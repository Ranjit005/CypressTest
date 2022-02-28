class DataTableUtils {

  getValue(dataTable, headerName) {
    var propValue;
    var target;
    dataTable.hashes().forEach(elem =>{
      for(var propName in elem) {
        propValue = elem[propName];
        if(propName===headerName){
          target = propValue;
          break;
        }
      }
    });
    return target;
  }
}
export default DataTableUtils;