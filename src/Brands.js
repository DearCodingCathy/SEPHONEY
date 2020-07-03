import React from 'react'
// import { Link } from 'react-router-dom'

export default function Brands(props) {
  const uniqueBrands = new Set(props.products.map(i => {
    return i.brand
  }))
  console.log(uniqueBrands);


  return (
    <div className='d-flex flex-column align-items-center'>
      <h1>Brands we offer:</h1>
      <p>almay</p>
      <p>alva</p>
      <p>anna sui</p>
      <p>annabelle</p>
      <p>benefit</p>
      <p>boosh</p>
      <p>burt's bees</p>
      <p>butter london</p>
      <p>c'est moi</p>
      <p>cargo cosmetics</p>
      <p>china glaze</p>
      <p>clinique</p>
      <p>coastal classic creation</p>
      <p>colourpop</p>
      <p>covergirl</p>
      <p>dalish</p>
      <p>deciem</p>
      <p>dior</p>
      <p>dr. hauschka</p>
      <p>e.l.f.</p>
      <p>essie</p>
      <p>fenty</p>
      <p>glossier</p>
      <p>green people</p>
      <p>iman</p>
      <p>l'oreal</p>
      <p>lotus cosmetics usa</p>
      <p>maia's mineral galaxy</p>
      <p>marcelle</p>
      <p>marienatie</p>
      <p>maybelline</p>
      <p>milani</p>
      <p>mineral fusion</p>
      <p>misa</p>
      <p>mistura</p>
      <p>moov</p>
      <p>nudus</p>
      <p>nyx</p>
      <p>orly</p>
      <p>pacifica</p>
      <p>penny lane organics</p>
      <p>physicians formula</p>
      <p>piggy paint</p>
      <p>pure anada</p>
      <p>rejuva minerals</p>
      <p>revlon</p>
      <p>sally b's skin yummies</p>
      <p>salon perfect</p>
      <p>sante</p>
      <p>sinful colours</p>
      <p>smashbox</p>
      <p>stila</p>
      <p>suncoat</p>
      <p>w3llpeople</p>
      <p>wet n wild</p>
      <p>zorah</p>
      <p>zorah biocosmetiques</p>

    </div>
  )
}
