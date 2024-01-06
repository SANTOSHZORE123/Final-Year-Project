import pickle
import sys
from xgboost import XGBClassifier  # Adjust based on your model library

# Load the pickled model
with open('./xgbc_model.pkl', 'rb') as file:
    loaded_model = pickle.load(file)

def predict(input_data):
    # Make predictions using the loaded model
    predictions = loaded_model.predict(input_data)
    return predictions.tolist()

if __name__ == "__main__":
    # Extract input data from command line arguments
    input_data = [float(arg) for arg in sys.argv[1:]]
    result = predict([input_data])
    print(result)
