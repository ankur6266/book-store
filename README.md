# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## How to use project

### 1. Clone project 
```bash
https://github.com/amitgirwal/ebook.git
```

### 2. For installation of project locally
```bash
npm install
```

## How to run project

### 1. Backend server run
```bash
json-server --watch db.json --port 3001
```

### 2. Run project
```bash
npm start
```


<hr/>


### Working on the
```bash
- Notification when clicking on "Add to Cart"
- Total when increase and decrease quantity
```

## Done Screenshots

Home Page 
![home page](https://user-images.githubusercontent.com/87892725/140051935-4303e021-08fb-4c0e-8bbb-79b662730d9b.PNG)

Library Page for showing all book/products data/list
![library](https://user-images.githubusercontent.com/87892725/140051920-7a0f56e6-c45a-4e7e-a3bb-00af176f4d73.PNG)

View Product
![view product](https://user-images.githubusercontent.com/87892725/140619585-26ef57f5-bd45-4fc6-be19-9cddba73ea6f.PNG)

Showing All Cart Items
![added qty](https://user-images.githubusercontent.com/87892725/140653508-0087a334-9e47-4b17-9a98-503f69b696fc.PNG)






## Database
```
Database: ebook
Table: user
id fname lname email password created_date updated_date

Table: cart
id name price quantity img created_date

Table: product
id name description price img created_date updated_date
```
