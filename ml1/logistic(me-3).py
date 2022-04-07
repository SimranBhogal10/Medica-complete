# -*- coding: utf-8 -*-
"""
Created on Thu Apr  7 22:20:28 2022

@author: HP
"""

import pandas as pd
from matplotlib import pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn import metrics

data=pd.read_csv('suv_data.csv')
data.info()
data.drop('User ID', axis=1, inplace=True)
data.drop('Gender', axis=1, inplace=True)
x=data.iloc[:,:-1]
y=data.iloc[:,-1]
#a=data['EstimatedSalary']
#plt.scatter(a,y)
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3)
sc=StandardScaler()
x_train= sc.fit_transform(x_train)
x_test=sc.transform(x_test)
model= LogisticRegression()
model.fit(x_train, y_train)
pred= model.predict(x_test)
print(metrics.accuracy_score(pred, y_test))



