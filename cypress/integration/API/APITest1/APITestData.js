import Utils from '../CommonUtils/Utils'
const utilobj=new Utils()
module.exports=class APITestData
{
    static Email=utilobj.generateRandomEmail('@gmail.com',10)
    static Name=utilobj.generateRandomName(10)
    static Gender="Male"
    static Status="Active"

}