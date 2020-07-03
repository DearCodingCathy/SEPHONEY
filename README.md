# SEPHONEY <!-- omit in toc -->

- [Project Planning](#Project-Planning)
  - [Description](#Description)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP API](#MVP-API)
    - [MVP Libraries & Dependencies](#MVP-Libraries--Dependencies)
    - [MVP Components](#MVP-Components)
    - [MVP Breakdown](#MVP-Breakdown)
    - [MVP Timeframes](#MVP-Timeframes)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning

https://nervous-hypatia-2e65ec.netlify.app/

### Description

**Sephoney** is a makeup and beauty eccomerce website where you can buy all your beauty needs. Who needs Sephora, when you have Sephoney? Sephoney features a clean design with, user friendly routing capability from page to page.

<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

- Desktop Webpage Landing

https://xd.adobe.com/view/a5a34f61-9465-41a3-80a1-e48f72c8f6c9-f0f0/

-Desktop Web Products page

https://xd.adobe.com/view/098fb32b-a00b-4730-a64d-911e0f9e0fa4-5cdc/

- Tablet view of Products page

https://xd.adobe.com/view/c95a7ca8-f7e5-4e4c-8da7-71d63af804b3-9c09/

- Mobile view of Products page

https://xd.adobe.com/view/9871449c-edb3-4b3b-8d7e-ac3c0788c4ec-cd22/


<br>

### MVP

> The Minimum Viable Product should be a well-planned and easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Sephoney** MVP consist of multiple pages and components, that will come together to make a fully functional ecommerce site. For MVP, I will start with creating routs from page to page, there after I will render the data from the API, and esure all components are functional from there!_

<br>

#### MVP Goals

- Functional routing from page to page
- Home page with multiple components
- Responsive navigation Bar
- All products page
- Product detail page 
- My cart page
- Add to cart functionality for all products.
- Correct cart totals

<br>

#### MVP API

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Makeup API |      yes      | _https://makeup-api.herokuapp.com/_ | https://i.imgur.com/eRz6vP5.png |

Sample Query Results:

```json
{
"id": 114,
"brand": "covergirl",
"name": "CoverGirl Outlast Longwear Lipstick",
"price": "10.99",
"price_sign": null,
"currency": null,
"image_link": "https://d3t32hsnjxo7q6.cloudfront.net/i/2d46e82f21b11f658a4378abcbd1c31b_ra,w158,h184_pa,w158,h184.png",
"product_link": "https://well.ca/products/covergirl-outlast-longwear-lipstick_105803.html",
"website_link": "https://well.ca",
"description": "With CoverGirl Outlast Longwear Lipstick you get both moisture and colour! No need to choose!This long lasting lipstick doesn’t flake or \ncrumble because it’s super-powered with moisture. It'll stays super fresh and \nsuper flexible all day, leaving you with a light weight but very pigmented lip look.",
"rating": null,
"category": "lipstick",
"product_type": "lipstick",
"tag_list": [ ],
"created_at": "2016-10-01T18:25:52.547Z",
"updated_at": "2017-12-27T01:50:37.669Z",
"product_api_url": "http://makeup-api.herokuapp.com/api/v1/products/114.json",
"api_featured_image": "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/114/original/open-uri20171223-4-fqgm96?1514062257",
"product_colors": [
{
"hex_value": "#C5777E",
"colour_name": "Phantom Pink"
},
{
"hex_value": "#A1211C",
"colour_name": "Red Siren"
},
{
"hex_value": "#51122B",
"colour_name": "Plum Fury"
}
]
},
```

<br>

#### MVP Libraries & Dependencies

> Use this section to list the key supporting libraries and their role in the project.

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | To assist with creating React app|
| React Router | I will utilize React router to assist with functional routing from page to page|
| React Bootstrap | For easy styling |

<br>

#### MVP Components

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ images
      |__ wireframes
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Nav.jsx
      |__ Products.jsx
      |__ Cart.jsx
      |__ ProductDetail.jsx
      |__ ProductType.jsx
      |__ Register.jsx
      |__ Footer.jsx
```

<br>

#### MVP Breakdown

> Use this section to go into further depth regarding every component, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | Class based parent component used to pass API information down to all children components |
|    Header    | functional |   n   |   n   |   n   | Header holds three main links |
|  Navigation  | functional |   n   |   n   |   n   | Responsive navigation bar that hold 4 links |
|     Home     | functional |   n   |   n   |   n   | This page holds a link to the main shopping page |
|  Products     | functional |   n   |   n   |   n   | The products page is the bulk of the application, as it holds all of the products sold on Sephoney. |
| Product detail    | functional |   n   |   n   |   n   | Click the product image to get a full detailed view of the product, and all its information. |
|   Cart    |   functional    |   y   |   n   |   n   | Fully functional Cart that calculates subtotal, tax, and total.|
|    Footer    | functional |   n   |   n   |   n   | Functional footer component|

<br>

#### MVP Timeframes

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Home Page |    H    |     2 hrs      |     1 hr   |     1 hr   |
| All products page (render API data)      |    H     |     3 hrs      |     4 hrs     |     4hrs     |
| Product Details page      |    H     |     3 hrs      |     3.5 hrs     |     3.5 hrs     |
| Header      |    H     |     2 hrs      |     1 hrs     |     1 hrs     |
| Navigation Bar     |    H     |     2 hrs      |     4 hrs     |     4 hrs     |
| Footer      |    H     |     1 hrs      |     1 hr     |     1 hr     |
| Cart page     |    H     |     3 hrs      |     2 hrs     |     2 hrs     |
| Add to cart funtionality     |    H     |     4 hrs      |     3 hrs     |     3hrs     |
| Cart Totals      |    H     |     4 hrs      |     2 hrs     |     2 hrs     |
| Adding CSS      |    H     |     3 hrs      |     2 hrs     |     2 hrs     |
| Learning & Implementing React Bootstrap    |    H     |     4 hrs      |     4 hrs     |     4 hrs     |
| TOTAL            |          |     31 hrs      |     TBD     |     TBD     |

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!


- Products displayed by user search
- Shop products by brand
- Shop by type
- Filters on all products page
- Adding reviews section for product details page 
- Adding star ratings to review page
- Display star ratings on all products page as well

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

### Code Showcase

I struggled quite a bit in the beginning because my API was not stable. I am proud of the code below, because I was able to not only use JSON data when the API failed, but I also learned a bit about local storage, to make my overall app faster. This helped cut down a 30 load time to a 5 second load time!

```
async componentDidMount() {

    try {
      if (localStorage.getItem('data')) {
        const products = localStorage.getItem('data')
        this.setState({
          products: JSON.parse(products),

        })
      } else {
        const response = await axios(`http://makeup-api.herokuapp.com/api/v1/products.json`)
        console.log(response.data)

        const productQ = response.data.map((product) => {
          product.quantity = 1
          return (product)
        })

        this.setState({
          products: productQ,
        })
        localStorage.setItem('data', JSON.stringify(productQ))
      }

    } catch (error) {
      const productQ = Response.map((product) => {
        product.quantity = 1
        return (product)
      })

      this.setState({
        products: productQ,
      })
    }
  }
```

### Code Issues & Resolutions

My API did not have quantity associated with it at all. This caused issues because I was initially setting quantity in state, which unfortunately applied changes to all the products. To resolve this, I learned how to augment my api results after they has been received. This was a game changer for me! 
