def categorize(cat , text):
    dic= {
        "frequency_factors" : {
            "one-time": 1.0,
            "monthly": 0.9,
            "bi-weekly": 0.8,
        },
        "condition_factor" :{
            "VeryDirty":1.3,
            "Dirty" : 1,
            "Good":.8
        }
    }
    return dic.get(cat,{}).get(text,1)
