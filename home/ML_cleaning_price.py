import json
import re
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import Ridge
from sklearn.metrics import mean_squared_error

def cleaning_price_calculator(response_model):
    with open("sample_data.json" , "r") as file:
        data = json.load(file)

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
    model = response_model
    price = model.estimated_price
    currency_sign = price[0] if isinstance(price[0] , str) else None
    price = float(re.findall(r"[\d,\.]+",price)[0])
    new_object = {
    "price_factor": model.input_query_model.price_factor,
    "surface_factor": model.input_query_model.surface_factor,
    "material_factor": model.input_query_model.material_factor,
    "Cost Ave.": price,
    }

    # Extract input features from the new object
    new_X = pd.DataFrame([new_object])

    # Predict XM value using the trained Ridge Regression model
    predicted_XM = ridge_model.predict(new_X)

    return  (predicted_XM[0], currency_sign)


