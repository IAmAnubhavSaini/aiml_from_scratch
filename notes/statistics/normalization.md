# Normalization

#normalization #statistics #machine-learning

Two types:
1. data normalization / #feature-scaling 
	1. For bringing similar statistical properties to input data.
	2. Data is scaled for consumption and processing; not modified (no p-hack)
2. activation normalization
	1. #deep-learning
	2. #hidden-neurons
	3. #neural-networks 

#pandas #example
```python
df = pd.DataFrame({'A': [-4, -3, -2, -1 ,0, 1, 2, 3, 4]})
max_val = max(df['A'])
print("maximum in df[A]")
print(max_val)

normalized = df / max_val
print("normalized data_frame by maximum value in A")
print(normalized)
```


--- 


1. https://en.wikipedia.org/wiki/Normalization_(machine_learning)