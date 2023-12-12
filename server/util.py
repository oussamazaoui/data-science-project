import json
import pickle
import numpy as np
__location=None
__DataColumns=None
__model=None


def get_estimated_price(location,sqft,bath,bhk):
    try:
       loc_index = __DataColumns.index(location.lower())
    except:
        loc_index=-1

    z = np.zeros(len(__DataColumns))
    z[0] = sqft
    z[1] = bath
    z[2] = bhk
    if loc_index > 1:
        z[loc_index] = 1
    return round(__model.predict([z])[0],2)
def get_location_names():
    return __location

def load_saved_artifacts():
    print("load_saved_artifacts().... ")
    global __DataColumns
    global __location
    global __model
    with open("./artifects/columns.json","r") as f:
        __DataColumns=json.load(f)["data_columns"]
        __location=__DataColumns[3:]
    with open("./artifects/banglores_home_prices_model.pickle","rb") as f:
        __model=pickle.load(f)
    print("load_saved_artifacts() is done....")

if __name__ == "__main__":
    load_saved_artifacts()
    print(get_location_names() )
    print(get_estimated_price('Indira Nagar',1000,2,2))
    print(get_estimated_price('Indira Nagar', 1100, 2, 2))