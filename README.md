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

> The Project Planning section should be completed for your project pitch with instructors.
>
> To ensure correct Markdown, I recommend cloning this wiki and copy/pasting the raw template code.

<br>

### Description

**Sephoney** is a makeup and beauty eccomerce website where you can buy all your beauty needs. Who needs Sephora, when you have Sephoney? Sephoney features a clean design with, user friendly routing capabilty from page to page.

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
- Navigation Bar
- All products page
- Product desription page 
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
| React Router | I will utilize React router to assist with functionla routing from page to page|
| React Icons | I will be using react icons to speak to hthe user with my display rather than text|
| React Spring | _Lorem ipsum dolor sit amet, consectetur._ |

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
      |__ Hero.jsx
      |__ Products.jsx
      |__ Cart.jsx
      |__ CTA.jsx
      |__ Footer.jsx
```

<br>

#### MVP Breakdown

> Use this section to go into further depth regarding every component, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    |   class    |   y   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Header    | functional |   n   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |
|  Navigation  | functional |   n   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |
|     Home     | functional |   n   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|  Products     | functional |   n   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
| Product detail    | functional |   n   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|   Cart    |   class    |   y   |   n   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
| Search? | functional |   n   |   y   |   y   | _Lorem ipsum dolor sit amet, consectetur._ |
|    Footer    | functional |   n   |   n   |   n   | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

#### MVP Timeframes

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Home Page |    H    |     2 hrs      |     TBD     |     TBD    |
| All products page (render API data)      |    H     |     3 hrs      |     TBD     |     TBD     |
| Product Details page      |    H     |     3 hrs      |     TBD     |     TBD     |
| Header      |    H     |     2 hrs      |     TBD     |     TBD     |
| Navigation Bar     |    H     |     2 hrs      |     TBD     |     TBD     |
| Footer      |    H     |     1 hrs      |     TBD     |     TBD     |
| Cart page     |    H     |     3 hrs      |     TBD     |     TBD     |
| Add to cart funtionality     |    H     |     4 hrs      |     TBD     |     TBD     |
| Cart Totals      |    H     |     4 hrs      |     TBD     |     TBD     |
| Adding CSS      |    H     |     3 hrs      |     TBD     |     TBD     |
| Advanced CSS     |    H     |     4 hrs      |     TBD     |     TBD     |
| TOTAL            |          |     6 hrs      |     TBD     |     TBD     |

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

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
