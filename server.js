const express = require('express')
const app = express()

 //setting view engine to ejs
app.set('view engine', "ejs")  

const insertData= [
    { 
        "firstName": "John",
        "lastName": "Doe",
        "salary": "25000",
        "department": "HR",
        "lastCompany": "X",
        "lastSalary": "10000",
        "overallExp": "2",
        "contactInfo": "1234567890",
        "yearGrad": "2016",
        "gradStream": "CSE"
    },
    {
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
    },
    {
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "firstName": "Jame",
        "lastName": "roh",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
    },
    {
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
    },
    {
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
    },
    {
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
    },
    {
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
    }
]
const data = [
    {
        question: "Create a database, give it name like 'Human Resource'",
        answer: "use Human_Resource"
    },

    {
        question: "Create a colleciton, give it name like 'employee' ",
        answer: `There is two way to create collection : 1. db.createCollection('employee') 2. db.employee.insertMany(${JSON.stringify(insertData)})`,
    },

    {
        question: "Insert the data from the following link: 'https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1640781204638-employee.json'",
        answer: `db.employee.insertMany(${JSON.stringify(insertData)})`
    },

    {
        question: "Query the collection 'employee' and list all the documents",
        answer: "db.employee.find()"
    },
    {
        question:"Query the collection 'employee' and list the employee who having salary more than 30000",
        answer:"db.employee.find({salary: {$gt: '30000'}})"
    },
    {
        question:"Query the collection 'employee' and list the employee who having experience more than 2 years",
        answer:"db.employee.find({overallExp: {$gt: '2'}})"
    },
    {
        question:"Query the collection 'employee' and list the employee who are graduated after 2015 and having experience more than 1 year",
        answer:"db.employee.find({yearGrad: {$gt: '2015'}, overallExp: {$gt: '1'}})"
    },
    {
        question:"Query the collction 'employee' and update the salary of the employee whose salary is greater than 70000 to 65000",
        answer:"db.employee.updateMany({salary: {$gt: '70000'},{$set: {salary:'65000'}}})"
    },
    {
        question:"Delete all the documents from 'employee' where last company is 'Y'",
        answer:"db.deleteMany({lastCompany: 'Y'})"
    }
]
const user = {
    name: "Akash",
    email: "jainaj"
}

//route for index page
app.get('/', (req,res)=>{
    res.render('index', {data})
})

app.listen(4000,()=>{
    console.log("server is running")
})