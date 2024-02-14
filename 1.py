import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import Ridge
from sklearn.metrics import mean_squared_error
import json
data = [
  {
    "Description": "Television Large screen",
    "Cost Ave.": 1234.69,
    "XM": 279.36,
    "price_factor": 0.5,
    "surface_factor": 0.6,
    "material_factor": 1.2
  },
  {
    "Description": "Television Console",
    "Cost Ave.": 437.4,
    "XM": 352.08,
    "price_factor": 0.6,
    "surface_factor": 0.4,
    "material_factor": 1.1
  },
  {
    "Description": "Armoire Wardrobe",
    "Cost Ave.": 330.65,
    "XM": 44.2,
    "price_factor": 0.7,
    "surface_factor": 0.6,
    "material_factor": 1.2
  },
  {
    "Description": "BBQ Smoker",
    "Cost Ave.": 202.28,
    "XM": 45.79,
    "price_factor": 0.9,
    "surface_factor": 0.7,
    "material_factor": 1.2
  },
  {
    "Description": "Baby Car Seat",
    "Cost Ave.": 150,
    "XM": 28.69,
    "price_factor": 0.5,
    "surface_factor": 0.6,
    "material_factor": 1.2
  },
  {
    "Description": "Waterbed",
    "Cost Ave.": 1309,
    "XM": 31.92,
    "price_factor": 0.6,
    "surface_factor": 0.8,
    "material_factor": 1.1
  },
  {
    "Description": "Baby High Chair",
    "Cost Ave.": 124.09,
    "XM": 33.12,
    "price_factor": 0.7,
    "surface_factor": 0.6,
    "material_factor": 1.3
  },
  {
    "Description": "Baby Stroller",
    "Cost Ave.": 179.99,
    "XM": 34.94,
    "price_factor": 0.4,
    "surface_factor": 0.7,
    "material_factor": 1.2
  },
  {
    "Description": "Baby Swing",
    "Cost Ave.": 119.99,
    "XM": 42.81,
    "price_factor": 0.6,
    "surface_factor": 0.7,
    "material_factor": 1.2
  },
  {
    "Description": "Wicker Vase",
    "Cost Ave.": 18.02,
    "XM": 38.34,
    "price_factor": 0.5,
    "surface_factor": 0.7,
    "material_factor": 1.2
  },
  {
    "Description": "Vase Gloss Finish",
    "Cost Ave.": 63,
    "XM": 18.72,
    "price_factor": 0.6,
    "surface_factor": 0.7,
    "material_factor": 1.1
  },
  {
    "Description": "Table Lamp Gloss Finish",
    "Cost Ave.": 172,
    "XM": 32.86,
    "price_factor": 0.6,
    "surface_factor": 0.5,
    "material_factor": 1.2
  },
  {
    "Description": "Floor Lamp",
    "Cost Ave.": 59.99,
    "XM": 32.86,
    "price_factor": 0.6,
    "surface_factor": 0.5,
    "material_factor": 1.4
  },
  {
    "Description": "Umbrella Stand",
    "Cost Ave.": 49.99,
    "XM": 17.19,
    "price_factor": 0.6,
    "surface_factor": 0.5,
    "material_factor": 1.2
  },
  {
    "Description": "Wall shelf unit",
    "Cost Ave.": 99,
    "XM": 14.09,
    "price_factor": 0.6,
    "surface_factor": 0.7,
    "material_factor": 1.5
  },
  {
    "Description": "Floor Lamp Crystal",
    "Cost Ave.": 121.43,
    "XM": 68.39,
    "price_factor": 0.6,
    "surface_factor": 0.5,
    "material_factor": 1.4
  },
  {
    "Description": "Television Stand",
    "Cost Ave.": 242.56,
    "XM": 25.55,
    "price_factor": 0.6,
    "surface_factor": 0.4,
    "material_factor": 1.1
  },
  {
    "Description": "Wicker Table",
    "Cost Ave.": 189.79,
    "XM": 43.81,
    "price_factor": 0.4,
    "surface_factor": 0.5,
    "material_factor": 1.2
  },
  {
    "Description": "Typing Table",
    "Cost Ave.": 129.98,
    "XM": 23.98,
    "price_factor": 1.2,
    "surface_factor": 0.6,
    "material_factor": 1.5
  },
  {
    "Description": "Sofa Table Ornate",
    "Cost Ave.": 356,
    "XM": 60.41,
    "price_factor": 0.7,
    "surface_factor": 0.6,
    "material_factor": 1.2
  },
  {
    "Description": "Table and Chairs Patio",
    "Cost Ave.": 459.95,
    "XM": 68.87,
    "price_factor": 0.5,
    "surface_factor": 0.7,
    "material_factor": 1.1
  },
  {
    "Description": "End Table",
    "Cost Ave.": 269.23,
    "XM": 19.79,
    "price_factor": 0.8,
    "surface_factor": 0.5,
    "material_factor": 1.2
  },
  {
    "Description": "Table Makeup",
    "Cost Ave.": 199.99,
    "XM": 26.8,
    "price_factor": 0.5,
    "surface_factor": 0.6,
    "material_factor": 1.2
  },
  {
    "Description": "Kitchen Table",
    "Cost Ave.": 155.99,
    "XM": 41.2,
    "price_factor": 0.7,
    "surface_factor": 0.5,
    "material_factor": 1.2
  }
]
# Convert data to DataFrame
with open("sample_data.json" , 'w') as file:
    json.dump(data , file)
    
df = pd.DataFrame(data)

# Extract input features (independent variables) and output result (dependent variable)
X = df[['price_factor', 'surface_factor', 'material_factor', 'Cost Ave.']]
y = df['XM']

# Split the data into training and testing sets (80% training, 20% testing)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train the Ridge Regression model
ridge_model = Ridge(alpha=1.0)  # alpha is the regularization strength
ridge_model.fit(X_train, y_train)

# Evaluate the model
y_pred_ridge = ridge_model.predict(X_test)
mse_ridge = mean_squared_error(y_test, y_pred_ridge)


new_object = {
    "price_factor": 1.2,
    "surface_factor": 0.6,
    "material_factor": 1.5,
    "Cost Ave.": 129.98,
}

# Extract input features from the new object
new_X = pd.DataFrame([new_object])

# Predict XM value using the trained Ridge Regression model
predicted_XM = ridge_model.predict(new_X)

print("Predicted XM value for the new object:", predicted_XM[0])
