<!-- @format -->

This is the summary of how this app is working.

First, you need a description or voice in .mp3 format and a link to your product image.

You send this information to the app and the app searches for similar products based on your description on Google shopping
Then return 6 products with the most similarity with your image.
You should choose one of them and set the product situation and cleaning frequency.
we create a list of more than 1000 products and set sum feature for each of them  
the app tries to determine the category of the product and calculate the cleaning price with this formula

```

price = hourly_rate * appliance_factor * size_factor * condition_factor * frequency_factors * selected_product_price_factor

```

- hourly_rate is a constant value, In this version, we set it as $20
- appliance_factor is determined for each product based on the special situation of the appliance. (it defines the difficulty of cleaning)
- size_factor is for the size of the appliance
- condition_factor set by the user
  condition_factor ={
  "VeryDirty":1.8,
  "Dirty": 1.6,
  "Good":1.2
  }
- frequency_factor set by the user too
  frequency_factors = {
  "one-time": 1.0,
  "Monthly": 0.9,
  "bi-weekly": 0.8,
  }
- selected product_price is the price of brand-new of that product
