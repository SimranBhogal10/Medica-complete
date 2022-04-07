# -*- coding: utf-8 -*-
"""
Created on Thu Apr  7 21:56:33 2022

@author: HP
"""

import pandas as pd
from matplotlib import pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

data= pd.read_csv('ice.csv')
#data.info()
x=data.iloc[:,:-1]
y=data.iloc[:,-1]
#plt.scatter(x,y)
x_train, x_test, y_train, y_test = train_test_split(x,y, test_size=0.4)

model=LinearRegression()
model.fit(x_train, y_train)
pred= model.predict(x_test)
print(mean_absolute_error(pred, y_test))

